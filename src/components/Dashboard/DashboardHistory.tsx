import React, { useEffect } from "react";
import type { ReactElement } from "react"
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  fetchAllPaymentHistory,
  selectAllPaymentHistory,
} from "../../redux/features/paymentSlice";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
const useStyles = makeStyles({
  root: {
    backgroundColor: "#fff",
    padding: "1rem",
    borderRadius: "0.5rem",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  },
  listItem: {
    borderBottom: "1px solid #ccc",
  },
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
});

export function DashboardHistory(): ReactElement {
  const classes = useStyles();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isAdmind: boolean =
    isAuthenticated &&
    (user.email === process.env.REACT_APP_EMAIL_ADMIN_1 ||
      user.email === process.env.REACT_APP_EMAIL_ADMIN_2);
  if (!isAdmind) navigate("/");

  useEffect(() => {
    dispatch(fetchAllPaymentHistory());
  }, [dispatch]);

  const paymentHistory: any = useAppSelector(selectAllPaymentHistory);

  return (
    <div className={classes.root}>
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
          History
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
      <List>
        {paymentHistory.data &&
          paymentHistory.data.map((payment: any) => (
            <ListItem key={payment.id} className={classes.listItem}>
              <ListItemText
                primary={payment.title}
                secondary={` Quantity: ${payment.quantity} Amount: $${payment.amount} Created at: ${payment.createdAt} User: ${payment.user} ID: ${payment.id} `}
              />
            </ListItem>
          ))}
      </List>
    </div>
  );
}
