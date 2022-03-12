import React from "react";

const Categories = ({filterItems, categoryList}) => {
  return (
    <div className="btn-container">
      {categoryList.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
