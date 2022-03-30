import '../css/componentes.css'
import webpacklogo from '../assets/img/webpack-logo.png'

export const saludar = (nombre) => {

    console.log('Creando etiqueta h1')
    const saludar = document.createElement('h1');
    saludar.innerText = `Hola ${nombre}`;
    document.body.append(saludar);

    //img
   /*  console.log(webpacklogo);
    const img = document.createElement('img');
    img.src = webpacklogo;
    document.body.append(img); */

}