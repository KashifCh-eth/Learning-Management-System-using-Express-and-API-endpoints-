// const jwt = require("jsonwebtoken");
// const { model } = require("../models/index");
// const bcrypt = require("bcryptjs");
// let token = [];

// const genrateToken = (data) => {
//   return jwt.sign(data, "loveyousooomuch");
// };

// module.exports = {
//   verify: async(req,res,next) =>{
        
//   },
//   login: async (req, res) => {
//     const { username, password } = req.body;
//     const user = await model.user.findOne({
//       where: { email: email },
//     });
//     if(user && await bcrypt.compare(password,user.password)){
//         const Token = genrateToken({id:user.id});
//         token.push(Token);
//         return res.json({"Token": Token});
//     }
//   },
// };
