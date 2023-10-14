document.getElementById("submit").onclick=function(){
    
    let temperature;
    
    if (document.getElementById("celsius").checked){
        temperature=document.getElementById("input-temp").value;
        temperature=Number(temperature)
        temperature=toCelsius(temperature);
        document.getElementById("result").innerHTML=`Your input in Celsius is ${temperature}°`
    }
    
    else if (document.getElementById("fahrenheit").checked){
        temperature=document.getElementById("input-temp").value;
        temperature=Number(temperature)
        temperature=toFahrenheit(temperature);
        document.getElementById("result").innerHTML=`Your input in Fahrenheit is ${temperature}F`
    }
    else{
        document.getElementById("result").innerHTML=`Please Select a conversion unit`
    }

}

function toCelsius(temperature){
    return Math.floor(temperature-32)*(5/9);
}

function toFahrenheit(temperature){
    return Math.floor(temperature*9/5+32);
}