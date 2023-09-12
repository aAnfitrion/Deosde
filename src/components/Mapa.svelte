<script lang="ts">
  import { generarMapa } from "@lib/generarMapa";
  import { PERSONAJE, OBJETIVO } from "@lib/variables";
  import { personajeMovimiento } from "@lib/manejarPersonaje";
  import { manejarObjetivo } from "@lib/manejarObjetivo";

  import { Motion } from "svelte-motion";
  let i = { translateX: 0, translateY: 0 };

  let mapa = generarMapa();
  mapa[1].entidad = PERSONAJE;
  mapa[5].entidad = OBJETIVO;
  let permitirMovimiento = true;

  function teclaPresionada(e: any) {
    if (!permitirMovimiento) {
      return;
    }
    const mover = (a: string, b: number, c: number) => {
      i = { translateX: b, translateY: c };
      permitirMovimiento = false;
      setTimeout(() => {
        personajeMovimiento(mapa, a);
        i = { translateX: 0, translateY: 0 };
        permitirMovimiento = true;
      }, 200);
    };
    switch (e.keyCode) {
      case 39:
        mover("derecha", 32, 0);
        break;
      case 37:
        mover("izquierda", -32, 0);
        break;
      case 40:
        mover("abajo", 0, 32);
        break;
      case 38:
        mover("arriba", 0, -32);
        break;
    }
    setTimeout(() => {
      manejarObjetivo(mapa);
      mapa = mapa;
    }, 200);
  }
</script>

<div class="grid grid-cols-12">
  {#each mapa as baldosa}
    {#if baldosa.id != 0}
      {#if baldosa.entidad == PERSONAJE}
        <div class="col-span-1 h-8 w-8 bg-[url('/sprites/Pasto.png')] bg-cover">
          <Motion animate={i} transition={{ duration: 0.2 }} let:motion>
            <img
              class="w-full h-full"
              src={`/sprites/${baldosa.entidad}.png`}
              alt="epic"
              use:motion
            />
          </Motion>
        </div>
      {:else if baldosa.entidad != PERSONAJE && baldosa.entidad}
        <div class="col-span-1 h-8 w-8 bg-[url('/sprites/Pasto.png')] bg-cover">
          <img
            class="w-full h-full"
            src={`/sprites/${baldosa.entidad}.png`}
            alt="epic"
          />
        </div>
      {:else}
        <div
          class="col-span-1 h-8 w-8 bg-[url('/sprites/Pasto.png')] bg-cover"
        />
      {/if}
    {/if}
  {/each}
</div>
<svelte:window on:keydown={teclaPresionada} />
