import React from "react";
function Rating(props) {
  return !props.value ? (
    <div> </div>
  ) : (
    <div className="rating">
      <span>
        <i
          className={
            props.value >= 1
              ? "fa fa-star"
              : props.value >= 0.5
              ? "fa fa-star-half-o"
              : "fa fa-star-o"
          }
        ></i>
      </span>

      <span>{props.text ? props.text : ""}</span>
    </div>
  );
}

export default Rating;
