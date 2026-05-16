<script setup>
import { ref } from "vue";
import StatCard from "@/components/ui/StatCard.vue";
import DoughnutChart from "@/components/chartjs/DoughnutChart.vue";
import DatePicker from "@/components/ui/DatePicker.vue";
// icon
import GraduationPage from "@/components/icons/GraduationPage.vue";
import Box from "@/components/icons/Box.vue";
import Rating from "@/components/icons/Rating.vue";
import Time from "@/components/icons/Time.vue";

const stats = ref([
  {
    title: "សិស្សសរុប",
    value: "500",
    percentage: "6.5%",
    bg: "#e9effd",
    color: "#3f6ad8",
    icon: GraduationPage,
  },
  {
    title: "ចំនួនថ្នាក់សរុប",
    value: "500",
    percentage: "8.5%",
    bg: "#fff4de",
    color: "#ffa800",
    icon: Box,
  },
  {
    title: "ប្រភេទអាហាររូបករណ៍",
    value: "500",
    percentage: "9.5%",
    bg: "#e1f9f0",
    color: "#1bc5bd",
    icon: Rating,
  },
  {
    title: "ជំនាន់",
    value: "500",
    percentage: "7.5%",
    bg: "#ffe8e2",
    color: "#f64e60",
    icon: Time,
  },
]);
</script>

<template>
  <main>
    <div class="stat-grid">
      <StatCard
        v-for="(item, index) in stats"
        :key="index"
        :title="item.title"
        :value="item.value"
        :percentage="item.percentage"
        :iconBg="item.bg"
        :iconColor="item.color"
      >
        <template #icon>
          <component :is="item.icon" :style="{ color: item.color }" />
        </template>
      </StatCard>
    </div>
    <div class="graph-grid">
      <DoughnutChart />
      <DatePicker/>
    </div>
  </main>
</template>

<style>
.stat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  background-color: var(--color-bg-card);
}

.graph-grid {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  background-color: var(--color-bg-card);
}
</style>
