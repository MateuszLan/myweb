let tab=["kot","kon","pies","smok"];
wielkoscTablicy=tab.length;

function sprawdzanie(radio){
    for(i = 0; i < radio.length; i++)
    {
        if(radio[i].checked)
        {
            radio=document.getElementsByName('wybor')[i].value;
            sprawdzanie2(radio);
            break;
        }
        }
    return radio;
}

function sprawdzanie2(radio){
   for(k = 0; k < wielkoscTablicy; k++)
   {
       if(radio==tab[k])
       {
           break;
       }
       }
   return radio;
}


let alertt;
 function wGore(){
    let alertt="Tego obrazka nie można już wyżej podnieść!";
    strzalki(-2,alertt,10,10,319,10,10,596,319,596,0,1,2);

 }
 function wLewo(){
    let alertt="Tego obrazka nie można już przesunąć bardziej w lewo!";
    strzalki(-1,alertt,10,10,10,596,319,10,319,596,0,2,1);

 }
 function wDol(){
    let alertt="Tego obrazka nie można już niżej opuścić!";
    strzalki(2,alertt,319,10,10,10,319,596,10,596,2,3,0);

 }
 function wPrawo(){
    let alertt="Tego obrazka nie można już przesunąć bardziej w prawo!";
    strzalki(1,alertt,10,596,10,10,319,596,319,10,1,3,0);

 }





 function strzalki(wartosc,alertt,wartosc1,wartosc2,wartosc3,wartosc4,wartosc5,wartosc6,wartosc7,wartosc8,nie,nie2,tak){
    radio=document.getElementsByName('wybor');

    radio=sprawdzanie(radio);
    if(i==radio.length)
    alert("Zaznacz jakiś obrazek, żeby go przenieść!");
    else{
             for (let index = 0; index < wielkoscTablicy; index++) {
                if(radio==tab[index])
                {
                    if(index==nie || index==nie2)
                    {
                        alert(alertt);
                         break;
                     }
                     else{

                         kopia=tab[index+wartosc];
                         tab[index+wartosc]=radio;
                    tab[index]=kopia;
                    for (let j = 0; j < wielkoscTablicy; j++) {
                        if(tab[index]==document.getElementsByName('wybor')[j].value){
                     przycisk=document.getElementsByName('wybor');
                     zdjecie=document.getElementsByClassName('img');


                     if(index==tak){
                        przycisk[j].style.top=wartosc3+'px';
                        przycisk[j].style.left=wartosc4+'px';
                        zdjecie[j].style.top=wartosc3+'px';
                        zdjecie[j].style.left=wartosc4+'px';

                        // zdjecie[j].style.setProperty('transform', 'rotate(360deg)');
                    }
                    else{
                        przycisk[j].style.top=wartosc7+'px';
                        przycisk[j].style.left=wartosc8+'px';
                        zdjecie[j].style.top=wartosc7+'px';
                        zdjecie[j].style.left=wartosc8+'px';

                        // zdjecie[j].style.setProperty('transform', 'rotate(360deg)');
                    }
                 }
                 if(tab[index+wartosc]==document.getElementsByName('wybor')[j].value){
                     przycisk2=document.getElementsByName('wybor');
                     zdjecie2=document.getElementsByClassName('img');

                     if(index==tak){

                        // zdjecie2[j].style.setProperty('transform', 'rotate(360deg)');
                        przycisk2[j].style.top=wartosc1+'px';
                        przycisk2[j].style.left=wartosc2+'px';
                        zdjecie2[j].style.top=wartosc1+'px';
                        zdjecie2[j].style.left=wartosc2+'px';

                     }
                     else{
                        przycisk2[j].style.top=wartosc5+'px';
                        przycisk2[j].style.left=wartosc6+'px';
                        zdjecie2[j].style.top=wartosc5+'px';
                        zdjecie2[j].style.left=wartosc6+'px';

                        // zdjecie2[j].style.setProperty('transform', 'rotate(360deg)');
                     }
                 }

                    }
                    break;}
                }
             }
 }
 }


function bombaa(){
   let bombaa2=document.getElementById('bomba2');
   let bombaa3=document.getElementById('bomba3');
   let bombaa4=document.getElementById('bomba4');
   let bombaa5=document.getElementById('bomba5');
   radio=document.getElementsByName('wybor');
   rotation='360deg';
   rotation1='0deg';
   smok=document.getElementById('smok');
var gora4=smok.offsetTop;
	var lewo4=smok.offsetLeft;
   pies=document.getElementById('pies');
var gora3=pies.offsetTop;
	var lewo3=pies.offsetLeft;
   kon=document.getElementById('kon');
var gora2=kon.offsetTop;
	var lewo2=kon.offsetLeft;
   kot=document.getElementById('kot');
var gora1=kot.offsetTop;
	var lewo1=kot.offsetLeft;

    radio=sprawdzanie(radio);
    if(i==4){
      k=4;
      tlo=document.getElementById("obrazkii");
      setTimeout(function(){
         // tlo.style.setProperty('transition-duration','3s');
         // tlo.style.setProperty('transition-property','all');
         tlo.style.setProperty('display','block');
         tlo.style.setProperty('BACKGROUND-IMAGE',"url({{ url_for('static', filename='tlo.png') }})");
      }, 4000);
   }
    if(k==0 || i==4&&
      (

         gora1=='20'
         &&
         lewo1=='20'
         ||
         gora2=='20'
          &&
          lewo2=='20'
          && i==4
          ||
          gora3=='20'
          &&
          lewo3=='20'
          && i==4
          ||
          gora4=='20'
          &&
          lewo4=='20'
          && i==4
         )

         )
      {

    bombaa2.style.top='200px';
    bombaa2.style.left='250px';
    bombaa2.style.transform = "rotate(" + rotation + ") scale(2.5)";
   setTimeout(function(){ bombaa2.style.transform = "rotate(" + rotation1 + ") scale(1)";
}, 1250);
    setTimeout(function(){ wybuch2=document.getElementById('wybuch2');
       wybuch2.style.display='inline';
       setTimeout(function(){ wybuch22=document.getElementById('wybuch22');
       bombaa2.style.display='none';
       bombaa2.style.top= '635px';
            bombaa2.style.left= '1420px';
       wybuch22.style.display='inline';
       wybuch222=document.getElementById('wybuch222');
       wybuch222.style.display='inline';
       setTimeout(function(){
       wybuch2.style.display='none';
       wybuch22.style.display='none';
       wybuch222.style.display='none';
       if(i==4)
       {
         for (let ind = 0; ind < 4; ind++) {
            document.getElementsByName('wybor')[ind].style.display='none';
         document.getElementsByName('wybor')[ind].checked=false;

         }
          piess=document.getElementById('pies');
          kott=document.getElementById('kot');
          konn=document.getElementById('kon');
          smokk=document.getElementById('smok');
          piess.style.display='none';
          konn.style.display='none';
          smokk.style.display='none';
      }
      else{
       kott=document.getElementById(radio);
       document.getElementsByName('wybor')[i].style.display='none';
       document.getElementsByName('wybor')[i].checked=false;
      }
       kott.style.display='none';
       bombaa2.style.display='inline';
       }, 300);
      }, 150); }, 3000);

}


if(k==1 || i==4 &&
   (

      gora1=='20'
      &&
      lewo1=='606'
      ||
      gora2=='20'
       &&
       lewo2=='606'
       && i==4
       ||
       gora3=='20'
       &&
       lewo3=='606'
       && i==4
       ||
       gora4=='20'
       &&
       lewo4=='606'
       && i==4
      )

      )
   {

   bombaa3.style.top='200px';
   bombaa3.style.left='850px';
   bombaa3.style.transform = "rotate(" + rotation + ") scale(2.5)";
   setTimeout(function(){ bombaa3.style.transform = "rotate(" + rotation1 + ") scale(1)";
}, 1250);
   setTimeout(function(){ wybuch3=document.getElementById('wybuch3');
      wybuch3.style.display='inline';
      setTimeout(function(){ wybuch33=document.getElementById('wybuch33');
      bombaa3.style.display='none';
      bombaa3.style.top= '635px';
           bombaa3.style.left= '1420px';
      wybuch33.style.display='inline';
      wybuch333=document.getElementById('wybuch333');
      wybuch333.style.display='inline';
      setTimeout(function(){
      wybuch3.style.display='none';
      wybuch33.style.display='none';
      wybuch333.style.display='none';
      if(i==4)
      {
         for (let ind = 0; ind < 4; ind++) {
            document.getElementsByName('wybor')[ind].style.display='none';
         document.getElementsByName('wybor')[ind].checked=false;

         }
         piess=document.getElementById('pies');
         kott=document.getElementById('kot');
         konn=document.getElementById('kon');
         smokk=document.getElementById('smok');
         kott.style.display='none';
         piess.style.display='none';
         smokk.style.display='none';
     }
     else{
      konn=document.getElementById(radio);
      document.getElementsByName('wybor')[i].style.display='none';
      document.getElementsByName('wybor')[i].checked=false;
     }
      konn.style.display='none';
      bombaa3.style.display='inline';
      }, 300);
     }, 150); }, 3000);

}



if(k==2 || i==4&&
   (

      gora1=='329'
      &&
      lewo1=='20'
      ||
      gora2=='329'
       &&
       lewo2=='20'
       && i==4
       ||
       gora3=='329'
       &&
       lewo3=='20'
       && i==4
       ||
       gora4=='329'
       &&
       lewo4=='20'
       && i==4
      )

      )
   {

   bombaa4.style.top='480px';
   bombaa4.style.left='250px';
   bombaa4.style.transform = "rotate(" + rotation + ") scale(2.5)";
   setTimeout(function(){ bombaa4.style.transform = "rotate(" + rotation1 + ") scale(1)";
}, 1250);
   setTimeout(function(){ wybuch4=document.getElementById('wybuch4');
      wybuch4.style.display='inline';
      setTimeout(function(){ wybuch44=document.getElementById('wybuch44');
      bombaa4.style.display='none';
      bombaa4.style.top= '635px';
           bombaa4.style.left= '1420px';
      wybuch44.style.display='inline';
      wybuch444=document.getElementById('wybuch444');
      wybuch444.style.display='inline';
      setTimeout(function(){
      wybuch4.style.display='none';
      wybuch44.style.display='none';
      wybuch444.style.display='none';
      if(i==4)
      {
         for (let ind = 0; ind < 4; ind++) {
            document.getElementsByName('wybor')[ind].style.display='none';
         document.getElementsByName('wybor')[ind].checked=false;

         }
         document.getElementsByName('wybor')[2].style.display='none';
         document.getElementsByName('wybor')[2].checked=false;
      piess=document.getElementById('pies');
      kott=document.getElementById('kot');
      konn=document.getElementById('kon');
      smokk=document.getElementById('smok');
      kott.style.display='none';
      konn.style.display='none';
      smokk.style.display='none';
     }
     else{
      piess=document.getElementById(radio);
      document.getElementsByName('wybor')[i].style.display='none';
      document.getElementsByName('wybor')[i].checked=false;
     }
      piess.style.display='none';
      bombaa4.style.display='inline';
      }, 300);
     }, 150); }, 3000);

}




if(k==3 || i==4
&&
(

   gora1=='329'
   &&
   lewo1=='606'
   ||
   gora2=='329'
    &&
    lewo2=='606'
    && i==4
    ||
    gora3=='329'
    &&
    lewo3=='606'
    && i==4
    ||
    gora4=='329'
    &&
    lewo4=='606'
    && i==4
   )

   )
{

   bombaa5.style.top='480px';
   bombaa5.style.left='850px';
   bombaa5.style.transform = "rotate(" + rotation + ") scale(2.5)";
   setTimeout(function(){ bombaa5.style.transform = "rotate(" + rotation1 + ") scale(1)";
}, 1250);
   setTimeout(function(){ wybuch5=document.getElementById('wybuch5');
      wybuch5.style.display='inline';
      setTimeout(function(){ wybuch55=document.getElementById('wybuch55');
      bombaa5.style.display='none';
      bombaa5.style.top= '635px';
           bombaa5.style.left= '1420px';
      wybuch55.style.display='inline';
      wybuch555=document.getElementById('wybuch555');
      wybuch555.style.display='inline';
      setTimeout(function(){
      wybuch5.style.display='none';
      wybuch55.style.display='none';
      wybuch555.style.display='none';
      if(i==4)
      {
         for (let ind = 0; ind < 4; ind++) {
            document.getElementsByName('wybor')[ind].style.display='none';
         document.getElementsByName('wybor')[ind].checked=false;

         }
      smokk=document.getElementById('smok');
      kott=document.getElementById('kot');
      konn=document.getElementById('kon');
      piess=document.getElementById('pies');
      kott.style.display='none';
      konn.style.display='none';
      piess.style.display='none';

     }
     else{
      smokk=document.getElementById(radio);
      document.getElementsByName('wybor')[i].style.display='none';
      document.getElementsByName('wybor')[i].checked=false;
     }
      smokk.style.display='none';
      bombaa5.style.display='inline';
      }, 300);
     }, 150); }, 3000);

}



}

