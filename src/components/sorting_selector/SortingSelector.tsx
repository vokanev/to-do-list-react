import React from "react";
import { Context } from "../../utils/context";
import { useContext } from "react";

interface ISortingSelector {
  onChange: (value: string) => void;
  value?: string;
}

const SortingSelector: React.FC<ISortingSelector> = ({ onChange, value }) => {
  const handleChangeSorting: React.ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    onChange(event.target.value);
  };

  return (
    <select onChange={handleChangeSorting} value={value}>
      <option value="NoSorting">No sorting</option>
      <option value="todoFirst">To do first</option>
      <option value="doneFirst">Done first</option>
      <option value="alphabetically">Alphabetically</option>
      <option value="reverseAlphabetically">Reverse alphabetically</option>
    </select>
  );
};

export default SortingSelector;
