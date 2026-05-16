<script setup>
import DashboardNavbar from "@/components/dashboard/DashboardNavbar.vue";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar.vue";
</script>

<template>
    <div class="dashboard-container">
      <aside class="sidebar-wrapper">
        <DashboardSidebar />
      </aside>

      <div class="content-wrapper">
        <header class="navbar-wrapper">
          <DashboardNavbar />
        </header>

        <main class="page-content">
          <router-view />
        </main>
      </div>
    </div>
</template>

<style scoped>
.dashboard-container {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: var(--color-bg-light);
}

.sidebar-wrapper {
  width: 270px;
  height: 100%;
  /* background-color: #ffffff; */
  border-right: 1px solid #e0e0e0;
  flex-shrink: 0;
}

.content-wrapper {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.navbar-wrapper {
  height: 70px;
  /* background-color: #ffffff; */
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.page-content {
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
  scroll-behavior: smooth;
}
</style>
