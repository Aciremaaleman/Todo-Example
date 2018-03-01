import React, { Component } from 'react';


class TodoList extends Component {
    constructor(props){
        super(props);
        this.state= {
            items:props.items
        };
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        if(nextProps.items.length != this.state.items.length){
            this.setState({items:nextProps.items})
        }
    }
    


    render(){
        let items = this.state.items.map((element)=> {
            return(
                <li>{element}</li>
            )
        })

        return(
            <div className="TodoList">
                <ul>
                    {items}
                </ul>
            </div>
        );
    }


}


export default TodoList;