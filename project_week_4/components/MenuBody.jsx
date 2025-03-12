import Card from '../components/Card'
import { useEffect, useState } from "react";
function MenuBody() {
const [data,setData] = useState([]);
var url = "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
useEffect(() => {
    fetch(url).then((res)=>{
        return res.json();
    }).then((data)=>{
        setData(data.meals);
    });
},[]) 

return (
    <div className="menu-bar">
      <ul>
        {data.map((item) => {
          return (
            
            <Card key={item.idMeal} value={item} />

          );
        })}
      </ul>
    </div>
  );
}
export default MenuBody;