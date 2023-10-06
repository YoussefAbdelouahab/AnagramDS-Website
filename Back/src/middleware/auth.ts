import * as jwt from 'jsonwebtoken';


export const CheckAuth = function (req, res, next) {
    try {
        const token = req.header('authorization');
        if (!token) res.status(401).json("Please Login");

        // @ts-ignore
        const decodeToken = jwt.decode(token, "bc042227-9f88-414d");
        const id = decodeToken.id;
        const role = decodeToken.role;

        req.auth = { id, role };

    } catch (error) {
        return { error: "Unauthorized" };
    }
    next();
}
