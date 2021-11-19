import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { MapQuest } from "../../shared/MapQuest";
import { CatalogList } from "./components/CatalogList";
import { CatalogItem } from "./model/catalog-item";

export const CatalogPage: React.FC = () => {
  const [catalog, setCatalog] = useState<CatalogItem[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3001/catalog")
        .then((res) => setCatalog(res.data));
  }, []);

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
