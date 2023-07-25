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
    },
    getUserById: function(userId) {
        return new Promise((resolve, reject) => {
         
             let queryString = `
                SELECT users.*
                FROM users
                WHERE users.id = ${userId}
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
     },
    createUser: function(newUser) {
        return new Promise((resolve, reject) => {
         
            //  let queryString = `
            //     INSERT INTO users (id, name, email) 
            //     VALUES (NULL, "${newUser.name}", "${newUser.email}")
            //  `
 
            let queryString = `
                INSERT INTO users SET ?
             `
             mySQL.query(queryString, newUser, (err, result) => {
                 if(err) {
                    console.log("lỗi truy vấn", err)
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
     },
}