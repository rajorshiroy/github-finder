import React, {Component} from 'react';
import RepoItem from "./RepoItem";


class Repos extends Component {
    render() {
        const {repos} = this.props;
        return repos.map(repo => (
            <RepoItem repo={repo} key={repo.id}/>
        ));
    }
}

export default Repos;
