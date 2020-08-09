
var defaultWidth =
  window.screen.width > 768
    ? (window.screen.width * 1) / 3
    : window.screen.width;

var style = {
  Wrapper: {},
  Containers: {
    DefaultStyle: {
      position: "fixed",
      width: defaultWidth,
      padding: "10px 10px 10px 20px",
      zIndex: 9998,
      WebkitBoxSizing: "",
      MozBoxSizing: "",
      boxSizing: "",
      height: "auto",
      display: "inline-block",
      border: "0",
      fontSize: "14px",
      WebkitFontSmoothing: "antialiased",
      fontFamily: '"Roboto","Helvetica Neue",Arial,sans-serif',
      fontWeight: "400",
      color: "#FFFFFF"
    },

    tl: {
      top: "0px",
      bottom: "auto",
      left: "0px",
      right: "auto"
    },

    tr: {
      top: "0px",
      bottom: "auto",
      left: "auto",
      right: "0px"
    },

    tc: {
      top: "0px",
      bottom: "auto",
      margin: "0 auto",
      left: "50%",
      marginLeft: -(defaultWidth / 2)
    },

    bl: {
      top: "auto",
      bottom: "0px",
      left: "0px",
      right: "auto"
    },

    br: {
      top: "auto",
      bottom: "0px",
      left: "auto",
      right: "0px"
    },

    bc: {
      top: "auto",
      bottom: "0px",
      margin: "0 auto",
      left: "50%",
      marginLeft: -(defaultWidth / 2)
    }
  },

  NotificationItem: {
    DefaultStyle: {
      position: "relative",
      width: "100%",
      cursor: "pointer",
      borderRadius: "4px",
      fontSize: "14px",
      margin: "10px 0 0",
      padding: "10px",
      display: "block",
      WebkitBoxSizing: "border-box",
      MozBoxSizing: "border-box",
      boxSizing: "border-box",
      opacity: 0,
      transition: "all 0.5s ease-in-out",
      WebkitTransform: "translate3d(0, 0, 0)",
      transform: "translate3d(0, 0, 0)",
      willChange: "transform, opacity",

      isHidden: {
        opacity: 0
      },

      isVisible: {
        opacity: 1
      }
    },

    success: {
      borderTop: 0,
      backgroundColor: "#a1e82c",
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0
    },

    error: {
      borderTop: 0,
      backgroundColor: "#fc727a",
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0
    },

    warning: {
      borderTop: 0,
      backgroundColor: "#ffbc67",
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0
    },

    info: {
      borderTop: 0,
      backgroundColor: "#63d8f1",
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0
    }
  },

  Title: {
    DefaultStyle: {
      fontSize: "30px",
      margin: "0",
      padding: 0,
      fontWeight: "bold",
      color: "#FFFFFF",
      display: "block",
      left: "15px",
      position: "absolute",
      top: "50%",
      marginTop: "-15px"
    }
  },

  MessageWrapper: {
    DefaultStyle: {
      marginLeft: "55px",
      marginRight: "30px",
      padding: "0 12px 0 0",
      color: "#FFFFFF",
      maxWidthwidth: "89%"
    }
  },

  Dismiss: {
    DefaultStyle: {
      fontFamily: "inherit",
      fontSize: "21px",
      color: "#000",
      float: "right",
      position: "absolute",
      right: "10px",
      top: "50%",
      marginTop: "-13px",
      backgroundColor: "#FFFFFF",
      display: "block",
      borderRadius: "50%",
      opacity: ".4",
      lineHeight: "11px",
      width: "25px",
      height: "25px",
      outline: "0 !important",
      textAlign: "center",
      padding: "6px 3px 3px 3px",
      fontWeight: "300",
      marginLeft: "65px"
    },

    success: {
      // color: '#f0f5ea',
      // backgroundColor: '#a1e82c'
    },

    error: {
      // color: '#f4e9e9',
      // backgroundColor: '#fc727a'
    },

    warning: {
      // color: '#f9f6f0',
      // backgroundColor: '#ffbc67'
    },

    info: {
      // color: '#e8f0f4',
      // backgroundColor: '#63d8f1'
    }
  },

  Action: {
    DefaultStyle: {
      background: "#ffffff",
      borderRadius: "2px",
      padding: "6px 20px",
      fontWeight: "bold",
      margin: "10px 0 0 0",
      border: 0
    },

    success: {
      backgroundColor: "#a1e82c",
      color: "#ffffff"
    },

    error: {
      backgroundColor: "#fc727a",
      color: "#ffffff"
    },

    warning: {
      backgroundColor: "#ffbc67",
      color: "#ffffff"
    },

    info: {
      backgroundColor: "#63d8f1",
      color: "#ffffff"
    }
  },

  ActionWrapper: {
    DefaultStyle: {
      margin: 0,
      padding: 0
    }
  }
};

//
// //
// // // For tables
// //
//
const thArray = ["ID", "Name", "Salary", "Country", "City"];
const tdArray = [
  ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
  ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
  ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
  ["4", "Philip Chaney", "$38,735", "Korea, South", "Overland Park"],
  ["5", "Doris Greene", "$63,542", "Malawi", "Feldkirchen in Kärnten"],
  ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]
];

//
// //
// // // For icons
// //
//
const iconsArray = [
  "pe-7s-album",
  "pe-7s-arc",
  "pe-7s-back-2",
  "pe-7s-bandaid",
  "pe-7s-car",
  "pe-7s-diamond",
  "pe-7s-door-lock",
  "pe-7s-eyedropper",
  "pe-7s-female",
  "pe-7s-gym",
  "pe-7s-hammer",
  "pe-7s-headphones",
  "pe-7s-helm",
  "pe-7s-hourglass",
  "pe-7s-leaf",
  "pe-7s-magic-wand",
  "pe-7s-male",
  "pe-7s-map-2",
  "pe-7s-next-2",
  "pe-7s-paint-bucket",
  "pe-7s-pendrive",
  "pe-7s-photo",
  "pe-7s-piggy",
  "pe-7s-plugin",
  "pe-7s-refresh-2",
  "pe-7s-rocket",
  "pe-7s-settings",
  "pe-7s-shield",
  "pe-7s-smile",
  "pe-7s-usb",
  "pe-7s-vector",
  "pe-7s-wine",
  "pe-7s-cloud-upload",
  "pe-7s-cash",
  "pe-7s-close",
  "pe-7s-bluetooth",
  "pe-7s-cloud-download",
  "pe-7s-way",
  "pe-7s-close-circle",
  "pe-7s-id",
  "pe-7s-angle-up",
  "pe-7s-wristwatch",
  "pe-7s-angle-up-circle",
  "pe-7s-world",
  "pe-7s-angle-right",
  "pe-7s-volume",
  "pe-7s-angle-right-circle",
  "pe-7s-users",
  "pe-7s-angle-left",
  "pe-7s-user-female",
  "pe-7s-angle-left-circle",
  "pe-7s-up-arrow",
  "pe-7s-angle-down",
  "pe-7s-switch",
  "pe-7s-angle-down-circle",
  "pe-7s-scissors",
  "pe-7s-wallet",
  "pe-7s-safe",
  "pe-7s-volume2",
  "pe-7s-volume1",
  "pe-7s-voicemail",
  "pe-7s-video",
  "pe-7s-user",
  "pe-7s-upload",
  "pe-7s-unlock",
  "pe-7s-umbrella",
  "pe-7s-trash",
  "pe-7s-tools",
  "pe-7s-timer",
  "pe-7s-ticket",
  "pe-7s-target",
  "pe-7s-sun",
  "pe-7s-study",
  "pe-7s-stopwatch",
  "pe-7s-star",
  "pe-7s-speaker",
  "pe-7s-signal",
  "pe-7s-shuffle",
  "pe-7s-shopbag",
  "pe-7s-share",
  "pe-7s-server",
  "pe-7s-search",
  "pe-7s-film",
  "pe-7s-science",
  "pe-7s-disk",
  "pe-7s-ribbon",
  "pe-7s-repeat",
  "pe-7s-refresh",
  "pe-7s-add-user",
  "pe-7s-refresh-cloud",
  "pe-7s-paperclip",
  "pe-7s-radio",
  "pe-7s-note2",
  "pe-7s-print",
  "pe-7s-network",
  "pe-7s-prev",
  "pe-7s-mute",
  "pe-7s-power",
  "pe-7s-medal",
  "pe-7s-portfolio",
  "pe-7s-like2",
  "pe-7s-plus",
  "pe-7s-left-arrow",
  "pe-7s-play",
  "pe-7s-key",
  "pe-7s-plane",
  "pe-7s-joy",
  "pe-7s-photo-gallery",
  "pe-7s-pin",
  "pe-7s-phone",
  "pe-7s-plug",
  "pe-7s-pen",
  "pe-7s-right-arrow",
  "pe-7s-paper-plane",
  "pe-7s-delete-user",
  "pe-7s-paint",
  "pe-7s-bottom-arrow",
  "pe-7s-notebook",
  "pe-7s-note",
  "pe-7s-next",
  "pe-7s-news-paper",
  "pe-7s-musiclist",
  "pe-7s-music",
  "pe-7s-mouse",
  "pe-7s-more",
  "pe-7s-moon",
  "pe-7s-monitor",
  "pe-7s-micro",
  "pe-7s-menu",
  "pe-7s-map",
  "pe-7s-map-marker",
  "pe-7s-mail",
  "pe-7s-mail-open",
  "pe-7s-mail-open-file",
  "pe-7s-magnet",
  "pe-7s-loop",
  "pe-7s-look",
  "pe-7s-lock",
  "pe-7s-lintern",
  "pe-7s-link",
  "pe-7s-like",
  "pe-7s-light",
  "pe-7s-less",
  "pe-7s-keypad",
  "pe-7s-junk",
  "pe-7s-info",
  "pe-7s-home",
  "pe-7s-help2",
  "pe-7s-help1",
  "pe-7s-graph3",
  "pe-7s-graph2",
  "pe-7s-graph1",
  "pe-7s-graph",
  "pe-7s-global",
  "pe-7s-gleam",
  "pe-7s-glasses",
  "pe-7s-gift",
  "pe-7s-folder",
  "pe-7s-flag",
  "pe-7s-filter",
  "pe-7s-file",
  "pe-7s-expand1",
  "pe-7s-exapnd2",
  "pe-7s-edit",
  "pe-7s-drop",
  "pe-7s-drawer",
  "pe-7s-download",
  "pe-7s-display2",
  "pe-7s-display1",
  "pe-7s-diskette",
  "pe-7s-date",
  "pe-7s-cup",
  "pe-7s-culture",
  "pe-7s-crop",
  "pe-7s-credit",
  "pe-7s-copy-file",
  "pe-7s-config",
  "pe-7s-compass",
  "pe-7s-comment",
  "pe-7s-coffee",
  "pe-7s-cloud",
  "pe-7s-clock",
  "pe-7s-check",
  "pe-7s-chat",
  "pe-7s-cart",
  "pe-7s-camera",
  "pe-7s-call",
  "pe-7s-calculator",
  "pe-7s-browser",
  "pe-7s-box2",
  "pe-7s-box1",
  "pe-7s-bookmarks",
  "pe-7s-bicycle",
  "pe-7s-bell",
  "pe-7s-battery",
  "pe-7s-ball",
  "pe-7s-back",
  "pe-7s-attention",
  "pe-7s-anchor",
  "pe-7s-albums",
  "pe-7s-alarm",
  "pe-7s-airplay"
];

//
// //
// // // // For dashboard's charts
// //
//
// Data for Pie Chart
var dataPie = {
  labels: ["40%", "20%", "40%"],
  series: [40, 20, 40]
};
var legendPie = {
  names: ["Open", "Bounce", "Unsubscribe"],
  types: ["info", "danger", "warning"]
};

// Data for Line Chart
var dataSales = {
  labels: [
    "9:00AM",
    "12:00AM",
    "3:00PM",
    "6:00PM",
    "9:00PM",
    "12:00PM",
    "3:00AM",
    "6:00AM"
  ],
  series: [
    [287, 385, 490, 492, 554, 586, 698, 695],
    [67, 152, 143, 240, 287, 335, 435, 437],
    [23, 113, 67, 108, 190, 239, 307, 308]
  ]
};
var optionsSales = {
  low: 0,
  high: 800,
  showArea: false,
  height: "245px",
  axisX: {
    showGrid: false
  },
  lineSmooth: true,
  showLine: true,
  showPoint: true,
  fullWidth: true,
  chartPadding: {
    right: 50
  }
};
var responsiveData = [
  [
    "screen and (max-width: 640px)",
    {
      axisX: {
        labelInterpolationFnc: function(value) {
          return value[0];
        }
      }
    }
  ]
];
var legendData = {
  names: ["Open", "Click", "Click Second Time"],
  types: ["info", "danger", "warning"]
};

// Data for Bar Chart

var bohoChic = [
        ["Time", "Past", "Forecast"],
        [11, 11647.737210404579, null],
        [12, 10255.586263751376, null],
        [13, 8863.435317098174, null],
        [14, 7471.284370444971, null],
        [15, 7105.468833658678, null],
        [16, 7489.185518209142, null],
        [17, 5522.041792954394, null],
        [18, 6850.433397405331, null],
        [19, 4002.9500352305004, null],
        [20, 3628.3231645725004, null],
        [21, 3861.2612233625614, null],
        [22, 849.0559463309824, null],
        [23, 1734.573611342817, null],
        [24, 256.0, null],
        [25, 3487.12868517596, null],
        [26, 3215.505145610656, null],
        [27, 4044.78345501985, null],
        [28, 4439.434796907557, null],
        [28, null, 4440.264442195703],
        [29, null, 4525.263320285832],
        [30, null, 4592.273195201061],
      ];
var casual = [
  ["Time", "Past", "Forecast"],
  
  [11, 8939.730086998603, null],
  [12, 6201.499974917246, null],
  [13, 12881.659520418943, null],
  [14, 11560.594621773802, null],
  [15, 7934.490681684713, null],
  [16, 9822.217938036289, null],
  [17, 7807.439590719326, null],
  [18, 7590.792160617553, null],
  [19, 7563.083914241256, null],
  [20, 7339.123069957727, null],
  [21, 7462.282672877795, null],
  [22, 6482.1059317874215, null],
  [23, 6874.066874343267, null],
  [24, 6477.393238459705, null],
  [25, 3666.3403963707874, null],
  [26, 3948.6008491234043, null],
  [27, 5103.142113634739, null],
  [28, 4321.420146285361, null],
  [28, null, 4392.579703740797], 
  [29, null, 4166.261880522439], 
  [30, null, 3997.46601183977],
];

var roundneck = [
  ["Time", "Past", "Forecast"], 
  [11, 11499.434243284628, null], 
  [12, 11355.69342116914, null], 
  [13, 12194.642218367975, null], 
  [14, 9062.50978836228, null],
  [15, 10814.70758354926, null], 
  [16, 9161.018512846633, null], 
  [17, 7982.641888474829, null], 
  [18, 8527.472633062536, null], 
  [19, 8105.276913857202, null], 
  [20, 7499.023311445147, null], 
  [21, 6986.459439666691, null], 
  [22, 7414.954438334828, null], 
  [23, 7181.377609814499, null], 
  [24, 5400.256512511432, null], 
  [25, 4270.156840560387, null], 
  [26, 4127.498479380961, null], 
  [27, 5247.804906630069, null], 
  [28, 5623.162521840918, null],
  [28, null, 5691.534889555204],
  [29, null, 6656.375024763439],
  [30, null, 7249.930806331653],
];
var vneck = [
  ["Time", "Past", "Forecast"],
  [11, 8542.238507935584, null], 
  [12, 8584.592191010612, null], 
  [13, 9808.508959062025, null], 
  [14, 4656.32054354676, null], 
  [15, 7227.798708535582, null], 
  [16, 8919.29441440562, null], 
  [17, 7825.962773447585, null], 
  [18, 7029.19890322113, null], 
  [19, 5152.992523539312, null], 
  [20, 8144.5344364021885, null], 
  [21, 7581.125393099805, null], 
  [22, 6175.626973863418, null], 
  [23, 5616.906149163078, null], 
  [24, 3049.6960308890393, null], 
  [25, 2394.2325555504635, null], 
  [26, 3272.9014315099334, null], 
  [27, 2520.99680230175, null], 
  [28, 2920.99680230175, null],
  [28, null, 2985.9613968116073],
  [29, null, 2741.3027202503886],
  [30, null, 2363.826068449533],
];

var sneck = [
  ["Time", "Past", "Forecast"],
  [11, 4837.2470458102325, null], 
  [12, 6369.554768752487, null], 
  [13, 10246.398001249025, null], 
  [14, 14092.15003335523, null], 
  [15, 8961.786348941312, null], 
  [16, 7381.043934445048, null], 
  [17, 5095.927379982791, null], 
  [18, 7576.446689645375, null], 
  [19, 5548.562051061265, null], 
  [20, 6816.148902890375, null], 
  [21, 7169.507343645833, null], 
  [22, 3920.818343510772, null], 
  [23, 7815.752942547278, null], 
  [24, 3503.5773940733447, null], 
  [25, 5001.56081424004, null], 
  [26, 5219.292703710019, null], 
  [27, 4456.504824238693, null], 
  [28, 4456.504824238693, null],
  [28, null, 4665.925198914968],
  [29, null, 4834.034498182406],
  [30, null, 4974.29971353483],
];



var sexy = [
    ["Time", "Past", "Forecast"],
    
    [11, 12359.79028948307, null],
    [12, 24372.49072212358, null],
    [13, 5922.558744419507, null],
    [14, 2930.053924418457, null],
    [15, 14443.071985437122, null],
    [16, 9232.200917851684, null],
    [17, 5632.284595032709, null],
    [18, 8458.038292931527, null],
    [19, 5445.146264487259, null],
    [20, 6494.631986385748, null],
    [21, 6435.256112579912, null],
    [22, 12995.633864751855, null],
    [23, 6495.77171980608, null],
    [24, 4950.959404267909, null],
    [25, 3923.4620673912045, null],
    [26, 3837.5950314615325, null],
    [27, 3848.3711244799892, null],
    [28, 3848.3711244799892, null],
    [28, null, 3739.2903810621106],
    [29, null, 3671.2337642408734],
    [30, null, 3585.4598851302717],
];

var elegant = [
  ["Time", "Past", "Forecast"],
  
  [11, 5215.070526132835, null],
  [12, 9696.669257101197, null],
  [13, 3330.751197838432, null],
  [14, 8705.17025964369, null],
  [15, 9546.71540729414, null],
  [16, 10339.933729223585, null],
  [17, 7682.965748750594, null],
  [18, 10706.218801356417, null],
  [19, 5490.470845959462, null],
  [20, 6854.978535025483, null],
  [21, 8902.51416569237, null],
  [22, 7386.323464451692, null],
  [23, 8365.536020062393, null],
  [24, 4785.7371040236985, null],
  [25, 2894.893165655255, null],
  [26, 3969.3295197106277, null],
  [27, 4390.766744561496, null],
  [28, 4390.766744561496, null],
  [28, null, 4502.747161325209],
  [29, null, 5293.983745967493],
  [30, null, 5736.348720457131],
];

var Stylemenu = ["Boho-chic", "Casual", "Elegant", "Sexy"];
var Neckmenu = ["Round neck", "V neck", "Spaghetti style"]

var dataBar = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  series: [
    [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
    [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
  ]
};
var optionsBar = {
  seriesBarDistance: 10,
  axisX: {
    showGrid: false
  },
  height: "245px"
};
var responsiveBar = [
  [
    "screen and (max-width: 640px)",
    {
      seriesBarDistance: 5,
      axisX: {
        labelInterpolationFnc: function(value) {
          return value[0];
        }
      }
    }
  ]
];
var legendBar = {
  names: ["Tesla Model S", "BMW 5 Series"],
  types: ["info", "danger"]
};

module.exports = {
  style, // For notifications (App container and Notifications view)
  thArray,
  tdArray, // For tables (TableList view)
  iconsArray, // For icons (Icons view)
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  bohoChic,
  casual,
  elegant,
  sexy,
  roundneck,
  vneck,
  sneck,
  responsiveData,
  legendData,
  Stylemenu,
  Neckmenu,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar // For charts (Dashboard view)
};
