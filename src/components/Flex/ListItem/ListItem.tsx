import React from 'react'
import { Flex, Text, Divider, Box } from '@react-native-material/core';
// styles
import {styles} from './styles';
// colors
const colorSecondary = '#2452bc';

interface ResourceItem {
  Fecha: string;
  Valor: string
}

const ListItem: React.FC<ResourceItem> = (item: ResourceItem) => {
  return (
    <Flex>
      <Flex direction='row' justify='evenly'>
        <Box w={160} style={{marginBottom: 6}}>
          <Text variant='body2' color={colorSecondary}>{item.Fecha}</Text>
        </Box>
        <Box style={{marginBottom: 6}}>
          <Text variant='body2'>{item.Valor}</Text>
        </Box>
      </Flex>
      <Divider style={styles.dividerStyle}/>
    </Flex> 
  )
}

export default ListItem;
