import React from "react";


export default function StartBtn(props) {

     const initialaction = () => {
        props.actions.initialaction();
     }

     return (
        <button className='start' onClick={() => initialaction()} >Vamos começar!</button>
    )
}
