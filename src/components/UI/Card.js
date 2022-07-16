import './Card.css';
function Card(props){
    const classes= 'card ' +  props.className;
    /*
    Wrapper components 
    space after the card is important
    card component provides and the same func
    functionalities like before but only we can now 
    use new component inplace  of div in return statement of the code to the exported file
    */

return <div className={classes}>{props.children}</div>
}
export default Card;