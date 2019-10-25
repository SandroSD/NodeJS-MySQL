import Usuario from './model';

const getAll = () => {
	console.log("desde controller");
	const usuario = new Usuario();
	usuario.setNombre("Sandro");
	console.log(usuario.getNombre());

}

module.exports = { getAll };