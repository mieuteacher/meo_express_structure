import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
module.exports = {
    getProducts: async function() {
        // let result = await prisma.products.findMany({
        //     include: {
        //         pictures: true,
        //     },
        // });

        const result = await prisma.products.findMany({
            where: {
                name: { contains: 'Vừa' },
                price: {gt: 50000}
            },
            include: {
                pictures: true,
            },
          })
        console.log("result", result);
    },
    createProduct: async function(newProduct) {

        const product = await prisma.products.create({
            data: newProduct
          })

          console.log("newProduct", product)
    },

    createProductDefault: async function(newProduct) {

        const createMany = await prisma.products.createMany({
            data: [
              { name: 'test 1', price: 11000, active: true },
              { name: 'test 2', price: 1234, active: true },
              { name: 'test 3', price: 555, active: true },
              { name: 'test 4', price: 666, active: true },
              { name: 'test 5', price: 77, active: true },
              { name: 'test 6', price: 888, active: true },
            ],
            skipDuplicates: true, // Skip 'Bobo'
          })

          console.log("newProduct", createMany)
    },
}