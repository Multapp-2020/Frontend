import * as actionTypes from "./actionTypes";
import Axios from "axios";
import { enqueueSnackbar } from "./notifier";
import { cargarUsuarios } from "./usuarios";
import { cargarUsuario } from "./usuario";
import { traducirError } from "../../share/traducirError";

export const abrirDialogEditar = () => {
    return {
        type: actionTypes.ABRIR_DIALOG_EDITAR,
    }
}

export const cerrarDialogEditar = () => {
    return {
        type: actionTypes.CERRAR_DIALOG_EDITAR,
    }
}

const editarUsuarioStart = () => {
    return {
        type: actionTypes.EDITAR_USUARIO_START,
    }
}

const editarUsuarioConExito = () => {
    return {
        type: actionTypes.EDITAR_USUARIO_CON_EXITO,
    }
}

const editarUsuarioConError = (error) => {
    return {
        type: actionTypes.EDITAR_USUARIO_CON_ERROR,
        error: error,
    }
}

export const editarUsuario = (id, usuario, editar) => {
    return dispatch => {
        dispatch(editarUsuarioStart());
        const data = {
            id: id,
            rol: usuario.rol,
            email: usuario.email,
            telefono: usuario.telefono,
            foto: usuario.foto,
            datos: usuario.datos,
        };
        const headers = {
            "content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
        };
        // si editar es true, edita el usuario, si es false crea uno nuevo
        let url = editar ? "/editUsuario" : "/addUsuario";
        Axios.post(url, data, headers)
            .then(response => {
                dispatch(editarUsuarioConExito());
                let texto = editar ? "Usuario actualizado exitosamente" : "Usuario creado exitosamente";
                dispatch(enqueueSnackbar({message: texto, options: {variant: "success"}}));
                if (editar) {
                    dispatch(cargarUsuario(id));
                }
                else {
                    dispatch(cargarUsuarios());
                }
                dispatch(cerrarDialogEditar());
            }).catch(error => {
                dispatch(editarUsuarioConError(error));
                dispatch(enqueueSnackbar({message: traducirError(error.response.data.message), options: {variant: "error"}}));
            });
    }
}