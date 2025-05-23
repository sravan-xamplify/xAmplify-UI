export let EmployeesChartData1: any = { 
  series: [60, 80],
  chart: {
    type: "donut",
    width: 65,
    height: 65,
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    width: 1,
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  plotOptions: {
    pie: {
      expandOnClick: false,
      donut: {
        size: "85%",
        background: "transparent",
        labels: {
          show: false,
        },
      },
    },
  },
  colors: ["var(--primary-color)", "var(--primary01)"],
  tooltip: {
    enabled: false,
    fixed: {
      enabled: false,
    },
  },
}
export let EmployeesChartData2: any = { 
  series: [40, 80],
  chart: {
    type: "donut",
    width: 65,
    height: 65,
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    width: 1,
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  plotOptions: {
    pie: {
      expandOnClick: false,
      donut: {
        size: "85%",
        background: "transparent",
        labels: {
          show: false,
        },
      },
    },
  },
  colors: ["rgb(255, 90, 41)", "rgba(255, 90, 41,0.1)"],
  tooltip: {
    enabled: false,
    fixed: {
      enabled: false,
    },
  },
}
export let EmployeesChartData3: any = { 
  series: [80, 80],
  chart: {
    type: "donut",
    width: 65,
    height: 65,
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    width: 1,
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  plotOptions: {
    pie: {
      expandOnClick: false,
      donut: {
        size: "85%",
        background: "transparent",
        labels: {
          show: false,
        },
      },
    },
  },
  colors: ["rgb(12, 199, 99)", "rgba(12, 199, 99,0.1)"],
  tooltip: {
    enabled: false,
    fixed: {
      enabled: false,
    },
  },
}
export let EmployeesChartData4: any = { 
  series: [120, 80],
  chart: {
    type: "donut",
    width: 65,
    height: 65,
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    width: 1,
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  plotOptions: {
    pie: {
      expandOnClick: false,
      donut: {
        size: "85%",
        background: "transparent",
        labels: {
          show: false,
        },
      },
    },
  },
  colors: ["rgb(12, 156, 252)", "rgba(12, 156, 252, 0.1)"],
  tooltip: {
    enabled: false,
    fixed: {
      enabled: false,
    },
  },
}
export let EmployeesChartData5: any = { 
  series: [60, 80],
  chart: {
    type: "donut",
    width: 65,
    height: 65,
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    width: 1,
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  plotOptions: {
    pie: {
      expandOnClick: false,
      donut: {
        size: "85%",
        background: "transparent",
        labels: {
          show: false,
        },
      },
    },
  },
  colors: ["var(--primary-color)", "var(--primary01)"],
  tooltip: {
    enabled: false,
    fixed: {
      enabled: false,
    },
  },
}

export let AttendanceChartData: any = {
  series: [
    {
      name: "Job Views",
      data: [20, 30, 25, 50, 25, 30, 20, 35, 20, 30, 25, 50],
      type: "column",
    },
    {
      name: "Job Applied",
      data: [13, 23, 20, 25, 20, 23, 13, 15, 13, 23, 20, 25],
      type: "column",
    },
  ],
  chart: {
    type: "line",
    height: 365,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 7,
      left: 0,
      blur: 1,
      color: ["var(--primary-color)", "rgb(255, 90, 41)"],
      opacity: 0.05,
    },
  },
  grid: {
    show: true,
    borderColor: "rgba(119, 119, 142, 0.1)",
    strokeDashArray: 4,
  },
  colors: ["var(--primary-color)", "rgba(255, 90, 41, 0.9)"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
  stroke: {
    curve: 'smooth',
    width: ['2', '2'],
    dashArray: ['0', '0']
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "35%",
      borderRadius: "2",
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    type: ['gradient', 'solid'],
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.4,
      opacityTo: 0.1,
      stops: [0, 90, 100],
      colorStops: [
        [
          {
            offset: 0,
            color: "var(--primary-color)",
            opacity: 1
          },
          {
            offset: 75,
            color: "var(--primary-color)",
            opacity: 1
          },
          {
            offset: 100,
            color: 'var(--primary-color)',
            opacity: 1
          }
        ],
        [
          {
            offset: 0,
            color: 'rgb(255, 90, 41)',
            opacity: 1
          },
          {
            offset: 75,
            color: 'rgb(255, 90, 41)',
            opacity: 1
          },
          {
            offset: 100,
            color: 'rgb(255, 90, 41)',
            opacity: 1
          }
        ],
      ]
    }
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    labels: {
      show: true,
      style: {
        colors: "#8c9097",
        fontSize: "11px",
        fontWeight: 600,
        cssClass: "apexcharts-xaxis-label",
      },
    },
  },
  legend: {
    show: true,
    position: "top",
    offsetX: 0,
    offsetY: 8,
    markers: {
      size: 4,
      strokeWidth: 0,
      strokeColor: '#fff',
      fillColors: undefined,
      radius: 5,
      customHTML: undefined,
      onClick: undefined,
      offsetX: 0,
      offsetY: 0
    },
  },
  yaxis: {
    labels: {
      show: true,
      style: {
        colors: "#8c9097",
        fontSize: "11px",
        fontWeight: 600,
        cssClass: "apexcharts-xaxis-label",
      },
    },
  },
};
export let WorkChartData: any = {
  series: [230, 200, 178, 153],
    chart: {
      height: 185,
      type: 'polarArea',
    },
    colors: ["var(--primary-color)", "rgba(255, 90, 41, 1)", "rgba(12, 156, 252, 1)", "rgba(12, 199, 99, 1)"],
    labels: ["Remote", "On Site", "Hybrid", "Shift Work"],
    legend: {
      show: false,
    },
    stroke: {
      width: 0
    },
};
