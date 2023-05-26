import React from "react";
import { Flex, Text, Divider } from "@react-native-material/core";

import data from './assets/data.json';

// icons
import IconArrowRight from './assets/icons/Expand_right.svg';

const App = () => {
  
  return  (
  
    <Flex fill style={{marginTop: 20}}>
    {["Dólar","Euro","IPC","UF","UTM"].map(val => 
      <Flex>
        <Flex direction="row" items="center" style={{marginBottom: 2}}>
          <Flex fill direction="column">
            <Text variant="body1">{val}</Text>
            <Text variant="body2" color="#2452bc">Pesos</Text>
          </Flex>
          <IconArrowRight />
        </Flex>
        <Divider style={{ marginVertical: 6}}/>
      </Flex>  
    )}
  </Flex>
  );
}

export default App;