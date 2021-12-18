export default class PrimeraConexion {
  static instancia;

  constructor() {
    if (!PrimeraConexion.instancia) {
      this.hora = new Date().toLocaleString();
      PrimeraConexion.instancia = this;
      console.log("Guardar hora");
    } else {
      console.log(this);
      console.log(PrimeraConexion.instancia);
      console.log("Recuperar hora");
      return PrimeraConexion.instancia;
    }
  }
  obtenerHora() {
    return this.hora;
  }
}
