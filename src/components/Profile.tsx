import { HStack, Image, Text } from '@chakra-ui/react'
import userImg from '../assets/user.png'
import angle from "../assets/angle-right.png";
import React from 'react'

const Profile = () => {
  return (
    <HStack bg="#12171D" p={2} cursor="pointer" borderRadius={8 }>
      <Image src={userImg} />
      <Text  fontSize="14px">samuel chukwuma</Text>
      <Image src={angle} />
    </HStack>
  );
}

export default Profile