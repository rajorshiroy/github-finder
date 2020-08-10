import React, {Component} from 'react';


class Alert extends Component {
    render() {
        return (
            this.props.alert !== null && (
                <div className={`alert alert-${this.props.alert.type}`}>
                    <i className="fas fa-info-circle"/>
                    <span style={{marginLeft: '20px'}}>{this.props.alert.msg}</span>
                </div>
            )
        );
    }
}

export default Alert;
