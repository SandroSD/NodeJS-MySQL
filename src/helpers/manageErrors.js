const showErrors = ({errors}) => {
    const errores = new Map();
    Object.values(errores).forEach(error => {
        console.log("aaaa: ", error);
    })
    //console.log("cant: ",errors);
}

module.exports = { showErrors };