import { smmModel } from "../model/SmmModel.js"

export const getAllSmm = async (req, res) => {
    try {
        const smm = await smmModel.find({})
        res.send(smm)
    } catch (error) {
        res.send(error.message)
    }
}

export const getByIdSmm = async (req, res) => {
    try {
        const { id } = req.params
        const smm = await smmModel.findById(id)
        res.send(smm)
    } catch (error) {
        res.send(error.message)
    }
}


export const getByPostSmm =  async (req, res) => {
    try {
        const { name,title , img1 , img2 } = req.body
        const smm = new smmModel({ name, title, img1 , img2 })
        await smm.save()
        res.send(smm)
    } catch (error) {
        res.send(error.message)
    }
}


export const getByPutSmm =  async (req, res) => {
    try {
        const { id } = req.params
        const { name, title, img1 , img2 } = req.body
        const smm = await smmModel.findByIdAndUpdate(id, { name, title, img1 , img2 })
        res.send(smm)
    } catch (error) {
        res.send(error.message)

    }

}

export const getByDeleteSmm =  async (req, res) => {
    try {
        const { id } = req.params
        const smm = await smmModel.findByIdAndDelete(id)
        res.send(smm)
    } catch (error) {
        res.send(error.message)

    }
}