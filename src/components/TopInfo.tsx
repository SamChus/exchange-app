import { HStack, Image, Text, VStack } from '@chakra-ui/react'
import btc_usd from "../assets/btc_usd.png";
import dropIcon from "../assets/drop.svg";
import clock from "../assets/clock.svg";
import arrow_up from "../assets/arrow-up.svg";
import arrow_down from "../assets/arrow-down.svg";
import chart from "../assets/chart.svg";


import React from 'react'

const TopInfo = () => {
  return (
    <HStack justifyContent="space-evenly" bg="#20252B" p={4}>
      <Image src={btc_usd} />
      <Text fontSize="24px">BTC/USDT</Text>
      <Image src={dropIcon} />
      <Text fontSize="18px">$20,634</Text>
      <div
        style={{
          width: "1px",
          height: "40px",
          backgroundColor: "#A7B1BC",
          opacity: "0.16",
        }}
      />
      <VStack>
        <HStack>
          <Image src={clock} />
          <Text fontSize="12px">24h change</Text>
        </HStack>
        <HStack>
          <Text fontSize="14px">520.80 +1.25%</Text>
        </HStack>
      </VStack>
      <div
        style={{
          width: "1px",
          height: "40px",
          backgroundColor: "#A7B1BC",
          opacity: "0.16",
        }}
      />
      <VStack>
        <HStack>
          <Image src={arrow_up} />
          <Text fontSize="12px">24h change</Text>
        </HStack>
        <HStack>
          <Text fontSize="14px">520.80 +1.25%</Text>
        </HStack>
      </VStack>
      <div
        style={{
          width: "1px",
          height: "40px",
          backgroundColor: "#A7B1BC",
          opacity: "0.16",
        }}
      />
      <VStack>
        <HStack>
          <Image src={arrow_down} />
          <Text fontSize="12px">24h high</Text>
        </HStack>
        <HStack>
          <Text fontSize="14px">520.80 +1.25%</Text>
        </HStack>
      </VStack>
      <div
        style={{
          width: "1px",
          height: "40px",
          backgroundColor: "#A7B1BC",
          opacity: "0.16",
        }}
      />
      <VStack>
        <HStack>
          <Image src={chart} />
          <Text fontSize="12px">24h low</Text>
        </HStack>
        <HStack>
          <Text fontSize="14px">520.80 +1.25%</Text>
        </HStack>
      </VStack>
      
    </HStack>
  );
}

export default TopInfo