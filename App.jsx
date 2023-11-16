//The braces {} allow you to use JavaScript, or escape into JavaScript, and use things like ternary operators and array methods.
//onclick is an event lister, upon clicking the dogs name/id, information about the puppy will pop up
import { useState } from "react";
import { puppyList } from "./data.js";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId]=useState(null);

  console.log("puppyList", puppyList);

  /*function handleClick(){
    
  }*/

  const featuredPup = puppies.find((pup)=> pup.id ===featPupId);
  console.log(featuredPup);

  return (
    <>
      <div className="App">
        {puppies.map((puppy) => {
          return <p onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>;
        })}
        <p>{featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}</p>
      </div>
    </>
  );
}

export default App;
