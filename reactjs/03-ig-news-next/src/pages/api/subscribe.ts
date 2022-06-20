import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { stripe } from './../../services/stripe';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const session = await getSession({req})
    
    // Verifica se a sessão retornada possui um e-mail, caso não tiver, retorna um erro
    if (!session?.user?.email) {
      return res.status(400).json({
        message: "Logged user does not have an e-mail"
      })
    }

    const stripeCustomer = await stripe.customers.create({
      email: session.user.email,
      // metadata
    })
    
    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      customer: stripeCustomer.id,
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      line_items: [
        { price: 'price_1L6dnKHWUPDNLZSnyvmyDsAn', quantity: 1 }
      ],
      mode: 'subscription',
      allow_promotion_codes: true,
      success_url: String(process.env.STRIPE_SUCCESS_URL),
      cancel_url: String(process.env.STRIPE_CANCEL_URL)
    })

    return res.status(200).json({sessionId: stripeCheckoutSession.id })
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method not allowed')
  }
}