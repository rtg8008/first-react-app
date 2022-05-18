import DefaultList from './components/DefaultList';
import FavoritesList from './components/FavoritesList';
import SearchBar from './components/SearchBar';
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      defaultDrinks: [],
      favoriteDrinks: [],
      leftTitle: 'Default Drinks',
      displayFavoriteDrinks: false
    }
    this.addDrinkToFavoritesList = this.addDrinkToFavoritesList.bind(this);
    this.removeDrinkToFavoritesList = this.removeDrinkToFavoritesList.bind(this);
    this.updateDefaultDrinks = this.updateDefaultDrinks.bind(this);
    // this.toggleFavoriteList = this.toggleFavoriteList.bind(this);

  }

  //http://localhost:3001/search/{Your ingredient search query here}

  componentDidMount(){
    fetch('http://localhost:3001/')
    .then(res => res.json())
    .then(data => {
        this.setState({
          defaultDrinks: data.drinks
        })
    })
    .catch(err => {
      console.log(err);
    })

  }
  render(){
      return(
        <div className='container'>
          <SearchBar parentCallback={this.updateDefaultDrinks}/>
          <div className='grid-container' id='drinks-container'>
            <DefaultList drinks={this.state.defaultDrinks} title={this.state.leftTitle} parentCallback={this.addDrinkToFavoritesList}/>
            <FavoritesList drinks={this.state.favoriteDrinks} parentCallback={this.removeDrinkToFavoritesList}/>
          </div>
        </div>
      )
  }
  toggleFavoriteList(isDisplay)
  {
    let drinksContatiner = document.getElementByID(`drinks-container`)
    let listItems = document.getElementByID('ulList')

    if (isDisplay)
    {
      drinksContatiner.classList.add('grid-container-fav-false')
      drinksContatiner.classList.remove('grid-container-fav-true')
      listItems.classList.add('ul-fav-false')
      listItems.classList.remove('ul-fav-true')
    }else
    {
      drinksContatiner.classList.add('grid-container-fav-true')
      drinksContatiner.classList.remove('grid-container-fav-false')
      listItems.classList.add('ul-fav-true')
      listItems.classList.remove('ul-fav-false')
    }

  }
  updateDefaultDrinks(text){

    if(text === '')
    {
      this.componentDidMount();
      this.setState({
        leftTitle: `Default Drinks`
      })
    }
    else{
      fetch(`http://localhost:3001/search/${text}`)
      .then(res => res.json())
      .then(data => {
          this.setState({
            defaultDrinks: data.drinks,
            leftTitle: `Drinks with: ${text}`
          })
      })
      .catch(err => {
        this.setState({
          defaultDrinks: [],
          leftTitle: `No Drinks with: ${text}`
        })
      })
    }
  }

  addDrinkToFavoritesList(drink){

    // this.toggleFavoriteList(true);
    let alreadyThere = false
    this.state.favoriteDrinks.forEach(drank => {
      if (drank.strDrink === drink.strDrink) {
        alreadyThere = true;
      }
    })
    if (!alreadyThere) {
        this.setState({
          favoriteDrinks: this.state.favoriteDrinks.concat([drink])
        })
    }
  }

  removeDrinkToFavoritesList(drink){
    let alreadyThere = false
    this.state.favoriteDrinks.forEach(drank => {
      if (drank.strDrink === drink.strDrink) {
        alreadyThere = true;
      }
    })
    if (alreadyThere) {
        let temp = this.state.favoriteDrinks.filter((drank) =>{
            return drink.strDrink !== drank.strDrink;
        })

        this.setState({

          favoriteDrinks: temp
        })

    }
  }


}

export default App;

