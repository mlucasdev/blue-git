const paletasService = require("../services/paletas.service.js");

const homeController = (req, res) => {
  res.send("home");
};

const findPaletasController = (req, res) => {
  const allPaletas = paletasService.findPaletasService();
  res.send(allPaletas);
};

const findPaletaByIdController = (req, res) => {
  const idParam = req.params.id;
  const chosenPaleta = paletasService.findPaletasByIdService(idParam);
  res.send(chosenPaleta);
};

const addPaletaController = (req, res) => {
  let newPaleta;

  if (req.body.id) {
    newPaleta = paletasService.addPaletaService(req.body);
  } else {
    res.send({ err: "Id obrigatório" });
  }

  if (newPaleta == "ok") {
    res.send({ message: "Paleta cadastrada com sucesso" });
  } else {
    res.send({ err: "Paleta não cadastrada" });
  }
};

const updatePaletaController = (req, res) => {
  const idParam = Number(req.params.id);
  const paletaEdit = req.body;
  const updatePaleta = paletasService.updatePaletaService(idParam, paletaEdit);
  res.send(updatePaleta);
};

const deletePaletaController = (req, res) => {
  const idParam = req.params.id;
  paletasService.deletePaletaService(idParam);
  res.send({ message: "Paleta deletada com sucesso!" });
};

module.exports = {
  findPaletasController,
  findPaletaByIdController,
  homeController,
  addPaletaController,
  updatePaletaController,
  deletePaletaController,
};
