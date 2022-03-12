import React from "react";
import { Button } from "@mui/material"
import { useState } from "react"

const Menu = ({ items }) => {
  const [count, setCount] = useState(1)
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">₹{Math.floor(price) * 10}</h4>
              </header>
              <p className="item-text">{desc}</p>
              <div>
                <Button>-</Button>
                <span>{count}</span>
                <Button>+</Button>
                <Button
                  variant="outlined"
                  sx={{
                    width: 140,
                    height: 25,
                    borderRadius: 4
                  }}
                >Order</Button>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
