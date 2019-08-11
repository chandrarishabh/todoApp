import React from 'react';
import './styles.css';
import Item from './components/Item';
import CompleteTasks from './components/CompleteTasks';

class App extends React.Component{
  
  constructor(props) {
    super(props)
    this.state = {
      input:'',
      tasks:['Learn NodeJS','Be awesome!'],
      ctasks:['Learn ReactJS']
    }
  }
  
  changeHandler = (event) =>{
    this.setState({
      input:event.target.value
    })
  }

  clickHandler = () =>{
    if(this.state.input.length===0) return;
    this.setState(prevState =>{
        return {
          tasks:[...prevState.tasks, prevState.input],
          input:''
      }
    });
  }

  removeItem = (task) => {
    if(this.state.tasks.indexOf(task)!==-1){
      let updatedList = this.state.tasks
      updatedList.splice(this.state.tasks.indexOf(task),1)
      console.log(updatedList)
      this.setState({
        tasks:updatedList
      })
    }
    else if(this.state.ctasks.indexOf(task)!==-1){
      let updatedList = this.state.ctasks
      updatedList.splice(this.state.ctasks.indexOf(task),1)
      console.log(updatedList)
      this.setState({
        ctasks:updatedList
      })
    }
  }



  completeTask = (task) => {
    let newTasks = this.state.tasks
    newTasks.splice(this.state.tasks.indexOf(task),1)
    this.setState({
      tasks:newTasks,
      ctasks:[...this.state.ctasks,task]
    })
  }

  render(){
    const listA = this.state.tasks.map((item, key)=>{
      return <Item key={key} tasks={item} remove={this.removeItem} complete={this.completeTask} done={false}/> 
    })

    return (
      <div className='App'>
        <h1 className='heading' style={{fontSize:'35px'}}>📘 ToDo App 📘</h1>
        <div className='inputContainer'>
          <input className="inputBox" value={this.state.input} placeholder="What's on your mind!" 
            onChange={this.changeHandler}
            onKeyPress={(e)=>{
              if(e.key === 'Enter'){
                this.clickHandler();
              }
            }}/>
          <button className="buttonBox" onClick={this.clickHandler}>></button>
        </div> 
        <div className='taskContainer'>
          {listA}
          <CompleteTasks ctasks={this.state.ctasks} remove={this.removeItem} complete={this.completeTask}/>
        </div> 
        
      </div>
    );
  }
}

export default App;
