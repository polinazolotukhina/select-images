import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectedImg from '../selectors/SelectedImg';

class SelectedImgList extends Component  {

  render() {
    const { dogs } = this.props;
    return (
      <div>
            {
            dogs.map((item, index) =>
                <div key={index} className="col-md-2">
                     <img className="dogImg" src={item}/>
                  </div>
              )
            }
      </div>
    );
  }
}
function mapStateToProps(state) {
    const { dogs } = state;
    return {
        dogs: SelectedImg(state)
    };
}

export default connect(
    mapStateToProps
)(SelectedImgList);
