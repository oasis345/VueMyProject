import React from "react";



const ListNames = (props) =>{
    //람다에서 for loop 는 .map을하면된다 그럼 끝까지 다출력된다.
    const items = props.data.map(  
        (i,v)=>{
            return <li>{i} : [v]</li>
        }
    )
    
    return(
        <ul>
            {items}
        </ul>
    );
}

export default ListNames;

//무상태 코딩