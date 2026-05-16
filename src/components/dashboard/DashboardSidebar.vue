<script setup>
// icon
import Dashboard from "../icons/Dashboard.vue";
import Add from "../icons/Add.vue";
import ArrowLeft from "../icons/Arrow-left.vue";
import Book from "../icons/Book.vue";
import file from "../icons/file.vue";
import Graduation from "../icons/Graduation.vue";
import Home from "../icons/Home.vue";
import User from "../icons/User.vue";
import Layer from "../icons/Layer.vue";

const dashboard = [
  {
    name: "ផ្ទាំងគ្រប់គ្រង",
    icon: Dashboard,
    path: "Dashboard",
    color: "#ffffff",
  },
];

const management = [
  {
    name: "ផ្ទាំងគ្រប់គ្រងសិស្ស",
    icon: User,
    path: "Students",
    color: "#ffffff",
  },
  {
    name: "ផ្ទាំងគ្រប់គ្រងថ្នាក់",
    icon: Home,
    path: "Classes",
    color: "#ffffff",
  },
  {
    name: "អាហារូបករណ៍",
    icon: Graduation,
    path: "Scholarships",
    color: "#ffffff",
  },
  {
    name: "ផ្ទាំងគ្រប់គ្រងជំនាន់",
    icon: Layer,
    path: "Generations",
    color: "#ffffff",
  },
  {
    name: "ផ្ទាំងគ្រប់គ្រងមុខវិជ្ជា",
    icon: Book,
    path: "Subjects",
    color: "#ffffff",
  },
];

const reports = [
  {
    name: "បញ្ចូលពិន្ទុសិស្ស",
    icon: Add,
    path: "Scores",
    color: "#ffffff",
  },
  {
    name: "ប្រណិប័ត្រពិន្ទុ",
    icon: file,
    path: "Reports",
    color: "#ffffff",
  },
];
</script>

<template>
  <aside class="sidebar">
    <!-- Logo -->
    <div class="logo">
      <h1 class="logo-text">AlumiNet</h1>
    </div>

    <!-- Dashboard -->
    <label class="section-title">Dashboard</label>
    <router-link
      v-for="(item, index) in dashboard"
      :key="'mgmt-' + index"
      :to="{ name: item.path }"
      class="menu-item"
    >
      <div class="icon-wrapper">
        <component :is="item.icon" :size="item.size || 20" />
      </div>
      <span>{{ item.name }}</span>
    </router-link>

    <label class="section-title">ផ្ទាំងគ្រប់គ្រងទូទៅ</label>

    <router-link
      v-for="(item, index) in management"
      :key="'mgmt-' + index"
      :to="{ name: item.path }"
      class="menu-item"
    >
      <div class="icon-wrapper">
        <component :is="item.icon" :size="item.size || 20" />
      </div>
      <span>{{ item.name }}</span>
    </router-link>

    <label class="section-title">ផ្ទាំងគ្រប់គ្រងពិន្ទុ</label>

    <router-link
      v-for="(item, index) in reports"
      :key="'report-' + index"
      :to="{ name: item.path }"
      class="menu-item"
    >
      <div class="icon-wrapper">
        <component :is="item.icon" :size="20" />
      </div>
      <span>{{ item.name }}</span>
    </router-link>

    <!-- Logout -->
    <div class="logout">
      <div class="icon logout-icon"><arrow-left /></div>
      <span>ចាកចេញ</span>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 270px;
  height: 100vh;
  background: var(--color-bg-sidebar-navbar);
  padding: 24px 18px;
  display: flex;
  flex-direction: column;
  font-family: "Kantumruy Pro", sans-serif;
  box-shadow: var(--shadow-md);
}

/* Logo */
.logo {
  text-align: center;
  margin: 0 20px;
}

.logo .logo-text {
  color: var(--primary-color);
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-bold);
  border-bottom: 2px solid
    color-mix(in srgb, var(--primary-color), transparent 50%);
  padding-bottom: 14px;
}

/* Section */
.section-title {
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--primary-color);
  margin: 10px 0;
}

/* Menu */
.menu-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 8px 16px;
  border-radius: 15px;
  cursor: pointer;
  color: color-mix(in srgb, var(--primary-color) 70%, transparent);
  transition: var(--transition-slow);
  margin-bottom: 5px;
  text-decoration: none;
}

.menu-item .icon-wrapper {
  width: 30px;
  height: 30px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-color);
}

.menu-item span {
  font-weight: var(--font-weight-medium);
  font-size: var(--text-lg);
}

.menu-item:hover {
  background: rgba(8, 59, 115, 0.08);
  color: #083b73;
}

.menu-item.active {
  background: var(--primary-color);
  color: var(--color-gray-light);
  box-shadow: 0 8px 18px rgba(8, 59, 115, 0.18);
}

.menu-item.active .icon-wrapper {
  background: var(--color-blue);
}

.menu-item .icon-wrapper.active {
  background: var(--color-blue);
}

/* Icon */
.icon {
  width: 30px;
  height: 30px;
  border-radius: 12px;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-item.active .icon {
  background: var(--color-blue);
}

/* Logout */
.logout {
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  color: #ff4b4b;
  font-weight: 700;
  text-decoration: none;
}

.logout-icon {
  background: #ffe6e6;
  color: #ff4b4b;
}
</style>
