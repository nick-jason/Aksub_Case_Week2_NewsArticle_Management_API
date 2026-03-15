import express from 'express'
import { upload } from '../../middleware/upload.middleware.js'
import NewsController from "../controller/news.controller.js"

const router = express.Router()

router.get("/upload", (req, res) => {
    res.render("../views/upload")
})
router.post("/upload", upload.single("thumbnail"), (req, res) => {
    res.send("Image Upload")
})
router.get("/", NewsController.getAllNews)
router.get("/:search", NewsController.getOneNews)
router.post("/", NewsController.createNews)
router.put("/:id", NewsController.updateNews)
router.delete("/:id", NewsController.deleteNews)

export default router