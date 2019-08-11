import React from 'react'
import Item from './Item'


function CompleteTasks(props) {
    if(props.ctasks.length===0){
        return <></>
    }else{
        const listB = props.ctasks.map((item, key)=>{
            return <Item key={key} tasks={item} remove={props.remove} complete={props.complete} done={true}/> 
          })
        return <div>
            <h2 className='heading'>Completed Tasks 💯</h2>
            {listB}
        </div>
    }
}

export default CompleteTasks
