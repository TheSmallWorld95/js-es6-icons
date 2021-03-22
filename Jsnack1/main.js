// Creare un array di oggetti: ogni oggetto descriverà una bici
// da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const bikes = [
  {
    name: "Fabio",
    weight: 12,
  },
  {
    name: "Luca",
    weight: 34,
  },
  {
    name: "Giorgio",
    weight: 2,
  },
  {
    name: "Emanuele",
    weight: 21,
  },
  {
    name: "Anselmo",
    weight: 67,
  },
  {
    name: "Roberto",
    weight: 5,
  },
  {
    name: "Michele",
    weight: 87,
  },
]

let min = bikes[0].weight

bikes.forEach((item) => {
  if (item.weight < min) {
    min = item.weight
  }
});

const lighterBike = bikes.filter((item) => item.weight == min)

$("#bici").append(`La bici di ${lighterBike[0].name} pesa ${lighterBike[0].weight} KG , è la più leggera tra tutte.`)
