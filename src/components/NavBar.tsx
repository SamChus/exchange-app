import { Button, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import globe from "../assets/globe.png";
import logout from "../assets/logout.png";


const NavBar = () => {
  return (
    <HStack bg="#1C2127" justifyContent="space-between" p={4}>
      <HStack fontSize="14px" >
        <Image src={logo} mr={8} />
        <div
          style={{
            width: "1px",
            height: "40px",
            backgroundColor: "#A7B1BC",
            opacity: "0.16",
          }}
        />
        <Button variant="link" fontSize="14px" fontWeight="500px" ml={8} mr={6}>
          Exchange
        </Button>
        <Button variant="link" fontSize="14px" fontWeight="500px" mr={6}>
          Wallets
        </Button>
        <Button variant="link" fontSize="14px" fontWeight="500px">
          Roqqu Hub
        </Button>
      </HStack>

      <HStack>
        <Image src={globe} cursor="pointer" title="bnb" />
        <Image src={logout} cursor="pointer" title="logout" />
      </HStack>
    </HStack>
  );
};

export default NavBar;
