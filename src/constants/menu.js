const data = [
  {
    id: "Home",
    icon: "iconsminds-air-balloon-1",
    label: "Home",
    to: "/app/gogo/start",
  },

  {
    id: "People",
    icon: "iconsminds-three-arrow-fork",
    label: "People",
    to: "/app/Room",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "User",
        to: "/app/second-menu/second"
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Staff Record",
        to: "/app/second-menu/second"
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Access Report",
        to: "/app/second-menu/second"
      }
    ]
  },


  {
    id: "Room Management",
    icon: "iconsminds-three-arrow-fork",
    label: "Room Management",
    to: "/app/Room",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "Room Category",
        to: "/app/second-menu/second"
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Floor",
        to: "/app/second-menu/second"
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Room No.",
        to: "/app/second-menu/second"
      },
      {
        icon: "simple-icon-paper-plane",
        label: "View Tariff",
        to: "/app/second-menu/second"
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Edit Tariff",
        to: "/app/second-menu/second"
      }
    ]
  },


  {
    id: "Reservation",
    icon: "iconsminds-three-arrow-fork",
    label: "Reservation",
    to: "/app/Room",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "New Reservation",
        to: "/app/second-menu/second"
      },
      {
        icon: "simple-icon-paper-plane",
        label: "View Reservation Details ",
        to: "/app/second-menu/second"
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Cancel List",
        to: "/app/second-menu/second"
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Travel Agent/Third Party Side",
        to: "/app/second-menu/second"
      }
    ]
  },



  {
    id: "Front Office",
    icon: "iconsminds-three-arrow-fork",
    label: "Front Office",
    to: "/app/Room",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "Stay View",
        to: "/app/second-menu/second"
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Check In",
        to: "/app/second-menu/second"
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Check Out",
        to: "/app/second-menu/second"
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Room Shifting",
        to: "/app/second-menu/second"
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Booking Modification",
        to: "/app/second-menu/second"
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Early Check Out",
        to: "/app/second-menu/second"
      },
      {
        icon: "simple-icon-paper-plane",
        label: "EOD Sale Report",
        to: "/app/second-menu/second"
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Meal Report",
        to: "/app/second-menu/second"
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Occupancy Report",
        to: "/app/second-menu/second"
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Direct Booking Report",
        to: "/app/second-menu/second"
      }
    ]
  },



  {
    id: "Configuration",
    icon: "iconsminds-three-arrow-fork",
    label: "Configuration",
    to: "/app/Room",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "Salary",
        to: "/app/second-menu/second"
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Rental",
        to: "/app/second-menu/second"
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Commission List",
        to: "/app/second-menu/second"
      },
      {
        icon: "simple-icon-paper-plane",
        label: "New Expense",
        to: "/app/second-menu/second"
      },
      {
        icon: "simple-icon-paper-plane",
        label: "New Purchase",
        to: "/app/second-menu/second"
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Day Summary",
        to: "/app/second-menu/second"
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Sale Report",
        to: "/app/second-menu/second"
      },
      {
        icon: "simple-icon-paper-plane",
        label: "P & L Statement",
        to: "/app/second-menu/second"
      }
    ]
  },

  {
    id: "Menu",
    icon: "iconsminds-three-arrow-fork",
    label: "Menu",
    to: "/app/Room",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "GST Info",
        to: "/app/second-menu/second"
      },
      {
        icon: "simple-icon-paper-plane",
        label: "GST",
        to: "/app/second-menu/second"
      }
     
    ]
  }


  // {
  //   id: "blankpage",
  //   icon: "iconsminds-bucket",
  //   label: "menu.blank-page",
  //   to: "/app/blank-page"
  // }
];
export default data;
