import React from 'react';
// navigation
import { StackScreenProps } from '@react-navigation/stack';
import { Flex, Box, Text } from '@react-native-material/core';
// api
import {
  getResourcesLastTenDays,
  getResourcesByYear
} from '~/api';
// utils 
import {IndicatorType} from '~/utils/enums/indicator';
// styles
import {styles} from './styles';
import ListItem from '~/components/Flex/ListItem/ListItem';

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
          setResources(await getResourcesByYear(route.params?.indicator?.value))
        }
      }
    }
    main();
  }, []);
  // Renders
  const renderItem = ({ item }: any) => (
    <ListItem key={item.Fecha} {...item} />
  );
  // Hooks useMemo
  const renderListIndicators = React.useMemo<any>(() => {
    if (route && route.params && resources){
      const resourcesLength = resources[route.params?.indicator?.key].length;
      return (
        <>
          <Flex items='center' justify='center' minH={100} maxH={120}>
            <Text style={styles.textTitle}>${resources[route.params?.indicator?.key][resourcesLength - 1].Valor || ''}</Text>
          </Flex>
          <>
            <Flex direction='row' minH={32} maxH={36}>
              <Box w={160}><Text style={styles.text}> Nombre </Text></Box>
              <Text> {route.params?.indicator?.text || ''} </Text>
            </Flex>
            <Flex direction='row' minH={32} maxH={36}>
              <Box w={160}><Text style={styles.text}>Fecha</Text></Box>
              <Text> {resources[route.params?.indicator?.key][resourcesLength - 1].Fecha || ''} </Text>
            </Flex>
            <Flex direction='row' minH={32} maxH={36}>
              <Box w={160}><Text style={styles.text}>Unidad de Medida</Text></Box>
              <Text> {route.params?.indicator?.text2 || ''} </Text>
            </Flex>
          </>
        </>
      )
    }
  }, [route, resources]);

  return  (
    <Flex fill style={styles.containerFlex}>
      {renderListIndicators}
    </Flex>
  );
  
}

export default Home;