import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Link, Typography } from "@mui/material";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#fff",
    color: "#999",
    fontFamily: "Proxima Nova,-apple-system,Roboto,Arial,sans-serif",
    padding: "2rem",
  },
  container: {
    margin: "0 auto",
    width: "100%",
  },
  nav: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    justifyContent: "space-between",
    gap: "1rem",
    padding: "2rem 0",
    flexWrap: "wrap",
  },
  navItem: {
    padding: "0px 3px",
    fontSize: "13px",
    fontFamily: "Proxima Nova,-apple-system,Roboto,Arial,sans-serif",
    color: "#333",
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <div>
      <Grid container justifyContent="center" className={classes.root}>
        <Grid container item xs={11} md={9} lg={7} className={classes.container}>
          <Grid container item justifyContent="space-between">
            <Grid item>
              <nav>
                <ul className={classes.nav}>
                  <li className={classes.navItem}>
                    <Link href="#" underline="hover" color="inherit">
                      Trabajá con nosotros
                    </Link>
                  </li>
                  <li className={classes.navItem}>
                    <Link href="#" underline="hover" color="inherit">
                      Términos y condiciones
                    </Link>
                  </li>
                  <li className={classes.navItem}>
                    <Link href="#" underline="hover" color="inherit">
                      Cómo cuidamos tu privacidad
                    </Link>
                  </li>
                  <li className={classes.navItem}>
                    <Link href="#" underline="hover" color="inherit">
                      Accesibilidad
                    </Link>
                  </li>
                  <li className={classes.navItem}>
                    <Link href="#" underline="hover" color="inherit">
                      Información al usuario financiero
                    </Link>
                  </li>
                  <li className={classes.navItem}>
                    <Link href="#" underline="hover" color="inherit">
                      Ayuda
                    </Link>
                  </li>
                  <li className={classes.navItem}>
                    <Link href="#" underline="hover" color="inherit">
                      Defensa del Consumidor
                    </Link>
                  </li>
                  <li className={classes.navItem}>
                    <Link href="#" underline="hover" color="inherit">
                      Información sobre seguros
                    </Link>
                  </li>
                </ul>
              </nav>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="caption">Copyright ©&nbsp;1999-2023 Mercado S.R.L.</Typography>
            <br />
            <Typography variant="caption">Av. Caseros 3039, Piso 2, CP 1264, Parque Patricios, CABA</Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
