import React from 'react';
import { FlatList } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Flex } from '@react-native-material/core';
// navigation
import { useNavigation } from '@react-navigation/core';
// api
import {
  getResources,
  getResourcesByYear
} from '~/api';
// utils 
import {IndicatorType} from '~/utils/enums/indicator';
// hooks custom 
import useGeo from '~/hooks/useGeo';
// styles
import {styles} from './styles';
import ListItem from '~/components/Flex/ListItem/ListItem';

interface ResourceItem {
  Fecha: string;
  Valor: string
}

const Home = ({ route }: StackScreenProps<RootStackParamList>) => {
  // hooks custom
  const {currenyPosition} = useGeo()
  console.log(currenyPosition); // console
  const [resources, setResources] = React.useState<CommonJSON<ResourceItem[]> | void>();
  // hooks
  const navigation = useNavigation()
  // useLayoutEffect
  React.useLayoutEffect(() => {
    if (route && route.params){
      navigation.setOptions({
        title: route.params?.indicator.key
      });
    }
  }, [navigation]);
  // Hooks useEfect
  React.useEffect(() => {
    async function main () {
      if (route && route.params){
        if (route.params?.indicator?.value === IndicatorType.DOLAR
          || route.params?.indicator?.value === IndicatorType.EURO
          || route.params?.indicator?.value === IndicatorType.UF
        ) {
          setResources(await getResources(route.params?.indicator?.value))
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
    if (route && route.params){
      return <FlatList 
        data={resources && resources[route.params?.indicator?.key] || []}
        renderItem={renderItem}
      />
    }
  }, [route, resources]);

  return  (
    <Flex fill style={styles.containerFlex}>
      {renderListIndicators}
    </Flex>
  );
  
}

export default React.memo(Home);