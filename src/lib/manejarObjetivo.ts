import type { mapaD } from "@lib/generarMapa";
import { PERSONAJE, OBJETIVO } from "@lib/variables";

function invocarObjetivo(mapa: mapaD[]) {
  const generarRand = () => Math.floor(Math.random() * mapa.length) + 1;
  let rand = generarRand();
  if (mapa[rand].entidad == PERSONAJE) {
    rand = generarRand();
  }
  mapa[rand].entidad = OBJETIVO;
}

export function verificarObjetivo(mapa: mapaD[]) {
  let estadoObjetivo = false;
  mapa.find((casilla) => {
    if (casilla.entidad == OBJETIVO) {
      estadoObjetivo = true;
    }
  });
  return estadoObjetivo;
}

export function manejarObjetivo(mapa: mapaD[]) {
  if (verificarObjetivo(mapa)) {
    return;
  }
  invocarObjetivo(mapa);
}
