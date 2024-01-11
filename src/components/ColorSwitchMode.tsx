import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'

const ColorSwitchMode = () => {
    const {toggleColorMode, colorMode} = useColorMode()
  return (
    <HStack>
      <Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
      <Text fontSize="14px">Swith Mode</Text>
    </HStack>
  );
}

export default ColorSwitchMode                                                                         