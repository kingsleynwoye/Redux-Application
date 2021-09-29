import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 1,
    title: "React native course",
    description: "The course online",
  },
  {
    id: "p2",
    price: 5,
    title: "Redux",
    description: "Buiding App with redux",
  },
  {
    id: "p3",
    price: 5,
    title: "React",
    description: "More about react",
  },
  {
    id: "p4",
    price: 5,
    title: "Router",
    description: "Building app with Router",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
