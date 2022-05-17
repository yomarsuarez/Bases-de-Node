const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
const colors = require("colors");

console.clear();
// const [, , arg3 = "base=3"] = process.argv;
// const [, base = 7] = arg3.split("=");

// const base = 17;

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "creado"))
  .catch((err) => console.log(err));
