import React from 'react';

type ProductsProps = {
    value: number;
    data?: string;
}

export const Products: React.FC<ProductsProps> = (props) => {
    return <div>{props.value} Products</div>
}