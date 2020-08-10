import React, {Component} from 'react';

class Search extends Component {
    state = {
        text: '',
        clearButtonVisible: false
    }

    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    onSubmit = (event) => {
        event.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert('Please add a search term first', 'light');
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({text: '', clearButtonVisible: true});
        }
    }

    getClearButton = () => {
        if (this.state.clearButtonVisible)
            return <button className="btn btn-light btn-block" onClick={this.clearSearch}>Clear</button>
    }

    clearSearch = async () => {
        await this.props.clearUsers();
        this.setState({clearButtonVisible: false})
    }

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input type="text" name="text" placeholder='search users' value={this.state.text}
                           onChange={this.onChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                {this.getClearButton()}
            </div>
        );
    }
}

export default Search;
