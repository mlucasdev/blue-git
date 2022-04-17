const router = require('express').Router();
const paletasController = require("../controllers/paletas.controller.js");

router.get("/", paletasController.homeController);
router.get("/find-paletas", paletasController.findPaletasController);
router.get("/find-paleta/:id", paletasController.findPaletaByIdController);
router.post("/add", paletasController.addPaletaController);
router.put("/update/:id", paletasController.updatePaletaController);
router.delete("/delete/:id", paletasController.deletePaletaController);

module.exports = router;
