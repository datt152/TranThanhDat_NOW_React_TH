import './Menu.css';

function Menu() {
  var arr = ["What to cook", "Recipes", "Ingredients", "Occasions", "About us"];

  return (
    <div className="menu-bar">
      <ul>
        {arr.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
    
  );
  
}

export default Menu;
