import { Request, Response } from "express"


export function listProducts(req:Request, res: Response){
    res.send('the list of products 123')
}

export function getProductById(req:Request, res: Response){
    res.send('get product by id')
} 
export function createProduct(req:Request, res: Response){
    res.send('createProduct')
} 

export function updateProduct(req:Request, res: Response){
    res.send('updateProduct')
} 
export function deleteProduct(req:Request, res: Response){
    res.send('deleteProduct')
} 