import React, { Component } from "react";
import { Button, Container, Typography } from "@material-ui/core";
import CambiarContrasena from "../CambiarContrasena/CambiarContrasena";
import { connect } from "react-redux";
import { abrirDialogCambiarContrasena, cerrarDialogCambiarContrasena } from "../../store/actions/cambiarContrasena";
import Notifier from "../Notifier/Notifier";

class Perfil extends Component {
    render() {
        return (
            <Container>
                <Typography>Próximamente</Typography>
                <Button variant="contained" color="primary" onClick={this.props.abrirDialogCambiarContrasena}>Cambiar contraseña</Button>
                <CambiarContrasena open={this.props.mostrarDialog} onClose={this.props.cerrarDialogCambiarContrasena} />
                <Notifier />
            </Container>
        );
    };
}

const mapStateToProps = state => {
    return {
        mostrarDialog: state.cambiarContrasena.mostrarDialog,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        abrirDialogCambiarContrasena: () => dispatch(abrirDialogCambiarContrasena()),
        cerrarDialogCambiarContrasena: () => dispatch(cerrarDialogCambiarContrasena()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Perfil);