import React from "react";
import OrderButton from "./orderBtn";

export const Menu = ({filteredData}) => {

  return (
    <div className="section-center">
      {filteredData.map((el, index) => {
        //const {id, title, img, desc, price} = el;
        return (
          <>
            <article key={index} className="menu-item">
              <img src={el.img} alt={el.title} className="photo" />
              <div className="item-info">
                <header>
                  <h4>{el.title}</h4>
                  <h4 className="price">{el.price}</h4>
                </header>
                <p className="item-text">{el.desc}</p>
              </div>
            </article>
            {<OrderButton />}
          </>
        );
///// doing some changes 
      })}

    </div>
  );
};

export default Menu;
