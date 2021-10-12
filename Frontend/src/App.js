import dotenv from "dotenv";
import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import ProductosContext from "./context/productos.context";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar.component";
import InformacionPage from "./pages/Informacion";
import CrearProductoPage from "./pages/CrearProducto";
import CrearMarcaPage from "./pages/CrearMarca";
import EditarProductoPage from "./pages/EditarProducto";
import EditarMarcaPage from "./pages/EditarMarca";
import EliminarProductoPage from "./pages/EliminarProducto";
import EliminarMarcaPage from "./pages/EliminarMarca";

dotenv.config();

function App() {
  const [productos, setProductos] = React.useState([]);
  const [marcas, setMarcas] = React.useState([]);

  return (
    <ProductosContext.Provider
      value={{ productos, setProductos, marcas, setMarcas }}
    >
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={InformacionPage} />
            <Route exact path="/crearproducto" component={CrearProductoPage} />
            <Route exact path="/crearmarca" component={CrearMarcaPage} />
            <Route
              exact
              path="/editarproducto"
              component={EditarProductoPage}
            />
            <Route exact path="/editarmarca" component={EditarMarcaPage} />
            <Route
              exact
              path="/eliminarproducto"
              component={EliminarProductoPage}
            />
            <Route exact path="/eliminarmarca" component={EliminarMarcaPage} />
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </div>
    </ProductosContext.Provider>
  );
}

export default App;
