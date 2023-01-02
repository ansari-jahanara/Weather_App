let body = document.body;
let input = document.querySelector("input");
let form = document.querySelector("form")
let button = document.querySelector("button")
let img = document.querySelector("img")
let info=document.querySelector("info")
let h1=document.getElementById("degree")
let h2 =document.querySelector("h2")
let p =document.querySelector("p")
let secondSection=document.getElementById("bg-img")
form.addEventListener("submit",showDetails)

async function showDetails(e){
 e.preventDefault()
 try{
    let response=await fetch(`http://api.weatherapi.com/v1/current.json?key=1629c1299dfb4d33839185948221012&q=${input.value}&aqi=yesResponse Code`)
    let data = await response.json()
    let temp = data.current.temp_c
    let name=data.location.name
    let humidity = data.current.humidity
    let country = data.location.country
    let icon = data.current.condition.icon
    let {text}=data.current.condition
    secondSection.style.backgroundImage=`url('https://source.unsplash.com/random/450X550?/${text}')`;
    img.style.height="150px"
    img.style.width="150px"
    img.setAttribute("src",icon)

    h1.innerText=`${temp}°C`;
    h2.innerText=name+", "+country;
    p.innerText="Humidity - "+humidity;
    form.reset()
 }catch(err){
    window.alert("Enter valid city name")
 }
}