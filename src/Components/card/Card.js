import React from "react";

function Card(props){
    return (
        <article className={"card"}>
            <img src={props.image} alt={props.image}/>
            <h2 className={"card-name"}> {props.title}</h2>
            <p className={"card-description"} > {props.description} </p>

        </article>

    )
}
export default Card;