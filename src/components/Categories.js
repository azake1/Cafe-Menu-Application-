import React from "react";

const Categories = ({categoryList, setSelectedCategory}) => {
  return (
    <div className="btn-container">
      {categoryList.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>

        );
      })}
    </div>
  );
};

export default Categories;
