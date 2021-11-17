import React from 'react';

const API = 'https://www.mapquestapi.com/staticmap/v5/map';
const API_KEY = 'VmLVGHY4OMrpTb057f4P2aul4dPQiiXd&center'

interface MapQuestProps {
    city: string;
}

export const MapQuest: React.FC<MapQuestProps & React.ImgHTMLAttributes<HTMLImageElement>> = ({ 
    city,
    width,
    height,
    alt,
    ...rest
}) => {
    
    const url = `${API}?&size=${width},${height}&key=${API_KEY}=${city}`
    
    return <img width="100%" src={url} alt="{}" {...rest}/>
    
}