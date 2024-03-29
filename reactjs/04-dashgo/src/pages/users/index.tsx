import { Box, Flex, Heading, Button, Icon, Table, Checkbox, Tr, Th, Thead, Tbody, Td, Text, Spinner } from '@chakra-ui/react'
import { Header } from './../../components/Header';
import { Sidebar } from './../../components/Sidebar';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Pagination } from '../../components/Pagination';
import { useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query'

export default function UserList() {
  const { data, isLoading, error } = useQuery(['users'], async () => {
    const response = await fetch('http://localhost:3000/api/users')
    const data = await response.json()

    const users = data.users.map(user => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        })
      };
    })

    return users;
  }, {
    staleTime: 1000 * 5, //5 segundos
  })

  const isWideVesion = useBreakpointValue({
    base: false,
    lg: true,
  })


  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' maxW={1480} mx='auto' px={['4', '4', '6']} >
        <Sidebar />

        <Box flex='1' borderRadius={8} bg='gray.800' p='8' >
          <Flex mb='8' justify='space-between' align='center' >
            <Heading size='lg' fontWeight='normal' > Usuários</Heading>

            <Link href="users/create" passHref>
              <Button
                as='a'
                size='sm'
                fontSize='sm'
                colorScheme='pink'
                leftIcon={<Icon
                  as={RiAddLine}
                  fontSize='20'
                />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados dos usuários.</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme='whiteAlpha' >
                <Thead>
                  <Tr>
                    <Th px={['4', '4', '6']} color='gray.300' width='8'>
                      <Checkbox colorScheme='pink' />
                    </Th>
                    <Th>Usuário</Th>
                    {isWideVesion && <Th>Data de cadastro</Th>}
                    {isWideVesion && <Th w='8'></Th>}
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map(user => {
                    return (
                      <Tr key={user.id}>
                        <Td px={['4', '4', '6']}>
                          <Checkbox colorScheme='pink' />
                        </Td>
                        <Td>
                          <Box>
                            <Text fontWeight='bold'>{user.name}</Text>
                            <Text fontSize='sm' color='gray.300'>{user.email}</Text>
                          </Box>
                        </Td>
                        {isWideVesion && <Td>{user.createdAt}</Td>}
                        {isWideVesion && <Td>
                          <Button
                            as='a'
                            size='sm'
                            fontSize='sm'
                            colorScheme='purple'
                            leftIcon={<Icon
                              as={RiPencilLine}
                              fontSize='16'
                            />}
                          >
                            Editar
                          </Button>
                        </Td>}
                      </Tr>
                    )
                  })}
                </Tbody>
              </Table>

              <Pagination />
            </>
          )}

        </Box>
      </Flex>
    </Box>
  )
}