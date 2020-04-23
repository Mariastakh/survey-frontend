import React from "react"

export default function SurveyButton(props){
    return(
        <button
        onClick={() => props.onClick()}> button
        </button>
    )
}