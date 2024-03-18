import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import SegmentedControlBtn from "./SegmentedControlBtn";
import menu1 from '../assets/menu1.png'
import menu2 from '../assets/menu2.png'
import menu3 from "../assets/menu3.png";
import dropIcon from "../assets/drop.svg";
import greenArrow from "../assets/greenArrow.svg";
import { Overlay } from "./Overlay";


const OrderBook = () => {

  return (
    <Box
      // w={"245px"}
      bg={"#20252B"}
      p={2}
      ml={2}
      borderRadius={9}
      fontSize={"12px"}
    >
      <SegmentedControlBtn labels={["Order Book","Recent trades"]}/>
      <Box  mt={8}>
        <HStack justifyContent={"space-between"}>
          <HStack
            justifyContent={"space-between"}
            w={"88px"}
            cursor={"pointer"}
          >
            <Image src={menu1} bg={"#353945"} p={2} borderRadius={4} />
            <Image src={menu2} />
            <Image src={menu3} />
          </HStack>
          <HStack
            p={"4px 10px"}
            bg={"#353945"}
            w={"60px"}
            borderRadius={4}
            cursor={"pointer"}
            justifyContent={"space-between"}
          >
            <Text>10</Text>
            <Image src={dropIcon} />
          </HStack>
        </HStack>
        <HStack justifyContent={"space-between"} px={2} mb={3}>
          <VStack lineHeight={0.9} mt={4}>
            <Text color={"#A7B1BC"}>Price</Text>
            <Text color={"#A7B1BC"}>(USDT)</Text>
          </VStack>
          <VStack lineHeight={0.9} mt={4}>
            <Text color={"#A7B1BC"}>Amounts</Text>
            <Text color={"#A7B1BC"}>(BTC)</Text>
          </VStack>
          <VStack mt={1}>
            <Text color={"#A7B1BC"}>Total</Text>
            <Text></Text>
          </VStack>
        </HStack>
        <Box>
          <HStack
            my={2}
            position={"relative"}
            justifyContent={"space-between"}
            p={1}
          >
            <Text color={"#FF6838"}>36920.12</Text>
            <Text>0.758965</Text>
            <Text>28,020.98</Text>
            <Overlay
              className="!absolute !right-[0] !bg-supportsuccess !top-0"
              color="green"
              length="one-hundred-and-sixty"
            />
          </HStack>
          <HStack
            my={2}
            position={"relative"}
            justifyContent={"space-between"}
            p={1}
            className="price"
          >
            <Text color={"#FF6838"}>36920.12</Text>
            <Text>0.758965</Text>
            <Text>28,020.98</Text>
            <Overlay
              className="!absolute !right-[0] !bg-supportsuccess !top-0"
              color="green"
              length="one-hundred-and-sixty"
            />
          </HStack>
          <HStack
            my={2}
            position={"relative"}
            justifyContent={"space-between"}
            p={1}
            className="price"
          >
            <Text color={"#FF6838"}>36920.12</Text>
            <Text>0.758965</Text>
            <Text>28,020.98</Text>
            <Overlay
              className="!absolute !right-[0] !bg-supportsuccess !top-0"
              color="green"
              length="sixty-four"
            />
          </HStack>
          <HStack
            my={2}
            position={"relative"}
            justifyContent={"space-between"}
            p={1}
            className="price"
          >
            <Text color={"#FF6838"}>36920.12</Text>
            <Text>0.758965</Text>
            <Text>28,020.98</Text>
            <Overlay
              className="!absolute !right-[0] !bg-supportsuccess !top-0"
              color="green"
              length="sixty-four"
            />
          </HStack>
          <HStack
            my={2}
            position={"relative"}
            justifyContent={"space-between"}
            p={1}
            className="price"
          >
            <Text color={"#FF6838"}>36920.12</Text>
            <Text>0.758965</Text>
            <Text>28,020.98</Text>
            <Overlay
              className="!absolute !right-[0] !bg-supportsuccess !top-0"
              color="green"
              length="sixty-four"
            />
          </HStack>
        </Box>
        <HStack
          my={4}
          fontSize={"16px"}
          lineHeight={"24px"}
          justifyContent={"center"}
        >
          <Text color={"#25C26E"}>36,641.20</Text>
          <Image src={greenArrow} />
          <Text>36,641.20</Text>
        </HStack>
        <Box>
          <HStack
            my={2}
            position={"relative"}
            justifyContent={"space-between"}
            p={1}
          >
            <Text color={"#FF6838"}>36920.12</Text>
            <Text>0.758965</Text>
            <Text>28,020.98</Text>
            <Overlay
              className="!absolute !right-[0] !bg-supportsuccess !top-0"
              color="green"
              length="one-hundred-and-sixty"
            />
          </HStack>
          <HStack
            my={2}
            position={"relative"}
            justifyContent={"space-between"}
            p={1}
            className="price"
          >
            <Text color={"#FF6838"}>36920.12</Text>
            <Text>0.758965</Text>
            <Text>28,020.98</Text>
            <Overlay
              className="!absolute !right-[0] !bg-supportsuccess !top-0"
              color="green"
              length="one-hundred-and-sixty"
            />
          </HStack>
          <HStack
            my={2}
            position={"relative"}
            justifyContent={"space-between"}
            p={1}
            className="price"
          >
            <Text color={"#FF6838"}>36920.12</Text>
            <Text>0.758965</Text>
            <Text>28,020.98</Text>
            <Overlay
              className="!absolute !right-[0] !bg-supportsuccess !top-0"
              color="green"
              length="sixty-four"
            />
          </HStack>
          <HStack
            my={2}
            position={"relative"}
            justifyContent={"space-between"}
            p={1}
            className="price"
          >
            <Text color={"#FF6838"}>36920.12</Text>
            <Text>0.758965</Text>
            <Text>28,020.98</Text>
            <Overlay
              className="!absolute !right-[0] !bg-supportsuccess !top-0"
              color="green"
              length="sixty-four"
            />
          </HStack>
          <HStack
            my={2}
            position={"relative"}
            justifyContent={"space-between"}
            p={1}
            className="price"
          >
            <Text color={"#FF6838"}>36920.12</Text>
            <Text>0.758965</Text>
            <Text>28,020.98</Text>
            <Overlay
              className="!absolute !right-[0] !bg-supportsuccess !top-0"
              color="green"
              length="sixty-four"
            />
          </HStack>
          <HStack
            my={2}
            position={"relative"}
            justifyContent={"space-between"}
            p={1}
            className="price"
          >
            <Text color={"#FF6838"}>36920.12</Text>
            <Text>0.758965</Text>
            <Text>28,020.98</Text>
            <Overlay
              className="!absolute !right-[0] !bg-supportsuccess !top-0"
              color="green"
              length="sixty-four"
            />
          </HStack>
        </Box>
      </Box>
    </Box>
  );
}

export default OrderBook