const ctx = document.getElementById("myChart");
const donut = document.getElementById("myDonutChart");

const dataDonut = {
  datasets: [
    {
      label: "My First Dataset",
      data: [80, 20],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 1,
    },
  ],
};

const configDonut = {
  type: "doughnut",
  data: dataDonut,
};

new Chart(donut, configDonut);

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
const data = {
  labels: ["학업운", "연애운", "재물운", "사업운", "건강운"],
  datasets: [
    {
      // label: "My First Dataset",
      data: [65, 59, 70, 81, 56],
      fill: true,
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgb(255, 99, 132)",
      pointBackgroundColor: "rgb(255, 99, 132)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
    },
  ],
};

const config = {
  type: "radar",
  data: data,
  options: {
    elements: {
      line: {
        borderWidth: 3,
      },
    },
    scale: {
      max: 100,
      min: 0,
    },
  },
};

new Chart(ctx, {
  type: "radar",
  data: data,
  options: {
    scale: {
      min: 0,
      max: 100,
    },
    plugins: {
      legend: {
        rtl: false,
      },
    },
  },
});
