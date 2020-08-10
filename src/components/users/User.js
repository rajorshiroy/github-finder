import React, {Component} from 'react';
import Spinner from "../layout/Spinner";

class User extends Component {
    componentDidMount() {
        const userName = this.props.match.params.login;
        console.log('username:' + userName);
        this.props.getUser(userName);
    };

    render() {
        const {
            name, avatar_url, location, bio, blog, login, html_url, followers,
            following, public_repos, public_gists, hirable
        } = this.props.user;

        if (this.props.loading)
            return <Spinner/>
        else {

            return (
                <div>
                    {name}
                </div>
            );
        }

    }
}

export default User;
