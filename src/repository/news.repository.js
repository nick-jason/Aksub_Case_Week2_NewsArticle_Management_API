import { PrismaClient } from "../../generated/prisma/client.ts";
const prisma = new PrismaClient();

class NewsRepository {
    static async getAllNews(){
        return prisma.news.findMany()
    }

    static async getOneNews(search){
        return prisma.news.findMany({
            where : {
                title: {
                    contains: search
                }
            }
        })
    }

    static async createNews(data){
        return prisma.news.create({
            data
        })
    }

    static async updateNews(id, data){
        return prisma.news.update({
            where: {
                id: parseInt(id)
            },
            data
        })
    }

    static async deleteNews(id){
        return prisma.news.delete({
            where: {
                id: parseInt(id)
            }
        })
    }
}

export default NewsRepository;