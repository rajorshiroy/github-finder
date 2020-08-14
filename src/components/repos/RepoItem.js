import React, {Component} from 'react';

class RepoItem extends Component {
    render() {
        const {repo} = this.props;
        return (
            <div className='card'>
                <h5><a href={repo.html_url} target='_blank' rel="noopener noreferrer">{repo.name}</a></h5>
            </div>
        );
    }
}

export default RepoItem;
