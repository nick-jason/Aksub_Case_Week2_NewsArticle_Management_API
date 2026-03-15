import Joi from 'joi'

export const NewsValidateSchema = Joi.object({
    title: Joi.string()
        .trim()
        .min(3)
        .max(100)
        .required(),

    content: Joi.string()
        .trim()
        .min(3)
        .max(255)
        .required(),
    
    writer: Joi.string()
        .trim()
        .min(3)
        .max(100)
        .required(),

    thumbnail: Joi.string()
        .required(),

    publishedStatus: Joi.boolean()
        .required()
})
