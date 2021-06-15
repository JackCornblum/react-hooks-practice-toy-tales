import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  let nameLocalStorage
  let urlLocalStorage

  const [showForm, setShowForm] = useState(false);
  const [toyData, setToyData] = useState([])
  const [reload, setReload] = useState(false)
  // const [newToyName, setNewToyName] = useState(nameLocalStorage)
  // const [newToyUrl, setNewToyUrl] = useState(urlLocalStorage)

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(resp => resp.json())
    .then(data => setToyData(data))
  }, [reload])

  function postNewToy(e) {
    e.preventDefault()
    let newToyName = e.target[0].value
    let newToyUrl = e.target[1].value

    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: newToyName,
        image: newToyUrl,
        likes: 0
      })
    })

    setReload(!reload)
  }


  function addLike(likes, id){
    
    let newLikes = likes + 1
    // console.log(newLikes)
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        likes: parseInt(newLikes)
      })
    })

    setReload(!reload)
  }

  function deleteToy(id){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })

    setReload(!reload)
  }

  return (
    <>
      <Header />
      {
        showForm ? 
          <ToyForm 
            postNewToy={postNewToy} 
          /> 
        : 
          null
      }
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
        toyData={toyData}
        setToyData={setToyData}
        addLike={addLike}
        deleteToy={deleteToy}
      />
    </>
  );
}

export default App;
