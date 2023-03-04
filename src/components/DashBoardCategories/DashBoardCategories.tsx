import React from "react";
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

export function DashBoardCategories(): ReactElement {
  const classes = useStyles();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  const isAdmind: boolean =
    isAuthenticated && user.email === "stiwarsg11@gmail.com";
  if (!isAdmind) navigate("/");

  const categoryDetaild: Category[] = useAppSelector(selectCategory);
  console.log(categoryDetaild)


  function createData(id: number, name: string, edit: string, add: string, delet: string) {
    return { id, name, edit, add, delet};
  }
  
  const rows = categoryDetaild.map((category) =>
  createData(category.id, category.typecategory, "", "", "")
  );
  console.log(rows);
  
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
          <TableContainer component={Paper} style={{ width: '90%', margin: '3%', maxHeight: '150vh' }}>
            <Table aria-label="customized table">
                <TableHead>
                <TableRow>
                  <StyledTableCell>ID</StyledTableCell>
                  <StyledTableCell align="right">Name</StyledTableCell>
                  <StyledTableCell align="right">Edit</StyledTableCell>
                  <StyledTableCell align="right">Add</StyledTableCell>
                  <StyledTableCell align="right">Delete</StyledTableCell>
                </TableRow>
                </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">
                    {row.id}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.name}</StyledTableCell>
                    <StyledTableCell align="right"><Button><img src={editIcon} width="35" height="35"/></Button></StyledTableCell>
                    <StyledTableCell align="right"><Button><img src={addIcon} width="35" height="35"/></Button></StyledTableCell>
                    <StyledTableCell align="right"><Button><img src={deleteIcon} width="35" height="35"/></Button></StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}

    </div>
    
  );
}

