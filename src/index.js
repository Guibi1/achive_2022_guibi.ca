import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'

import Theme from './Theme'
import './style.css'

import App from './App'


ReactDOM.render(<BrowserRouter><ThemeProvider theme={Theme()}><App/></ThemeProvider></BrowserRouter>, document.getElementById("root"))