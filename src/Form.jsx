import React,{ Component } from 'react';

class Form extends Component{
    initialState ={     // Es un State de Form de Reset, cuando se resetee state se cargará esto
        name:'',
        job:''
    }
    state = this.initialState
    handleChange = (event) => {
        const {name, value} = event.target
        //console.log(name) // si el handler es por 'name' o por 'job' se modifica de state esa propiedad
        this.setState({
            [name]: value   // actualiza State de Form
        })
    }
    submitForm = () => {
        this.props.handleSubmit(this.state) // una de las props de Form es un handler que modifica el State de App
        this.setState(this.initialState)    // una vez que State de App fue actualizado State de Form se resetea
    }
    render(){
        const {name, job} = this.state
        return(
            <form>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' id='name' value={name} onChange={this.handleChange}/>
                <label htmlFor='name'>Job</label>
                <input type='text' name='job' id='job' value={job} onChange={this.handleChange}/>
                <input type='button' value='Submit' onClick={this.submitForm}/>
            </form>
        )
    }
}

export default Form