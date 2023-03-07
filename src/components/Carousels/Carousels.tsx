import React from "react";
import Carousel  from "react-material-ui-carousel";
import { easing, Paper} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { brands } from "../../assets/styles/Data.js";

interface Brand {
  src: string;
  alt: string;
}


const useStyles = makeStyles({
  circle: {
    width: "78px",
    height: "78px",
    borderRadius: "100%",
    border: "1px solid grey",
    backgroundColor: "#000",
    transition: "all ease-in .2s",
    "&:hover": {
      transform: "scale(0.9)"
    },
  },
  items: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
    gap: "10px",
    cursor: "pointer",
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

const Carousels: React.FC = () => {
  const classes = useStyles();

  const itemsByGroup: Brand[][] = brands.reduce((result: Brand[][], item: Brand, index: number) => {
    const groupIndex = Math.floor(index / 6);
    result[groupIndex] ??= [];
    result[groupIndex].push(item);
    return result;
  }, []);

  return (
    <div style={{ padding: "0" }}>
      <Carousel
        indicators={false}
        autoPlay={false}
        cycleNavigation={true}
        animation="fade"
        navButtonsAlwaysVisible={true}
        NextIcon={<ChevronRightIcon />}
        PrevIcon={<ChevronLeftIcon />}
      >
        {itemsByGroup.map((group: Brand[], index: number) => (
          <Paper key={index}>
            <div className={classes.items}>
              {group.map((item: Brand, i: number) => (
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
