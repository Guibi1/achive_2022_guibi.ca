import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'


class StonksTicker extends Component
{
    render ()
    {
        return (
            <Container>
                <Helmet><title>Stonks Ticker - Guibi.ca</title></Helmet>
                <Typography variant="h3">Stonks Ticker</Typography>
                <Typography variant="h5" style={{marginBottom: "10px"}}>Stocks Ticker avec vos amis</Typography>
            </Container>
        )
    }
}


export default StonksTicker