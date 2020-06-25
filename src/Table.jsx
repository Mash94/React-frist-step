import React, {Component} from 'react'

class Table extends Component{
    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                    </tr>
                </thead>   
                <tbody>
                    <tr>
                        <td>Nico</td>
                        <td>Mahnic</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Table