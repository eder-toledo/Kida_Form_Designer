import React, { Component } from 'react';

class MenuElementsList extends Component{

  render(){

    return(
        <div className="row">
          {this.props.elements.map(item => (
            <button className="btn btn-primary">
              <i className=""></i>
              {item.title}
            </button>
        ))}
        </div>
    )
  }
}

export default MenuElementsList;
