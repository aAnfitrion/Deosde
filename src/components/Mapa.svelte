<script lang="ts">
  import { generarMapa } from "@lib/generarMapa";

  let mapa = generarMapa();
</script>

<div class="flex justify-center mt-8">
  <div class="grid grid-cols-10 gap-1">
    {#each mapa as baldosa}
      {#if baldosa.id != 0}
        <div class="col-span-1 h-8 w-8 border border-neutral-500"></div>
      {/if}
    {/each}
  </div>
</div>
