import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main() {
  const result = await prisma.clientes.update({
    where: {
      id: "f741c7d6-90aa-443f-9ed4-1857e14db5fd",
    },
    data: {
      name: "Roger",
      fullname: "Roger Silva",
      cpf: 19917,
      address: "Rodovia da Calota, 190"
  }});


  console.log(result);
}


main();