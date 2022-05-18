import React from 'react';

// function FavoritesList(props) {
//     let temp = props.drinks.map((drink) =>{

//       return (
//         <li  key={drink.strDrink}>
//             <h3>{drink.strDrink}</h3>
//             <img className="drinkImg" alt="just work" src={drink.strDrinkThumb}></img>
//         </li>
//         )
//     });
//     return (
//           <div className='favorites-list'>
//               <h2>Favorite Drinks</h2>
//               <ul>{temp}</ul>
//           </div>
//     );
//   }

  class FavoritesList extends React.Component{
    render(){
     return this.favoritesList(this.props)
    }

    favoritesList(props){
        let temp = props.drinks.map((drink) =>{

            return (
            <li key={drink.strDrink}>
                <img onClick={this.onTrigger} id={drink.strDrink} className="drinkImg" alt={drink.strDrink} src={drink.strDrinkThumb}></img>
                <h3>{drink.strDrink}</h3>
            </li>
            )
        });


        return (
          <div className='favorite-list' id="favorite-list">
              <h2>Favorite Drinks</h2>
              <ul>{temp}</ul>
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
export default FavoritesList;