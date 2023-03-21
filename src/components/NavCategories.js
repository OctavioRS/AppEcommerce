import React from "react";
import { NavLink } from "react-router-dom";

const NavCategories = () => {
  const categories = [
    { id: 1, name: "Madera", route: "/category/madera" },
    { id: 2, name: "Metal", route: "/category/metal" },
    { id: 3, name: "Pintura", route: "/category/pintura" },
  ];
  return (
    <>
      <div>
        {categories.map((categories) => (
          <NavLink key={categories.id} to={categories.route}>
            {categories.name}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default NavCategories;
