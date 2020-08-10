import React from "react";
import { Link } from "react-router-dom";

const Teaser = (props) => {
  const { title, imageUrl, url } = props;
  return (
    <div>
      <span>{title}</span>
      <img src={imageUrl} alt={title} />
      <Link to={`${url}`}>Show more</Link>
    </div>
  );
};

export default Teaser;
