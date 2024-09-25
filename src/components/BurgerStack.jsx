// `src/components/BurgerStack.jsx`
const BurgerStack = ({stack, setStack}) => {
  const removeStack = (index) => {
    const newStack = [...stack.slice(0, index), ...stack.slice(index + 1)]
    setStack(newStack)
  }
  
    return(
      <ul>
        {stack.map((ingredient, index) => {
          return(
          <li style={{backgroundColor:ingredient.color}} key={index}>{ingredient.name}
          <button onClick={() => removeStack(index)}>x</button>
          </li>
          )
        })}
      </ul>
    ) 
  };
  
  export default BurgerStack;
  