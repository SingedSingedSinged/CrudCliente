import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main() {
  const result = await prisma.clientes.create({
    data: {
    name: "Roger",
    fullname: "Roger Silva",
    cpf: 19917,
    address: "Rodovia do Pneu, 131"
    },
  });


  console.log(result);
}


main();