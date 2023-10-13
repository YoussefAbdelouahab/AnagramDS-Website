import { BlogModel } from '../entity/Blog';

export const addArticle = async function (req, res, next) {
    try {
        //Do not forget to add user_id in the body of the request
        console.log(req.body)

        req.body.date = Date.now();
        req.body.url = req.files;
        const article = await BlogModel.create(req.body);
        //logging success
        console.log("An article has been added to database")
        res.status(200).json({"OK": article});
    } catch (error) {
        console.log('Error creating a strudent :' + error);
    }
}

export const getAllArticle = async function (req, res, next) {
    try {
        const articles = await BlogModel.find({})
        console.log("Articles retrieved")
        res.status(200).json(articles);
    } catch (error) {
        console.log("Error occured retrieving users!" + error)
    }
}