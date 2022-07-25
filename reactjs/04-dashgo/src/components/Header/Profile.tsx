import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr='4' textAlign='right'>
        <Text>Eduardo Almeida</Text>
        <Text color='gray.300'>
          eduardo.almeida.job@gmail.com
        </Text>
      </Box>

      <Avatar size='md' name='Eduardo Almeida' src='https://github.com/jokenpo.png' />
    </Flex>
  );
}