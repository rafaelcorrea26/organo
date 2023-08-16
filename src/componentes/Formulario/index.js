import CampoTexto from '../CampoTexto';
import './Formulario.css';


const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" />
                <CampoTexto label="Cargo" />
                <CampoTexto label="Endereço da imagem" />
            </form>
        </section>
    )
}

export default Formulario;