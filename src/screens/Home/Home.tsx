import React from 'react';
import { Flex, Text, Divider } from '@react-native-material/core';
// utils
import { navigate } from '~/utils/navigation';
// icons
import IconArrowRight from '~/assets/icons/Expand_right.svg';
import IconInfo from '~/assets/icons/info_light.svg';
import {styles} from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
// colores por defecto.
const colorSecondary = '#2452bc';

const Home: React.FC = () => {
  // Handlers con hooks de React
  const handleNavigateDetail = React.useCallback(() => {
    navigate('Detail');
  }, []);
  // hook .useMemo Para el segundo render no realiza el computo .map lo guarda en memoria.
  const renderListIndicators = React.useMemo<any>(() => {
    return ['Dólar','Euro','IPC','UF','UTM'].map(val => 
      <Flex key={val}>
        <Flex direction='row' items='center' style={{marginBottom: 6}}>
          <Flex fill direction='column'>
            <TouchableOpacity onPress={handleNavigateDetail}> 
              <Text variant='body1'>{val}</Text>
            </TouchableOpacity>
            <Text variant='body2' color={colorSecondary}>Pesos</Text>
          </Flex>
          <IconInfo />
          <IconArrowRight />
        </Flex>
        <Divider style={styles.dividerStyle}/>
      </Flex> 
    )
  }, []);

  return  (
    <Flex fill style={styles.containerFlex}>
      {renderListIndicators}
    </Flex>
  );
}

export default Home;