import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

class Navbar extends Component {
    static defaultProps = {
        title: 'Github Finder',
        icon: 'fab fa-github'
    };
    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }

    render() {
        return (
            <div className='navbar bg-primary'>
                <h4>
                    <i className={this.props.icon}/> {this.props.title}
                </h4>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='about'>About</Link></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;
