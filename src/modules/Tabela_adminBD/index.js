import { useState } from "react";
import styles from "./index.module.css"
import TabelaAdmin from '../../components/TabelaAdmin'

export default function Tabela_adminBD() {
  const [ano, setAno] = useState("");
  const [tableAno, setTableAno] = useState("")
  const [showTabela, setShowTabela] = useState(false)
  const [table, setTable] = useState()
  const [existeDados, setExisteDados] = useState(true)
  const [preenchido, setPreenchido] = useState(true)

  function handleInput(target) {
    let numero = target.value.replace(/\D/g, '');
    if (numero.length > 4) numero = numero.slice(0, 4);
    setAno(numero)
    setExisteDados(true)
    setPreenchido(true)
  }

  async function searchDatabase() {
    // for (const c of data.Tabela){
    //   axios.post('/api/consultaBD/' + c.NrCP, c)
    // }
    if (ano === "") { setPreenchido(false); setShowTabela(false); return }
    // if (Number(ano) < 1929) { setExisteDados(false); setShowTabela(false); return }
    let response = await fetch("api/consultaBD/" + ano)
    response = await response.json()
    // console.log(response)
    if (response.length == 0) { setExisteDados(false); setShowTabela(false); return }
    setTable(response.sort((firstItem, secondItem) => firstItem.NrCP - secondItem.NrCP))
    setTableAno(ano)
    setShowTabela(true)
  }

  return <>
    <div className="header"><h2 className="titulo-box"><strong>ADMIN</strong></h2></div>
    <p>Área de admnistração - Firebase</p>
    <p>Login com email</p>
    <br></br>
    <p>Editar/Visualizar dados de um ano:</p>
    <input className={styles.input} value={ano} placeholder="Ano" onChange={(e) => { handleInput(e.target) }}></input>
    <button style={{ borderRadius: "4px", marginLeft: "26px" }} variant="primary" className="btn-default" onClick={searchDatabase}>Buscar</button>
    <br></br>
    <br></br>
    <div className="span9">
      <div className={existeDados ? 'noAlert1' : 'alert alert-danger'}>
        <strong>Informações sobre o ano {ano} não existem on banco de dados</strong>
      </div>
      <div className={preenchido ? 'noAlert2' : 'alert alert-danger'}>
        <strong>Campo de ano não preenchido</strong>
      </div>
    </div>
    <br></br>
    <div style={{ margin: "15px" }}>
      {showTabela && <TabelaAdmin setShowTabela={setShowTabela} ano={tableAno} tabela={table} />}
    </div>
    <span className="hide">Fim do conteúdo da página</span>
  </>
}