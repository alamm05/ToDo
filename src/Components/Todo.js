import React,{Component} from 'react'

export default class Todo extends Component {
    constructor(){
        super();
        this.state={
            tasks:[
                {id:1, task:"Revise JS"},
                {id:2, task:"Revise DSA level-1"},
            ]
        };
    }
    render(){
        return(
            // <div>Todo</div>
            <div>
                <input type="text"></input>
                <button>Submit</button>
                {// use when need to write js in jsx
                this.state.tasks.map(function(taskObj){
                    return(
                        <li key={taskObj.id}>
                            <p>{taskObj.task}</p>
                            <button>Delete</button>
                        </li>
                    );
                 })

                }
            </div>
        )
    }
}