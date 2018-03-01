import React, {Component} from 'react';



class TododBox extends Component{
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            todoText:''
        }
    }

    onSubmit(e){
        e.preventDefault();
        this.props.onSubmit(e);
        this.setState({todoText:''});
    }

    getInputValue(){
        return this.state.todoText;
    }

    render(){
        return(
            <div className="TodoBox">
                <form onSubmit={this.onSubmit}>
                    <input type="text"
                    value={this.state.todoText}
                    onChange = {
                        (e)=>{this.setState({todoText:e.target.value})}
                    } 
                    />
                    <button type="submit">Agregar</button>
                </form>
            </div>
        );
    }
}


export default TododBox;