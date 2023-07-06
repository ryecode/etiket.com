import { useNavigate } from 'react-router-dom';
import apiService from '../../Api-service/ApiService';
import Register from '../../components/Register';
import React, { useState } from 'react';
import { Toast } from 'react-bootstrap';

function LoginForm() {
    const [errors, setError] = useState('');
    const [showSignUpForm, setShowSignUpForm] = useState(false); // initial state is false
    const navigate = useNavigate();

     const handleSubmit = (event) => {
        setError('');
        event.preventDefault();
        const { email, password } = event.target.elements;

        const userInfo = {
            email: email.value,
            password: password.value
            
        };

        apiService.post('/accounts/login', userInfo)
            .then(res => {
                if (!res.data.status) {
                    setError(res.data.message);
                } else {
                    setError('');
                    navigate('/dashboard', {state: {username: userInfo.email}});
                }
            })
            .catch(error => {
                alert(error);
            });
    }

    const handleRegClick = () => {
        setShowSignUpForm(true);
    };

    const handleRegister = (formData) => {
        console.log(formData);
        setShowSignUpForm(false);
    };

    return (
        <>
            {errors && (
                <>
                    <Toast bg="danger" style={{color: 'white'}}>
                        <Toast.Body>{errors}</Toast.Body>
                    </Toast>
                </>
            )}
            {showSignUpForm ?
                    (
                        <Register handleRegister={handleRegister} />
                    ) :
                    (
                        <>
                        <div className="container-fluid row justify-content-center d-flex p-5">
                            <main className="form-signin px-5 row justify-content-center d-flex ">
                                <form onSubmit={handleSubmit} className="col-lg-5 py-5">
                                <p className="text-bold font-big text-center text-danger">ETIKET</p>
                                <h1 className="h3 mb-3 fw-normal text-light">Please Log In</h1>
                                <div className="container-fluid px-2">
                                    <div className="form-floating pb-2">
                                        <input name='email' type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required/>
                                        <label htmlFor="floatingInput">Email address</label>  {/* Email */}
                                        {/* <Errors>
                                            {renderErrorMessage("email")}
                                        </Errors> */}
                                        </div>
                                        <div className="form-floating pb-2">
                                        <input name='password' type="password" className="form-control" id="floatingPassword" placeholder="Password" required/>
                                        <label htmlFor="floatingPassword">Password</label> {/* Password */}
                                        {/* <Errors>
                                            {renderErrorMessage("password")}
                                        </Errors> */}
                                        </div>
                                </div> 
                                <a className="text-light" href="/Forgot-Password">Forgot Password?</a><br />
                                <a className=" text-light" href="/Register">Don't have an account yet?</a>
                                <div className="container-fluid py-2">
                                    <button className="w-100 btn btn-lg btn-danger" type="submit">Log in</button>                                    
                                    {/* <button className="w-100 btn btn-lg btn-danger" onClick={handleRegClick}>Create an Account</button> */}
                                </div>                 
                                </form>
                            </main>
                        </div>
                        </>
                    )}
        </>
    )
}

export default LoginForm;