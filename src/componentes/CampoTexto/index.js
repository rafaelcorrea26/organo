import './CampoTexto.css';
 /*required={props.obrigatorio} obriga a ser obrigatorio o campo que e passado no parametro*/
const CampoTexto = (props) => {
    let valor = '';
    const placeholderModificada = `Digite seu ${props.label}`;
    const aoDigitar = (evento)=>{
        valor = evento.target.value;
        console.log(valor);
    }

    return (
        <div className="campo-Texto">
            <label>{props.label}</label>
            <input onChange={aoDigitar} required={props.obrigatorio}  placeholder= {placeholderModificada}/>
        </div>
    )
}

export default CampoTexto;