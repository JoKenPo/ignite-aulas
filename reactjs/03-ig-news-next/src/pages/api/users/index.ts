import { NextApiRequest, NextApiResponse } from 'next';

// JWS (Storage)
// Next Auth (Social) https://next-auth.js.org/getting-started/introduction
// Cognito, Auth0

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Eduardo' },
    { id: 2, name: 'Dany' },
    { id: 3, name: 'Gordo' },
  ]

  return response.json(users);
}
