export default class PersonaDto {
    constructor({ id, nombre, apellido, dni }) {
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
    }
}

export function asDto(pers) {
    if (Array.isArray(pers))
        return pers.map(p => new PersonaDto(p))
    else
        return new PersonaDto(pers)
}
