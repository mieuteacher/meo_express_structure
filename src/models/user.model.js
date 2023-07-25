import {mySQL} from '../databases/mySQL';

module.exports = {
    getUsers: function() {
       return new Promise((resolve, reject) => {
        
            let queryString = `
                SELECT users.*
                FROM users
            `

            mySQL.query(queryString, (err, result) => {
                if(err) {
                    return resolve(
                        {
                            status: false,
                            message: "Lỗi trong quá trình truy vấn!"
                        }
                    )
                }

                return resolve(
                    {
                        status: true,
                        message: "Get users thành công!",
                        data: result
                    }
                )
            })
       }).catch(err => {
            //console.log("Promise gặp lỗi cú pháp!", err)
            return {
                status: false,
                message: "Lỗi không xác định!"
            }
       })
    }
}