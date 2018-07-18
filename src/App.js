import React, { PureComponent } from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

import CssBaseline from 'material-ui/CssBaseline'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import 'app.css'

// Custom styles
const styles = {
  '@global': {
    img: {
      maxWidth: '100%',
    },
  },
  appBar: {
    flexWrap: 'wrap',
  },
  tabs: {
    width: '100%',
  },
  content: {
    padding: '1rem',
  },
}

class App extends PureComponent {
  // Remove the server-side injected CSS.
  componentDidMount () {
    const jssStyles = document.getElementById('jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render () {
    const { classes } = this.props

    return (
      <Router>
        <div className={classes.container} id="top">
          <CssBaseline />
          <AppBar className={classes.appBar} color="default" position="static">
            <nav>
              <Tabs className={classes.tabs} value={false}>
                <Tab component={Link} to="/" label="Home" />
                <Tab component={Link} to="/about" label="About" />
                <Tab component={Link} to="/services" label="Services" />
                <Tab component={Link} to="/contact" label="Contact" />
              </Tabs>
            </nav>
          </AppBar>
          <div className={classes.content}>
            <Routes />
          </div>
        </div>
      </Router>
    )
  }
}

const AppWithStyles = withStyles(styles)(App)

export default hot(module)(AppWithStyles)
