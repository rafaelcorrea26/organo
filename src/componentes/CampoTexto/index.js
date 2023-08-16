import './CampoTexto.css';

const CampoTexto = (props) => {
    const placeholderModificada = `Digite seu ${props.label}`;

    return (
        <div className="campo-Texto">
            <label>{props.label}</label>
            <input placeholder= {placeholderModificada}/>
        </div>
    )
}

export default CampoTexto;