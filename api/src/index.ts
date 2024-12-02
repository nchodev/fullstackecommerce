import express, {json, urlencoded  }  from "express";
import productsRoutes from './route/products/index'

const app = express();
const port = 3000;

app.use(urlencoded({extended: false}));
app.use(json());
 
app.get('/', (req, res) => {
  res.send('Hello World!')
})
// product route
app.use('/products', productsRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 