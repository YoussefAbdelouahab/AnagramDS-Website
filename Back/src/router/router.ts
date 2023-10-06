import * as express from 'express';
import { UserModel } from '../entity/User';
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

const router = express.Router();



router.get('/users', async (req, res) => {
    try {
        const data = await UserModel.find({})
        console.log("Users retrieved")
        res.status(200).json(data);
    } catch (error) {
        console.log("Error occured retrieving users!" + error)
    }
})

router.post('/user', async (req, res) => {
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
})

router.post('/login', async (req, res) => {
    try {
        //Check if user exist
        const user = await UserModel.findOne({ email: req.body.email });
        if (!user) res.status(401).json({ "KO": "Email not found, please register" });

        // check if password conform
        const isValid = await bcrypt.compare(req.body.password, user.password);
        if (!isValid) if (!user) res.status(401).json({ "KO": "Password inccorect, please retry" });

        req.session.token = jwt.sign({
            id: user.id,
            username: user.username,
        }, "bc042227-9f88-414d", {
            expiresIn: "24h"
        });
        if (!req.session.token) res.status(401).json({ "KO": "Error authentication" });
        
        res.status(200).json("Account logged in");
    } catch (error) {
        console.log('Error occured during the connexion:' + error);
    }
})


export { router }