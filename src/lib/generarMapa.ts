type mapaD = {
  id: number;
  entidad: string | undefined;
};

export function generarMapa() {
  const json: madaD[] = [];
  for (let i = 0; i < 101; i++) {
    json.push({ id: i, entidad: undefined });
  }
  return json;
}
