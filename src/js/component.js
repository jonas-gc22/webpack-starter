import '../css/component.css';

export const saludo = ( name ) =>{

    const h1 = document.createElement('h1');
    h1.innerText = `Picolini, ${ name }`;

    document.body.append( h1 );

    console.warn('Desde la Consola');

}
