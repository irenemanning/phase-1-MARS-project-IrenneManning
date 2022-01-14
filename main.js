document.addEventListener('DOMContentLoaded', () => {
    
    getData() 
    getImages()

})


function getData() {
        fetch('https://api.nasa.gov/insight_weather/?api_key=Sj7XRHrYDL5LBfhYlnyWUF6oWFhgDv4qWXdlhm9z&feedtype=json&ver=1.0')
        .then(resp => resp.json())
        .then(data => {
        console.log(data)
        MarsTempData(data[1098])    
        });
}

function MarsTempData(stats) {
    const container = document.getElementById('marsContainer')
    let atInt = parseInt(stats.AT.av)
    let HighInt = parseInt(stats.AT.mx)
    let LowInt = parseInt(stats.AT.mn)
    let degree = 'C'
    // function convertCtoF(tempInC) {
    //     return tempInC * 1.8 + 32
    // }

    // ^creating variables for the diferent temperatures and making them intergers

    
    let atmosphericTempC = document.createElement('h3')
    atmosphericTempC.innerText = `Atmospheric Temperature: ${atInt}° ${degree}`
    container.append(atmosphericTempC)
    let high = document.createElement('h3')
    high.innerText = `High: ${HighInt}° ${degree}`
    container.append(high)
    let low = document.createElement('h3')
    low.innerText = `Low: ${LowInt}° ${degree}`
    container.append(low)

    //creating variables for the buttons! will be able to toggle the temperature
    const celsiusBtn = document.getElementById("c")
    const fahrenheitBtn = document.getElementById('f')
    fahrenheitBtn.addEventListener('click', ()=> {
        console.log('fahrenheit clicked')
        fahrenheitBtn.style.backgroundColor = 'yellow';
        celsiusBtn.style.backgroundColor = '';
        fahrenheitBtn.className('Active')
    })
    celsiusBtn.addEventListener('click', () => {
        console.log('celsius Clicked')
        celsiusBtn.style.backgroundColor = 'yellow';
        fahrenheitBtn.style.backgroundColor = '';
        fahrenheitBtn.className('')

    })
    // make if statement
    //if farenheit button's classname is active, change the innerhtml to feature the temp in farenheight using the converter function on the three temp variables

    
}

//images

function getImages() {
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=Sj7XRHrYDL5LBfhYlnyWUF6oWFhgDv4qWXdlhm9z&feedtype=json&ver=1.0')
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
    })
}