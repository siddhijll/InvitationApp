//takes array of objects and renders them as list
import React from "react";
import {PeopleInvited as Props} from "../App";

const List: React.FC<Props> = ({people})=>{
    //here it will return some jsx
    //create a function that will return jsx and call that function in return
    const renderList=()=>{
        return people.map((person)=>{
            return(
                <li className="List">
                    <div className="List-header">
                        <img className="List-img" src={person.img}/>
                        <h2>{person.name}</h2>
                    </div>
                    <p>{person.age} years old</p>
                    <p className="List-note">{person.note}</p>
                </li>
            )
        })
    }

    return(
        <ul>
           {renderList()}
        </ul>
    )
}

export default List
//typical functional component 