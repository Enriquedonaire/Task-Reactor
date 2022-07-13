import React, {useState} from 'react';

const LoginForm = () => {

    initialCredentials = [
        {
            user: '',
            password: ''
        }
    ]
    const [credentials, setCredentials] = useState(initialCredentials);
    
    return (
        <div>
            
        </div>
    );
}

export default LoginForm;
