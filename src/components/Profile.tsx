import { HStack, Image, Text } from '@chakra-ui/react'
import userImg from '../assets/user.png'
import angle from "../assets/angle-right.png";
import React from 'react'
import { connectWallet, getWalletBalance } from '../connectWallet';


const Profile = () => {

  const [account, setAccount] = React.useState<string>();


  const getAccount = async () => {
    const accounts = await connectWallet();
    setAccount(accounts);
    console.log("Connected Account:", accounts);
  }

  const getAccBalance = async () => {
    const res = await getWalletBalance(account as string);
    console.log("Wallet Balance:", res);
  }

  React.useEffect(() => {
    getAccBalance();
  }, [account]);


  return (
    <HStack bg="#12171D" p={2} cursor="pointer" borderRadius={8 } onClick={getAccount}>
      <Image src={userImg} />
      <Text  fontSize="14px">{account ? account : "Connect wallet"}</Text>
      <Image src={angle} />
    </HStack>
  );
}

export default Profile