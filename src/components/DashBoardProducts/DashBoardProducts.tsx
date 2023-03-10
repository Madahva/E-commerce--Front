import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import type { ReactElement } from "react"
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { withStyles,createStyles} from '@mui/styles';
import Table from '@mui/material//Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import makeStyles from '@mui/styles/makeStyles';
import editIcon from "../../assets/Icons/edit.jpg";
import onIcon from "../../assets/Icons/on.jpg";
import offIcon from "../../assets/Icons/off.jpg";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useAppSelector, useAppDispatch} from "../../redux/hooks";
import { useEffect } from "react";
import { fetchProducts} from "../../redux/features/productSlice";
import { RootState } from "../../redux/store";
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { Product } from "../../types";
import {DashEditProduct} from "../DashEditProduct/DashEditProduct"
import Pagination from "../PaginationTable/PaginationTable"
import { deleteProduct } from '../../redux/features/productSlice';
import { updateProduct } from '../../redux/features/productSlice';
import { ClassSharp } from "@mui/icons-material";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";


const useStyles = makeStyles(() => ({
  navBar: {
    alignItems: "center",
    textAlign: "center",
    display: "flex",
    backgroundColor: "#1976d2",
    justifyContent: "space-between",
    gap: "1rem",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
    padding: ".5rem",
    "@media (min-width: 960px)": {
      padding: "1rem 5rem",
    },
  },
  button: {
    backgroundColor: "rgba(250,250,250,.1)",
    borderRadius: ".5rem",
  },
  Box: {
    marginTop: "30vh",
    padding: "0 5rem",
  },
  link: {
    color: "inherit",
    textDecoration: "none",
    textTransform: "capitalize",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));
const StyledTableCell = withStyles(() =>
  createStyles({
    head: {
      backgroundColor: "#1976d2",
      color: "#fff",
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles(() =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: "#f5f5f5",
      },
    },
  }),
)(TableRow);

// type AppDispatch = ThunkDispatch<RootState, void, AnyAction>;

export function DashBoardProducts(): ReactElement {
  const classes = useStyles();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();


  const isAdmind: boolean =
    isAuthenticated &&
    (user.email === process.env.REACT_APP_EMAIL_ADMIN_1 ||
      user.email === process.env.REACT_APP_EMAIL_ADMIN_2);

  if (!isAdmind) navigate("/");
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const [id, setID] = useState("");
  const [showTable, setShowTable] = useState(true);
  const [showPaginated, setshowPaginated] = useState(true);
  const [status, setStatus]  = useState(true);
  // const [rows, setRows] = useState([]);

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [brand, setBrand] = useState("");
  const [img, setImg] = useState("");
  const [deleted, setDeleted] = useState(false);
  const [category_id, setCategoryID] = useState(0);
  const [showSuccestMsg, setShowSuccestMsg] = useState(false);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  
  const productDetaild = useAppSelector((state: RootState) => state.productReducer.productDetaild);
  // console.log(productDetaild)

  function createData(id: string, name: string, quantity: number, description: string, deleted: boolean,
                     price: any, rating: any, Marca: any, category_id: number, img: string,
                     edit: string, delet: boolean) {
    return { id, name, quantity, description, deleted, price, rating, Marca, category_id,img, edit, delet};
  }
  
  const rows = productDetaild.map((product) =>
  createData(product.id, product.name, product.quantity, product.description, product.deleted, product.price,
             product.rating, product.Marca, product.category_id,product.img, "", true)
  );
  
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const indexOfLastProduct = (page + 1) * rowsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - rowsPerPage;
  const currentProducts = rows.slice(indexOfFirstProduct, indexOfLastProduct);



  const handleEditClick = (id: any, name: string, quantity: number, description: string, 
    price: any,  brand: string, img: string, category_id: any) => {
    setShowTable(false);
    setshowPaginated(false)
    setID(id)
    setName(name);
    setQuantity(quantity);
    setDescription(description);
    setPrice(price);
    setBrand(brand);
    setImg(img);
    setCategoryID(category_id);
  }
  
  const handleCreateClick = () => {
    navigate("/dashboard-create-products")
  }

  const handleDeletedLogicClick = (id: string,  name: string,
    quantity: any, description: string, price: any, deleted: boolean, delet: boolean,
    rating: any, Marca: string, img: string, category_id: any) => {
    
    if(deleted===false){
      // setDeleted(true)
      // console.log(id)
      // dispatch(deleteProduct(id));
      setStatus(!delet)
      deleted = true;
      console.log(deleted)
      console.log("paso")
      const updataProduct: Product = { id, name, quantity, description, img, price, deleted,rating, Marca, category_id};
      dispatch(updateProduct(updataProduct));
      setDeleted(deleted)
      setShowSuccestMsg(true);

      
    }
    else{
      // setDeleted(false)
      deleted = false;
      console.log(deleted)
      console.log("paso2")
      const updataProduct: Product = { id, name, quantity, description, img, price, deleted,rating, Marca, category_id};
      dispatch(updateProduct(updataProduct));
      setDeleted(deleted)
      setShowSuccestMsg(true);
    }
    
  }


  // const handleCategoryChange = (event: SelectChangeEvent<string>, child: React.ReactNode) => {
  //   const categoryType = event.target.value;
  //   const selectedCategory = allCategories.find((c) => c.typecategory === categoryType);
  
  //   if (selectedCategory) {
  //     setCategoryID(selectedCategory.id);
  //     setCategory(categoryType);
  //     console.log(selectedCategory.id)
  //   }
  // }

  const allCategories = useAppSelector((state: RootState) => state.categoryReducer.categories);
  console.log(allCategories)
  const allBrands = useAppSelector((state: RootState) => state.brandReducer.brands);
  console.log(allBrands)

  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
        <div>
          <div className={classes.navBar}>
            <Link to="/" className={classes.button}>
              <Button>
                <HomeIcon style={{ color: "white" }} />
              </Button>
            </Link>

            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ color: "white" }}
            >
              Products Dashboard
            </Typography>

            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ color: "white" }}
            >
              Admin: {user.given_name}
            </Typography>
          </div>
          <div style={{ marginLeft: "45px", marginTop: "10px", marginBottom: "-30px"}}>
          <Breadcrumbs aria-label="breadcrumb">
              <Link className={classes.link} to="/">
                Home
              </Link>
              <Link className={classes.link} to="/dashboard">
                Dashboard
              </Link>
          </Breadcrumbs>
          </div>
          {showTable ? (
          <TableContainer component={Paper} style={{ width: '95%', margin: '3%', maxHeight: '180vh' }}>
            <Table aria-label="customized table">
                <TableHead>
                <TableRow>
                  <StyledTableCell style={{color: 'white' , textAlign: 'center'}}>ID</StyledTableCell>
                  <StyledTableCell style={{color: 'white' , textAlign: 'center'}} align="right">Name</StyledTableCell>
                  <StyledTableCell style={{color: 'white' , textAlign: 'center'}} align="right">Quantity</StyledTableCell>
                  <StyledTableCell style={{color: 'white' , textAlign: 'center'}} align="right">Description</StyledTableCell>
                  <StyledTableCell style={{color: 'white' , textAlign: 'center'}} align="right">Price</StyledTableCell>
                  <StyledTableCell style={{color: 'white' , textAlign: 'center'}} align="right">Rating</StyledTableCell>
                  <StyledTableCell style={{color: 'white' , textAlign: 'center'}} align="right">Brand</StyledTableCell>
                  <StyledTableCell style={{color: 'white' , textAlign: 'center'}} align="right">Category</StyledTableCell>
                  <StyledTableCell style={{color: 'white' , textAlign: 'center'}} align="right">Edit</StyledTableCell>
                  <StyledTableCell style={{color: 'white' , textAlign: 'center'}} align="right">Status</StyledTableCell>
                </TableRow>
                </TableHead>
              <TableBody>
                {currentProducts.map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">
                    {row.id}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.name}</StyledTableCell>
                    <StyledTableCell align="right">{row.quantity}</StyledTableCell>
                    <StyledTableCell align="right">{row.description}</StyledTableCell>
                    <StyledTableCell align="right">{row.price}</StyledTableCell>
                    <StyledTableCell align="right">{row.rating}</StyledTableCell>
                    <StyledTableCell align="right">{row.Marca}</StyledTableCell>
                    {/* {allBrands.map((b) =>
                        b.id === row.Marca ? (
                        <StyledTableCell align="right">{b.Brand}</StyledTableCell>
                        ) : null
                    )} */}
                    {allCategories.map((c) =>
                        c.id === row.category_id ? (
                        <StyledTableCell align="right">{c.typecategory}</StyledTableCell>
                        ) : null
                    )}
                    <StyledTableCell align="right"><Button onClick={() => handleEditClick(row.id,row.name, row.quantity,
                       row.description,row.price,row.Marca,row.img, row.category_id)}>
                      <img src={editIcon} width="35" height="35"/></Button></StyledTableCell>
                    <StyledTableCell align="right"><Button onClick={()=>handleDeletedLogicClick(row.id,row.name,
                      row.quantity, row.description, row.price,deleted,status,
                      row.rating, row.Marca, row.img, row.category_id)}><img src={status ? onIcon : offIcon} width="35" height="35"/></Button></StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          ) : (
            <div>
              <DashEditProduct id={id} name={name} quantity={quantity} description={description} 
              price={price} Marca={brand} img={img} category_id ={category_id} setIsCancel={setShowTable} setIsCancel2={setshowPaginated} />
            </div> 
          )}
          <Snackbar
            open={showSuccestMsg}
            autoHideDuration={5000}
            onClose={() => setShowSuccestMsg(false)}
            >
            <Alert severity="success" onClose={() => setShowSuccestMsg(false)}>
              Product change Status!
            </Alert>
          </Snackbar>
          {showPaginated? (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Button variant="contained" color="primary" onClick={() => handleCreateClick()}>Create new product</Button>
            <Pagination
            rowsPerPage={rowsPerPage}
            page={page}
            count={rows.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}  
            />
          </div>
           ):(
            <div></div>
           )}
        </div>
      )}
    </div>
  );
}


