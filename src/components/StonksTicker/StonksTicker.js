import React, { Component } from 'react'
import { Helmet } from 'react-helmet'


class StonksTicker extends Component
{
    render ()
    {
        return (
            <div class="page">
                <Helmet><title>Stonks Ticker - Guibi.ca</title></Helmet>
                <h1>Stonks Ticker</h1>
                <h2>Stocks Ticker avec vos amis</h2>
            </div>
        )
    }
}


export default StonksTicker