import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Eduardo Almeida</Text>
          <Text color='gray.300'>
            eduardo.almeida.job@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size='md' name='Eduardo Almeida' src='https://github.com/jokenpo.png' />
    </Flex>
  );
}