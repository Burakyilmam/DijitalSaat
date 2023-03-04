function saatguncelle(){

    var zaman = new Date();

    var saat = zaman.getHours();

    if(saat < 10){
        saat = "0" + saat;
    }
    
    var dakika = zaman.getMinutes();
    
    if(dakika < 10){
        dakika = "0" + dakika;
    }
    
    var saniye = zaman.getSeconds();

    if(saniye < 10){
        saniye = "0" + saniye;
    }

    var gun = zaman.getDate();

    if(gun < 10){
        gun = "0" + gun;
    }
    var strgun = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]; 

    var gunler = strgun[zaman.getDay()]; // 0-6 Arası

    var ay = zaman.getMonth(); // 0-11 Arası

    if(ay == 0){
        ay = "Ocak";
    }
    else if(ay == 1){
        ay = "Şubat";
    }
    else if(ay == 2){
        ay = "Mart";
    }
    else if(ay == 3){
        ay = "Nisan";
    }
    else if(ay == 4){
        ay = "Mayıs";
    }
    else if(ay == 5){
        ay = "Haziran";
    }
    else if(ay == 6){
        ay = "Temmuz";
    }
    else if(ay == 7){
        ay = "Ağustos";
    }
    else if(ay == 8){
        ay = "Eylül";
    }
    else if(ay == 9){
        ay = "Ekim";
    }
    else if(ay == 10){
        ay = "Kasım";
    }
    else if(ay == 11){
        ay = "Aralık";
    }

    var yıl = zaman.getFullYear();
 
    var saatdeger = saat + ":" + dakika + ":" + saniye;

    var tarih = gun + " " + ay + " " + yıl + " " + gunler;

    document.getElementById("saat").innerHTML = saatdeger;

    document.getElementById("tarih").innerHTML = tarih;

}

    setInterval(saatguncelle,1000);

    var sehir= document.querySelector('#sehir');
    var sicaklik = document.querySelector('#sicaklik');

        let api = 'https://api.openweathermap.org/data/2.5/weather?q=Ankara,Tr&appid=0928835605ea3e6b03f3a11f83b9d751&units=metric';     
        fetch(api).then(Response => Response.json()).then(data => 
        {
        var sehirValue = data['name'];
        var sicaklikValue = data['main']['temp'];


        sehir.innerHTML = sehirValue;
        sicaklik.innerHTML = sicaklikValue + "°C";
        }
        )
        //fetch(api).then(Response => Response.json()).then(data =>console.log(data))