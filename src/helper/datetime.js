import moment from "moment";

export const formatDate = (date) => {
    if (!date) return '';
    return moment(date).format('yyyy-MM-DD');
};

export const monthYear = (date) => {
    if (!date) {
        return '';
    }
    return moment(date).format('MMMM, YYYY');
}

export const formatTime = (time) => {
    if (!time) return '';
    return moment(time).format('HH:mm');
};
