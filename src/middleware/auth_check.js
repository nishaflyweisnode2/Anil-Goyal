const jwt = require('jsonwebtoken');
const Admin = require('../models/admin_model');
    /**
     * Verigy token 
     *
     */
const SECRET = "demo@1234"
exports.veriftToken = (req, res, next) => {
    const auth= req.headers.authorization;
    if(!auth){
        return res.status(403).send({
            message: " There will be No Token "
        })
    }
    const token  = auth.split(' ')[1];
    console.log(token)
    jwt.verify(token, process.env.SECRET || SECRET , (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Token is expires regenerate it "
            })
        }
        req._id = decoded.id;
        next();
    })
}
