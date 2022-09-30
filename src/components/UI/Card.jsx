import './Card.css';

const Card = (props) =>{
    const classes = 'card ' + props.className;//Permite que se le puedan agregar clases a nuestro componente desde otro archivo
    return <div className={classes}>{props.children}</div>//Recibe a los elementos hijos(los que van dentro)en los wrapper components
  
}
export default Card;