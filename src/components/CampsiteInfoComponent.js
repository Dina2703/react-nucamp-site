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

    renderComments(comments) {
        if(comments) {
            return (
                <div className="col-md-5 m-1" >
                <h4>Comments</h4>
                {comments.map(comment => {
                    return (
                        <div key={comment.id}>
                        <p>
                        {comment.text}
                        {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                        </p>
                        </div>
                    );
                }
                )}
                </div>
            );
        }
        return <div />;
    }

    render() { 
        if(this.props.campsite) {
            return (
                <div className="row">
                {this.renderCampsite(this.props.campsite)}
                {this.renderComments(this.props.campsite.comments)}
                </div>
            );
        }
        return <div></div>;
    }
}
 
export default CamsiteInfo;