import { Bounce, toast } from 'react-toastify';

export const getToastConfig = (timeout, position) => {
    return {
        position: position ? position : "top-right",
        autoClose: timeout,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme:"light",
        transition: Bounce
    }
}

export const showSuccessMessage = (msg, position) => {
    toast.success(msg, getToastConfig(2000, position));
}

export const showErrorMessage = (error, position) => {
    toast.error(error, getToastConfig(2000, position));
}
export const showInfoMessage = (info, position) => {
    toast.info(info, getToastConfig(3000, position));
}
export const showWarningMessage = (warning, position) => {
    toast.warning(warning, getToastConfig(3000, position));
}
