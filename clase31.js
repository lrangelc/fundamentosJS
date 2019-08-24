const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true };

function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(url, opts, callback)
        .fail(function () {
            console.log(`Sucedio un error. No se pudo obtener el personaje ${id}`);
        });
}

obtenerPersonaje(1, function (data) {
    console.log(`Hi! my name is ${data.name}`);

    obtenerPersonaje(2, function (data) {
        console.log(`Hi! my name is ${data.name}`);

        obtenerPersonaje(3, function (data) {
            console.log(`Hi! my name is ${data.name}`);

            obtenerPersonaje(4, function (data) {
                console.log(`Hi! my name is ${data.name}`);

                obtenerPersonaje(5, function (data) {
                    console.log(`Hi! my name is ${data.name}`);

                    obtenerPersonaje(6, function (data) {
                        console.log(`Hi! my name is ${data.name}`);

                        obtenerPersonaje(7, function (data) {
                            console.log(`Hi! my name is ${data.name}`);
                        });
                    })
                })
            })
        });
    });
});

console.log('Hi');