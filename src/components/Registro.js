import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../hook/useForm";
import { registroEmailPasswordNombre } from "../redux/actions/actionRegister";
import "../style/login.css"

export const Registro = () => {

    const dispatch = useDispatch()

    const [formValues, handleInputChange] = useForm({
        nombre: "lordkitsune",
        email: "lordkitsune28@gmail.com",
        pass1: "123",
        pass2: "123"
    })

    const { nombre, email, pass1, pass2 } = formValues

    const handleRegistro = (e) => {
        e.preventDefault();
        dispatch(registroEmailPasswordNombre(email,pass1,nombre))
    }

    return (
        <div className="my-5 w-100">
            <div className='w-50 mx-auto'><div className='mx-auto w-25'><img src="https://res.cloudinary.com/donoutoby/image/upload/v1647194087/amazonas/logo-amazon_d4kexv.svg" /></div></div>
            <div className='mx-auto w-75'>
                <div className="mx-auto w-75">
                    <form className="my-5 form py-2 my-3 w-50 mx-auto" onSubmit={handleRegistro}>
                        <div className="mb-3 mx-auto w-75" controlId="formBasicName">
                            <label className='text-start'>Nombre</label>
                            <input
                                type="text"
                                placeholder="Enter name"
                                name="nombre"
                                value={nombre}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-3 mx-auto w-75" controlId="formBasicEmail">
                            <label className='text-start'>Correo</label>
                            <input
                                type="email"
                                placeholder="email"
                                name="email"
                                value={email}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-3 mx-auto w-75" controlId="formBasicPassword">
                            <label className='text-start'>Contraseña</label>
                            <input
                                type="password"
                                placeholder="Password"
                                name="pass1"
                                value={pass1}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-3 mx-auto w-75" controlId="formBasicRepitPassword">
                            <label className='text-start'>Repita contraseña</label>
                            <input
                                type="password"
                                placeholder="Password"
                                name="pass2"
                                value={pass2}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-3 mx-auto w-75">
                            <button className='button w-50 d-inline-block' type="submit">
                                Registrarse
                            </button>

                            <Link className="text-decoration-none" to="/">
                                <div className="register-btn ms-4 w-25 d-inline-block">
                                <div className="py-2">
                                    login
                                </div>
                            </div></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}