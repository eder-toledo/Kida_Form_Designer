import React, { Component } from 'react';
import { Provider, Translate, Translator } from 'react-translated';
import translation from './translation';

import './App.css';

//Components
import MenuElementsList from './components/MenuElementsList'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      elements: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(response => {return response.json();})
    .then(data => {
      /*let elements = data.map((element) => {
        return(
          <li>{element.title} - {element.body}</li>
        )
      });*/

      this.setState({elements: data});
    })
  }

  render() {
    return (
      <Provider language="es" translation={translation}>
        <div className="App">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h2>KIDA Form Designer</h2>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <Translate text='Formulario' />
                <MenuElementsList elements={this.state.elements} />
              </div>
              <div className="col-lg-5 col-md-7 col-sm-12">
                <Translate text='Agregar elemento' />
              </div>
              <div className="col-lg-3 col-md-5 col-sm-12">
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
