import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'

const ColorSwitchMode = () => {
    const {toggleColorMode, colorMode} = useColorMode()
  return (
    <HStack>
      <Switch isChecked={colorMode === 'dark'} />
      <Text>Swith Mode</Text>
    </HStack>
  );
}

export default ColorSwitchMode                                                                         