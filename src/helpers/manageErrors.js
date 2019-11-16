const showErrors = ({errors}) => {
	const errores = new Map();
	Object.values(errors).forEach(error => {
		let mensajes = [];
		if(errores.has(error.param)){
			mensajes.length = 0;
			mensajes.push(...errores.get(error.param));
			mensajes.push(error.msg);
			errores.set(error.param, mensajes);
		}else{
			mensajes.push(error.msg);
			errores.set(error.param, mensajes);
		}
	});

	return errores || null;
}

module.exports = { showErrors };