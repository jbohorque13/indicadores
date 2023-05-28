import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
// material
import { Flex, Text, Divider } from '@react-native-material/core';
// icons
import IconArrowRight from '~/assets/icons/Expand_right.svg';
import IconInfo from '~/assets/icons/info_light.svg';
// styles
import {styles} from './styles';
// colores por defecto.
const colorSecondary = '#2452bc';

interface Props {
  item: IndicatorItem;
  handleNavigateDetail: (item: IndicatorItem) => void
}
const IndicatorItem: React.FC<Props> = (props: Props) => {
  const {item, handleNavigateDetail} = props;

  return (
    <Flex key={`${item.value}-id`}>
      <Flex direction='row' items='center' style={{marginBottom: 6}}>
        <Flex fill direction='column'>
          <TouchableOpacity onPress={() => handleNavigateDetail(item)}> 
            <Text variant='body1'>{item.text}</Text>
          </TouchableOpacity>
          <Text variant='body2' color={colorSecondary}>{item.text2}</Text>
        </Flex>
        <IconInfo />
        <IconArrowRight />
      </Flex>
      <Divider style={styles.dividerStyle}/>
    </Flex> 
  )
}

export default React.memo(IndicatorItem);