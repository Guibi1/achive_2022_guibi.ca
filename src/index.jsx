import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'

import App from './App'
import Theme from './Theme'

import './processedIndex.css'


ReactDOM.render(<BrowserRouter><ThemeProvider theme={Theme()}><App/></ThemeProvider></BrowserRouter>, document.getElementById("root"))