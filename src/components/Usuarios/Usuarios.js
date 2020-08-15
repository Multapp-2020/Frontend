import React, { Component } from "react";
import { Container, Typography } from "@material-ui/core";
import { withRouter } from "react-router";
import { withSnackbar } from "notistack";

class Usuarios extends Component {
    state = {
        pestanaActual: 0,
    }

    render() {
        return (
            <Container maxWidth="lg" style={{minHeight: "100vh"}}>
                <Typography>Próximamente</Typography>
            </Container>
        );
    }
}

export default withSnackbar(withRouter(Usuarios));