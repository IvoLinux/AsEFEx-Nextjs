import { useState, useEffect } from 'react'
import testContent from '../../assets/TabelasCalcoesPretos/1929.json'

function Filtro() {
  const [state, setState] = useState({
    decada: "escolha",
    ano: "escolha",
    existeDados: true,
    preenchido: true
  });

  // useEffect(() => {
  //   console.log(state)
  // }, [state])

  const handleSearch = () => {
    if ((state.ano == "escolha") || (state.decada == "escolha")) {
      setState({ ...state, preenchido: false })
      return
    }
    setState({ ...state, preenchido: true })
    const anoSelecionado = Number(state.decada) + Number(state.ano)

  }

  const updateDecada = (e) => {
    const { value } = e.target;
    setState({ ...state, decada: value });
  }

  const updateAno = (e) => {
    const { value } = e.target;
    setState({ ...state, ano: value });
  }

  return (
    <div id="conteudo">
      <div className="container">
        <div className="row-fluid">
          <div className="span9 module module-box-01">
            <div className="header">
              <h2 className="titulo-box"><strong>Filtro</strong></h2>
            </div>
            <form>
              <div style={{ width: "auto" }} className="form-group span5">
                <label htmlFor="decada">Década:</label>
                <select className="form-control" id="decada" onChange={updateDecada}>
                  <option selected value="escolha">Escolha uma década....</option>
                  <option value="1920">1920</option>
                  <option value="1930">1930</option>
                  <option value="1940">1940</option>
                  <option value="1950">1950</option>
                  <option value="1960">1960</option>
                  <option value="1970">1970</option>
                  <option value="1980">1980</option>
                  <option value="1990">1990</option>
                  <option value="2000">2000</option>
                  <option value="2010">2010</option>
                  <option value="2020">2020</option>
                </select>
              </div>
              <div style={{ width: "auto" }} className="form-group span5">
                <label htmlFor="ano">Ano:</label>
                <select className="form-control" id="ano" onChange={updateAno}>
                  <option selected value="escolha">Escolha um ano....</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>
              </div>
            </form>
            <button style={{ borderRadius: "4px", marginLeft: "26px" }} variant="primary" className="btn-default" onClick={handleSearch}>Buscar</button>
          </div>
          <div className="span9">
            <div className={state.existeDados ? 'noAlert1' : 'alert alert-danger'}>
              <strong>Esse ano não consta na galeria</strong>
            </div>
            <div className={state.preenchido ? 'noAlert2' : 'alert alert-danger'}>
              <strong>Todos os campos devem ser preenchidos!</strong>
            </div>
            {
              state.existeDados ?
                testContent.Tabela.map((val, index) => {
                  return <div>
                    <div><b>{val.Posto}</b> {val.Nome}</div>
                    <div></div>
                  </div>
                })
                :
                null
            }
          </div>
        </div>
      </div>
    </div>
  )
}
export default Filtro