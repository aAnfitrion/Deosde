<script lang="ts">
  import { generarMapa } from "@lib/generarMapa";
  import { PERSONAJE } from "@lib/variables";
  import { personajeMovimiento } from "@lib/manejarPersonaje";

  import { Motion } from "svelte-motion";
  let i = { translateX: 0, translateY: 0 };

  let mapa = generarMapa();
  mapa[1].entidad = PERSONAJE.nombre;
  mapa[1].icono = PERSONAJE.icono;

  function teclaPresionada(e: any) {
    const mover = (a: string, b: number, c: number) => {
      i = { translateX: b, translateY: c };
      setTimeout(() => {
        personajeMovimiento(mapa, a);
        i = { translateX: 0, translateY: 0 };
      }, 100);
    };
    switch (e.keyCode) {
      case 39:
        mover("derecha", 36, 0);
        break;
      case 37:
        mover("izquierda", -36, 0);
        break;
      case 40:
        mover("abajo", 0, 36);
        break;
      case 38:
        mover("arriba", 0, -36);
        break;
    }
    mapa = mapa;
  }
</script>

<div class="flex justify-center mt-8">
  <div class="grid grid-cols-12 gap-1">
    {#each mapa as baldosa}
      {#if baldosa.id != 0}
        {#if baldosa.entidad == PERSONAJE.nombre}
          <Motion animate={i} transition={{ duration: 0.1 }} let:motion>
            <div
              class={`col-span-1 h-8 w-8 border border-neutral-500 ${baldosa.icono} `}
              use:motion
            />
          </Motion>
        {:else}
          <div class={`col-span-1 h-8 w-8 `} />
        {/if}
      {/if}
    {/each}
  </div>
</div>
<svelte:window on:keydown|preventDefault={teclaPresionada} />
