import React from "react";


const Word = (props) => {
    return (
    <>
        <div key= {props.id}> 
            Słowo po angielsku: <strong>{props.en}</strong>        
        </div>
        <div>Tłumaczenie: <strong>{props.pl}</strong></div>
    </>
    )
}

export default Word;