import { writable } from "svelte/store";

export const puntuacion = writable(["0"]);
export const jugador = writable(["epico"]);

export const puntuacionMaxima = writable(
  localStorage.getItem("puntuacionMaxima") || "",
);
puntuacionMaxima.subscribe((val) =>
  localStorage.setItem("puntuacionMaxima", val),
);
export const puntajes = writable(localStorage.getItem("puntajes") || "");
puntajes.subscribe((val) => localStorage.setItem("puntajes", val));
