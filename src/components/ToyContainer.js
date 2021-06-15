import React from "react";
import { render } from "react-dom";
import ToyCard from "./ToyCard";

function ToyContainer({toyData, setToyData, addLike, deleteToy}) {
  // console.log(toyData)

  let renderToys = toyData.map(obj => {
    return <ToyCard name={obj.name} img={obj.image} likes={obj.likes} key={obj.id} id={obj.id} addLike={addLike} deleteToy={deleteToy} />
  })

  return (
    <div id="toy-collection">{renderToys}</div>
  );
}

export default ToyContainer;
