// src/components/IngredientList.jsx
const IngredientList = ({availableIngredients,addStack}) => {
    return (
      <ul>
      {availableIngredients.map((availableIngredient, index) => {
        return(
          <li style={{backgroundColor:availableIngredient.color}} key={index}>{availableIngredient.name} 
            <button onClick={() => addStack(availableIngredient)}>+</button>
          </li>
        )
      })}
      </ul>
    )
  };
  
  export default IngredientList;  