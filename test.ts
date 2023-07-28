let newProductObj = {
    name: String,
    des: String,
    avatar: String,
    category_id: Number,
    options: [
        {
            name: String,
            price: Number,
            stock: Number,
            pictures: [
               {url: String},
               {url: String}
            ]
        },
        {
            name: String,
            price: Number,
            stock: Number,
            pictures: [
               {url: String}
            ]
        }
    ]
}