import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

module.exports = {
    create: async function(dataObj) {
        try {
            const product = await prisma.products.create({
                data: {
                    ...dataObj.productInfor,
                    product_options: {
                        create: dataObj.productOptions
                    },
                },
                include: {
                    product_options: true,
                    product_options: {
                        include: {
                            product_option_pictures: true,
                        }
                    }
                },
            })
            return {
                status: true,
                message: "Thêm sản phẩm thành công!",
                data: product
            }
        }catch(err) {
            return {
                status: false,
                message: "Lỗi không xác định!"
            }
        }
    },

}