import React, { ChangeEvent } from "react";

type FilterOption = "mostRelevant" | "lowerPrice" | "higherPrice";

interface Props {
  value: string;
  onChange: (value: FilterOption) => void;
}

const FilterSelect: React.FC<Props> = ({ value, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as FilterOption);
  };

  return (
    <select value={value} onChange={handleChange}>
      <option value="mostRelevant">Most Relevant</option>
      <option value="lowerPrice">Lower Price</option>
      <option value="higherPrice">Higher Price</option>
    </select>
  );
};

export default FilterSelect;
