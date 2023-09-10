<script lang="ts">
  import { generarMapa } from "@lib/generarMapa";
  import { PERSONAJE } from "@lib/variables";
  import { personajeMovimiento } from "@lib/manejarMapa";

  let mapa = generarMapa();
  mapa[1].entidad = PERSONAJE.nombre;
  mapa[1].icono = PERSONAJE.icono;

  function teclaPresionada(e) {
    switch (e.keyCode) {
      case 39:
        personajeMovimiento(mapa, "derecha");
        break;
      case 37:
        personajeMovimiento(mapa, "izquierda");
        break;
      case 40:
        personajeMovimiento(mapa, "abajo");
        break;
      case 38:
        personajeMovimiento(mapa, "arriba");
        break;
    }
    mapa = mapa;
  }
</script>

<div class="flex justify-center mt-8">
  <div class="grid grid-cols-12 gap-1">
    {#each mapa as baldosa}
      {#if baldosa.id != 0}
        <div
          class={`col-span-1 h-8 w-8 border border-neutral-500 ${baldosa.icono} `}
        ></div>
      {/if}
    {/each}
  </div>
</div>
<svelte:window on:keydown|preventDefault={teclaPresionada} />
