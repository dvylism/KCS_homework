import React from 'react'

const EditFoodItem = props => {
  return (
    <form>
      <div className="form-group">
        <label>Food name</label>
        <input type="text" className="form-control" name="food" value={props.food} onChange={ props.handleInputChange}/>
      </div>
      <div className="form-group">
        <label className="text-white">Food cost</label>
        <input type="number" className="form-control" name="cost" value={props.cost} onChange={ props.handleInputChange} />
      </div>
      <div className="form-group">
        <label className="text-white">Fat</label>
        <input type="number" className="form-control" name="fat" value={props.fat} onChange={ props.handleInputChange} />
      </div>
      <div className="form-group">
        <label className="text-white">Carbs</label>
        <input type="number" className="form-control" name="carbs" value={props.carbs} onChange={ props.handleInputChange} />
      </div>
      <div className="form-group">
        <label className="text-white">Protein</label>
        <input type="number" className="form-control" name="protein" value={props.protein} onChange={ props.handleInputChange} />
      </div>
      <button onClick={ props.updateFoodItem } className="btn btn-success mt-2"> Save </button>
      <button onClick={() => props.setEditing(false)} className="btn btn-info mt-2">Cancel</button>
    </form>
  )
}

export default EditFoodItem;