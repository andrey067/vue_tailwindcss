<template>
  <div>
    <Fonts_Colors />
    <EspacamentoElementos />
    <div>
      <BodasElementos />
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Fonts_Colors from './components/Fonts_Colors.vue';
import EspacamentoElementos from './components/EspacamentoElementos.vue';
import BodasElementos from './components/BodasElementos.vue';

export default defineComponent({
  name: 'App',
  components: {
    Fonts_Colors,
    EspacamentoElementos,
    BodasElementos
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
