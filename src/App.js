import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from 'axios'
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "./components/pages/About";
import User from "./components/users/User";

class App extends Component {
    state = {
        users: [],
        user: {},
        repos: [],
        loading: false,
        alert: null
    }

    componentDidMount = async () => {
        await this.getDefaultUsers();
    };

    getDefaultUsers = async () => {
        this.setState({loading: true});
        const apiUrl = 'https://api.github.com/users?' +
            `client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&` +
            `client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
        const response = await axios.get(apiUrl);
        this.setState({users: response.data, loading: false});
    };

    searchUsers = async (searchQuery) => {
        console.log(searchQuery);
        this.setState({loading: true});

        const apiUrl = 'https://api.github.com/search/users?' +
            `q=${searchQuery}&` +
            `client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&` +
            `client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;

        const response = await axios.get(apiUrl);
        this.setState({users: response.data.items, loading: false});
    };

    getUser = async (userName) => {
        this.setState({loading: true});

        const apiUrl = 'https://api.github.com/users/' +
            `${userName}?` +
            `client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&` +
            `client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;

        const response = await axios.get(apiUrl);
        this.setState({user: response.data, loading: false});
    };

    getUserRepos = async (userName) => {
        this.setState({loading: true});

        const apiUrl = 'https://api.github.com/users/' +
            `${userName}/repos?per_page=5&sort=created:asc&` +
            `client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&` +
            `client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;

        const response = await axios.get(apiUrl);
        this.setState({repos: response.data, loading: false});
    }

    clearUsers = async () => {
        await this.getDefaultUsers()
    }

    setAlert = async (msg, type) => {
        this.setState({alert: {msg, type}});
        setTimeout(() => this.setState({alert: null}), 2000)
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar/>
                    <div className="container">
                        <Alert alert={this.state.alert}/>
                        <Switch>
                            <Route exact path='/' render={props => (
                                <div>
                                    <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers}
                                            setAlert={this.setAlert}/>
                                    <Users loading={this.state.loading} users={this.state.users}/>
                                </div>
                            )}/>
                            <Route exact path='/about' component={About}/>
                            <Route exact path='/user/:login' render={props => (
                                <User
                                    {...props}
                                    getUser={this.getUser}
                                    getUserRepos={this.getUserRepos}
                                    user={this.state.user}
                                    repos={this.state.repos}
                                    loading={this.state.loading}
                                />
                            )}/>
                        </Switch>
                    </div>

                </div>
            </Router>
        );
    }
}

export default App;
