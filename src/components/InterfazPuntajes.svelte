<script lang="ts">
  import { jugador, puntajes, puntuacion } from "@lib/manejarPuntuacion";

  type puntajesJsonD = {
    jugador: string;
    puntuacion: string;
  };

  let puntajesJson: puntajesJsonD[] = [];

  if ($puntajes != "") {
    puntajesJson = JSON.parse($puntajes);
  } else {
    puntajesJson.push({ jugador: $jugador[0], puntuacion: $puntuacion[0] });
    $puntajes = JSON.stringify(puntajesJson);
  }

  setInterval(() => {
    let mismoJugador = false;

    puntajesJson.find((marca) => {
      if (marca.jugador == $jugador[0]) {
        mismoJugador = true;
      }
    });

    if (mismoJugador) {
      puntajesJson.find((marca) => {
        if (marca.jugador == $jugador[0]) {
          marca.puntuacion = $puntuacion[0];
        }
      });
    } else {
      puntajesJson.push({ jugador: $jugador[0], puntuacion: "0" });
      $puntuacion[0] = "0";
    }

    puntajesJson.sort((a, b) => parseInt(b.puntuacion) - parseInt(a.puntuacion));

    $puntajes = JSON.stringify(puntajesJson);
    puntajesJson = puntajesJson;
  }, 200);
</script>

<div class="flex items-center justify-end">
  <div
    class="border border-4 border-fuchsia-700 bg-fuchsia-600 rounded-lg p-4 h-96 font-black overflow-hidden"
  >
    <h1 class="text-2xl text-fuchsia-100">Puntajes</h1>
    <ol class="list-decimal list-inside text-fuchsia-200">
      {#each puntajesJson as marca}
        <li class="flex justify-between">
          <span>{marca.jugador}</span>
          <span>{marca.puntuacion}</span>
        </li>
      {/each}
    </ol>
  </div>
</div>
