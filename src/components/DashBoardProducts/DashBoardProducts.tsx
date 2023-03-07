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
import { useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { fetchProducts} from "../../redux/features/productSlice";
import { RootState } from "../../redux/store";
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
// import { editProduct } from "../../redux/features/productSlice";
import {DashEditProduct} from "../DashEditProduct/DashEditProduct"
import Pagination from "../PaginationTable/PaginationTable"


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

type AppDispatch = ThunkDispatch<RootState, void, AnyAction>;

export function DashBoardProducts(): ReactElement {
  const classes = useStyles();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  const isAdmind: boolean =
    isAuthenticated && user.email === "stiwarsg11@gmail.com";
  if (!isAdmind) navigate("/");

  const dispatch: AppDispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [showTable, setShowTable] = useState(true);
  const [showPaginated, setshowPaginated] = useState(true);
  const [status, setStatus] = useState(onIcon);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [brand, setBrand] = useState("");

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  
  const productDetaild = useAppSelector((state: RootState) => state.productReducer.productDetaild);
  

  function createData(id: string, name: string, quantity: number, description: string, 
                     price: any, rating: any, Marca: string, category_id: number,
                     edit: string, delet: string) {
    return { id, name, quantity, description, price, rating, Marca, category_id, edit, delet:status};
  }
  
  const rows = productDetaild.map((product) =>
  createData(product.id, product.name, product.quantity, product.description, product.price,
             product.rating, product.Marca, product.category_id, "", "")
  );
  console.log(rows)
  

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



  const handleEditClick = (name: string, quantity: number, description: string, 
    price: any,  brand: string) => {
    setShowTable(false);
    setshowPaginated(false)
    setName(name);
    setQuantity(quantity);
    setDescription(description);
    setPrice(price);
    setBrand(brand);
  }
  
  const handleCreateClick = () => {
    navigate("/dashboard-create-products")
  }

  const handleDeletedLogicClick = (id: string, delet: string) => {
    // const newStatus = status === onIcon ? offIcon : onIcon;
    // setStatus(newStatus);
    
    const newStatus = delet === onIcon ? offIcon : onIcon;
    const updatedRows = rows.map(r => {
      if (r.id === id) {
        return { ...r, delet: newStatus };
      }
      return r;
    });
    setStatus(updatedRows[0].delet);
    
  }

  
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
          {showTable ? (
          <TableContainer component={Paper} style={{ width: '95%', margin: '3%', maxHeight: '180vh' }}>
            <Table aria-label="customized table">
                <TableHead>
                <TableRow>
                  <StyledTableCell>ID</StyledTableCell>
                  <StyledTableCell align="right">Name</StyledTableCell>
                  <StyledTableCell align="right">Quantity</StyledTableCell>
                  <StyledTableCell align="right">Description</StyledTableCell>
                  <StyledTableCell align="right">Price</StyledTableCell>
                  <StyledTableCell align="right">Rating</StyledTableCell>
                  <StyledTableCell align="right">Brand</StyledTableCell>
                  <StyledTableCell align="right">Category_id</StyledTableCell>
                  <StyledTableCell align="right">Edit</StyledTableCell>
                  <StyledTableCell align="right">Delete</StyledTableCell>
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
                    <StyledTableCell align="right">{row.category_id}</StyledTableCell>
                    <StyledTableCell align="right"><Button onClick={() => handleEditClick(row.name, row.quantity,
                       row.description,row.price,row.Marca)}>
                      <img src={editIcon} width="35" height="35"/></Button></StyledTableCell>
                    <StyledTableCell align="right"><Button onClick={()=>handleDeletedLogicClick(row.id,row.delet)}><img src={row.delet} width="35" height="35"/></Button></StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          ) : (
            <div>
              <DashEditProduct name={name} quantity={quantity} description={description} 
              price={price} Marca={brand} setIsCancel={setShowTable} setIsCancel2={setshowPaginated} />
            </div> 
          )}
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


