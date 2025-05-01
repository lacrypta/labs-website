import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

// Create and extend PrismaClient
const prismaClient = new PrismaClient({ log: ['query'] }).$extends(
  withAccelerate()
)

// Create a global type-safe cache for the extended Prisma client
type ExtendedPrismaClient = typeof prismaClient

const globalForPrisma = globalThis as unknown as {
  prisma: ExtendedPrismaClient | undefined
}

// Use cached instance or create one
export const prisma = globalForPrisma.prisma ?? prismaClient

// Cache the instance in dev mode to avoid multiple clients
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
