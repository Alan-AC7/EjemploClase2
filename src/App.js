import React, {useState, useEffect} from 'react';
import './App.css';
import Productos from './productos.json';
import NumericInput from 'react-numeric-input';



function App() {
  
  return (
    <div className="App">
      <h1>Lista de Compra</h1>

   
      <hr />


<form>
   
      <select id="articulo" >
      <option >--Seleccione su Prenda--</option>
        {
          Productos.Prendas.map((result)=>(<option value={result.precio} text={result.id }>{result.Pnombre} </option> )   )
        }

      </select>
      <button> Agregar al carrito </button>
      </form>
      <hr/>
     




      <table>
      <thead>
      <th>Articulo</th>
      <th>Precio</th>
      <th>Cantidad</th>
      <th>Subtotal</th>
      <th>Eliminar</th>
      </thead>
      <tbody>
      
      <td></td>
      <td></td>
      <td><NumericInput/></td>
      <td></td>
      <td><button>Eliminar</button></td>

    
        
      </tbody>
      </table>
    </div>
  );


 

      
 
    
  

    
  };



 

export default App;
