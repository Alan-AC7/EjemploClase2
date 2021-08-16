import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [dolar, setdolar] = useState(0);
  const [Bitcoin, setBitcoin] = useState(0);
  const [Euro, setEuro] = useState(0);
  const [Sol, setSol] = useState(0);
  const [PesoM, setPesoM] = useState(0);
  const [PesoA, setPesoA] = useState(0);

  const [tipo, setTipo] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setdolar((total * tipo) / 1);
    setBitcoin((total * tipo) / (0.000021));
    setEuro((total * tipo) / (0.85));
    setSol((total * tipo) / 4.07);
    setPesoM((total * tipo) / 19.88 );
    setPesoA((total * tipo) / 96.60 );
  }, [total, tipo]);


  const handleTotalChange = e => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
    }
  };


  return (
    <div className="App">
      <h1>Convertidor de Divisas</h1>

      <p>Dolar: {dolar}</p>
      <p>Bitcoin: {Bitcoin}</p>
      <p>Euro: {Euro}</p>
      <p>Sol Peruano: {Sol}</p>
      <p>Peso Mexicano: {PesoM}</p>
      <p>Peso Argentino: {PesoA}</p>

      <hr />

      <h3>{total}</h3>

      <select onChange={event => setTipo(event.target.value)} value={tipo}>
        <option value={1}>Dolares</option>
        <option value={0.000021}>Bitcoin</option>
        <option value={0.85}>Euro</option>
        <option value={4.07}>Sol Peruano</option>
        <option value={19.88}>Peso Mexicano</option>
        <option value={96.60 }>Peso Argentino</option>
      </select>
      <input onChange={handleTotalChange} value={total} />
    </div>
  );
}

export default App;
