import React,{useState} from 'react';
import Recipetile from './Components/Recipetile'
import Axios from 'axios';
import './App.css'
import New from './Components/New'


function App()
{
const YOUR_APP_ID="4fef11a8";
const YOUR_APP_KEY="a0b6eba63f004676d00bfae9128a1a38";
const [healthLabel,setHealthLabel]=useState('vegetarian');
const [query,setQuery]=useState('');
const [recipes,setRecipes]=useState([]);
const url= `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;

  const getRecipeInfo=async()=>
  {
      var result=await Axios.get(url);
      setRecipes(result.data.hits);
      console.log(result.data.hits);
  }

  const onSubmit=(e)=>
  {
    e.preventDefault();
    getRecipeInfo();

  }
  return(
    <div className='app'>
      
      <h1 onClick={getRecipeInfo}>
        <u>Food Recipe Hub </u>🍚</h1>
      <form className="app-SearchForm" onSubmit={onSubmit}>
        <input type="text" value={query} onChange={(e)=>{setQuery(e.target.value)}}className='app-input' placeholder='Type the ingredient' autoComplete='off'/>
        <select className='app-HealthLabels'>
          <option value="vegitarian" onClick={()=>{setHealthLabel('vegitarian')}}>vegitarian</option>
          <option value="dairy-free" onClick={()=>{setHealthLabel('dairy-free')}}>dairy-free</option>
          <option value="egg-free" onClick={()=>{setHealthLabel('egg-free')}}>egg-free</option>
          <option value="immuno-supportive" onClick={()=>{setHealthLabel('immuno-supportive')}}>immuno-supportive</option>
          <option value="low-sugar" onClick={()=>{setHealthLabel('low-sugar')}}>low-sugar</option>
          <option value="wheat-free" onClick={()=>{setHealthLabel('wheat-free')}}>wheat-free</option>
          
        </select>
        <input type="submit" value="Get Recipe" className='app-Submit'/>
      </form>
      <div className='app_recipes'>
        {recipes.map((recipe)=>
        {
          return <Recipetile recipe={recipe}/>
        })}
      </div>
      <New/>
    </div>
 
  )
}
export default App