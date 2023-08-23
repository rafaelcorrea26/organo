import './Botao.css';
/* Para passar icone ou qualquer outra coisa usamos pops.children*/
const Botao = (props) => {
    return (<button className='botao'>
        {props.children} 
    </button>)
}

export default Botao;