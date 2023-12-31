import { UserModel } from '../entity/User';
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

export const getAllUsers = async function (req, res, next) {
    try {
        const data = await UserModel.find({})
        console.log("Users retrieved")
        res.status(200).json(data);
    } catch (error) {
        console.log("Error occured retrieving users!" + error)
    }
}

export const Register = async function (req, res, next) {
    try {
        //Hash the password
        const hash = await bcrypt.hash(req.body.password, 10);
        req.body.password = hash;
        //Store user in db
        const data = await UserModel.create(req.body);
        //logging success
        console.log("A user has been added to database")
        res.status(200).json(data);
    } catch (error) {
        console.log('Error creating a strudent :' + error);
    }
}

export const Login = async function (req, res, next) {
    try {
        //Check if user exist
        const user = await UserModel.findOne({ email: req.body.email });
        if (!user) res.status(401).json({ "KO": "Email not found, please register" });
        // check if password conform
        const isValid = await bcrypt.compare(req.body.password, user.password);
        if (!isValid) res.status(401).json({ "KO": "Password inccorect, please retry" });
        console.log(isValid)
        const token = jwt.sign(
            {
              id: user.id,
              username: user.username
            },
            "bc042227-9f88-414d",
            {
              expiresIn: "24h",
            }
          );

        if (!token) res.status(401).json({ "KO": "Error authentication" });
        
        res.status(200).json({message: "Account logged in", token: token});
    } catch (error) {
        console.log('Error occured during the connexion:' + error);
    }
}