//bar chart

let barChart = document.getElementById("myBarChart")
let xVal = ["swift", "C/C++", "C#", "Golang", "Rust", "Python", "javascript", "typescript", "PHP", "Bash", "Go", "Groovy", "VBA", "dart", "Ada", "Scalar", "Java"];
const chartData = {
    type: "bar",
    data: {
        labels: xVal,
        datasets: [{
              label: 'languages',
               backgroundColor: [
                "orange",
                "purple",
                "khaki",
                "mediumblue",
                "indianred",
                "darkorange",
                "darkgreen",
                "firebrick",
                "darkred",
                "antiquewhite",
                "tomato",
                "lightslategray",
                "springgreen",
                "red",
                "olivedrab",
                "blueviolet",
                "tan"
            ],
            data: [2,2,1,1,1,5,1,2,1,2,1,1,1,1,1,1,3]
            }
        ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Languages',
            }
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: false,
                    text: ''
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'No of people using this language'
                }
            }
        }
    }
};
barChart= new Chart("myBarChart", chartData);