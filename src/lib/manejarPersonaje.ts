import type { madaD } from "@lib/generarMapa";
import { PERSONAJE } from "@lib/variables.ts";

const personajeEncontrar = (a: mapaD) => {
  let personajeEncontrado: number;
  a.find((baldosa) => {
    if (baldosa.entidad == PERSONAJE.nombre) {
      personajeEncontrado = baldosa.id;
    }
  });
  return personajeEncontrado;
};

export function personajeMovimiento(a: mapaD, b: string) {
  const posicion = personajeEncontrar(a);
  const posicionMover = (aa: number) => {
    a[posicion].entidad = undefined;
    a[posicion + aa].entidad = PERSONAJE.nombre;
  };

  if (b == "derecha") {
    if ((posicion + 1) % 12 == 1) {
      return;
    }
    posicionMover(1);
  }
  if (b == "izquierda") {
    if ((posicion - 1) % 12 == 0) {
      return;
    }
    posicionMover(-1);
  }
  if (b == "abajo") {
    if (posicion > 132) {
      return;
    }
    posicionMover(12);
  }
  if (b == "arriba") {
    if (posicion < 13) {
      return;
    }
    posicionMover(-12);
  }
}
