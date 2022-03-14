import React from 'react'
import "../style/navbar.css"

export const Navbar = () => {
    return (
        <div className='d-block w-100'>
            <div className='d-block part1 w-100'>
                <img className='mx-1 mb-3 d-inline-block logo' src="https://res.cloudinary.com/donoutoby/image/upload/v1647194087/amazonas/logo-amazon_d4kexv.svg" />
                <div className='mx-2 d-inline-block'>
                    <p className='mb-0'>Hola</p>
                    <div className="d-flex mt-0">
                        <img src="https://res.cloudinary.com/donoutoby/image/upload/v1647233134/amazonas/gps_z2yg45.png" />
                        <h6>Elige tu direccion</h6>
                    </div>
                </div>
                <form className='mx-1 d-inline-block'>
                    <div className="input-group d-inline-block">
                        <button className="btn btn-outline-secondary d-inline-block dep dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Todos los Departamentos</button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Cucuta</a></li>
                            <li><a className="dropdown-item" href="#">Los Patiod</a></li>
                            <li><a className="dropdown-item" href="#">Villa del Rosario</a></li>
                        </ul>
                        <input type="text" aria-label="First name" className="form-control d-inline-block" />
                        <button className="btn btn-outline-secondary d-inline-block buscar" type="button"><img src="https://res.cloudinary.com/donoutoby/image/upload/v1647238815/amazonas/search_vxirj9.png" /></button>
                    </div>
                </form>
                <div className='mx-1 d-inline-block'>
                    <p className='mb-0'>Hola, identificate</p>
                    <button class="btn btn-outline-secondary dropdown-toggle logout" type="button" data-bs-toggle="dropdown" aria-expanded="false">Cuentas y Listas</button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Mi Cuenta</a></li>
                        <li><a class="dropdown-item" href="#">logout</a></li>
                    </ul>
                </div>

                <div className='mx-2 d-inline-block'>
                    <p className='mb-0'>Devoluciones</p>
                    <a>y Pedidos</a>
                </div>

                <div className='mx-2 d-inline-block'>
                    <img src="https://res.cloudinary.com/donoutoby/image/upload/v1647241030/amazonas/shopping-cart_kujn4a.svg" /> Carrito
                </div>
            </div >
            <div className='w-100 part2 d-flex'>
                <div className='d-inline-bloch mx-2'>
                    <img src='https://res.cloudinary.com/donoutoby/image/upload/v1647249485/amazonas/menu_afgzyb.png' /> Todo
                </div>
                <p className='d-inline-bloch mx-2'>Tarjeta de regalo</p>
                <p className='d-inline-bloch mx-2'>Prime</p>
                <p className='d-inline-bloch mx-2'>Los Mas Vendidos</p>
                <p className='d-inline-bloch mx-2'>AmazonBasics</p>
                <p className='d-inline-bloch mx-2'>Computo y Tabletas</p>
                <p className='d-inline-bloch mx-2'>Los Mas Regalados</p>

            </div>
        </div >
    )
}
