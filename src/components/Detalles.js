import React from 'react'
import "../style/detalles.css"
import ReactImageMagnify from 'react-image-magnify';


export const Detalles = () => {
  return (
    <div className='row row-cols-3 w-100'>
          <div className='col me-5 w-50'>
              <ReactImageMagnify {...{
                  smallImage: {
                      alt: 'Wristwatch by Ted Baker London',
                      isFluidWidth: true,
                      src: "https://res.cloudinary.com/donoutoby/image/upload/v1647252306/amazonas/Rectangle_36_ul3uv7.png"
                  },
                  largeImage: {
                      src: "https://res.cloudinary.com/donoutoby/image/upload/v1647252306/amazonas/Rectangle_36_ul3uv7.png",
                      width: 1200,
                      height: 1800
                  }
              }} />
              {/* <img src='https://res.cloudinary.com/donoutoby/image/upload/v1647252306/amazonas/Rectangle_36_ul3uv7.png' /> */}
          </div>
        
          <div className='detalle col'>
              <h1>Canon EOS R6 - Cámara sin Espejo de Marco Completo + Lente RF24-105mm F4 L IS USM</h1>
              <p>Marca: Canon</p>
              <hr />
              <h6>Precio:</h6><h6>$100,669.00</h6><strong>Envio GRATIS. </strong><a>Detalles</a>
              <p>Hasta <strong>18 meses sin intereses</strong> de $5,592.76. <a>Ver mensualidades</a>
                  <a>Solicita tu tarjeta Amazon Recargable</a> y obtén $100 de descuento en tu primera compra mayor a $500</p>
                  <p>Precio: <strong>Negro</strong></p>
              <p>Estilo: <strong>24-105mm USM Kit</strong></p>
              <hr />
              <h3>Acerca de este Articulo</h3>
              <p>- Alta calidad de imagen con un nuevo sensor CMOS de marco completo de 20 megapíxeles.
                  - Procesador de imagen DIGIC X con una gama ISO de 100-102400; ampliable a 204800.
                  - Disparo continuo de alta velocidad de hasta 12 fps con obturador mecánico y obturador electrónico (silencioso) de hasta 20 fps.
                  - CMOS AF de doble pixel, cubre aproximadamente Área 100% con 1.053 AF.
                  - Seguimiento de asuntos de personas y animales* utilizando tecnología de aprendizaje profundo.</p>
          </div>

          <div className='col w-25'></div>
    </div>
  )
}
