import React, {Component, Fragment} from 'react';
import Spinner from "../layout/Spinner";
import {Link} from "react-router-dom";

class User extends Component {
    componentDidMount() {
        const userName = this.props.match.params.login;
        console.log('username:' + userName);
        this.props.getUser(userName);
    };

    render() {
        const {
            name, company, avatar_url, location, bio, blog, login, html_url, followers,
            following, public_repos, public_gists, hireable
        } = this.props.user;

        if (this.props.loading) return <Spinner/>
        else return <Fragment>
            <Link to='/' className='btn btn-light'>
                <i className="fa fa-long-arrow-left"/>
            </Link>
            <div>
                Hireable: {' '}
                <i className={hireable ? 'fas fa-check text-success' : 'fas fa-times-circle text-danger'}/>
            </div>
            <div className="card grid-2">
                <div className="all-center">
                    <img src={avatar_url} alt="Avatar" className='round-img' style={{width: '150px'}}/>
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                </div>
                <div>
                    {bio && <Fragment>
                        <h3>Bio</h3>
                        <p>{bio}</p>
                    </Fragment>}
                    <a href={html_url} target='_blank' className='btn btn-dark m-1'>Visit Github Profile</a>
                    <ul>
                        <li>{login && <Fragment> <strong>Username: </strong> {login}</Fragment>}</li>
                        <li>{company && <Fragment> <strong>Company: </strong> {company}</Fragment>}</li>
                        <li>{blog && <Fragment> <strong>Website: </strong> {blog}</Fragment>}</li>
                    </ul>
                </div>
            </div>
            <div className="card text-center">
                <div className="badge badge-primary">Followers: {followers}</div>
                <div className="badge badge-success">Following: {following}</div>
                <div className="badge badge-light">Public Repos: {public_repos}</div>
                <div className="badge badge-dark">Public Gists: {public_gists}</div>
            </div>
        </Fragment>;
    }
}

export default User;
