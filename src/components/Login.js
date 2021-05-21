import React from 'react';
import PropType from 'prop-types';

const Login = (props) => (
    <nav className="login">
        <h2>Inventory Login</h2>
        <p>Sign in to manage your store's inventory.</p>
        <button className="facebook" onClick={() => props.authenticate('Facebook')}>Login with Facebook</button>
        <button className="github" onClick={() => props.authenticate('Github')}>Login with GitHub</button>
    </nav>

);

Login.propTypes = {
    authenticate: PropType.func.isRequired
}

export default Login;