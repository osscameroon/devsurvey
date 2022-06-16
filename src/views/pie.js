  let pieChart = document.getElementById("myChart");
  let xValues = ["Flask", "React.js", "Unity", "USP.NET Core", "Laravel", "Drupal", "OWL(Odoo Web Library)", "Odoo", "Spring", "jQuery", "Vue.js", "Angular.js", "Angular", "Express", "FastAPI", "Django"];
  let yValues = [19, 7, 4, 4, 4, 4, 4, 4, 4, 4, 7, 7, 11, 4, 7, 7,];
  let barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145",
    "#dbc818",
    "#8b160d",
    "#092009",
    "#032518",
    "#087bc7",
    "#016f32",
    "#03016f",
    "#2a8686",
    "#64f304",
    "#411103",
    "#961560",
    "#3f3903"
    
  ];

  let options = {
            tooltips: {
          enabled: true
          },

          title: {
          display: true,
          text: "frameworks"
        },
              plugins: {
              datalabels: {
                  formatter: (value, ctx) => {
                    let sum = 0;
                    let dataArr = ctx.chart.data.datasets[0].data;
                    dataArr.map(data => {
                        sum += data;
                    });
                    let percentage = (value) +"%";
                    return percentage;
                  },
                  color: '#fff',
                      }
          }
      };

pieChart =  new Chart("myChart", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
    
      }]
    },

    
    options: options
  });



