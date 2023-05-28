import React from 'react';
// navigation
import { Dimensions } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Flex, Box, Text } from '@react-native-material/core';
// chart kit
import {
  LineChart,
} from "react-native-chart-kit";



// api
import {
  getResourcesLastTenDays,
  getResourcesByYear
} from '~/api';
// utils 
import {IndicatorType} from '~/utils/enums/indicator';
// styles
import {styles} from './styles';

const colorSecondary = '#2452bc';

interface ResourceItem {
  Fecha: string;
  Valor: string
}

const Home = ({ route }: StackScreenProps<RootStackParamList>) => {
  const [resources, setResources] = React.useState<CommonJSON<ResourceItem[]> | void>();
  // Hooks useEfect
  React.useEffect(() => {
    async function main () {
      if (route && route.params){
        if (route.params?.indicator?.value === IndicatorType.DOLAR
          || route.params?.indicator?.value === IndicatorType.EURO
          || route.params?.indicator?.value === IndicatorType.UF
        ) {
          setResources(await getResourcesLastTenDays(route.params?.indicator?.value))
        } else  {
          // setResources(await getResourcesByYear(route.params?.indicator?.value))
        }
      }
    }
    main();
  }, []);
  // Hooks
  const data = React.useMemo(() => {
    if (route && route.params && resources){ 
      const data = resources[route.params?.indicator?.key].map((item: ResourceItem) => parseFloat(item.Valor))
      return {
        labels: resources[route.params?.indicator?.key].map((item: ResourceItem) => item.Fecha).splice(0, 4),
        datasets: [
          {
            data: resources[route.params?.indicator?.key].map((item: ResourceItem) => parseFloat(item.Valor)),
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ],
        legend: [route.params?.indicator?.key] // optional
      };
    }
  }, [resources]);

  const renderListIndicators = React.useMemo<any>(() => {
    if (route && route.params && resources){
      const resourcesLength = resources[route.params?.indicator?.key].length;
      return (
        <>
          <Flex items='center' justify='center' minH={100} maxH={120}>
            <Text style={styles.textTitle}>$
              {
                resources[route.params?.indicator?.key][resourcesLength - 1].Valor || ''
              }
            </Text>
          </Flex>
          <Flex fill justify='center'>
            <Flex direction='row' minH={32} maxH={36}>
              <Box w={160}><Text style={styles.text}>Nombre </Text></Box>
              <Text variant='subtitle1'> {route.params?.indicator?.key || ''} </Text>
            </Flex>
            <Flex direction='row' minH={32} maxH={36}>
              <Box w={160}><Text style={styles.text}>Fecha</Text></Box>
              <Text variant='subtitle1'> {resources[route.params?.indicator?.key][resourcesLength - 1].Fecha || ''} </Text>
            </Flex>
            <Flex direction='row' minH={32} maxH={36}>
              <Box w={160}><Text style={styles.text}>Unidad de Medida</Text></Box>
              <Text variant='subtitle1'> {route.params?.indicator?.text2 || ''} </Text>
            </Flex>
          </Flex>
        </>
      )
    }
  }, [route, resources]);

  return  (
    <Flex fill style={styles.containerFlex}>
      {renderListIndicators}
      {data && <LineChart
        data={data}
        width={Dimensions.get('window').width}
        height={220}
        chartConfig={{
          backgroundColor: colorSecondary,
          backgroundGradientFrom: colorSecondary,
          backgroundGradientTo: colorSecondary,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(0, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: colorSecondary
          }
        }}
      />}
    </Flex>
  );
  
}

export default Home;