import React, {Component} from 'react';

class Navbar extends Component {
    static defaultProps = {
        title: "Github Finder",
        icon: "fab fa-github"
    };


    render() {
        return (
            <div>
                <h1>
                    <i className={this.props.icon}/> {this.props.title}
                </h1>
            </div>
        );
    }
}

export default Navbar;
