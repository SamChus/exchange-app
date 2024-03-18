import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  HStack,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Text,
} from "@chakra-ui/react";
import infoIcon from "../assets/infoIcon.svg";
import dropdown from "../assets/dropdown.svg";
import ngn from "../assets/ngn.png";
import usd from "../assets/usd.png";
import eur from "../assets/eur.png";
import gbp from "../assets/gbp.png";


import SegmentedControlBtn from "./SegmentedControlBtn";
import { useState } from "react";

const BuyLimit = () => {
  const types = [
    { value: "fill or kill", label: "Fill or Kill" },
    { value: "good till cancelled", label: "Good till cancelled" },
    { value: "good till date", label: "Good till date" },
    { value: "immediate or cancel", label: "Immediate or cancel" },
  ];

    const currencies = [
      { value: "NGN", label: "Nigerian Naira", icon: ngn },
      { value: "GBP", label: "British Pounds", icon: gbp },
      { value: "USD", label: "US Dollars", icon: usd },
      { value: "EUR", label: "European Euros", icon: eur },
    ];

    const [currency, setCurrency] = useState("NGN");
  const [type, setType] = useState("Good still cancel");


  return (
    <Box h={"587px"} bg={"#20252B"} p={2} borderRadius={9}>
      <SegmentedControlBtn labels={["Buy", "Sell"]} />
      <HStack
        my={7}
        justifyContent={"space-evenly"}
        p={1}
        fontSize={"14px"}
        fontWeight={"700px"}
      >
        <Text
          color={"#fff"}
          p={"4px"}
          textAlign={"center"}
          bg={"#353945"}
          w={"50px"}
          borderRadius={100}
          cursor={"pointer"}
        >
          Limit
        </Text>
        <Text color={"#A7B1BC"}>Market</Text>
        <Text color={"#A7B1BC"}>Stop-Limit</Text>
      </HStack>

      <Box fontSize={"12px"}>
        <HStack
          border={"1px solid #373B3F"}
          borderRadius={8}
          p={"1px 7px"}
          justifyContent={"space-between"}
          mb={3}
          h={"40px"}
        >
          <HStack>
            <Text color={"#A7B1BC"}>Limit price</Text>
            <Image src={infoIcon} w={"12px"} />
          </HStack>
          <HStack w={"35%"}>
            <Input
              variant="unstyled"
              border={0}
              p={"0px 7px"}
              type="number"
              placeholder="0.00"
            />
            <Text color={"#A7B1BC"}>usd</Text>
          </HStack>
        </HStack>
        <HStack
          border={"1px solid #373B3F"}
          borderRadius={8}
          p={"1px 7px"}
          justifyContent={"space-between"}
          mb={3}
          h={"40px"}
        >
          <HStack>
            <Text color={"#A7B1BC"}>Amount</Text>
            <Image src={infoIcon} w={"12px"} />
          </HStack>
          <HStack w={"35%"}>
            <Input
              variant="unstyled"
              border={0}
              p={"0px 7px"}
              type="number"
              placeholder="0.00"
            />
            <Text color={"#A7B1BC"}>usd</Text>
          </HStack>
        </HStack>
        <HStack
          border={"1px solid #373B3F"}
          borderRadius={8}
          p={"1px 7px"}
          justifyContent={"space-between"}
          h={"40px"}
          mb={3}
        >
          <HStack>
            <Text color={"#A7B1BC"}>Type</Text>
            <Image src={infoIcon} w={"12px"} />
          </HStack>
          <HStack>
            <Menu>
              <MenuButton>
                <HStack>
                  <Text color="#A7B1BC">{type} </Text>
                  <Image src={dropdown} />
                </HStack>
              </MenuButton>
              <MenuList
                bg={"#20252B"}
                border={"1px solid #373B3F"}
                borderRadius={"12px"}
              >
                {types.map((order) => (
                  <MenuItem
                    _hover={{
                      bg: "#252A30",
                    }}
                    bg={"#20252B"}
                    key={order.value}
                    value={order.value}
                    fontSize={"12px"}
                    onClick={() => setType(order.label)}
                  >
                    {order.label}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </HStack>
        </HStack>
        <Checkbox size={"sm"} mb={2} defaultChecked>
          <HStack>
            <Text color={"#A7B1BC"} fontSize={"12px"}>
              Post Only
            </Text>
            <Image src={infoIcon} w={"12px"} />
          </HStack>
        </Checkbox>
        <HStack justifyContent={"space-between"} my={4}>
          <Text color={"#A7B1BC"}>Total</Text>
          <Text color={"#A7B1BC"}>0.00</Text>
        </HStack>
        <Button
          w={"100% "}
          h={"32px"}
          mb={4}
          colorScheme="#fff"
          bgGradient="linear(90deg, #483BEB, #7847E1, #DD568D)"
          variant="solid"
        >
          Buy BTC
        </Button>
        <Divider border={"1px solid #394047"} mb={3} />
        <HStack justifyContent={"space-between"}>
          <Text color={"#A7B1BC"}>Total account value</Text>
          <HStack>
            <Menu>
              <MenuButton>
                <HStack>
                  <Text color="#A7B1BC">{currency}</Text>
                  <Image src={dropdown} />
                </HStack>
              </MenuButton>
              <MenuList
                bg={"#20252B"}
                border={"1px solid #373B3F"}
                borderRadius={"12px"}
              >
                {currencies.map((currency) => (
                  <MenuItem
                    _hover={{
                      bg: "#252A30",
                    }}
                    bg={"#20252B"}
                    key={currency.value}
                    value={currency.value}
                    fontSize={"12px"}
                    onClick={() => setCurrency(currency.value)}
                  >
                    <HStack>
                      <Image src={currency.icon} />
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
        </HStack>
        <Text my={2} fontWeight={"semibold"} fontSize={"14px"}>
          0.00
        </Text>
        <Flex justifyContent={"space-between"}>
          <Box>
            <Text color={"#A7B1BC"} my={1}>
              Open Orders
            </Text>
            <Text fontWeight={"semibold"} fontSize={"14px"}>
              0.00
            </Text>
          </Box>
          <Box pr={8}>
            <Text color={"#A7B1BC"} my={1}>
              Available
            </Text>
            <Text fontWeight={"semibold"} fontSize={"14px"}>
              0.00
            </Text>
          </Box>
        </Flex>
        <Button bg="#2764FF" my={2} colorScheme={"#2764FF"}>
          Deposit
        </Button>
      </Box>
    </Box>
  );
};

export default BuyLimit;
