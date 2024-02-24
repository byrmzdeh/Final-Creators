import jwt from "jsonwebtoken"
import { UserModel } from "../model/UserModel.js";
import bcrypt from "bcrypt";

export const loginController =  async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (!user) {
            res.send("user not found")
            return
        }
        const pass = await bcrypt.compare(password, user.password);
        if (!pass) {
            res.send("password not valid")
            return
        }

        const token = jwt.sign({email: user.email, role: user.role}, process.env.JWT_SECRET_KEY ,{ expiresIn: '1h' });
        res.json(token);

      } catch (error) {
        res.send(error.message);
      }
}

export const registerController = async (req, res) => {
    try {
        const {username, email, password } = req.body;
        const hash = bcrypt.hashSync( password, 12);
        const newuser = new UserModel({username, email, password:hash })
        var token = jwt.sign({username: newuser.username, email: newuser.email, role: newuser.role}, process.env.JWT_SECRET_KEY ,{ expiresIn: '2h' });
        await newuser.save();
        res.json(token);
      } catch (error) {
        res.send(error.message);
      }
}

