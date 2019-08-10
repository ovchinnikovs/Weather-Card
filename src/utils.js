import moment from 'moment';

export const API_KEY = "47fe20af59af3bbf2a3b306a18fdb1d7";

export const getDateFromDT = (dt, format) => {
    return moment(dt * 1000).format(format);
}
