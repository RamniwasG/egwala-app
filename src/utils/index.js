import moment from 'moment';
import RestAPI from '../Services/apis';

export const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const clearLocalStorage = () => {
    localStorage.clear()
}
  
export const setAuthToken = (token, refresh) => {
    if (token) {
        // jwtAxios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        localStorage.setItem('token', token);
        localStorage.setItem('refresh', refresh);
    } else {
        delete RestAPI.defaults.headers.common['Authorization'];
        localStorage.removeItem('token');
        localStorage.removeItem('refresh');
    }
};

export const setAuthUser = (user) => {
    return localStorage.setItem('auth_user', JSON.stringify(user))
}

export const getAuthUser = () => {
    return localStorage.getItem('auth_user')
}

export const getAuthToken = () => {
    return localStorage.getItem('token')
}

export const dateFormatToLocalString = (date) => {
    return moment(date).format('DD MMM, YYYY')
}

export const getBooleanFormattedValue = (value) => {
    return value === false ? 'False' : 'True'
}

export const getTomorrowsDate = (nods) => {
    const todayMoment = moment()
    const tomorrowMoment = todayMoment.clone().add(nods,'days')
    return tomorrowMoment.format('dddd MMMM D')
}
