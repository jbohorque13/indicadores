import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Flex } from '@react-native-material/core';
// components
import IndicatorItem from '~/components/Flex/IndicatorItem';
// utils
import { routes } from '~/utils/routes';
import { queryParams } from '~/utils/queryParamsHelper';
import { indicators } from '~/utils/indicators';
// styles
import {styles} from './styles';

type Nav = {
  navigate: (value: string, {}) => void;
}

const Home = () => {
  // navigations
  const navigation = useNavigation<Nav>();

  // handlers 
  const handleNavigateDetail = React.useCallback((indicator: IndicatorItem) => {
    navigation.navigate(routes.DETAIL.routeName, {
      [queryParams.DETAIL.INDICATOR]: indicator,
    })
  }, []);
  const handleNavigateGraph = React.useCallback((indicator: IndicatorItem) => {
    navigation.navigate(routes.GRAPH.routeName, {
      [queryParams.GRAPH.INDICATOR]: indicator,
    })
  }, []);

  // useMemos optimiza en memoria
  const renderListIndicators = React.useMemo<any>(() => {
    return indicators.map((item) => (
      <IndicatorItem
        key={item.value}
        item={item}
        handleNavigateDetail={handleNavigateDetail}
        handleNavigateGraph={handleNavigateGraph}
      />
      )
    )
  }, []);

  return  (
    <Flex fill style={styles.containerFlex}>
      {renderListIndicators}
    </Flex>
  );
}

export default Home;