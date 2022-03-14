import React from 'react'
import { Detalles } from './Detalles'

export const Productos = () => {

    return (
        <div>
            <div className='d-flex'>
                <p className='d-inline-bloch mx-2'><strong>Electronicos</strong></p>
                <p className='d-inline-bloch mx-2'>los mas Vendidos</p>
                <p className='d-inline-bloch mx-2'>Television y Video</p>
                <p className='d-inline-bloch mx-2'>Computo y tabletas</p>
                <p className='d-inline-bloch mx-2'>Audio y Equipos de Sonido</p>
            </div>
            <div>Volver a los resultados</div>
            <Detalles />
        </div>
    )
}
