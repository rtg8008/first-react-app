import React from 'react';

export default class SearchBar extends React.Component {
    render(){
        return this.searchBar(this.props);
    }

    searchBar(props){
      return (
        <div className="search-bar-container">
          <div className="search-bar">
            <h1 className='search'>Search For Drinks</h1>
            <form onSubmit = {this.onTrigger}>
                <input className='searched bar' type = "text"
                name = "drinksearch" placeholder = "Enter Ingredient"/>
                <input className='searched btn' type = "submit" value = "Submit"/>
            </form>
          </div>
        </div>
      );
    }
    onTrigger = (event) => {
        event.preventDefault();

        this.props.parentCallback(event.target.drinksearch.value)
    }
};