import '../css/Clear.css';

function Clear(props){
    return(
    <div className='clear' onClick={()=> props.manageClick(props.children)}>
        {props.children}
    </div>
    );
}

export default Clear;