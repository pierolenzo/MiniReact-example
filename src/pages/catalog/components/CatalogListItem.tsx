import React from 'react'
import { MapQuest } from '../../../shared/MapQuest';
import { CatalogItem } from '../model/catalog-item';

interface CatalogListItemProps {
    item: CatalogItem;
}

export const CatalogListItem:React.FC<CatalogListItemProps> = ({ item }) => {

    const openMap = () => {
        window.open(`https://www.google.com/maps/place/${item.city}`);
    }
    
    return (
        <div className="col-sm-12">
          <MapQuest city={item.city} onClick={openMap}/>
          <h5>{item.title}</h5>
          <p>{item.address} - {item.city}</p>
        </div>
      );
}
