import React, { Component } from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody } from 'reactstrap';


class CamsiteInfo extends Component {
    renderCampsite(camsite) {
        return (
            <div className="col-md-5 m-1" >
            <Card>
                <CardImg top src={this.props.campsite.image} alt={this.props.campsite.name} />
                <CardBody>
                    <CardTitle>{this.props.campsite.name}</CardTitle>
                    <CardText>{this.props.campsite.description}</CardText>
                </CardBody>
            </Card>
        </div>
        );
    }

    render() { 
        if(this.props.campsite) {
            return <div className="row">
                {this.renderCampsite(this.props.campsite)}
            </div>;
        }
        return <div></div>;
    }
}
 
export default CamsiteInfo;