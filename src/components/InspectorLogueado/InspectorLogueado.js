import React, { Component } from "react";
import { Container, Typography } from "@material-ui/core";
import estilos from "./InspectorLogueado.module.css";


class InspectorLogueado extends Component {
    render() {
        return (
            <Container className={estilos.contenedor}>
                <div className={estilos.titulos}>
                    <Typography align="center" variant="h3">
                        Utilice la aplicación móvil de MultApp
                    </Typography>
                    <Typography align="center" variant="h5">
                        La aplicación web es sólo para Supervisores y Administradores
                    </Typography>
                </div>
            </Container>
        );
    }
}

export default InspectorLogueado;