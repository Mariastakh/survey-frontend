import React from "react"

export default function SurveyButton(props){
    return(
        <button style={{ backgroundColor: props.selected ? "blue" : "pink" }}
        onClick={() => props.onClick()}> a button
        </button>
    )
}