import React from "react";

const CategoryEntry = (props) => {
  const { name, description, type } = props;

  return (
    <div>
      <span>{name}</span>
      <span>{description}</span>
      <span>{type}</span>
    </div>
  );
};

export default CategoryEntry;
