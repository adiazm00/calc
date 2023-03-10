import '../css/Button.css';

function Button(props){

    const esOp = valor =>{
        return isNaN(valor) && (valor!=='.') && (valor!=='=') && (valor!=='Borrar');
    }

    const esBorrar = valor =>{
        if (valor==='Borrar')
            return 'borrar';
        else if (valor==='=')
            return 'igual';
        else
            return'';
    }

    return(
        <div className={`button-container ${esOp(props.children) ? 'operador' : ''}${esBorrar(props.children)}`.trimEnd()} onClick={()=> props.manageClick(props.children)}>
            {props.children}
        </div>
    );
}

export default Button;