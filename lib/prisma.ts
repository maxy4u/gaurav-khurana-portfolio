import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient | undefined;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient({ log: ['warn', 'error', 'query', 'info'] });
  }
  prisma = global.prisma as PrismaClient;
}

export default prisma as PrismaClient;
