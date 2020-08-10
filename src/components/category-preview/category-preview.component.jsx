import React from "react";

const CategoryPreview = (props) => {
  const { id, title, entries } = props;

  return (
    <div key={id}>
      {title}
      {entries
        .filter((entry, index) => index < 3)
        .map((entry) => (
          <div key={entry.id}>{entry.title}</div>
        ))}
    </div>
  );
};

export default CategoryPreview;
