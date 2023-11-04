import { useState } from "react";
import styles from "./index.module.css"
import axios from "axios";

export default function ({ data, ano }) {
  const [formData, setFormData] = useState({
    NrCP: data.NrCP, Nome: data.Nome, Curso: data.Curso, Arma: data.Arma, Posto: data.Posto
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
    if (value != data[name]) e.target.style.border = "2px solid #c42"
    else e.target.style.border = ""
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('api/postCP/' + ano, formData)
  }

  return <form onSubmit={handleSubmit}>
    <label className={styles.label}>Número do Calção Preto</label>
    <input name="NrCP" className={styles.input} value={data.NrCP} placeholder="Número do Calção Preto" onChange={handleChange}></input>
    <label className={styles.label}>Curso</label>
    <input name="Curso" className={styles.input} value={formData.Curso} placeholder="Curso" onChange={handleChange}></input>
    <label className={styles.label}>Posto</label>
    <input name="Posto" className={styles.input} value={formData.Posto} placeholder="Posto" onChange={handleChange}></input>
    <label className={styles.label}>Nome</label>
    <input name="Nome" className={styles.input} value={formData.Nome} placeholder="Nome" onChange={handleChange}></input>
    <label className={styles.label}>Arma</label>
    <input name="Arma" className={styles.input} value={formData.Arma} placeholder="Arma" onChange={handleChange}></input>

    <button className={styles.button} type="submit">Submit</button>
  </form>
}