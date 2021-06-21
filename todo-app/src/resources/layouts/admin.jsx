import React from 'react';
import Header from '../components/header';
export default ({children }) => {
    console.log('render Layout Admin')
    return (
        <div className="container">
            <br></br>
            <Header/>
            {children}
        </div>
    )
}
