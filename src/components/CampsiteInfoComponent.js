import React, { Component } from 'react';

class CamsiteInfo extends Component {
    render() { 
        if(this.props.campsite) {
            return <div className="row"></div>;
        }
        return <div></div>;
    }
}
 
export default CamsiteInfo;