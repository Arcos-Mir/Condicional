/* es una estructura que nos permite tomar desiciones dependiendo de una condicion que le pongamos
es la forma en que nuestro programa o aplicacion o sitio web va a poder decidir dependiendo de loq eu haga 
el usuario por ejemplo si el usuario presiona un boton nostros podemos tomar una desicion de que hacer o 
de manera la pagina puede responder*/

//se escriben de esta manera:
/*if (condicion) {
    codigo
}*/

/*var edad = 17;

if (edad > 18) {
    document.write ('Eres mayor de edad');
}

if (edad < 18) {
    document.write('Eres menor de edad');
}*/

/*var edad = 18;

if (edad >= 18) {
    document.write ('Eres mayor de edad');
}

if (edad < 18) {
    document.write('Eres menor de edad');
}*/

//DE ESTA MANERA SE UTILIZA EL CONDICIONAL PARA 2 CONDICIONES
/*var edad = 18;

if (edad >= 18) {
    document.write ('Eres mayor de edad');
} else{
    document.write('Eres menor de edad');
}*/

//DE ESTA MANERA SE UTILIZA EL CONDICIONAL PARA mas CONDICIONES
/*var pais = 'España';
if ( pais == 'Mexico' ) {
    document.write('Eres mexicano');
}else if ( pais == 'España' ) {
    document.write('Eres español');
}else {
    document.write('No sabemos de donde eres');
}*/

var pais = 'Mexico';

switch (pais) {
    case 'Mexico':
        document.write('Eres mexicano');
        break;
    case 'España':
        document.write('Eres español');
        break;
    case 'Colombia':
        document.write('Eres colombiano');
        break;
    default:
        document.write('No sabemos de donde eres');

}




