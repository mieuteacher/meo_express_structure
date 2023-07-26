module.exports = {
    getUserValidate: (req, res, next) => {
        if (req.query.userId) {
           if( isNaN(Number(req.query.userId)) || req.query.userId <= 0) {
                return res.status(500).json(
                    {
                        message: "User Id phải là số nguyên dương!"
                    }
                )
           }
           try {
                if(typeof JSON.parse(req.query.detail) != "boolean") {
                    return res.status(500).json(
                        {
                            message: "Detail phải là true hoặc false"
                        }
                    )
                }
           }catch(err) {
                return res.status(500).json(
                    {
                        message: "Detail phải là true hoặc false"
                    }
                )
           }
        }
       next();
    }
}