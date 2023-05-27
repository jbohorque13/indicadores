import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Flex, Text, Divider } from '@react-native-material/core';
// utils
import { routes } from '~/utils/routes';
import { queryParams } from '~/utils/queryParamsHelper';
// icons
import IconArrowRight from '~/assets/icons/Expand_right.svg';
import IconInfo from '~/assets/icons/info_light.svg';
// styles
import {styles} from './styles';
// colores por defecto.
const colorSecondary = '#2452bc';
type Nav = {
  navigate: (value: string, {}) => void;
}

interface Indicator {
  text: string; 
  value: string
}

const INDICATOR_OPTION: Indicator[] = [
  {text: 'Dólar', value: 'dolar'},
  {text: 'Euro', value: 'euro'},
  {text: 'IPC', value: 'ipc'},
  {text: 'TIP', value: 'tip'},
  {text: 'UF', value: 'uf'},
  {text: 'UTM', value: 'utm'},
]

const Home = () => {
  const navigation = useNavigation<Nav>();
  // Handlers con hooks de React
  const handleNavigateDetail = React.useCallback((indicator: string) => {
    navigation.navigate(routes.DETAIL.routeName, {
      [queryParams.DETAIL.INDICATOR]: indicator
    })
  }, []);
  // hook .useMemo Para el segundo render no realiza el computo .map lo guarda en memoria.
  const renderListIndicators = React.useMemo<any>(() => {
    return INDICATOR_OPTION.map((item) => (
      <Flex key={`${item.value}-id`}>
        <Flex direction='row' items='center' style={{marginBottom: 6}}>
          <Flex fill direction='column'>
            <TouchableOpacity onPress={() => handleNavigateDetail(item.value)}> 
              <Text variant='body1'>{item.text}</Text>
            </TouchableOpacity>
            <Text variant='body2' color={colorSecondary}>Pesos</Text>
          </Flex>
          <IconInfo />
          <IconArrowRight />
        </Flex>
        <Divider style={styles.dividerStyle}/>
      </Flex> 
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