import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Register: Create Account</h2>
                <form>
                    <input type="email" placeholder="Your Email" />
                    <br />
                    <input type="password" placeholder="Password" />
                    <br />
                    <input type="password" placeholder="Re-enter Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already Have an Account? <Link to="/login">Login</Link></p>
                <div>-------- OR --------</div>
                <br />
                <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;