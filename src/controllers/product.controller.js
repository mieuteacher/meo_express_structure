import productModel from '../models/product.model';
import {uploadFileToStorage} from '../meobase';
import fs from 'fs';
module.exports = {
    create: async function(req, res) {
        let productInforFormat = JSON.parse(req.body.product_infor);

        // xử lý avatar
        let avatarProcess = await uploadFileToStorage(req.files[0], "products", fs.readFileSync(req.files[0].path));
        productInforFormat.avatar = avatarProcess;
        fs.unlink(req.files[0].path, (err) => {

        })
        req.files.splice(0, 1);
        
        
        for (let i in productInforFormat.options) {
            productInforFormat.options[i].price = Number(productInforFormat.options[i].price);
            productInforFormat.options[i].stock = Number(productInforFormat.options[i].stock);
            for (let j in productInforFormat.options[i].pictures) {
                let imgProcess = await uploadFileToStorage(req.files[j], "products", fs.readFileSync(req.files[j].path));
                productInforFormat.options[i].pictures[j].url = imgProcess;
                fs.unlink(req.files[j].path, (err) => {
            
                })
            }
            req.files.splice(0, productInforFormat.options[i].pictures.length);
        }

        console.log("productInforFormat", productInforFormat)
        try {
            /* Lấy ra options */
            let productOptions = productInforFormat.options;

            /* Xóa options */
            delete productInforFormat.options;

            /* Phần còn lại là information */
            let productInfor = productInforFormat;
        
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