import React from "react";
import Typography from "@mui/material/Typography";
import type { ReactElement } from "react"
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import HomeIcon from "@mui/icons-material/Home";

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

export function Dashboard(): ReactElement {
  const classes = useStyles();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  const isAdmind: boolean =
    isAuthenticated && user.email === "galarzaguillermo.ggm@gmail.com";
  if (!isAdmind) navigate("/");

  const squareStyles = {
    height: "150px",
    width: "100%",
    borderRadius: "5px",
    backgroundColor: "rgba(250,250,250,1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "box-shadow 0.1s ease-in-out",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
    cursor: "pointer",
    margin: "10px",
  };

  const squareHoverStyles = {
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
  };

  const handleMouseEnter = (event: any) => {
    event.currentTarget.style.boxShadow = squareHoverStyles.boxShadow;
  };

  const handleMouseLeave = (event: any) => {
    event.currentTarget.style.backgroundColor = squareStyles.backgroundColor;
    event.currentTarget.style.boxShadow = squareStyles.boxShadow;
  };

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
              Dashboard
            </Typography>

            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ color: "white" }}
            >
              Admind: {user.given_name}
            </Typography>
          </div>
          <Box className={classes.Box}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4} md={3}>
                <Typography
                  variant="h6"
                  style={squareStyles}
                  color="#1976d2"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  Products
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
                <Typography
                  variant="h6"
                  style={squareStyles}
                  color="#1976d2"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  Categories
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
                <Typography
                  variant="h6"
                  color="#1976d2"
                  style={squareStyles}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  History
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
                <Typography
                  variant="h6"
                  style={squareStyles}
                  color="#1976d2"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  Offers
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </div>
      )}
    </div>
  );
}
