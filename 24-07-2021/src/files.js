const fs = require('fs')

/* -------------------------------------------------------------------------- */
/*                                    Files                                   */
/* -------------------------------------------------------------------------- */

/* ---------------------------- Create file sync ---------------------------- */

fs.writeFileSync('archivoSincronico.txt', 'Este es un archivo sincroncico\n')
console.log('Termine')

/* ----------------------------- Read file sync ----------------------------- */

const data = fs.readFileSync('archivoSincronico.txt', 'utf-8')
console.log(data)

/* ---------------------------- Update file sync ---------------------------- */

fs.appendFileSync('./archivoSincronico.txt', 'Este es un update\n')
console.log('Update')
const data1 = fs.readFileSync('archivoSincronico.txt', 'utf-8')
console.log(data1)

/* ---------------------------- Delete fyle sync ---------------------------- */

try {
    fs.unlinkSync('archivoSincronico.txt')
    console.log('delete')
} catch (error) {
    throw new Erro(error.message)
}

/* --------------------------- Ejercicio resuelto --------------------------- */

try {
    fs.writeFileSync('fyh.txt', new Date().toLocaleString())
    const contenido = fs.readFileSync('fyh.txt', 'utf-8')
    console.log(contenido)
} catch (error) {
    throw new Error(`Error en escritura: ${error.message}`)
}

/* ------------------------- CRUD Files asincronicos ------------------------ */

/* ---------------------------- create file async ---------------------------- */
fs.writeFile('./archivo2.txt', 'Contenido archivo 2\n', (error) => {
    if (error) {
        console.log(error)
        throw new Error('Error: ' + error.message)
    } else {
        console.log('Async crear => creado')
    }
})

/* ----------------------------- read file async ----------------------------- */

fs.readFile('./archivo2.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log(error)
        throw new Error('Error: ' + error.message)
    } else {
        console.log('Async leer => ', data)
    }
})

/* ---------------------------- File update async --------------------------- */
fs.appendFile('./archivo2.txt', 'Agregar\n', (error) => {
    if (error) {
        console.log(error)
        throw new Error('Error: ' + error.message)
    } else {
        console.log('Async agregar => agregado')
    }
})

/* ----------------------------- Borrar archivo ----------------------------- */

fs.unlink('./archivo2.txt', (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Async eliminar => Eliminado')
    }
})

/* -------------------------------------------------------------------------- */
/*                               Otros comandos                               */
/* -------------------------------------------------------------------------- */

/* ------------------------------ Crear carpeta ----------------------------- */

fs.mkdir('nuevaCarpeta', (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Crear carpeta')
        fs.writeFileSync('./nuevaCarpeta/nuevoArchivo.txt', 'Contenido')
    }
})

/* ------------------------------ Leer carpeta ------------------------------ */

fs.readdir('./nuevaCarpeta', (error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }
})

/* -------------------------------- Solucion async -------------------------------- */

// ejecutar en la terminal:
// npm init -y
// antes de correr el archivo!

fs.readFile('package.json', 'utf-8', (error, contenido) => {
    if (error) {
        throw new Error(`Error en lectura: ${error}`)
    }

    console.log('package.json: lectura exitosa')

    const info = {
        contenidoStr: contenido,
        contenidoObj: JSON.parse(contenido),
        size: contenido.length,
    }

    console.log(info)

    fs.writeFile('info.txt', JSON.stringify(info, null, 2), (error) => {
        if (error) {
            throw new Error(`Error en escritura: ${error}`)
        }
        console.log('info.txt: escritura exitosa')
    })
})

/* -------------------------------------------------------------------------- */
/*                          ASincroncio con promesas                          */
/* -------------------------------------------------------------------------- */

function leerPromisesThenCatch() {
    fs.promises
        .readFile('./nuevaCarpeta/nuevoArchivo.txt', 'utf-8')
        .then((data) => console.log('PromisesThenCatch =>', data))
        .catch((error) => console.log(error))
}

leerPromisesThenCatch()

function leerThenCatch() {
    fs.promises.readFile('./nuevaCarpeta/nuevoArchivo.txt', 'utf-8')
        .then((data) => console.log('+++++++', data))
        .catch((error) => console.log(error))
}

// leerThenCatch()

async function leerAsyncAwait() {
    try {
        const response = await fs.promises.readFile(
            './nuevaCarpeta/nuevoArchivo.txt',
            'utf-8',
        )
        console.log('Async/Await => ', response)
    } catch (error) {
        console.log(error)
    }
}

leerAsyncAwait()
