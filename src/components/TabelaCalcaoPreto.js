

export default function TabelaCalcaoPreto({ setShowTabela, setState, ano, tabela }) {
	return <>
		<div>
			<style dangerouslySetInnerHTML={{ __html: "\n        table, td, th {\n          border: 1px solid black;\n width: 5%\n        }\n  th+th{\n border: 1px solid black;\n width:10%}\n th+th+th{\n border: 1px solid black;\n width:20%}\n th+th+th+th {\n border: 1px solid black;\n width: 25% \n}      \n        table {\n          border-collapse: collapse;\n          width: 100%;\n        }\n        \n        td {\n          text-align: center;\n          padding-left: 5px;\n          padding-right: 5px;\n          vertical-align: middle;\n        }\n        " }} />
			<span className="hide">Início do conteúdo da página</span>
			<button style={{ borderRadius: "4px", marginBottom: "10px" }}
				variant="primary" className="btn-default" onClick={() => {
					setShowTabela(false)
					setState({ decada: "escolha", ano: "escolha", existeDados: true, preenchido: true })
				}}>
				Voltar
			</button>
			<p><b>Nr CP</b> - Número do Calção Preto</p>
			<p><b>QI</b> - Quadro de Intendentes</p>
			<div className="span9 module-box-01">
				<div className="header">
					<h2 className="titulo-box" style={{ display: "flex", justifyContent: "center" }}><strong>{ano}</strong></h2>
				</div>
				<table border={1}>
					<tbody>
						<tr>
							<th>Nr CP</th>
							<th>Curso </th>
							<th>Posto</th>
							<th>Nome</th>
							<th>Arma</th>
						</tr>
						{
							tabela.Tabela.map((val, index) => {
								return <tr style={{height: "36px"}}>
									<td>{val.NrCP}</td>
									<td>{val.Curso}</td>
									<td><b>{val.Posto}</b></td>
									<td>{val.Nome}</td>
									<td>{val.Arma}</td>
								</tr>
							})
						}
					</tbody>
				</table>
			</div>

			<span className="hide">Fim do conteúdo da página</span>
		</div>
	</>
}