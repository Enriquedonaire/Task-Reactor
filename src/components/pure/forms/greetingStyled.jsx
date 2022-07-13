import React, { useState } from 'react';


const loggedStyle = {
    color: 'blue',
    
}

const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}


const GreetingStyled = (props) => {

    const [logged, setLogged] = useState(false);

    return (
        <div style={logged ? loggedStyle : unloggedStyle} >
            {
                logged ? 
                (<p>Hola, {props.name}</p>)
                :
                ('You must to Login first!')
            }
            <br/>
            <button type="button" class="btn btn-success" onClick={() => {
                console.log('Button pressed');
                setLogged(!logged);
            }} >
                {logged ? 'logout' : 'login'}
            </button>
        </div>
    );
}

export default GreetingStyled;
