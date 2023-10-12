import { BlogModel } from '../entity/Blog';
import { FileModel } from '../entity/File';

export const addArticle = async function (req, res, next) {
    try {
        //Do not forget to add user_id in the body of the request
        req.body.date = Date.now();
        const article = await BlogModel.create(req.body);
        
        const artcle_id = article.id;
        const image = req.body.image;

        const file = await FileModel.create({
            url: image,
            article_id: artcle_id
        })
        //logging success
        console.log("An article has been added to database")
        res.status(200).json({"OK": article, file});
    } catch (error) {
        console.log('Error creating a strudent :' + error);
    }
}

export const getAllArticle = async function (req, res, next) {
    try {
        const data = await BlogModel.find({})

        data.forEach(async element => {
            const file = await FileModel.find({article_id : element.id})
        });
        console.log("Users retrieved")
        res.status(200).json(data);
    } catch (error) {
        console.log("Error occured retrieving users!" + error)
    }
}