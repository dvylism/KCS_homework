import React from 'react'

const AddFoodItem = props => {
  return (
    <div>
    <form onSubmit={ props.addFoodItem }>
     
        <label>Food name</label>
        <input type="text" className="form-control" name="food" value={props.food} onChange={ props.handleInputChange}/>
      
     
        <label>Food cost</label>
        <input type="number" className="form-control" name="cost" value={props.cost} onChange={ props.handleInputChange} />
    
     
        <label className="text-black">Fat</label>
        <input type="number" className="form-control" name="fat" value={props.fat} onChange={ props.handleInputChange} />
    
      
        <label className="text-black">Carbs</label>
        <input type="number" className="form-control" name="carbs" value={props.carbs} onChange={ props.handleInputChange} />
     
      
        <label className="text-black">Protein</label>
        <input type="number" className="form-control" name="protein" value={props.protein} onChange={ props.handleInputChange} />

      <button className="btn btn-success mt-2">Add</button>
      
    </form>
    </div>
  )
}
export default AddFoodItem;