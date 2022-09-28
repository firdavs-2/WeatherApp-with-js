//Inputni qiymatini olish funksiyasi
const input = document.querySelector(".input");
input.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    getData(e.target.value);
  }
});
//APIdan ma'lumot olish funksiyasi
const YourKey = "45f5775fbc872d9becc2c3f0cab5299c";

async function getData(value) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&APPID=${YourKey}`
  );
  const data = await response.json();
  UI(data);
}
//APIdan kelgan ma'lumotlarni saytimizni UI qismida ishlatish funksiyasi
const country = document.querySelector(".country");
const date = document.querySelector(".date");
const temp = document.querySelector(".temp");
const condition = document.querySelector(".condition");
const min = document.querySelector(".min");
const max = document.querySelector(".max");
const body=document.body;
const modal_block=document.querySelector(".modal_block");
const day=new Date();
const currentDate=`${day.getDate()}.${day.getMonth()+1}.${day.getFullYear()}`
const UI = function (data) {
  console.log(data.cod)

  if(data.cod==200){
  country.innerHTML = data.name;
  temp.innerHTML = Math.round (data.main.temp);
  condition.innerHTML=data.weather[0].main;
  min.innerHTML=Math.round(data.main.temp_min);
  max.innerHTML=Math.round(data.main.temp_max);
  switch(data.weather[0].main){
    case "Clouds":
      body.style.backgroundImage='url("./noaa-kcvlb727mn8-unsplash.jpg")'
      break;
      case "Clear":
      body.style.backgroundImage='url("./church-g78c9613d9_1920.jpg")'
      break;
      case "Rain":
      body.style.backgroundImage='url("./pexels-kaique-rocha-125510.jpg")'
      break;
      case "Snow":
      body.style.backgroundImage='url("./pexels-james-wheeler-1552212.jpg")'
      break;
  }
 
}else if  (data.cod==404){
  console.log("is working")
  
  const div=document.createElement('div');
  div.innerHTML="Bunaqa mamlakat topilmadi"
  div.classList.add("modal");
  modal_block.appendChild(div);
  setTimeout(()=>{div.classList.add("fade")},2000)
  setTimeout(()=>{div.classList.add("none")},3000)
}
};
date.innerHTML=currentDate;


