<script lang="ts">
  import Mapa from "@cmp/Mapa.svelte";
  import InterfazJugador from "@cmp/InterfazJugador.svelte";
</script>

<div class="flex flex-col gap-4">
  <div class="border border-orange-500 border-4 p-4 bg-amber-300 rounded-lg">
    <Mapa />
  </div>
  <InterfazJugador />
</div>
