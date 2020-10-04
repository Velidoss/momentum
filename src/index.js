import {openWeatherApi} from "./config";
import {getWeather} from "./api/weatherAPI";

const time  = document.querySelector('.time')
const date  = document.querySelector('.date')
const greeting = document.querySelector('.greeting')
const greetingName = document.querySelector('.greeting__name')
const focusName = document.querySelector('.focus__name')
const focus = document.querySelector('.focus')
const quote = document.querySelector('.quote-text')
const quoteCaption = document.querySelector('.quote-sign')
const main = document.querySelector('.main')

const weatherExtended = document.querySelector('.main-weather__extended')
const weatherShortened = document.querySelector('.main-weather__short-info')
const weatherIcon = document.querySelectorAll('.main-weather__type')
const weatherDescription = document.querySelector('.main-weather__text')
const weatherTemperature = document.querySelectorAll('.main-weather__temperature')
const weatherWind = document.querySelector('.main-weather__wind-speed')
const weatherHumidity = document.querySelector('.main-weather__humidity-value')
const weatherLocation = document.querySelector('.main-weather__location')
const changeWeatherBtn = document.querySelector('.change-weather-btn')

const refreshQuoteBtn = document.querySelector('.quote-refresh-btn')
const refreshBackground = document.querySelector('.change-picture-btn')
const refreshBackgroundContent = document.querySelector('.main-change-content')

const changeNameBtn = document.querySelector('.change-name-btn')
const changeFocusBtn =  document.querySelector('.change-focus-btn')
const extendWeatherBtn = document.querySelector('.open-extended-weather-btn')

// -----------------TIME
const showTime = ()=>{
const Data = new Date(Date.now())

    function determineDay(date){
        if(!(date instanceof Date)) return
        switch(date.getDay()){
            case 0:
                return "Sunday"
            case 1:
                return "Monday"
            case 2:
                return "Tuesday"
            case 3:
                return "Wednesday"
            case 4:
                return "Thursday"
            case 5:
                return "Friday"
            case 6:
                return "Saturday"
            case 7:
                return
            default: return null
        }
    }
    function determineMonth(date){
        if(!(date instanceof Date)) return
        switch(date.getMonth()){
            case 0:
                return "January"
            case 1:
                return "February"
            case 2:
                return "March"
            case 3:
                return "April"
            case 4:
                return "May"
            case 5:
                return "June"
            case 6:
                return "July"
            case 7:
                return "August"
            case 8:
                return "September"
            case 9:
                return "October"
            case 10:
                return "November"
            case 11:
                return "December"
            default:
                return null
        }
}
    function checkZeros(seconds){
        if(seconds.toString().length === 1){
            return '0'+seconds.toString()
        }else{
            return seconds
        }
    }
    const CurrentTime = `${checkZeros(Data.getHours())} : ${checkZeros(Data.getMinutes())} : ${checkZeros(Data.getSeconds())}`
    const CurrentDate = `${determineDay(Data)} , ${Data.getDate()} of ${determineMonth(Data)} , ${Data.getFullYear()}`



    time.innerHTML = CurrentTime
    date.innerHTML = CurrentDate

    setInterval( showTime,1000)
}

// -----------------TIME

//----------------------get img-----------------------

 function getBgImg (){
    const hour = new Date(Date.now()).getHours()

    if(hour >= 5 && hour<10 ){
        localStorage.setItem('bgImgType', 'morning')
        localStorage.setItem('fontColor', 'white')
        localStorage.setItem('textShadow', '3px 3px 2px black')
    }else if(hour >= 10 && hour<17){
        localStorage.setItem('bgImgType', 'day')
        localStorage.setItem('fontColor', 'white')
        localStorage.setItem('textShadow', '3px 3px 2px black')
    }else if(hour >= 18 && hour<9){
        localStorage.setItem('bgImgType', 'evening')
        localStorage.setItem('fontColor', 'white')
        localStorage.setItem('textShadow', '2px 2px black')
    }else{
        localStorage.setItem('bgImgType', 'night')
        localStorage.setItem('fontColor', 'white')
        localStorage.setItem('textShadow', '2px 2px black')
    }
    getBg(localStorage.getItem('bgImgType'))

    main.style.color = localStorage.getItem('fontColor')
    main.style.textShadow = localStorage.getItem('textShadow')

}

const getBg = (bgImgType)=>{
    let pictureId = Math.ceil(Math.random()*20)
    main.style.background = `url("./../assets/images/${bgImgType}/${pictureId.toString()}.jpg") 50% 50% no-repeat border-box`
    main.style.backgroundSize = 'cover'
}


//----------------------get img-------------------
//======================Store Username===============

const getUserName = () =>{
    if(localStorage.getItem('userName') === "" ||  localStorage.getItem('userName') === null){
        greetingName.innerText = '[Enter your name]'
    }else {
        greetingName.innerText = localStorage.getItem('userName')
    }
}

const getFocus = () =>{
    if(localStorage.getItem('userFocus') === "" || localStorage.getItem('userFocus') === null){
        focusName.innerText = '[Enter your focus]'
    }else {
        focusName.innerText = localStorage.getItem('userFocus')
    }
}


// set username and focus
const setUserName = (e) =>{
    if(e.target.innerText === ''){
        return
    }
    localStorage.setItem('userName', e.target.innerText);
}

const setFocus = (e) =>{
    localStorage.setItem('userFocus', e.target.innerText);
}

// show username
//====================================get quote========

const getQuote = async()=>{
    const url = `https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en`
    const res = await fetch(url)
    const data = await res.json()

    quote.innerText = data.quoteText
    quoteCaption.innerText = data.quoteAuthor
}

//====================================get quote========

//=--------------------------get WEATHER=================

const setUsersCity = (e)=>{
    localStorage.setItem('usersCity', e.target.innerText);
}

const getUsersCity = ()=>{
    if(localStorage.getItem('usersCity') === "" || localStorage.getItem('usersCity') === null){
        weatherLocation.innerText = '[Enter your city]'
    }else {
        weatherLocation.innerText = localStorage.getItem('usersCity')
    }
}

const setWeather = async()=>{
    if(localStorage.getItem('usersCity')){
        const weatherInfo = await getWeather(openWeatherApi, localStorage.getItem('usersCity'))
        console.log(weatherInfo);
        weatherIcon.forEach(icon=>{
            icon.src = `http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}.png`
        })
        weatherDescription.innerText = weatherInfo.weather[0].description
        weatherTemperature.forEach(temp=>{
            temp.innerHTML = `<span>${weatherInfo.main.temp} &deg;C</span>`
        })
        weatherWind.innerText = weatherInfo.wind.speed
        weatherHumidity.innerText = weatherInfo.main.humidity
    }else{
        weatherDescription.style.display = 'none'
        weatherTemperature.style.display = 'none'
        weatherWind.style.display = 'none'
        weatherHumidity.style.display = 'none'
        weatherLocation.innerText = '[enter city]'
    }

}

//=--------------------------get WEATHER=================

//======================Store Username===============

const checkEnterKeyOnSubmit = (element) =>{
    element.addEventListener('keydown', (e)=>{
        if(e.code === "Enter"){
            element.blur()
        }
    })
}

//============CHANGE NAME=================================
greetingName.addEventListener('change', setUserName)
greetingName.addEventListener('blur', (e)=>{
    setUserName(e)
    getUserName()
    greetingName.style.background = 'none'
    greetingName.setAttribute('contenteditable', 'false')
})
checkEnterKeyOnSubmit(greetingName)

changeNameBtn.addEventListener('click', ()=>{
    greetingName.setAttribute('contenteditable', 'true')
    greetingName.style.background = 'rgba(255,255,255, .4)'
    greetingName.focus()
})
//============CHANGE NAME=================================

//============CHANGE FOCUS=================================
focusName.addEventListener('keypress', setFocus)
focusName.addEventListener('blur', (e)=>{
    setFocus(e)
    getFocus()
    focusName.style.background = 'none'
    focusName.setAttribute('contenteditable', 'false')
})
checkEnterKeyOnSubmit(focusName)

changeFocusBtn.addEventListener('click', ()=>{
    focusName.setAttribute('contenteditable', 'true')
    focusName.style.background = 'rgba(255,255,255, .4)'
    focusName.focus()
})
//============CHANGE FOCUS=================================

//============CHANGE WEATHER=================================

weatherLocation.addEventListener('change', setUsersCity)
weatherLocation.addEventListener('blur', (e)=>{
    setUsersCity(e)
    getUsersCity()
    setWeather()
    weatherLocation.style.background = 'none'
    weatherLocation.setAttribute('contenteditable', 'false')
})
checkEnterKeyOnSubmit(weatherLocation)


changeWeatherBtn.addEventListener('click', ()=>{
    weatherLocation.setAttribute('contenteditable', 'true')
    weatherLocation.style.background = 'rgba(255,255,255, .4)'
    weatherLocation.focus()
})

extendWeatherBtn.addEventListener('click', ()=>{
    if( weatherExtended.style.visibility === 'hidden'){
        weatherExtended.style.visibility = 'visible'
        weatherShortened.style.display = 'none'
    }else{
        weatherExtended.style.visibility = 'hidden'
        weatherShortened.style.display = 'flex'
    }

})
//============CHANGE WEATHER=================================


document.addEventListener('DOMContentLoaded', getQuote,getUsersCity)

refreshQuoteBtn.addEventListener('click', getQuote)

refreshBackground.addEventListener('click', ()=>{
     getBg(localStorage.getItem('bgImgType'))

    refreshBackground.disabled = 'disabled'
    refreshBackgroundContent.classList.add('no-hover')
    setTimeout(()=>{
        refreshBackground.disabled = ''
        refreshBackgroundContent.classList.remove('no-hover')
    }, 2000)
} )


// ===================RUN------------------->>>
showTime()
getBgImg()
getUserName()
getFocus()
setWeather()
getUsersCity()
// ===================RUN------------------->>>