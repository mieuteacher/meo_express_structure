import productModel from '../models/product.model';

module.exports = {
    create: async function(req, res) {
        return
        try {
            /* Lấy ra options */
            let productOptions = req.body.options;

            /* Xóa options */
            delete req.body.options;

            /* Phần còn lại là information */
            let productInfor = req.body;
        
            /* Chuyển đổi information về dạng đúng format của model */
            for (let i in productOptions) {
                productOptions[i].product_option_pictures = {
                    create: productOptions[i].pictures
                }
                delete productOptions[i].pictures;
            }

            /* Gọi model xử lý database */
            let result = await productModel.create(
                {
                    productInfor,
                    productOptions
                }
            );
            
            console.log("result", result)
        }catch(err) {
            return res.status(500).json({
                message: "Lỗi xử lý!"
            })
        }
    }
}