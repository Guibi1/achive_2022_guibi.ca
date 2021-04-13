import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Container from '@material-ui/core/Container'


class StonksTicker extends Component
{
    render ()
    {
        return (
            <Container>
                <Helmet><title>Stonks Ticker - Guibi.ca</title></Helmet>
            </Container>
        )
    }
}


export default StonksTicker