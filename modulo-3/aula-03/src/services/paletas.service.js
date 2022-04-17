const paletas = [
  {
    id: 1,
    sabor: "Açaí com Leite Condensado",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "./assets/images/acai-com-leite-condensado.png",
    preco: 10.0,
  },
  {
    id: 2,
    sabor: "Banana com Nutella",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "./assets/images/banana-com-nutella.png",
    preco: 10.0,
  },
  {
    id: 3,
    sabor: "Chocolate Belga",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "./assets/images/chocolate-belga.png",
    preco: 7.0,
  },
];

const findPaletasService = () => {
  return paletas;
};

const findPaletasByIdService = (id) => {
  return paletas.find((item) => item.id == id);
};

const addPaletaService = (item) => {
  paletas.push(item);
  return "ok";
};

const updatePaletaService = (id, paletaEdited) => {
  paletaEdited["id"] = id;
  const paletaIndex = paletas.findIndex((paleta) => paleta.id == id);
  paletas[paletaIndex] = paletaEdited;
  return paletaEdited;
};

const deletePaletaService = (id) => {
  const paletaIndex = paletas.findIndex((paleta) => paleta.id == id);
  return paletas.splice(paletaIndex, 1);
};

module.exports = {
  findPaletasService,
  findPaletasByIdService,
  addPaletaService,
  updatePaletaService,
  deletePaletaService,
};
