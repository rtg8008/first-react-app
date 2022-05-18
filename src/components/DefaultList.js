import React from 'react';

class DefaultList extends React.Component{
    render(){
     return this.defaultList(this.props)
    }

    defaultList(props){
        let temp = props.drinks.map((drink) =>{

            return (
            <li key={drink.strDrink}>
                <img onClick={this.onTrigger} id={drink.strDrink} className="drinkImg" alt={drink.strDrink} src={drink.strDrinkThumb}></img>
                <h3>{drink.strDrink}</h3>
            </li>
            )
        });

        return (
          <div className='default-list'>
              <h2 id="defaultDrinks">{props.title}</h2>
              <ul className='ul-fav-true' id='ulList'>{temp} </ul>
          </div>
        );
    }
    onTrigger = (event) => {
        event.preventDefault();
        // console.log(event.target.id);
        this.props.parentCallback({strDrink: event.target.id, strDrinkThumb: event.target.src});
        // event.preventDefault();
    }
}


export default DefaultList;


