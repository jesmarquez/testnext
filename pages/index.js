import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Link from 'next/link'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Layout from '../components/layout.js';
import FlatButton from 'material-ui/FlatButton';
import Stepper from '../components/stepper';
import Page from '../components/page'

export default class extends Page {

  render() {
    const muiTheme = getMuiTheme({
      userAgent: this.props.userAgent,
      });
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Layout>
          <div className="row">
            <div className="col s4"></div>
            <div className="col s4">
              <h1>Jobby</h1>
            </div>
            <div className="col s4"></div>       
          </div>
          <div className="divider"></div>
          <div className="section">
            <h5>Gestión!</h5>
            <p>une empresa, universidad y practicantes!...</p>
            <Stepper />
          </div>
          <div className="divider"></div>
          <div className="section">
            <h5>Ingresa!</h5>
            <p>ingresa a jobby seas empresa, practicantes o coordinador!...</p>
            <Link href="/login">
              <a className="waves-effect waves-light btn">Login!</a>
            </Link>
          </div>          
        </Layout>
      </MuiThemeProvider>
   )
  }
}
