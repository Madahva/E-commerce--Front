import React, { ChangeEvent } from "react";
import { makeStyles } from "@mui/styles";
type FilterOption = "mostRelevant" | "lowerPrice" | "higherPrice";

interface Props {
  value: string;
  onChange: (value: FilterOption) => void;
}

const useStyles = makeStyles((theme) => ({
  selectContainer: {
    position: "relative",
    margin: "0 auto",
    width: "100%",
    maxWidth: 200,
    borderRadius: 4,
    overflow: "hidden",
    backgroundColor: "#fff",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
    "&:before": {
      content: '"\\25bc"',
      position: "absolute",
      top: "50%",
      right: 10,
      transform: "translateY(-50%)",
      fontSize: 16,
      pointerEvents: "none",
      color: "#555",
    },
  },
  select: {
    width: "100%",
    height: 40,
    padding: "0 10px",
    fontSize: 16,
    border: "none",
    borderRadius: 4,
    appearance: "none",
    backgroundColor: "transparent",
    color: "#555",
    outline: "none",
    "&:hover": {
      cursor: "pointer",
    },
    "&:focus": {
      boxShadow: "0 0 3px #ddd",
    },
  },
}));

const FilterSelect: React.FC<Props> = ({ value, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as FilterOption);
  };

  const classes = useStyles();

  return (
    <div className={classes.selectContainer}>
      <select className={classes.select} value={value} onChange={handleChange}>
        <option value="mostRelevant">Most Relevant</option>
        <option value="lowerPrice">Lower Price</option>
        <option value="higherPrice">Higher Price</option>
      </select>
    </div>
  );
};

export default FilterSelect;
