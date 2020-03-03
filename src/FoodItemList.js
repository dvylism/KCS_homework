import React from 'react';
  const FoodItemList = (props) => {
    return (  
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Dessert (100g serving)</th>
            <th>Calories</th>
            <th>Fat (g)</th>
            <th>Carbs (g)</th>
            <th>Protein (g)</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
            { 
              props.foodItems.length > 0 ? (
                props.foodItems.map((foodItem) => (
                    <tr key={foodItem.id}>
                      <td>{foodItem.food}</td>
                      <td>{foodItem.cost}</td>
                      <td>{foodItem.fat}</td>
                      <td>{foodItem.carbs}</td>
                      <td>{foodItem.protein}</td>
                      <td>{<input type="checkbox" onClick = {() => props.handleGameClik(foodItem)}/>}</td>
                      <td>
                      <button type="checkbox" className="btn btn-info ml-2" onClick={() => props.boughtFoodItem(foodItem) }>
                        {foodItem.status ? 'not active' : 'Active' } 
                      </button>
                        <button className="btn btn-primary ml-2" onClick={() => props.editFoodItem(foodItem) }>Edit</button>
                        <button className="btn btn-danger ml-2" onClick={() => props.deleteFoodItem(foodItem.id) }>Delete</button>
                      </td>
                    </tr>
                  )
                )
              ) : (
                <tr>
            
                </tr>
              )
            }
        </tbody>
      </table>
    );
  }


export default FoodItemList;


