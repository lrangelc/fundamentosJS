var mes = prompt('En que mes naciste?');
if (mes != null) {
    switch (mes.toLowerCase()) {
        case 'enero':
        case 'janvier':
            console.log('JANUARY');
            break;

        case 'febrero':
        case 'Février':
            console.log('FEBRURY');
            break;

        case 'marzo':
        case 'marche':
            console.log('MARCH');
            break;

        case 'abril':
        case 'avril':
            console.log('APRIL');
            break;

        case 'mayo':
        case 'peut':
            console.log('MAY');
            break;

        case 'junio':
        case 'juin':
            console.log('JUNE');
            break;

        case 'julio':
        case 'juillet':
            console.log('JULY');
            break;

        case 'agosto':
        case 'août':
            console.log('AUGUST');
            break;

        case 'septiembre':
        case 'septembre':
            console.log('SEPTEMBER');
            break;

        case 'octubre':
        case 'octobre':
            console.log('OCTUBRE');
            break;

        case 'noviembre':
        case 'novembre':
            console.log('NOVEMBER');
            break;

        case 'diciembre':
        case 'décembre':
            console.log('DECEMBER');
            break;

        default:
            console.log('MES INVALIDO');
            break;
    }
} else {
    alert('Adios!!!');
}