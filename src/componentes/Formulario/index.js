import Botao from '../Botao';
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

    const aoSalvar = (evento) => {
        evento.preventDefault(); /* Previne evento padrao deixando eu controlar o que fara na funcao*/
        console.log('Salvou isso')    
    }

const Formulario = () => {
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}> 
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" />
                <CampoTexto obrigatorio={true} label="Cargo" />
                <CampoTexto label="Endereço da imagem" />
                <ListaSuspensa label="Times" itens={times}/>
                <Botao> Criar Card </Botao> 
            </form>
        </section>
    )
}

export default Formulario;