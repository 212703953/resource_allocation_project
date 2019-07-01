import { NbMenuItem } from "@nebular/theme";

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "Home",
    icon: "nb-home",
    link: "/pages/home",
    home: true,
  },
  {
    title: "Operators",
    icon: "nb-person",
    children: [
      {
        title: "List",
        link: "/pages/operators-list",
      },
    ],
  },
  {
    title: "Factory Schedule",
    icon: "nb-gear",
    link: "/pages/scheduleFactory",
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
