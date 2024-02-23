import { cardModel } from "../model/CardModel.js"


export const getAllCard = async (req, res) => {
    try {
        const card = await cardModel.find({})
        res.send(card)
    } catch (error) {
        res.send(error.message)
    }
}

export const getByIdCard = async (req, res) => {
    try {
        const { id } = req.params
        const card = await cardModel.findById(id)
        res.send(card)
    } catch (error) {
        res.send(error.message)
    }
}


export const getByPostCard = async function (req, res, next) {
    try {
        const { name, price, discount } = req.body
        const card = new cardModel({ name, image:"http://localhost:3600/image/" + req.uploadFileName, price , discount })
        console.log(req.body);
        console.log(req.file);
        await card.save()
        res.send(card)
    } catch (error) {
        res.send(error.message)
    }
}

export const getByPutCard = async (req, res) => {
    try {
        const { id } = req.params
        const { name, price, discount } = req.body
        const card = await cardModel.findByIdAndUpdate(id, { name, image: "http://localhost:3600/image/" + req.uploadFileName, price, discount });
        res.send(card)
    } catch (error) {
        res.send(error.message);
    }
}

export const getByDeleteCard = async (req, res) => {
    try {
        const { id } = req.params
        const card = await cardModel.findByIdAndDelete(id)
        res.send(card)
    } catch (error) {
        res.send(error.message)

    }
}