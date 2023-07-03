/* tslint:disable:no-trailing-whitespace */
import { Product } from "../interfaces/product.interface";
import { v4 as uuidv4 } from 'uuid';
import { Products } from "../mock/products.mock";


export class ProductService {
    public getProductById(id: string): Product {
        return Products.find((p: Product) => p.id === id)
    }

    public getAllProducts(): Product[] {
        return Products
    }

    public createProduct(name: string, description: string, price: number, stock: number, image: string) {
        const product: Product = {
            id: uuidv4(),
            name,
            description,
            price,
            stock,
            image
        }

        Products.push(product)
    }

    public updateProduct(id: string, name: string, description: string, price: number, stock: number, image: string) {
        const product = Products.find((p: Product) => p.id === id)
        product.name = name;
        product.description = description;
        product.price = price;
        product.stock = stock;
        product.image = image;
    }

    public deleteProduct(id: string) {
        const productIndex = Products.findIndex((p) => p.id === id)
        Products.splice(productIndex, 1)
    }
}
