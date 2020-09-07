import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function StarRatings({ rating = 0, max = 5 }) {
  let stars: any[] = [];

  for (let i: number = 0; i < max; ++i) {
    if (i + 1 <= rating) {
      stars.push(<FaStar key={i} />);
    } else if (i < rating) {
      stars.push(<FaStarHalfAlt key={i} />);
    } else {
      stars.push(<FaRegStar key={i} />);
    }
  }

  return <span className="star-ratings">{stars}</span>;
}

export default StarRatings;
