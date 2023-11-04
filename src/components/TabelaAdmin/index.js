import $ from "jquery"
import styles from "./index.module.css"
import React from "react"
import CPForm from "../CPForm"

export default function TabelaAdmin({ setShowTabela, ano, tabela }) {
  function collapseRow(e, id) {
    let collapsable = $("#" + id)
    // if (e.target.nodeName == "I") collapsable = e.target.parentNode.nextSibling
    if (collapsable == null) return

    if ($(collapsable).is(':visible')) {
      $(collapsable).fadeOut(300)
      $("#chev" + id).replaceWith("<svg id=\"chev" + id + "\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m9 18 6-6-6-6\"/></svg>")
    }
    else {
      $(collapsable).show(300)
      $("#chev" + id).replaceWith("<svg id=\"chev" + id + "\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-chevron-down\"><path d=\"m6 9 6 6 6-6\"/></svg>")
    }
  }

  return <>
    <style dangerouslySetInnerHTML={{
      __html: "table, td, th{border: 1px solid black; width: 5%}    th+th{border: 1px solid black; width:10%}    th+th+th{border: 1px solid black; width:20%}    th+th+th+th{border: 1px solid black; width: 25%}    table{border-collapse: collapse; width: 100%}    td{text-align: center; padding-left: 5px; padding-right: 5px; vertical-align: middle}"
    }} />
    <button style={{ borderRadius: "4px", marginBottom: "10px" }}
      variant="primary" className="btn-default" onClick={() => { setShowTabela(false) }}>
      Voltar
    </button>
    <p><b>Nr CP</b> - Número do Calção Preto</p>
    <p><b>QI</b> - Quadro de Intendentes</p>

    <div className="module-box-01">
      <div className="header"><h2 className="titulo-box" style={{ display: "flex", justifyContent: "center" }}><strong> {ano} </strong></h2></div>

      <table border={1}><tbody>
        <tr>
          <th style={{ width: "5%" }}></th>
          <th style={{ width: "10%" }}>Nr CP</th>
          <th>Curso</th>
          <th>Posto</th>
          <th style={{ width: "100%" }}>Nome</th>
          <th>Arma</th>
        </tr>
        {tabela.map((val, index) => {
          return <React.Fragment key={val.NrCP.toString()}>
            <tr style={{ height: "36px" }}>
              <td><div className={styles.chevron} onClick={(e) => { collapseRow(e, index + 1) }} ><svg id={"chev" + (index + 1)} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg></div></td>
              <td>{val.NrCP}</td>
              <td>{val.Curso}</td>
              <td><b>{val.Posto}</b></td>
              <td>{val.Nome}</td>
              <td>{val.Arma}</td>
            </tr>
            <tr><td id={index + 1} className={styles.dadoRow} colSpan="6">
              <CPForm data={val} ano={ano}/>
            </td></tr>
          </React.Fragment>
        })}
      </tbody></table>
    </div>
  </>
}