import React from 'react';

const shield = {
  leather: 2,
  iron: 1,
  refine: 4
};

const gauntlet = {
  leather: 5
}

function Recipes() {
  const [recipe, setRecipe] = React.useState({});
  
  return (
    <div>
      <h2>Current recipe:</h2>
      <button onClick={() => setRecipe(shield)}>Shield</button>
      <button onClick={() => setRecipe(gauntlet)}>Gauntlet</button>

      <ul>
        {Object.keys(recipe).map(material => (
          <li key={material}>
            {material}: {recipe[material]}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Recipes;
