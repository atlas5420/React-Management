import React from 'react';

class Customer extends React.Component {
    render() {
        return (
            <div class="container">
                <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name} />
                <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}></CustomerInfo>
            </div>
        );
    }
}

class CustomerProfile extends React.Component {
    render() {
        return (
            <div class="container">
                <p>test</p>
                <img src={this.props.image} alt="profile"></img>
                <p>{this.props.name}({this.props.id})</p>
            </div>
        )
    }
}

class CustomerInfo extends React.Component {
    render() {
        return (
            <div class="container">
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}

export default Customer;