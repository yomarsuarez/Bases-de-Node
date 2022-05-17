const argv = require("yargs")
  .option(
    "b",
    {
      alias: "base",
      type: "number",
      demandOption: true,
      describe: "Base de la tabla de multiplicar",
    },
    "l",
    {
      alias: "listar",
      type: "boolean",
      default: false,
      describe: "Muestra la tabla en consola",
    },
    "h",
    {
      alias: "hasta",
      type: "number",
      default: 10,
      describe: "Muestra hasta donde llega la operación",
    }
  )
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "la base tiene que ser un número";
    }
    return true;

    console.log("yars", argv);
  }).argv;

module.exports = argv;
