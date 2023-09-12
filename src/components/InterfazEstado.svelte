<script lang="ts">
  import { puntuacion, puntuacionMaxima } from "@lib/manejarPuntuacion";
  setInterval(() => {
    if (parseInt($puntuacion[0]) > parseInt($puntuacionMaxima[0])) {
      $puntuacionMaxima = $puntuacion;
    }
  }, 200);
</script>

<div class="flex flex-col justify-center gap-4">
  <div
    class="border border-4 rounded-lg border-red-500 bg-red-400 p-4 w-48 break-words"
  >
    <div>
      <h1 class="text-2xl text-red-100 font-black">Puntuación</h1>
      <p class="text-xl text-red-200 font-black">{$puntuacion}</p>
    </div>
  </div>
  <div
    class="border border-4 rounded-lg border-blue-500 bg-blue-400 p-4 w-48 break-words"
  >
    <div>
      <h1 class="text-2xl text-sky-100 font-black">Puntuación máxima</h1>
      <p class="text-xl text-sky-200 font-black">{$puntuacionMaxima}</p>
    </div>
  </div>
</div>
