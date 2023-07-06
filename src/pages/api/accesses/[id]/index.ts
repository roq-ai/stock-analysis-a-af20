import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { accessValidationSchema } from 'validationSchema/accesses';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.access
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getAccessById();
    case 'PUT':
      return updateAccessById();
    case 'DELETE':
      return deleteAccessById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getAccessById() {
    const data = await prisma.access.findFirst(convertQueryToPrismaUtil(req.query, 'access'));
    return res.status(200).json(data);
  }

  async function updateAccessById() {
    await accessValidationSchema.validate(req.body);
    const data = await prisma.access.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteAccessById() {
    const data = await prisma.access.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
