import React from "react";
import Carousel from "react-material-ui-carousel";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { brands } from "../../assets/styles/Data.js";

/* console.log(brands);

const items = [
  { image: "https://via.placeholder.com/60x60" },
  { image: "https://via.placeholder.com/60x60" },
  { image: "https://via.placeholder.com/60x60" },
  { image: "https://via.placeholder.com/60x60" },
  { image: "https://via.placeholder.com/60x60" },
  { image: "https://via.placeholder.com/60x60" },
  { image: "https://via.placeholder.com/60x60" },
  { image: "https://via.placeholder.com/60x60" },
  { image: "https://via.placeholder.com/60x60" },
]; */
const useStyles = makeStyles({
  circle: {
    width: "80px",
    height: "80px",
    borderRadius: "40px",
    backgroundColor: "#000",
  },
  items: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  carouselButton: {
    position: "absolute",
    top: "calc(50% - 20px)",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 1,
    transition: "opacity 0.2s",
    "&:hover": {
      opacity: 0.8,
    },
  },
});

const Carousels = () => {
  const classes = useStyles();

  const itemsByGroup = brands.reduce((result, item, index) => {
    const groupIndex = Math.floor(index / 6);
    result[groupIndex] ??= [];
    result[groupIndex].push(item);
    return result;
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <Carousel
        indicators={false}
        autoPlay={false}
        cycleNavigation={true}
        animation="slide"
        navButtonsAlwaysVisible={true}
        slidesPerPage={1}
        NextIcon={<ChevronRightIcon />}
        PrevIcon={<ChevronLeftIcon />}
      >
        {itemsByGroup.map((group, index) => (
          <Paper className={classes.paper} key={index}>
            <div className={classes.items}>
              {group.map((item, i) => (
                <img key={i} src={item.src} alt={item.alt} className={classes.circle} />
              ))}
            </div>
          </Paper>
        ))}
      </Carousel>
    </div>
  );
};

export default Carousels;
