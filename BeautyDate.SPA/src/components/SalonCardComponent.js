import React, { Component } from 'react';

class SalonCardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: ""
        }
    }
    componentDidMount() {
        var locId = this.props.location;
        console.log(locId)

        fetch(`http://localhost:3001/location/${locId}`)
            .then(Response => Response.json())
            .then(singleLocation => this.setState({ location: singleLocation.location }))
    }
    render() {
        return (
            <div className="col-md-3 p-2">
                <div className="card">
                    <div className="card-salon-info">
                        <h1 className="card-title">{this.props.name}</h1>
                        <p className="card-description">Shërbimet: {this.props.description}</p>
                    </div>
                    <div className="card-salon-location">
                        <span className="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                        <p className="card-salon-address"><strong>{this.state.location}</strong></p>

                    </div>
                </div >

            </div>
        );
    }
}
export default SalonCardComponent;