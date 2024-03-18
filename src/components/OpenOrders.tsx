import { Box } from '@chakra-ui/react'
import React from 'react'
import SegmentedControlBtn from './SegmentedControlBtn';

const OpenOrders = () => {
  return (
    <Box bg={"#20252B"} p={3} my={6} borderRadius={9} h={"90%"}>
      <SegmentedControlBtn
        labels={["Open Order", "Position", "Order History", "Trade History"]}
      />
    </Box>
  );
}

export default OpenOrders