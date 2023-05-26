import React from 'react';
import { Flex, Text, Divider, Box } from '@react-native-material/core';
import {styles} from './styles';
// colores por defecto.
const colorSecondary = '#2452bc';

const Home: React.FC = () => {
  // hook .useMemo Para el segundo render no realiza el computo .map lo guarda en memoria.
  const renderListIndicators = React.useMemo<any>(() => {
    return ['Dólar','Euro','IPC','UF','UTM'].map(val => 
      <Flex key={val}>
        <Flex direction='row' justify='evenly'>
          <Box w={160} style={{marginBottom: 6}}>
            <Text variant='body2'>{val}</Text>
          </Box>
          <Box style={{marginBottom: 6}}>
            <Text variant='body2'>{val}</Text>
          </Box>
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