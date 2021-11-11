<template>
  <BarChart :chart-data="testData" />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { BarChart } from 'vue-chart-3';

export default defineComponent({
  name: 'Home',
  components: { BarChart },
  setup() {
    const testData = {
      labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
      datasets: [
        {
          data: [30, 40, 60, 70, 5],
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
        },
      ],
    };

    return { testData };
  },
});
</script>
