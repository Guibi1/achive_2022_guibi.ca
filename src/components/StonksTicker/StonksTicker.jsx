import React, { Component } from 'react'
import { Helmet } from 'react-helmet'


class StonksTicker extends Component
{
    render ()
    {
        return (
            <div className="page">
                <Helmet><title>Stonks Ticker - Guibi.ca</title></Helmet>
                <div className="title">
                    <h1>Stonks Ticker</h1>
                    <h2>Stocks Ticker avec vos amis</h2>
                </div>

            </div>
        )
    }
}


export default StonksTicker