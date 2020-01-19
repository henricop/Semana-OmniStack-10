import React, { useEffect, useState} from 'react';
import api from './services/api';


import './Global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


import DevItem from './components/Devitem';
import DevForm from './components/DevForm';


// TRÊS CONCEITOS PRINCIPAIS DE REACT

//COMPONENTE => Bloco isolado de HTML,CSS,JS, o qual não interfere no restante da aplicação
//PROPRIEDADE ( PROPS ) => informações que o componente pai passa para o componente filho
//STATE => Informções mantidas pelo componente ==> Imutabilidade

// Frangment, tag sem nomecratura => <> something </>

function App() {

  const [devs, setDev] = useState([]);

  useEffect(() => {
    async function loadDevs(){
      const response = await api.get('/devs');

      setDev(response.data);
    }
    loadDevs();
  },[]);

  async function handleAddDev(data){
    const response = await api.post('/devs',data);
      setDev([...devs,response.data]);
  }

// o useState() sempre retorna uma vetor com 2 elementos => elemento , setelemento
  return (
      <div className="app">
        <aside>
          <strong>Cadastrar</strong>
          <DevForm onSubmit={handleAddDev}/>
        </aside>
        <main>
          <ul>
            {devs.map(dev => (
             <DevItem key={dev._id} dev={dev}/>
            ))}
          </ul>
        </main>
      </div>
    );
}

export default App;
