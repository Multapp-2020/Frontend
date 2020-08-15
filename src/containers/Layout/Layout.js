import React, { Component } from "react";
import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import Perfil from "../../components/Perfil/Perfil";
import estilos from "./Layout.module.css";
import BarraSuperior from "../../components/BarraSuperior/BarraSuperior";
import { Container, Box } from "@material-ui/core";
import Usuarios from "../../components/Usuarios/Usuarios";

class Layout extends Component {

    render() {
        return (
            <Box className={estilos.Layout}>
                <BarraSuperior />
                <Container className={estilos.Contenido}>
                    <Switch>
                        <Route path="/perfil" component={Perfil} />
                        <Route path="/usuarios" component={Usuarios} />
                        <Redirect from="/" to="/usuarios" />
                    </Switch>
                </Container>
            </Box>
        );
    }
}

export default withRouter(Layout);