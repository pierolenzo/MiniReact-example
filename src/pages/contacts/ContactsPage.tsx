import React from 'react'
import { NavLink } from 'react-router-dom'
import { MapQuest } from '../../shared/MapQuest'

export const ContactsPage: React.FC  = () => {
    return (
        <div className="page">
            <div className="page-wrapper">
                <h2 className="title">Contacts Page</h2>

                <MapQuest city="Roma" 
                    width={300} 
                    height={200}
                    onClick={() => console.log('map link')}
                />

                <NavLink to="/">
                    <i className="fa fa-times close-button"/>
                </NavLink>
            </div>
        </div>
    )
}
