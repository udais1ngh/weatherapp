const mainmenu=document.querySelector('.mainmenu');
const closemenu=document.querySelector('.closemenu');
const openmenu=document.querySelector('.openmenu');


openmenu.addEventListener('click',show);
closemenu.addEventListener('click',close);


function show(){
    mainmenu.style.display='flex';
    mainmenu.style.right='0';
    
}
function close(){
    mainmenu.style.right='-100%';
}
const cityname=document.getElementById('cityname');
const submitbtn=document.getElementById('submitbtn');
const cn=document.getElementById('cn');
const tmp=document.getElementById('tmp');
const maxmp=document.getElementById('maxtmp');
const mintmp=document.getElementById('mintmp');
const tmpstatus=document.getElementById('tmpstatus');
const todaydata=document.getElementById('todaydata');
const day=document.getElementById('day');
const tp=document.getElementById('tp');
const tp2=document.getElementById('tp2');
const tp3=document.getElementById('tp3');
const ml = document.querySelector(".ml");
ml.classList.add("data_hide");


const getinfo=async(event)=>{
    event.preventDefault();
    let cityval=cityname.value;
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let ay = weekday[d.getDay()];

    if(cityval===""){
cn.innerText=`Enter City Name.`;

    }else{
        try{
            let url=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityval}?unitGroup=metric&key=8QUXLK3ER77LZ3ZLP4BFF6B8G&contentType=json`
            const response= await fetch(url);
            const data= await response.json();
            console.log(data);
            const arr=[data];
            tmp.innerText=arr[0].days[0].temp;
            maxtmp.innerText=arr[0].days[0].tempmax;
            mintmp.innerText=arr[0].days[0].tempmin;
            todaydata.innerText=arr[0].days[0].datetime;
            cn.innerText=arr[0].resolvedAddress;
            day.innerText=ay;
            tp.innerText=arr[0].days[0].conditions;
            tp2.innerText=arr[0].days[0].precip;
            tp3.innerText="Wind Speed-"+arr[0].days[0].windspeed;

           ml.classList.remove('data_hide');
           
        }
        catch{
            cn.innerText=`Enter Proper City Name.`
        }
        
        
        const response= await fetch(url);
    }
}


submitbtn.addEventListener('click',getinfo);
