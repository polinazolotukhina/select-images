import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../actions/actions';
import { RaisedButton } from 'material-ui';
import DogList from '../components/DogList';
import SelectedImgList from '../components/SelectedImgList';


class Home extends React.Component {
    componentWillMount() {
        this.props.actions.fetchDogs();
    }
    render() {

        const { dogs, actions } = this.props;
        return (
            <div>
                <div className="row">
                    <h2>Selected photos</h2>
                    <SelectedImgList/>
                </div>
                <hr />
                <div className="row">
                    <h2>Dogs photos</h2>
                        <div>
                              {
                               dogs.data && dogs.data.data.message.map((item, index) =>
                                  <div key={index} className="col-md-2">
                                       <img className="dogImg" src={item} onClick={() => { actions.selectImg(index); }} />
                                    </div>
                                )
                              }
                        </div>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    actions: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
    const { dogs } = state;
    return {
        dogs
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
