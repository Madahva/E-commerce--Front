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
import addIcon from "../../assets/Icons/add.jpg";
import deleteIcon from "../../assets/Icons/delete.jpg";
import { Category } from "../../types";
import { useAppSelector } from "../../redux/hooks";
import { selectCategory  } from "../../redux/features/categorySlice";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { DashEditCategory } from "../DashEditCategory/DashEditCategory";
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

export function DashBoardCategories(): ReactElement {
  const classes = useStyles();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  const isAdmind: boolean =
    isAuthenticated &&
    (user.email === process.env.REACT_APP_EMAIL_ADMIN_1 ||
      user.email === process.env.REACT_APP_EMAIL_ADMIN_2);

  if (!isAdmind) navigate("/");

  const [showTable, setShowTable] = useState(true);
  const [showPaginated, setshowPaginated] = useState(true);
  const [id, setID] = useState("");
  const [typecategory, setTypeCategory] = useState("");

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const categoryDetaild: Category[] = useAppSelector(selectCategory);
  console.log(categoryDetaild)


  function createData(id: number, typecategory: string, edit: string, add: string, delet: string) {
    return { id, typecategory, edit, add, delet};
  }
  
  const rows = categoryDetaild.map((category) =>
  createData(category.id, category.typecategory, "", "", "")
  );
  console.log(rows);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const indexOfLastCategory = (page + 1) * rowsPerPage;
  const indexOfFirstCategory = indexOfLastCategory - rowsPerPage;
  const currentCategory = rows.slice(indexOfFirstCategory, indexOfLastCategory);


  const handleEditClick = (id: any, typecategory: string) => {
    setShowTable(false);
    setshowPaginated(false)
    setID(id)
    setTypeCategory(typecategory);
  }
  const handleCreateClick = () => {
    navigate("/dashboard-create-category")
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
              Categories Dashboard
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
          <TableContainer component={Paper} style={{ width: '90%', margin: '3%', maxHeight: '150vh' }}>
            <Table aria-label="customized table" >
                <TableHead >
                <TableRow>
                  <StyledTableCell style={{color: 'white' , width: '33%',textAlign: 'center'}}>ID</StyledTableCell>
                  <StyledTableCell style={{color: 'white', width: '33%', textAlign: 'center'}} align="right">Name</StyledTableCell>
                  <StyledTableCell style={{color: 'white', width: '33%', textAlign: 'center'}} align="right">Edit</StyledTableCell>
                  {/* <StyledTableCell align="right">Status</StyledTableCell> */}
                </TableRow>
                </TableHead>
              <TableBody>
                {currentCategory.map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell style={{textAlign: 'center'}} component="th" scope="row">
                    {row.id}
                    </StyledTableCell>
                    <StyledTableCell style={{textAlign: 'center'}} align="right">{row.typecategory}</StyledTableCell>
                    <StyledTableCell style={{textAlign: 'center'}} align="right"><Button onClick={() => handleEditClick(row.id,row.typecategory)}>
                      <img src={editIcon} width="35" height="35"/></Button></StyledTableCell>
                    {/* <StyledTableCell align="right"><Button><img src={deleteIcon} width="35" height="35"/></Button></StyledTableCell> */}
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          ) : (
            <div>
              <DashEditCategory id={id} typecategory={typecategory} setIsCancel={setShowTable} setIsCancel2={setshowPaginated} />
            </div> 
          )}
          {showPaginated? (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            {/* <Button variant="contained" color="primary" onClick={() => handleCreateClick()}>Create new category</Button> */}
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

