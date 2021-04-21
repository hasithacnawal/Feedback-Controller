import { RouteInfo } from "./sidebar.metadata";

export const ROUTES: RouteInfo[] = [
  {
    path: "",
    title: "MENUITEMS.MAIN.TEXT",
    moduleName: "",
    iconType: "",
    icon: "",
    class: "",
    groupTitle: true,
    badge: "",
    badgeClass: "",
    role: ["All"],
    submenu: [],
  },

  // Admin Modules
  {
    path: "",
    title: "MENUITEMS.HOME.TEXT",
    moduleName: "dashboard",
    iconType: "material-icons-two-tone",
    icon: "home",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/admin/dashboard/main",
        title: "MENUITEMS.HOME.LIST.DASHBOARD1",
        moduleName: "dashboard",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/dashboard/doctor-dashboard",
        title: "MENUITEMS.HOME.LIST.DOCTOR-DASHBOARD",
        moduleName: "doctor-dashboard",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/dashboard/patient-dashboard",
        title: "MENUITEMS.HOME.LIST.PATIENT-DASHBOARD",
        moduleName: "patient-dashboard",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  {
    path: "",
    title: "MENUITEMS.APPOINTMENTS.TEXT",
    moduleName: "appointment",
    iconType: "material-icons-two-tone",
    icon: "assignment",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/admin/appointment/viewAppointment",
        title: "MENUITEMS.APPOINTMENTS.LIST.VIEW-APPOINTMENT",
        moduleName: "appointment",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/appointment/bookAppointment",
        title: "MENUITEMS.APPOINTMENTS.LIST.BOOK-APPOINTMENT",
        moduleName: "appointment",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/appointment/edit-ppointment",
        title: "MENUITEMS.APPOINTMENTS.LIST.EDIT-APPOINTMENT",
        moduleName: "appointment",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  {
    path: "",
    title: "MENUITEMS.DOCTORS.TEXT",
    moduleName: "doctors",
    iconType: "material-icons-two-tone",
    icon: "supervised_user_circle",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/admin/doctors/allDoctors",
        title: "MENUITEMS.DOCTORS.LIST.ALL-DOCTOR",
        moduleName: "doctors",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/doctors/add-doctor",
        title: "MENUITEMS.DOCTORS.LIST.ADD-DOCTOR",
        moduleName: "doctors",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/doctors/edit-doctor",
        title: "MENUITEMS.DOCTORS.LIST.EDIT-DOCTOR",
        moduleName: "doctors",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/doctors/doctor-profile",
        title: "MENUITEMS.DOCTORS.LIST.PROFILE",
        moduleName: "doctors",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },

  // Doctor Modules
  {
    path: "/doctor/dashboard",
    title: "MENUITEMS.DOCTOR.DASHBOARD",
    moduleName: "dashboard",
    iconType: "material-icons-two-tone",
    icon: "home",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Doctor"],
    submenu: [],
  },
  {
    path: "/doctor/appointments",
    title: "MENUITEMS.DOCTOR.APPOINTMENTS",
    moduleName: "appointments",
    iconType: "material-icons-two-tone",
    icon: "assignment",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Doctor"],
    submenu: [],
  },
  {
    path: "/doctor/doctors",
    title: "MENUITEMS.DOCTOR.DOCTORS",
    moduleName: "doctors",
    iconType: "material-icons-two-tone",
    icon: "supervised_user_circle",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Doctor"],
    submenu: [],
  },
  {
    path: "/doctor/patients",
    title: "MENUITEMS.DOCTOR.PATIENTS",
    moduleName: "patients",
    iconType: "material-icons-two-tone",
    icon: "face",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Doctor"],
    submenu: [],
  },
  {
    path: "/doctor/settings",
    title: "MENUITEMS.DOCTOR.SETTINGS",
    moduleName: "settings",
    iconType: "material-icons-two-tone",
    icon: "settings",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Doctor"],
    submenu: [],
  },
  {
    path: "/apps/chat",
    title: "MENUITEMS.DOCTOR.CHAT",
    moduleName: "apps",
    iconType: "material-icons-two-tone",
    icon: "chat",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Doctor"],
    submenu: [],
  },
  // Patient Modules
  {
    path: "/patient/dashboard",
    title: "MENUITEMS.PATIENT.DASHBOARD",
    moduleName: "dashboard",
    iconType: "material-icons-two-tone",
    icon: "home",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Patient"],
    submenu: [],
  },
  {
    path: "",
    title: "MENUITEMS.PATIENT.APPOINTMENTS.TEXT",
    moduleName: "appointments",
    iconType: "material-icons-two-tone",
    icon: "assignment",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Patient"],
    submenu: [
      {
        path: "/patient/appointments/today",
        title: "MENUITEMS.PATIENT.APPOINTMENTS.LIST.TODAY",
        moduleName: "appointments",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/patient/appointments/upcoming",
        title: "MENUITEMS.PATIENT.APPOINTMENTS.LIST.UPCOMING",
        moduleName: "appointments",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/patient/appointments/past",
        title: "MENUITEMS.PATIENT.APPOINTMENTS.LIST.PAST",
        moduleName: "appointments",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  {
    path: "/patient/prescriptions",
    title: "MENUITEMS.PATIENT.PRESCRIPTIONS",
    moduleName: "prescriptions",
    iconType: "material-icons-two-tone",
    icon: "receipt_long",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Patient"],
    submenu: [],
  },
  {
    path: "/patient/records",
    title: "MENUITEMS.PATIENT.MEDICAL-RECORD",
    moduleName: "records",
    iconType: "material-icons-two-tone",
    icon: "restore_page",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Patient"],
    submenu: [],
  },
  {
    path: "/patient/billing",
    title: "MENUITEMS.PATIENT.BILLING",
    moduleName: "records",
    iconType: "material-icons-two-tone",
    icon: "receipt",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Patient"],
    submenu: [],
  },
  {
    path: "/apps/chat",
    title: "MENUITEMS.PATIENT.CHAT",
    moduleName: "apps",
    iconType: "material-icons-two-tone",
    icon: "chat",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Patient"],
    submenu: [],
  },
  {
    path: "/patient/settings",
    title: "MENUITEMS.PATIENT.SETTINGS",
    moduleName: "settings",
    iconType: "material-icons-two-tone",
    icon: "settings",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Patient"],
    submenu: [],
  },

  //Survey Module

  {
    path: "",
    title: "survey",
    moduleName: "survey-builder",
    iconType: "material-icons-two-tone",
    icon: "assignment",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/admin/survey/createSurvey",
        title: "create survey",
        moduleName: "survey-builder",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/survey/bookAppointment",
        title: "edit survey",
        moduleName: "appointment",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },

  // Common Modules

  {
    path: "",
    title: "-- Apps",
    moduleName: "",
    iconType: "",
    icon: "",
    class: "",
    groupTitle: true,
    badge: "",
    badgeClass: "",
    role: ["Admin", "Doctor"],
    submenu: [],
  },
  {
    path: "calendar",
    title: "Calendar",
    moduleName: "calendar",
    iconType: "material-icons-two-tone",
    icon: "event_note",
    class: "",
    groupTitle: false,
    badge: "New",
    badgeClass: "badge bg-blue sidebar-badge float-right",
    role: ["Admin", "Doctor"],
    submenu: [],
  },
  {
    path: "",
    title: "More Apps",
    moduleName: "apps",
    iconType: "material-icons-two-tone",
    icon: "stars",
    class: "menu-toggle",
    groupTitle: false,
    badge: "4",
    badgeClass: "badge bg-orange sidebar-badge float-right",
    role: ["Admin"],
    submenu: [
      {
        path: "/apps/chat",
        title: "Chat",
        moduleName: "apps",
        iconType: "material-icons-two-tone",
        icon: "chat",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/apps/dragdrop",
        title: "Drag & Drop",
        moduleName: "apps",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/apps/contact-grid",
        title: "Contact Grid",
        moduleName: "apps",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/apps/support",
        title: "Support",
        moduleName: "apps",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  {
    path: "",
    title: "Widgets",
    moduleName: "widget",
    iconType: "material-icons-two-tone",
    icon: "widgets",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/widget/chart-widget",
        title: "Chart Widget",
        moduleName: "widget",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/widget/data-widget",
        title: "Data Widget",
        moduleName: "widget",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },

  {
    path: "/authentication/signin",
    title: "Logout",
    moduleName: "logout",
    iconType: "material-icons-two-tone",
    icon: "power_settings_new",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["All"],
    submenu: [],
  },
];
