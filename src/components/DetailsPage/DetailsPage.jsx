import { products } from "../../assets/styles/Data";
import { useParams } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  detail: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "1rem",
  },
  productImage: {
    maxWidth: "350px",
    width:"100%",
    height: "auto",
  },
}));
const DetailsPage = () => {
  const classes = useStyles();
  const { category, id } = useParams();
  const product = products[category][id];
  return (
    <div className={classes.detail}>
      <h1>{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className={classes.productImage}
      />
      <div>
        <p>{product.description}</p>
        <p>{product.brand}</p>
        <p>{product.price}</p>
        <p>{product.size}</p>
      </div>
    </div>
  );
};

export default DetailsPage;
