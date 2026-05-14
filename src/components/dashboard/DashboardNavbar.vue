<template>
    <div class="app-wrapper">
        <!-- Sidebar -->
        <aside class="sidebar">
            <div class="logo">
                <span class="logo-text">AlumiNet</span>
            </div>

            <nav class="nav">
                <p class="nav-label">Dashboard</p>
                <a href="#" class="nav-item active">
                    <span class="nav-icon">🏠</span>
                    <span>ផ្ទាំងគ្រប់គ្រង</span>
                </a>

                <p class="nav-label">ផ្ទាំងគ្រប់គ្រងទូទៅ</p>
                <a href="#" class="nav-item">
                    <span class="nav-icon">👤</span>
                    <span>ផ្ទាំងគ្រប់គ្រងសិស្ស</span>
                </a>
                <a href="#" class="nav-item">
                    <span class="nav-icon">📷</span>
                    <span>ផ្ទាំងគ្រប់គ្រងថ្នាក់</span>
                </a>
                <a href="#" class="nav-item">
                    <span class="nav-icon">🔒</span>
                    <span>អាហារូបករណ៍</span>
                </a>
                <a href="#" class="nav-item">
                    <span class="nav-icon">⚙️</span>
                    <span>ផ្ទាំងគ្រប់គ្រងជំនាន់</span>
                </a>
                <a href="#" class="nav-item">
                    <span class="nav-icon">💬</span>
                    <span>ផ្ទាំងគ្រប់គ្រងមុខវិជ្ជា</span>
                </a>

                <p class="nav-label">ផ្ទាំងគ្រប់គ្រងពិន្ទុ</p>
                <a href="#" class="nav-item">
                    <span class="nav-icon">📊</span>
                    <span>បញ្ចូលពន្ទុ</span>
                </a>
                <a href="#" class="nav-item">
                    <span class="nav-icon">📄</span>
                    <span>របាយការណ៍ពន្ទុ</span>
                </a>
            </nav>

            <div class="logout-btn">
                <span class="nav-icon">🚪</span>
                <span>ចាក់ចេញ</span>
            </div>
        </aside>

        <!-- Main Content -->
        <main class="main">
            <!-- Top Bar -->
            <header class="topbar">
                <div class="search-box">
                    <span class="search-icon">🔍</span>
                    <input type="text" placeholder="Search" v-model="searchQuery" />
                </div>
                <div class="user-info">
                    <div class="user-text">
                        <span class="user-name">PumpuyPikheat</span>
                        <span class="user-role">Admin</span>
                    </div>
                    <div class="avatar">PP</div>
                </div>
            </header>

            <!-- Dashboard Content -->
            <div class="content">
                <!-- Stats Cards -->
                <div class="stats-grid">
                    <div class="stat-card" v-for="stat in stats" :key="stat.label">
                        <div class="stat-left">
                            <p class="stat-label">{{ stat.label }}</p>
                            <h2 class="stat-value">{{ stat.value }}</h2>
                            <p class="stat-change">
                                <span class="arrow-up">↑</span> {{ stat.change }} Up from yesterday
                            </p>
                        </div>
                        <div class="stat-icon" :style="{ background: stat.bg }">
                            <span>{{ stat.icon }}</span>
                        </div>
                    </div>
                </div>

                <!-- Charts Row -->
                <div class="charts-row">
                    <!-- Donut Chart -->
                    <div class="card chart-card">
                        <h3 class="card-title">ក្រាហ្វបង្ហាញ</h3>
                        <div class="donut-wrapper">
                            <svg viewBox="0 0 200 200" class="donut-svg">
                                <circle cx="100" cy="100" r="70" fill="none" stroke="#1a1a2e" stroke-width="30" />
                                <circle cx="100" cy="100" r="70" fill="none" stroke="#3b82f6" stroke-width="30"
                                    stroke-dasharray="264 175" stroke-dashoffset="0" transform="rotate(-90 100 100)" />
                                <circle cx="100" cy="100" r="70" fill="none" stroke="#93c5fd" stroke-width="30"
                                    stroke-dasharray="20 439" stroke-dashoffset="-264"
                                    transform="rotate(-90 100 100)" />
                                <circle cx="100" cy="100" r="70" fill="none" stroke="#6ee7b7" stroke-width="30"
                                    stroke-dasharray="66 373" stroke-dashoffset="-284"
                                    transform="rotate(-90 100 100)" />
                                <circle cx="100" cy="100" r="70" fill="none" stroke="#374151" stroke-width="30"
                                    stroke-dasharray="9 430" stroke-dashoffset="-350" transform="rotate(-90 100 100)" />
                            </svg>
                            <div class="donut-legend">
                                <div class="legend-item" v-for="item in chartLegend" :key="item.label">
                                    <span class="legend-dot" :style="{ background: item.color }"></span>
                                    <span class="legend-label">{{ item.label }}</span>
                                    <span class="legend-val">{{ item.value }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Calendar -->
                    <div class="card calendar-card">
                        <div class="cal-header">
                            <button class="cal-nav" @click="prevMonth">‹</button>
                            <span class="cal-title">{{ calendarTitle }}</span>
                            <button class="cal-nav" @click="nextMonth">›</button>
                        </div>
                        <div class="cal-grid">
                            <div class="cal-day-name" v-for="d in dayNames" :key="d">{{ d }}</div>
                            <div v-for="(day, i) in calendarDays" :key="i" class="cal-day" :class="{
                                'other-month': !day.currentMonth,
                                'today': day.isToday,
                                'empty': !day.date
                            }">
                                {{ day.date || '' }}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Recent Students Table -->
                <div class="card table-card">
                    <div class="table-header">
                        <h3 class="card-title">សិស្សថ្មីសោ​ហ​ស​ខ្ពស់</h3>
                        <button class="more-btn">···</button>
                    </div>
                    <table class="students-table">
                        <thead>
                            <tr>
                                <th>លេខតំបន</th>
                                <th>ចំនួត</th>
                                <th>ថ្ម</th>
                                <th>ប្រភេទស​ហ​គ​ន​ន​ន​ត</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="student in students" :key="student.name">
                                <td>
                                    <div class="student-name">
                                        <div class="student-avatar">{{ student.name[0] }}</div>
                                        {{ student.name }}
                                    </div>
                                </td>
                                <td>{{ student.date }}</td>
                                <td>{{ student.room }}</td>
                                <td>
                                    <span class="badge" :class="badgeClass(student.type)">{{ student.type }}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'AlumniNetDashboard',
    data() {
        return {
            searchQuery: '',
            currentDate: new Date(2026, 5, 1), // June 2026

            stats: [
                { label: 'សិស្សររួប', value: 500, change: '8.5%', icon: '🎓', bg: 'rgba(59,130,246,0.12)' },
                { label: 'ចំនួនដ្ឋកស', value: 500, change: '8.5%', icon: '📦', bg: 'rgba(251,191,36,0.12)' },
                { label: 'ប្រភេទស​ហ​គ​ន', value: 500, change: '8.5%', icon: '📈', bg: 'rgba(16,185,129,0.12)' },
                { label: 'ដំណត', value: 500, change: '8.5%', icon: '⏰', bg: 'rgba(239,68,68,0.12)' },
            ],

            chartLegend: [
                { label: 'ម​ស​ស​ស​ស', value: 521, color: '#1a1a2e' },
                { label: 'ប្រភេទ​ស​ហ​គ​ន', value: 10, color: '#3b82f6' },
                { label: 'ចំ​នួ​ន​ដ្ឋ​ក​ស', value: 23, color: '#6ee7b7' },
                { label: 'ដំ​ណ​ត', value: 2, color: '#374151' },
            ],

            dayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],

            students: [
                { name: 'PumPuyPikheat', date: 'Jun 24, 2026', room: 'M202', type: 'Web Development' },
                { name: 'ChanChav', date: 'Mar 10, 2026', room: 'M203', type: 'CyberSecurity' },
                { name: 'BavChen', date: 'Nov 10, 2026', room: 'M202', type: 'Mobile' },
                { name: 'Kmeng Toch', date: 'Dec 20, 2026', room: 'M303', type: 'CyberSecurity' },
                { name: 'Smos tea o muy', date: 'Jul 25, 2026', room: 'M302', type: 'Web' },
            ],
        };
    },
    computed: {
        calendarTitle() {
            return this.currentDate.toLocaleString('en-US', { month: 'long', year: 'numeric' });
        },
        calendarDays() {
            const year = this.currentDate.getFullYear();
            const month = this.currentDate.getMonth();
            const firstDay = new Date(year, month, 1).getDay();
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            const today = new Date();
            const days = [];

            // Previous month padding
            const prevDays = new Date(year, month, 0).getDate();
            for (let i = firstDay - 1; i >= 0; i--) {
                days.push({ date: prevDays - i, currentMonth: false, isToday: false });
            }
            // Current month
            for (let d = 1; d <= daysInMonth; d++) {
                days.push({
                    date: d,
                    currentMonth: true,
                    isToday: d === today.getDate() && month === today.getMonth() && year === today.getFullYear(),
                });
            }
            // Next month padding
            const remaining = 42 - days.length;
            for (let d = 1; d <= remaining; d++) {
                days.push({ date: d, currentMonth: false, isToday: false });
            }
            return days;
        },
    },
    methods: {
        prevMonth() {
            this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
        },
        nextMonth() {
            this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
        },
        badgeClass(type) {
            const map = {
                'Web Development': 'badge-blue',
                'CyberSecurity': 'badge-orange',
                'Mobile': 'badge-green',
                'Web': 'badge-gray',
            };
            return map[type] || 'badge-gray';
        },
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Siemreap&display=swap');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.app-wrapper {
    display: flex;
    min-height: 100vh;
    background: #f0f4fa;
    font-family: 'DM Sans', sans-serif;
}

/* ── Sidebar ── */
.sidebar {
    width: 250px;
    min-height: 100vh;
    background: #ffffff;
    border-right: 1px solid #e8edf5;
    display: flex;
    flex-direction: column;
    padding: 24px 10px;
    position: sticky;
    top: 0;
    height: 100vh;
    overflow-y: auto;
}

.logo {
    padding: 0 20px 20px;
    border-bottom: 1px solid #e8edf5;
}

.logo-text {
    font-size: 20px;
    font-weight: 700;
    color: #1e3a8a;
    letter-spacing: -0.5px;
}

.nav {
    flex: 1;
    padding: 16px 12px;
}

.nav-label {
    font-size: 14px;
    font-weight: 600;
    color: var(--text-color);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-family: 'DM Sans', 'Siemreap', 'Inter', sans-serif;
    /* padding: 10px 8px 0px 0px; */
    padding-top: 10px;
    padding-bottom: 0px;
}

.nav-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0px 18px;
    border-radius: 10px;
    font-size: 14px;
    color: #64748b;
    text-decoration: none;
    transition: all 0.18s;
    /* margin-bottom: 2px; */

    /* Update: Using Siemreap with Inter/DM Sans fallback */
    font-family: 'DM Sans', 'Siemreap', 'Inter', sans-serif;

    /* Siemreap usually renders best at weight 400 */
    font-weight: 600;
}

.nav-item:hover {
    background: #f1f5fd;
    color: #1e40af;
}

.nav-item.active {
    background: #1e3a8a;
    color: #ffffff;
    font-weight: 700;
    width: 100%;
    padding: 0px 18px;
}

.nav-icon {
    font-size: 15px;
}

.logout-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 12px;
    padding: 10px 12px;
    border-radius: 10px;
    background: #fee2e2;
    color: #ef4444;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    font-family: 'Siemreap', 'DM Sans', 'Inter', sans-serif;
}

/* ── Main ── */
.main {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

/* ── Topbar ── */
.topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 28px;
    background: #ffffff;
    border-bottom: 1px solid #e8edf5;
}

.search-box {
    display: flex;
    align-items: center;
    gap: 8px;
    background: #f1f5f9;
    border-radius: 10px;
    padding: 8px 14px;
    width: 260px;
}

.search-box input {
    border: none;
    background: transparent;
    outline: none;
    font-size: 13px;
    color: #334155;
    font-family: 'DM Sans', sans-serif;
    width: 100%;
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

/* ── Content ── */
.content {
    flex: 1;
    padding: 24px 28px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 22px;
}

/* ── Stats ── */
.stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
}

.stat-card {
    background: #fff;
    border-radius: 14px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
}

.stat-label {
    font-size: 11px;
    color: #94a3b8;
    margin-bottom: 6px;
    font-family: 'Siemreap', 'DM Sans', 'Inter', sans-serif;
}

.stat-value {
    font-size: 28px;
    font-weight: 700;
    color: #0f172a;
    line-height: 1;
}

.stat-change {
    font-size: 11px;
    color: #10b981;
    margin-top: 6px;
}

.arrow-up {
    font-size: 10px;
}

.stat-icon {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    flex-shrink: 0;
}

/* ── Charts Row ── */
.charts-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
}

.card {
    background: #fff;
    border-radius: 14px;
    padding: 20px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
}

.card-title {
    font-size: 14px;
    font-weight: 600;
    color: #0f172a;
    margin-bottom: 16px;
    font-family: 'Siemreap', 'DM Sans', 'Inter', sans-serif;
}

/* Donut */
.donut-wrapper {
    display: flex;
    align-items: center;
    gap: 20px;
}

.donut-svg {
    width: 140px;
    height: 140px;
    flex-shrink: 0;
}

.donut-legend {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.legend-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    color: #64748b;
}

.legend-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    flex-shrink: 0;
}

.legend-label {
    flex: 1;
    font-family: 'Battambang', sans-serif;
    font-size: 11px;
}

.legend-val {
    font-weight: 600;
    color: #0f172a;
}

/* Calendar */
.cal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
}

.cal-title {
    font-size: 14px;
    font-weight: 600;
    color: #0f172a;
}

.cal-nav {
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: #64748b;
    padding: 2px 8px;
    border-radius: 6px;
    transition: background 0.15s;
}

.cal-nav:hover {
    background: #f1f5f9;
}

.cal-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px;
}

.cal-day-name {
    text-align: center;
    font-size: 11px;
    font-weight: 600;
    color: #94a3b8;
    padding: 4px 0;
}

.cal-day {
    text-align: center;
    font-size: 12px;
    color: #374151;
    padding: 6px 4px;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.15s;
}

.cal-day:hover {
    background: #f1f5f9;
}

.cal-day.other-month {
    color: #cbd5e1;
}

.cal-day.today {
    background: #1e3a8a;
    color: #fff;
    font-weight: 700;
}

/* ── Table ── */
.table-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
}

.more-btn {
    background: none;
    border: none;
    font-size: 18px;
    color: #94a3b8;
    cursor: pointer;
    letter-spacing: 2px;
}

.students-table {
    width: 100%;
    border-collapse: collapse;
}

.students-table th {
    text-align: left;
    font-size: 11px;
    font-weight: 600;
    color: #94a3b8;
    padding: 8px 12px;
    border-bottom: 1px solid #f1f5f9;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.students-table td {
    padding: 12px 12px;
    font-size: 13px;
    color: #374151;
    border-bottom: 1px solid #f8fafc;
}

.students-table tr:last-child td {
    border-bottom: none;
}

.students-table tr:hover td {
    background: #fafbfd;
}

.student-name {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 500;
}

.student-avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: linear-gradient(135deg, #3b82f6, #1e3a8a);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    flex-shrink: 0;
}

.badge {
    display: inline-block;
    padding: 3px 10px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 500;
}

.badge-blue {
    background: #eff6ff;
    color: #2563eb;
}

.badge-orange {
    background: #fff7ed;
    color: #ea580c;
}

.badge-green {
    background: #f0fdf4;
    color: #16a34a;
}

.badge-gray {
    background: #f1f5f9;
    color: #64748b;
}

/* ── Responsive ── */
@media (max-width: 1100px) {
    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .charts-row {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 700px) {
    .sidebar {
        display: none;
    }

    .stats-grid {
        grid-template-columns: 1fr 1fr;
    }
}
</style>