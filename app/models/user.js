const db = require('../config/db');

class UserModel {
    static async getUsers(){
        return new Promise(resolve => {
            db.query("SELECT * FROM users", [], (error, result) => {
                if (!error){
                    resolve(result);
                }
            })
        })
    }
}