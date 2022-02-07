class persistenciaMemory {
    constructor() {
        this.personas = []
    }
    obtenerPersonas = async () => {
        return this.personas
    }
    agregarPersona = async persona => {
        this.personas.push(persona)
    }
}

export default new persistenciaMemory()