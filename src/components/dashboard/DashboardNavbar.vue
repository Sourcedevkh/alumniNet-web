<script setup>
    import { Search } from 'lucide-vue-next';
</script>

<template>
  <header class="topbar">
    <div class="search-box">
      <Search class="search-icon" size="18" />
      <input type="text" placeholder="Search"/>
    </div>
    <div class="user-info">
      <div class="user-text">
        <span class="user-name">PumpuyPikheat</span>
        <span class="user-role">Admin</span>
      </div>
      <div class="avatar">PP</div>
    </div>
  </header>
</template>

<style scoped>
.topbar {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 16px 28px;
  background: var(--color-bg-sidebar-navbar);
  box-shadow: var(--shadow-md);
}

.search-box {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  max-width: 360px;
  min-width: 220px;
  background: #ffffff;
  border: 1px solid var(--color-gray-pale);
  border-radius: 10px;
  padding: 8px 14px;
  box-sizing: border-box;
}

.search-box input {
  width: 100%;
  min-width: 0;
  border: none;
  outline: none;
  background: transparent;
  font-size: 13px;
  color: #334155;
  font-family: "DM Sans", sans-serif;
}

.search-icon {
  font-size: 13px;
  color: #94a3b8;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.user-text {
  text-align: right;
  border-left: 3px solid var(--color-gray-pale);
  padding-left: 12px;
}

.user-name {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: #1e293b;
}

.user-role {
  display: block;
  font-size: 11px;
  color: #94a3b8;
}

.avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1e3a8a, #3b82f6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
}
</style>