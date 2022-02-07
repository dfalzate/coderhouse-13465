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
