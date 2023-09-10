export type mapaD = {
  id: number;
  entidad: string | undefined;
  icono: string | undefined;
};

export function generarMapa() {
  const json: madaD[] = [];
  for (let i = 0; i < 145; i++) {
    json.push({ id: i, entidad: undefined, icono: undefined });
  }
  return json;
}
