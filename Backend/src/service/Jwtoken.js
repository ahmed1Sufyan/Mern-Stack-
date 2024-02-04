const jwt = require("jsonwebtoken");
class Jwtoken {
    constructor(data, secret_key, expiresIn = '1d') {
        super();
        this.data = data;
        this.secret_key = secret_key;
        this.expiresIn = expiresIn;
    }

    static generateaccesstoken (data, secret_key, expiresIn = '1d') {
        return  jwt.sign(
            {
              ...data
            },
            secret_key,
            {
              expiresIn
            }
          );
    }    
    
}

