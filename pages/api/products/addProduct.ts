import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]'
import prisma from '../../../prisma/client'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const session = await getServerSession(req, res, authOptions)

        if (!session || !session.user)
            return res.status(401).json({
                message: 'You must be signed in to perform this action',
            })

        if (!req.body.name || req.body.name.length <= 0)
            return res
                .status(400)
                .json({ message: 'Product name must be provided' })

        if (req.body.name.length > 100)
            return res.status(400).json({
                message: 'Product name must not exceed 100 characters',
            })

        // Get user
        const prismaUser = await prisma.user.findUnique({
            where: {
                email: session.user.email ? session.user.email : undefined,
            },
        })

        if (!prismaUser) {
            return res.status(401).json({ error: 'User not found' })
        }

        // Create product
        try {
            const result = await prisma.product.create({
                data: {
                    name: req.body.name,
                    userId: prismaUser.id,
                },
            })

            res.status(200).json(result)
        } catch (error) {
            res.status(400).json({
                error: 'Error has occurred while adding a new product',
            })
        }
    }
}
