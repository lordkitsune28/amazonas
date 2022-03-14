import React from 'react'
import { Link, Navigate } from "react-router-dom"
import { useForm } from "../hook/useForm"
import { useDispatch } from 'react-redux'
import { loginEmailPassword, loginFacebook, loginGoogle } from '../redux/actions/actionLogin'
import "../style/login.css"

const Login = (history) => {

    const dispatch = useDispatch()

    const [values, handleInputChange, reset] = useForm({
        email: "",
        password: ""
    })

    const { email, password } = values

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(loginEmailPassword(email, password))
        history.replace('/');
    }

    const handleGoogle = () => {
        dispatch(loginGoogle())
        history.replace('/');
    }

    const handleFacebook = () => {
        dispatch(loginFacebook())
        history.replace('/');
    }

    return (
        <div className="my-5 w-100">
            <div className='w-50 mx-auto'><div className='mx-auto w-25'><img src="https://res.cloudinary.com/donoutoby/image/upload/v1647194087/amazonas/logo-amazon_d4kexv.svg" /></div></div>
            <form className="my-5 form py-2 w-50 mx-auto" onSubmit={handleLogin}>
                <div className="auth__social-networks">
                    <div className="google-btn" onClick={handleGoogle}>
                        <div className="google-icon-wrapper py-2 google">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" /> Iniciar con Google
                        </div>
                    </div>
                </div>
                <div className="auth__social-networks">
                    <div className="facebook-btn" onClick={handleFacebook}>
                        <div className="facebook-icon-wrapper py-2 facebook">
                            <img className="facebook-icon" src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="facebook button" /> Iniciar con Facebook
                        </div>
                    </div>
                </div>
                <h1 className='text-center'>Iniciar sesión</h1>
                <div className='mx-auto w-75'>
                    <div>
                        <div className="mb-3 mx-auto">
                            <label className='text-start'>Dirección de Correo Electronico</label>
                            <input type="email"
                                name="email"
                                value={email}
                                onChange={handleInputChange} />
                        </div>
                        <div className="mb-3 mx-auto">
                            <label>Contraseña</label>
                            <input type="password"
                                name="password"
                                value={password}
                                onChange={handleInputChange} />
                        </div>
                        <div>
                            <button className='button' type='submit'>Continuar</button>
                        </div>
                    </div>
                </div>
            </form >
            <div className='text-center w-50 mx-auto'>
                <p>¿Eres Nuevo en Amazonas?</p>
                <hr />
            </div>
            <Link className="text-decoration-none" to="/registro">
                <div className="register-btn">
                    <div className="py-2">
                        Crea tu Cuenta
                    </div>
                </div>
            </Link>
        </div >
    )
}
export default Login;
