import userModel from  '../models/user.model';

module.exports = {
    getUsers: async function(req, res) {
        /* Get User By Id */
        if(req.query.userId) {
            let result = await userModel.getUserById(req.query.userId);
            if (result.status) {
                return res.status(200).json(
                    {
                        message: result.message,
                        data: result.data
                    }
                )
            }else {
                return res.status(500).json({
                    message: result.message,
                })
            }
        }

        /* Get Users */
        let result = await userModel.getUsers();
        if (result.status) {
            return res.status(200).json(
                {
                    message: result.message,
                    data: result.data
                }
            )
        }else {
            return res.status(500).json({
                message: result.message,
            })
        }
    },
    createUser:  async function(req, res) {
        
        let result = await userModel.createUser(req.body);
        if (result.status) {
            return res.status(200).json(
                {
                    message: result.message,
                    data: result.data
                }
            )
        }else {
            return res.status(500).json({
                message: result.message,
            })
        }
    }
}