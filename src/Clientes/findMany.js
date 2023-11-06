import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main() {
  const clientes = await prisma.clientes.findMany();
  console.log(clientes);
}


main();