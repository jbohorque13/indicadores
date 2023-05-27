import React from 'react';
// navigation
import { StackScreenProps } from '@react-navigation/stack';
import { Flex, Text, Divider, Box } from '@react-native-material/core';
// axios
import axios from 'axios';
// styles
import {styles} from './styles';
// colores por defecto.
const colorSecondary = '#2452bc';
// constantes
const url = 'https://api.cmfchile.cl/api-sbifv3/recursos_api/dolar/2022/05/dias/27?apikey=fbb7e11540cf65ae116d65b546b80b247bf7470e&formato=json';


const Home = ({ route }: StackScreenProps<RootStackParamList>) => {
  const [resources, setResources] = React.useState();
  // hook .useEffect para consultar la api
  React.useEffect(() => {
    async function main () {
      // const http = await axios.get(url);
      // console.log(http.data);
    }
    main();
  }, []);
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