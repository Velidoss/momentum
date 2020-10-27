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
const changeNameInput = document.querySelector('.greeting__name-input')

const changeFocusInput = document.querySelector('.change-focus-input')
const changeFocusBtn =  document.querySelector('.change-focus-btn')
const extendWeatherBtn = document.querySelector('.open-extended-weather-btn')
const changeWeatherInput = document.querySelector('.main-weather__location-change-input')

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
    let CurrentTime , CurrentDate
    if(window.innerWidth >= 576 ){
        CurrentTime = `${checkZeros(Data.getHours())} : ${checkZeros(Data.getMinutes())} : ${checkZeros(Data.getSeconds())}`
        CurrentDate = `${determineDay(Data)} , ${Data.getDate()} of ${determineMonth(Data)} , ${Data.getFullYear()}`
    }else{
        CurrentTime = `${checkZeros(Data.getHours())} : ${checkZeros(Data.getMinutes())}`
        CurrentDate =  `${Data.getDate()}.${Data.getMonth()+1}.${Data.getFullYear()}`
    }




    time.innerHTML = CurrentTime
    date.innerHTML = CurrentDate

    setTimeout( showTime,1000)
}

// -----------------TIME

//----------------------get img-----------------------

let bgPaths = {
    'morning': '',
    'day': '',
    'evening': '',
    'night':''
}
function createBgList (){
    for(let i = 0 ; i<Object.keys(bgPaths).length; i++){
        bgPaths[Object.keys(bgPaths)[i]] = `url("./../assets/images/${Object.keys(bgPaths)[i]}/${Math.ceil(Math.random()*20)}.jpg") 50% 50% / cover no-repeat`
    }
}

function getBgImg (){

    const hour = new Date(Date.now()).getHours()

    if(hour >= 6 && hour<12 ){
        localStorage.setItem('bgImgType', 'morning')
        localStorage.setItem('fontColor', 'white')
        localStorage.setItem('textShadow', '3px 3px 2px black')
    }else if(hour >= 12 && hour<18){
        localStorage.setItem('bgImgType', 'day')
        localStorage.setItem('fontColor', 'white')
        localStorage.setItem('textShadow', '3px 3px 2px black')
    }else if(hour >= 18 && hour<24){
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
    main.style.background =bgPaths[bgImgType]
}
const changeBg=()=>{
    let newBg
    for(let i = 0; i< Object.values(bgPaths).length;i++){
        if(Object.values(bgPaths)[i] === main.style.background){
            newBg = bgPaths[Object.keys(bgPaths)[(i+1)%4]]
        }
    }
    main.style.background= newBg

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
    if(e.target.value === ''){
        return
    }
    localStorage.setItem('userName', e.target.value);
}

const setFocus = (e) =>{
    if(e.target.value === ''){
        return
    }
    localStorage.setItem('userFocus', e.target.value);
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
    if(e.target.value === ''){
        return
    }
    localStorage.setItem('usersCity', e.target.value);
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
        weatherExtended.style.display = 'none'
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
changeNameBtn.addEventListener('click', ()=>{
    const inputWidth = greetingName.offsetWidth
    greetingName.style.display = 'none'
    changeNameInput.style.display = 'inline-flex'
    changeNameInput.style.width = inputWidth.toString() + 'px'
    changeNameInput.focus()
    changeNameInput.setSelectionRange(changeNameInput.value.length, changeNameInput.value.length)
    changeNameInput.addEventListener('input', ()=>{
        changeNameInput.style.width = changeNameInput.value.length + 'ch'

    })
    changeNameInput.addEventListener('change', (e)=>{setUserName(e)})
    changeNameInput.addEventListener('blur', (e)=>{
        setUserName(e)
        getUserName()
        changeNameInput.value = ''
        changeNameInput.style.display = 'none'
        greetingName.style.display = 'flex'

    })
})
checkEnterKeyOnSubmit(changeNameInput)
//============CHANGE NAME=================================

//============CHANGE FOCUS=================================

changeFocusBtn.addEventListener('click', ()=>{
    const inputWidth = focusName.offsetWidth
    focusName.style.display = 'none'
    changeFocusInput.style.display = 'inline-flex'
    changeFocusInput.style.width = inputWidth.toString() + 'px'
    changeFocusInput.focus()
    changeFocusInput.setSelectionRange(changeFocusInput.value.length, changeFocusInput.value.length)
    changeFocusInput.addEventListener('input', ()=>{
        changeFocusInput.style.width = changeFocusInput.value.length + 'ch'

    })
    changeFocusInput.addEventListener('change', setFocus)
    changeFocusInput.addEventListener('blur', (e)=>{
        setFocus(e)
        getFocus()
        changeFocusInput.value = ''
        changeFocusInput.style.display = 'none'
        focusName.style.display = 'flex'

    })
})
checkEnterKeyOnSubmit(changeFocusInput)
//============CHANGE FOCUS=================================

//============CHANGE WEATHER=================================

let hasFired = false
changeWeatherBtn.addEventListener('click', ()=>{
    const inputWidth = weatherLocation.offsetWidth
    weatherLocation.style.display = 'none'
    changeWeatherInput.style.display = 'inline-flex'
    changeWeatherInput.style.width = inputWidth.toString() + 'px'
    changeWeatherInput.focus()
    changeWeatherInput.setSelectionRange(changeWeatherInput.value.length, changeWeatherInput.value.length)
    changeWeatherInput.addEventListener('input', ()=>{
        changeWeatherInput.style.width = changeWeatherInput.value.length + 'ch'

    })
    changeWeatherInput.addEventListener('change', setUsersCity)
    changeWeatherInput.addEventListener('blur', (e)=>{
        setUsersCity(e)
        getUsersCity()
        changeWeatherInput.value = ''
        changeWeatherInput.style.display = 'none'
        weatherLocation.style.display = 'inline-flex'

    })
})
weatherExtended.style.visibility = 'hidden'

extendWeatherBtn.addEventListener('click', ()=>{
    if( weatherExtended.style.visibility === 'hidden'){
        weatherExtended.style.visibility = 'visible'
        weatherShortened.style.display = 'none'
        weatherExtended.focus()
    }else{
        setTimeout(()=>{
            weatherShortened.style.display = 'flex'
        }, 500)
        weatherExtended.style.visibility = 'hidden'

    }

})

//============CHANGE WEATHER=================================


document.addEventListener('DOMContentLoaded', getQuote,getUsersCity)

refreshQuoteBtn.addEventListener('click', getQuote)

refreshBackground.addEventListener('click', ()=>{
    changeBg()

    refreshBackground.disabled = 'disabled'
    refreshBackgroundContent.classList.add('no-hover')
    setTimeout(()=>{
        refreshBackground.disabled = ''
        refreshBackgroundContent.classList.remove('no-hover')
    }, 2000)
} )


// ===================RUN------------------->>>
showTime()
createBgList()
getBgImg()
getUserName()
getFocus()
setWeather()
getUsersCity()

// ===================RUN------------------->>>