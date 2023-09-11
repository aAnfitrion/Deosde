<script lang="ts">
  let jugador = "Epic";
</script>

<div
  class="border border-4 border-neutral-700 bg-neutral-600 p-4 rounded-lg font-black"
>
  <div class="flex justify-between">
    <h1 class="text-2xl text-white">Jugador:</h1>
    <input type="text" bind:value={jugador} class="text-neutral-600 p-1 rounded-lg focus:outline-none">
  </div>
</div>
