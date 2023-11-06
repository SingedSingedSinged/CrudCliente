import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main() {
  const result = await prisma.clientes.delete({
    where: {
      id: "f741c7d6-90aa-443f-9ed4-1857e14db5fd",
    },
  });


  console.log(result);
}


main();
