<script setup>
import { ref, computed } from "vue";
import { Doughnut } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";

const props = defineProps({
  labels: {
    type: Array,
    default: () => [
      "អតីតសិស្ស",
      "ប្រភេទនៃអាហារូបករណ៍",
      "ចំនួនថ្នាក់",
      "ជំនាន់",
    ],
  },
  bgColor: {
    type: Array,
    default: () => ["#41B883", "#61DAFB", "#DD0031", "#FF3E00"],
  },
  hoverBgColor: {
    type: Array,
    default: () => ["#35495E", "#21A1C4", "#A60024", "#CC3100"],
  },
  data: { type: Array, default: () => [40, 30, 20, 10] },
});

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const chartData = computed(() => {
  return {
    labels: props.labels,
    datasets: [
      {
        backgroundColor: props.bgColor,
        hoverBackgroundColor: props.hoverBgColor,
        data: props.data,

        // style Doughnut
        borderWidth: 4,
        borderColor: "#ffffff",
        hoverBorderWidth: 2,
        hoverBorderColor: "#ffffff",
        borderRadius: 6,
        spacing: 4,
      },
    ],
  };
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  cutout: "50%",
  radius: "95%",
  plugins: {
    legend: {
      display: false,
      position: "right",
      labels: {
        color: "#333",
        font: {
          size: 12,
          family: "Khmer OS Battambang",
          weight: "normal",
        },
        usePointStyle: true,
        pointStyle: "circle",
      },
    },
    tooltip: {
      backgroundColor: "rgba(0, 50, 98, 0.9)",
      titleColor: "#fff",
      bodyColor: "#fff",
      family: "Khmer OS Battambang",
      padding: 12,
      cornerRadius: 5,
      displayColors: true,

      titleFont: {
        family: "Khmer OS Battambang",
        size: 10,
        weight: "bold",
      },

      bodyFont: {
        family: "Khmer OS Battambang",
        size: 12,
        weight: "normal",
      },
    },
  },
});
</script>

<template>
  <div class="chart-wrapper">
    <h3 class="title">ក្រាព្វរបស់ប្រព័ន្ធ</h3>
        <div class="chart-container">
      <Doughnut :data="chartData" :options="chartOptions" />
    </div>
    <div class="custom-legend">
      <div v-for="(label, index) in labels" :key="index" class="legend-item">
        <div class="legend-left">
          <span
            class="color-dot"
            :style="{ backgroundColor: bgColor[index] }"
          ></span>
          <span class="legend-label">{{ label }}</span>
        </div>
        <span class="legend-value">{{ data[index] }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

.chart-wrapper {
    background: #ffffff;
    padding: 24px;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  width: 100%;
  border: var(--border-1);
}

.chart-wrapper .title {
  font-family: var(--font-khmer);
  font-weight: var(--font-weight-semibold);
  font-size: var(--text-md);
}

.chart-container {
  position: relative;
  height: 150px;
  width: 100%;
}

.custom-legend {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.legend-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.legend-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.color-dot {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}

.legend-label {
  font-family: "Khmer OS Battambang", sans-serif;
  font-size: var(--text-xs);
  color: #4a5568;
}

.legend-value {
  font-family: "Khmer OS Battambang", sans-serif;
  font-size: var(--text-sm);
  font-weight: bold;
  color: #2d3748;
}
</style>
