import React, { Component } from 'react';

export default class DogList extends Component {

  render() {
    const { dogs } = this.props;
    return (
      <div>
            {
             dogs.data && dogs.data.data.message.map((item, index) =>
                <div key={index} className="col-md-2">
                     <img className="dogImg" src={item}/>
                  </div>
              )
            }
      </div>
    );
  }
}
