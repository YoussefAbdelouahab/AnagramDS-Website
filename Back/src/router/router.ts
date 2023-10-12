import * as express from 'express';
import { CheckAuth } from '../middleware/auth';
import { Login, Register, getAllUsers } from '../controller/UserController';
import { addArticle } from '../controller/BlogController';

const router = express.Router();

/* User Routes */
router.get('/users', CheckAuth, getAllUsers)

router.post('/register', Register)

router.post('/login', Login)

/* Blog Routes */
router.post('/blog', addArticle)

export { router }