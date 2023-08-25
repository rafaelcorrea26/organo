import './Time.css';

const Time = (props) => {
    const cssCorSecundaria = {backgroundColor: props.corSecundaria};
    const cssCorPrimaria = {borderColor:  props.corPrimaria};
   
    return (
        <section className='time' style={cssCorSecundaria}>
            <h3 style={cssCorPrimaria}> {props.nome}</h3>
        </section>
    )
}

export default Time;