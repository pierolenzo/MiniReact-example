import React from "react";
import { NavLink } from "react-router-dom";
import { CatalogList } from "./components/CatalogList";
import { useCatalog } from "./hooks/useCatalog";

export const CatalogPage: React.FC = () => {

  const catalog = useCatalog();

  return (
    <div className="page">
      <div className="page-wrapper">
        <h2 className="title">Catalog Page</h2>

        <CatalogList items={catalog}/>

        <NavLink to="/">
          <i className="fa fa-times close-button" />
        </NavLink>
      </div>
    </div>
  );
};
