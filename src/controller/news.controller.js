import NewsService from "../service/news.service.js";
import { NewsValidateSchema } from "../validator/news.validator.js";

class NewsController{
    static async getAllNews(req, res){
        try{
            const news = await NewsService.getAllNews()

            res.status(200).json({
                message: "Success getting all news",
                data: news
            });
        } catch(error) {
            res.status(error.statusCode || 500).json({
                message: error.message
            })
        }
    }

    static async getOneNews(req, res){
        try{
            const news = await NewsService.getOneNews(req.params.search)

            res.status(200).json({
                message: "Success getting news",
                data: news
            });
        } catch(error) {
            res.status(error.statusCode || 500).json({
                message: error.message
            })
        }
    }

    static async createNews(req, res){
        try{
            const {error, value} = NewsValidateSchema.validate(req.body)
            if(error){
                return res.status(400).json({
                    message: error.details[0].message
                })
            }

            const news = await NewsService.createNews(value)

            res.status(201).json({
                message: "News created",
                data: news
            })

        } catch(error){
            res.status(error.statusCode || 500).json({
                message: error.message
            })
        }
    }

    static async updateNews(req, res){
        try{
            const {error, value} = NewsValidateSchema.validate(req.body)
            if(error){
                return res.status(400).json({
                    message: error.details[0].message
                })
            }

            const news = await NewsService.updateNews(req.params.id, value)

            res.status(200).json({
                message: "News updated",
                data: news
            })

        } catch(error){
            res.status(error.statusCode || 500).json({
                message: error.message
            })
        }
    }
    static async deleteNews(req, res){
        try{
            const news = await NewsService.deleteNews(req.params.id)

            res.status(200).json({
                message: `Successfully delete news`,
                data: news
            });
        } catch(error) {
            res.status(error.statusCode || 500).json({
                message: error.message
            })
        }
    }
}

export default NewsController