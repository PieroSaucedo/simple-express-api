/* tslint:disable:no-trailing-whitespace */
import { ProductService } from "../services/product.service";
import { Request, Response } from "express";


export class ProductController {

    private productService: ProductService;

    constructor() {
        this.productService = new ProductService();
    }

    public getProductById = async (req: Request, res: Response)=> {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({});
        }

        const product = this.productService.getProductById(id);

        if (!product) {
            return res.status(404).json({});
        }

        return res.status(200).json({product});
    }

    public getAllProducts = async (req: Request, res: Response)=> {
        const products = this.productService.getAllProducts();

        if (!products) {
            return res.status(404).json({});
        }

        return res.status(200).json({products});
    }

    public createProduct = async (req: Request, res: Response)=> {
        const { body } = req;

        if (!body) {
            return res.status(400).json({});
        }

        const { name, description, price, stock, image } = body;
        this.productService.createProduct(name, description, price, stock, image);

        return res.status(201).json({});
    }

    public updateProduct = async (req: Request, res: Response) => {
        const { id } = req.params;
        const { body } = req;

        if (!body) {
            return res.status(400).json({});
        }

        const { name, description, price, stock, image } = body;
        this.productService.updateProduct(id, name, description, price, stock, image);

        return res.status(200).json({});
    }

    public deleteProduct = async (req: Request, res: Response)=> {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({});
        }

        this.productService.deleteProduct(id);

        return res.status(200).json({});
    }
}