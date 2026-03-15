import NewsRepository from "../repository/news.repository.js"

class NewsService{
    static async getAllNews(){
        const news = await NewsRepository.getAllNews()

        if(!news || news.length === 0){
            const error = new Error("There is no product yet")
            error.statusCode = 404
            throw error
        }

        return news
    }

    static async getOneNews(search){
        const news = await NewsRepository.getOneNews(search)

        if(!news || news.length === 0){
            const error = new Error(`Product with title: ${search} is not found`)
            error.statusCode = 404
            throw error
        }

        return news
    }

    static async createNews(data){
        return NewsRepository.createNews(data)
    }

    static async updateNews(id, data){
        return NewsRepository.updateNews(id, data)
    }

    static async deleteNews(id){
        return NewsRepository.deleteNews(id)
    }
}

export default NewsService;