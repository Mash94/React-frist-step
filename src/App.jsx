import React, {Component} from 'react'
import './index.css'
import Table from './Table'
import Form from './Form'

const vectorObjt = []
class App extends Component{
    state = {                           // State de App pueden ser modificadas unicamente por App
        characters : []
    }
    removeCharacter = (index) => {      // Elimina un elemento al State de App
        const {characters} = this.state
        this.setState({
            characters: characters.filter((characters,i)=> {
                return i !== index
            })
        })
        vectorObjt.splice(index,1)
        console.log(vectorObjt)
    }
    handleSubmit = (character) => {     // Agrega un elemento al State de App
        this.setState({ characters:[...this.state.characters, character]})
        vectorObjt.push(character)
        console.log(vectorObjt)
    }
    render(){
        const {characters} = this.state
        return(
            <div className='container'>
                {/*Le pasa por props los objetos y una función*/}
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
                {/*Le pasa por props a Form el handler Submit para que algo*/}
                {/*-- dentro de Form la use e internamente pueda modificar el State de App*/}
                <Form  handleSubmit={this.handleSubmit}/>
            </div> 
        )
    }
}

export default App