import React, { Component } from 'react';
import './App.css';

import { Provider, Translate, Translator } from 'react-translated';
import translation from './translation';

class App extends Component {
  render() {
    return (
      <Provider language="es" translation={translation}>
        <div className="App">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12">
                <h2>KIDA Form Designer</h2>
              </div>
              <div class="col-lg-4 col-md-12 col-sm-12">
                <Translate text='Formulario' />
                <div></div>
              </div>
              <div class="col-lg-5 col-md-7 col-sm-12">
                <Translate text='Agregar elemento' />
                <div></div>
              </div>
              <div class="col-lg-3 col-md-5 col-sm-12">
                <Translate text='Propiedades' />
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
