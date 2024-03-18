import {
  Box,
  Divider,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import btc_usd from "../assets/btc_usd.png";
import dropIcon from "../assets/drop.svg";
import clock from "../assets/clock.svg";
import searchIcon from "../assets/Search.png";
import arrow_up from "../assets/arrow-up.svg";
import arrow_down from "../assets/arrow-down.svg";
import chart from "../assets/chart.svg";

import React, { useState } from "react";

const TopInfo = () => {
  const currencies = [
    { value: "NGN", label: "Nigerian Naira" },
    { value: "GBP", label: "British Pounds" },
    { value: "USD", label: "US Dollars" },
    { value: "EUR", label: "European Euros" },
  ];

  const [currency, setCurrency] = useState("NGN");
  return (
    <HStack
      justifyContent="space-evenly"
      bg="#20252B"
      p={3}
      mx={2}
      borderRadius={9}
    >
      <HStack>
        <Menu>
          <MenuButton>
            <HStack>
              <Image src={btc_usd} />
              <Text fontSize="24px">BTC/USDT</Text>
              <Image src={dropIcon} />
            </HStack>
          </MenuButton>
          <MenuList
            bg={"#1C2127"}
            border={"1px solid #373B3F"}
            borderRadius={"12px"}
            p={4}
          >
            <Text fontSize={"14px"} fontWeight={"700px"} mb={2}>
              Select Market
            </Text>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Image src={searchIcon} width={"13px"} />
              </InputLeftElement>
              <Input
                type="tel"
                placeholder="Search"
                border={"1px solid #373B3F"}
                fontSize={"12px"}
                bg={"#20252B"}
                _focus={{
                  border: "1px solid #373B3F",
                }}
                mb={4}
              />
            </InputGroup>
            <Divider />
            <HStack my={1} p={1} fontSize={"14px"} fontWeight={"700px"}>
              <Text
                color={"#A7B1BC"}
                p={"4px"}
                textAlign={"center"}
                bg={"#353945"}
                w={"50px"}
                borderRadius={100}
                cursor={"pointer"}
              >
                All
              </Text>
              <Text color={"#A7B1BC"}>USD</Text>
              <Text color={"#A7B1BC"}>BTC</Text>
            </HStack>
            <Divider />

            {currencies.map((currency) => (
              <MenuItem
                _hover={{
                  bg: "#252A30",
                }}
                bg={"#1C2127"}
                key={currency.value}
                value={currency.value}
                fontSize={"12px"}
                onClick={() => setCurrency(currency.label)}
                w={"412px"}
              >
                <HStack>
                  <Box>
                    <Text>{currency.label} </Text>
                    <Text color="#A7B1BC">{currency.value} </Text>
                  </Box>
                </HStack>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </HStack>
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
};

export default TopInfo;
