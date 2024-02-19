import { Router } from "express";
import { getAllSmm, getByDeleteSmm, getByIdSmm, getByPostSmm, getByPutSmm } from "../controller/SmmController.js";

export const SmmRouter = Router()

SmmRouter.get('/' , getAllSmm)
SmmRouter.get('/:id', getByIdSmm)
SmmRouter.post('/', getByPostSmm)
SmmRouter.put('/:id', getByPutSmm)
SmmRouter.delete('/:id', getByDeleteSmm)