import React from 'react'
import { CatalogItem } from '../model/catalog-item';
import { CatalogListItem } from './CatalogListItem';

interface CatalogListProps {
    items: CatalogItem[]
}

export const CatalogList: React.FC<CatalogListProps> = (props) => {
    return (
        <div className="row" >
          {
            props.items.map((item) => {
                return <CatalogListItem item={item}  key={item.id}/>
            })
          }
        </div>
    )
}
