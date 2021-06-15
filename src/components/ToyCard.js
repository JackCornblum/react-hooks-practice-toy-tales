import React from "react";

function ToyCard({name, img, likes, id, addLike, deleteToy}) {

  function handleClick(e){
    let id = e.target.parentElement.id
    console.log(e.target.className)

    if (e.target.className === "like-btn"){
      addLike(likes, id)
    }
    else {
      deleteToy(id)
    }
  }

  return (
    <div id={id} className="card">
      <h2>{name}</h2>
      <img
        src={img}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={handleClick} className="like-btn">Like {"<3"}</button>
      <button onClick={handleClick} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
