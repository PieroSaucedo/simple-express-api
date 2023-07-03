import { Product } from "../interfaces/product.interface";

export const Products: Product[] = [
    {
        id: '1',
        name: 'Camera1',
        description: 'A camera',
        price: 1399,
        stock: 200,
        image: 'https://www.canon.com.au/-/media/images/canon/products/mirrorless-cameras/eos-r5-temp/tile-image-eosr5-1200x1200.ashx?mw=1200&hash=D6E43B947B880336BEDF0ED8C29FA0BC'
    },
    {
        id: '2',
        name: 'Camera2',
        description: 'A camera',
        price: 1699,
        stock: 150,
        image: 'https://www.ephotozine.com/articles/panasonic-lumix-s1-review-33660/images/1000-canon_rf24-105mm_f4l_without_hood_on_canon_eosr_oblique_view_1538384097.jpg'
    }
]
