import { Button, HStack, Image, Link, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import globe from "../assets/globe.png";
import logout from "../assets/logout.png";
import ColorSwitchMode from "./ColorSwitchMode";
import Profile from "./Profile";


const NavBar = () => {
  return (
    <HStack justifyContent="space-between" p={4}>
      <HStack fontSize="14px">
        <Image src={logo} mr={8} />
        <div
          style={{
            width: "1px",
            height: "40px",
            backgroundColor: "#A7B1BC",
            opacity: "0.16",
          }}
        />
        <Link
          href="/exchange"
          variant="link"
          fontSize="14px"
          fontWeight="500px"
          ml={8}
          mr={6}
        >
          Exchange
        </Link>
        <Link
          href="/wallets"
          variant="link"
          fontSize="14px"
          fontWeight="500px"
          mr={6}
        >
          Wallets
        </Link>
        <Link
          href="/dapp"
          variant="link"
          fontSize="14px"
          fontWeight="500px"
        >
          Dapp
        </Link>
      </HStack>

      <HStack>
        <Profile />
        <Image src={globe} cursor="pointer" title="bnb" />
        <Image src={logout} cursor="pointer" title="logout" />
        {/* <ColorSwitchMode /> */}
      </HStack>
    </HStack>
  );
};

export default NavBar;
