import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from '@material-ui/styles'
import CircularProgress from "@material-ui/core/CircularProgress"
import loadable from '@loadable/component'

import Theme from './Theme'
import './style.css'

const App = loadable(() => import('./App'))


ReactDOM.render(<BrowserRouter><ThemeProvider theme={Theme()}><App fallback={<CircularProgress color="secondary"/>}/></ThemeProvider></BrowserRouter>, document.getElementById("root"))