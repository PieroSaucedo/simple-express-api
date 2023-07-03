import express from 'express';
import cors from 'cors';
import productsRoutes from "./routes/products.routes";

const app = express();
const port = 3000;

app.use(cors()); // Middleware to enable CORS
app.use(express.json()); // Middleware to parse the body of the request message
app.use(express.urlencoded({ extended: false })); // Middleware to parse the body of the request message
app.use(express.static('public')); // Middleware to serve static files
app.use('/', productsRoutes); // Middleware to handle routes

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
});