import React from 'react';
import { StyleSheet } from 'react-native';
import { Flex, Text, Divider } from '@react-native-material/core';
// icons
import IconArrowRight from './assets/icons/Expand_right.svg';
import IconInfo from './assets/icons/info_light.svg';

const styles = StyleSheet.create({
  containerFlex: {
    marginTop: 60
  },
  dividerStyle: { marginVertical: 6 }
});

// colores por defecto.
const colorSecondary = '#2452bc';

const App = () => {
  // hook .useMemo Para el segundo render no realiza el computo .map lo guarda en memoria.
  const renderListIndicators = React.useMemo<any>(() => {
    return ['Dólar','Euro','IPC','UF','UTM'].map(val => 
      <Flex key={val}>
        <Flex direction='row' items='center' style={{marginBottom: 6}}>
          <Flex fill direction='column'>
            <Text variant='body1'>{val}</Text>
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

export default App;