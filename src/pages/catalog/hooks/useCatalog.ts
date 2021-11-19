import axios from "axios";
import { useState, useEffect } from "react";
import { CatalogItem } from "../model/catalog-item";

export function useCatalog() {
    const [catalog, setCatalog] = useState<CatalogItem[]>([]);

    useEffect(() => {
      axios.get<CatalogItem[]>("http://localhost:3001/catalog")
          .then((res) => setCatalog(res.data));
    }, []);

    return catalog
}