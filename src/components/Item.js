
import React from 'react'
import '../styles.css';

function Item(props) {
    
    const cross = <label style={{cursor:'pointer'}}onClick={()=>{
        props.remove(props.tasks)}}>    ❌</label> 
    
    const check = <label style={{cursor:'pointer'}}onClick={()=>{
        props.complete(props.tasks)}}>    ✔️</label>
    
    if(props.done){
        return (
            <div className='itemStyle'>
                <label className='doneTask'>{props.tasks}</label>
                {cross}
            </div>
        )
    }else{
        return (
            <div className='itemStyle'>
                <label>{props.tasks}</label>
                {check}
                {cross}
            </div>
        )
    }
}
export default Item;
