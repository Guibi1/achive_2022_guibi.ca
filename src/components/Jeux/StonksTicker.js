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
                <Typography variant="h4" style={{marginBottom: "10px"}}>Stonks Ticker</Typography>
            </Container>
        )
    }
}


export default StonksTicker