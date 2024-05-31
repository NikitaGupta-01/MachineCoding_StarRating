import { useEffect, useState } from "react";
import { StarDiv, StarRatingDiv } from "./starRating.styled";

const StarRating = ({ totalStars = 5 }) => {
  const [hover, setHover] = useState("");
  const [rating, setRating] = useState("");
  useEffect(() => {
    console.log("rating===>", rating);
    console.log("hover===>", hover);
  }, [rating, hover]);
  return (
    <StarRatingDiv>
      {[...Array(totalStars)].map((star, index) => {
        const starValue = index + 1;
        return (
          <StarDiv
            key={index}
            className={starValue <= (hover || rating) ? "star filled" : "star"}
            onClick={() => setRating(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
            tabIndex={0}
            role="radio"
            aria-checked={starValue === rating}
            onKeyDown={(e) => {
              if (e.key === "Enter") setRating(starValue);
            }}
          >
            &#9733;
          </StarDiv>
        );
      })}
    </StarRatingDiv>
  );
};

export default StarRating;
