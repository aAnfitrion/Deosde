<script lang="ts">
  import { jugador } from "@lib/manejarPuntuacion";
  
  let jugadorActivo = $jugador[0];

  setInterval(() => {
    $jugador[0] = jugadorActivo;
  }, 200)
</script>

<div
  class="border border-4 border-neutral-700 bg-neutral-600 p-4 rounded-lg font-black"
>
  <div class="flex justify-between">
    <h1 class="text-2xl text-white">Jugador:</h1>
    <input type="text" bind:value={jugadorActivo} class="text-neutral-600 p-1 rounded-lg focus:outline-none">
  </div>
</div>
