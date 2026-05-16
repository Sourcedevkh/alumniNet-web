import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/login",
    //   name: "Login",
    //   component: LoginView,
    //   meta: { guestOnly: true, title: "Login" },
    // },
    {
      path: "/",
      component: () => import("../layouts/DashboardLayout.vue"),
      meta: { requiresAuth: true }, // 👈 Protected at the layout level
      children: [
        {
          path: "",
          redirect: "dashboard",
        },
        {
          path: "dashboard",
          name: "Dashboard",
          component: () => import("../views/pages/dashboard/Dashboard.vue"),
          meta: { title: "dashboard" },
        },
        {
          path: "dashboard/students",
          name: "Students",
          component: () =>
            import("../views/pages/dashboard/StudentDashboard.vue"),
          meta: { title: "students" },
        },
        {
          path: "dashboard/classes",
          name: "Classes",
          component: () =>
            import("../views/pages/dashboard/ClassDashboard.vue"),
          meta: { title: "classes" },
        },
        {
          path: "dashboard/scholarships",
          name: "Scholarships",
          component: () =>
            import("../views/pages/dashboard/ScholarshipDashboard.vue"),
          meta: { title: "scholarships" },
        },
        {
          path: "dashboard/generations",
          name: "Generations",
          component: () =>
            import("../views/pages/dashboard/GenerationDashboard.vue"),
          meta: { title: "generations" },
        },
        {
          path: "dashboard/subjects",
          name: "Subjects",
          component: () =>
            import("../views/pages/dashboard/SubjectDashboard.vue"),
          meta: { title: "subjects" },
        },
        {
          path: "dashboard/scores",
          name: "Scores",
          component: () =>
            import("../views/pages/dashboard/ScoreDashboard.vue"),
          meta: { title: "scores" },
        },
        {
          path: "dashboard/reports",
          name: "Reports",
          component: () =>
            import("../views/pages/dashboard/CertificateDashboard.vue"),
          meta: { title: "reports" },
        },
      ],
    },
    {
      path: "/test",
      component: () => import("../components/dashboard/test.vue"),
    },
  ],
  linkActiveClass: "active", 
  linkExactActiveClass: "active",
});

export default router;
