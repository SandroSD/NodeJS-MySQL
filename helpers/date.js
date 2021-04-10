const moment = require('moment');

const parseDate = (date) => {
    return moment(date).format("DD/MM/YYYY");
}

module.exports = {
    parseDate
}