import * as negocio from '../negocio/personas.js'

/* -------------------------------------- */
/*             HTML ON WIRE               */
/* -------------------------------------- */
export const getHtmlOnwire = async (req, res) => {
    res.render('plantilla-html-onwire', { personas: await negocio.obtenerPersonas() })
}

export const postHtmlOnwire = async (req, res) => {
    let persona = req.body
    await negocio.agregarPersona(persona)
    res.redirect('/html-onwire')
}

/* -------------------------------------- */
/*             DATA ON WIRE               */
/* -------------------------------------- */
export const getDataOnwire = (req, res) => {
    res.sendFile(process.cwd() + '/views/plantilla-data-onwire.html')
}

export const postDataOnwire = async (req, res) => {
    let persona = req.body
    console.log(persona)
    await negocio.agregarPersona(persona)
    res.json({ persona })
}

export const dataJSON = async (req, res) => {
    res.json({ personas: await negocio.obtenerPersonas() })
}
