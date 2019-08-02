import { NbMenuItem } from "@nebular/theme";

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "Home",
    icon: "nb-home",
    link: "/pages/home",
    home: true,
  },
  {
    title: "Factory Schedule",
    icon: "nb-gear",
    link: "/pages/scheduleFactory",
    home: false,
  },
  {
    title: "Sub-business",
    icon: "nb-plus",
    link: "/pages/sub-business",
    home: false,
  },
  {
    title: "Factory",
    icon: "nb-plus",
    link: "/pages/factory",
    home: false,
    // children: [
    //   {
    //     title: "List",
    //     link: "/pages/operators-list",
    //   },
    // ],
  },
  {
    title: "Operators",
    icon: "nb-person",
    link: "/pages/operators-list",
    home: false,
  },

  {
    title: "Operations",
    icon: "nb-chevron-right",
    link: "/pages/operations",
    home: false,
  },

  {
    title: "Tasks",
    icon: "nb-chevron-right",
    link: "/pages/tasks",
    home: false,
    // children: [
    //   {
    //     title: "List",
    //     link: "/pages/operators-list",
    //   },
    // ],
  },
  {
    title: "Requirements",
    icon: "nb-checkmark",
    link: "/pages/requirements",
    home: false,
    // children: [
    //   {
    //     title: "List",
    //     link: "/pages/operators-list",
    //   },
    // ],
  },


  // {
  //   title: "FEATURES",
  //   group: true,
  // },
  // {
  //   title: "Auth",
  //   icon: "nb-locked",
  //   children: [
  //     {
  //       title: "Login",
  //       link: "/auth/login",
  //     },
  //     {
  //       title: "Register",
  //       link: "/auth/register",
  //     },
  //     {
  //       title: "Request Password",
  //       link: "/auth/request-password",
  //     },
  //     {
  //       title: "Reset Password",
  //       link: "/auth/reset-password",
  //     },
  //   ],
  // },
];
