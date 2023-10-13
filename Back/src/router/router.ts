import * as express from 'express';
import { CheckAuth } from '../middleware/auth';
import { Login, Register, getAllUsers } from '../controller/UserController';
import { addArticle, getAllArticle } from '../controller/BlogController';
import multer = require("multer");

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../Front/src/media')
    },
    
    filename: function (req: any, file: any, cb: any) {
        cb(null, file.originalname)
    }
});
const fileFilter = (req: any,file: any,cb: any) => {
    if(file.mimetype === "image/jpg"  || 
       file.mimetype ==="image/jpeg"  || 
       file.mimetype ===  "image/png"){
     
    cb(null, true);
   }else{
      cb(new Error("Image uploaded is not of type jpg/jpeg or png"),false);
}
}

const upload = multer({storage: storage, fileFilter : fileFilter});

/* User Routes */
router.get('/users', CheckAuth, getAllUsers)

router.post('/register', Register)

router.post('/login', Login)

/* Blog Routes */
router.get('/blog', CheckAuth, getAllArticle)

router.post('/blog', upload.array('url',1), addArticle)

export { router }