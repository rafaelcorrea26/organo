import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    ' Inovação e Gestão'
    ]

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" />
                <CampoTexto label="Cargo" />
                <CampoTexto label="Endereço da imagem" />
                <ListaSuspensa label="Times" itens={times}/>
            </form>
        </section>
    )
}

export default Formulario;