import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  // console.log('request.query: ', request.query);

  const users = [
    { id: 1, name: 'Eduardo' },
    { id: 2, name: 'Dany' },
    { id: 3, name: 'Gordo' },
  ]

  return response.json(users);
}
