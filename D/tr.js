var sec=0,page=1,fname = 'Bossman',msg='message',movieUrl="",moviePage="", TaskToHandle=1,TaskId="";

var  startValue = 6000, initData,id2='537920146';

const circularProgress = document.querySelectorAll(".circular-progress");

Array.from(circularProgress).forEach((progressBar) => {
  const progressValue = progressBar.querySelector(".percentage");
  const innerCircle = progressBar.querySelector(".inner-circle");
  var endValue = Number(progressBar.getAttribute("data-percentage")),
    speed = 1000,
    progressColor = "grey";//progressBar.getAttribute("data-progress-color");

  const progress = setInterval(() => {
    startValue++;
    progressValue.textContent = startValue;
    progressValue.style.color = progressColor;

    innerCircle.style.backgroundColor = "#332e2e";
    progressBar.style.background = 'conic-gradient('+progressColor +','+startValue * (360/endValue)+'deg,darkgrey 0)';
    
    /*progressBar.style.background = 'conic-gradient(${progressColor} ${
      startValue * (360/endValue)
    }deg,darkgrey 0deg)';
    */
  }, speed);
});
 

//const tmer =setInterval(txt, 1000);

 
async function initfunc()
{
    try{   
    
Telegram.WebApp.ready(); 
      await lditemsdebug();   
       Telegram.WebApp.themeParams.text_color= '#1e1e1e';
      Telegram.WebApp.setHeaderColor('#332e2e');
         Telegram.WebApp.setBottomBarColor('#332e2e');
         Telegram.WebApp.setBackgroundColor('#332e2e');
         
     Telegram.WebApp.disableVerticalSwipes(); 
     //initData= Telegram.WebApp.initData;    
     id2 =  window.Telegram.WebApp.initDataUnsafe.user.id;
      fname= window.Telegram.WebApp.initDataUnsafe.user.first_name;
              
                                                         
      //setTimeout(getdt, 8000);
         
      document.getElementById('ic').innerHTML =fname[0];
     document.getElementById('nm').innerHTML ="Hi, "+fname;
     //document.getElementById('tc').innerHTML ="Task Coins : "+uu.TaskCoins;
            // setInterval(txt,2000);                                               
       
    }catch(er){showAlert(er);}              
}
    
  
async function txt(){   
         //startValue=sec;
        sec =startValue; 
      if(sec%10==0)alert('great' );
       if(sec==86000) {startValue=0;   uu.autofarm +=86000;}
      
         document.getElementById('auto').innerHTML ='Bot coins : '+uu.autofarm;
             document.getElementById('tc').innerHTML ="Task Coins : "+uu.TaskCoins;
                          
         // document.getElementById('ic').innerHTML =fname[0];
     document.getElementById('nm').innerHTML ="Hi, "+fname;
  
}
 


function closePopUp()
{
   ppp.style.display= "none";
}
function scrl2(el){
  el.scrollIntoView(
 /*{ behavior: "smooth",
  block: "start", 
  inline: "nearest"}*/
);
  
}
function pageld(e){
    // alert("ffffff");
 if(e.id=="p1b") 
     {
     ppp.style.display= "none";
     p1.style.display= "block";
     p2.style.display= "none";
     p3.style.display= "none";
    // ppp.style.display= "none";
    scrl2(p1);   
       

     }
     else if(e.id=="p4b") 
     {
     ppp.style.display= "none";
     p1.style.display= "none";
     p2.style.display= "block";
     p3.style.display= "none";
       scrl2(p2);
      settsk(); 
    // ppp.style.display= "none";
     }
  else if(e.id=="p5b") 
     {
     ppp.style.display= "none";
     p1.style.display= "none";
     p2.style.display= "block";
     p3.style.display= "none";
       scrl2(p2);
      setpg(); 
    //ppp.style.display= "none";
     }
     else if(e.id=="p3b") 
     {
     /* if(lis.length<5)*/ glis(url2+ "List"+fl+".json");
     }
    else if(e.id=="p2b") 
     {
      glis(url2+"List00.json");
     }
}
 function showpops(ms,b1,b2,height,task)
{
     msg=ms;
          document.getElementById('bt1').innerHTML =b1;
          document.getElementById('bt2').innerHTML =b2;
          document.getElementById('pop').innerHTML =msg;
          ppp.style.height= height;
          ppp.style.display= "flex";            
}
function showmovie(e)
{
     movieUrl=e.id; TaskId="";
      if(e.id.includes("://hd"))    
     moviePage= "https://hdmania2.net/showmovie.php?id=" +e.name;   
    else  moviePage= "https://mp4mania1.net/showmovie.php?id=" +e.name;   
                   
     TaskToHandle= 1;    
     let msg='Watch or download the movie directly at the cost of 100,000 coins or visit the movie web page at zero cost. ';
          let b1='Watch or dowload directly';
    let b2 ='Visit movie page';          
    let height= '80%';
          showpops(msg,b1,b2,height);
}


function showinvite(e)
{
          TaskToHandle= 5;TaskId="";
          msg='Get unlimited coins inviting as many frens as you can. Each invite earns you 100,000 coins per new user. You can copy your referral link below.';
    document.getElementById('bt1').innerHTML ='Copy referal link to clipboard';
    document.getElementById('bt2').innerHTML ='Share referral link';          
    document.getElementById('pop').innerHTML =msg;
          ppp.style.height= '80%';
          ppp.style.display= "flex";            
}

function ShowAd(e)
{
     TaskToHandle= 2;TaskId="";
    msg="Watch ads to get 100,000 coins per ad view. If you don't have our MC app installed already, you will have to download and install it first which will give you access to download our game and earn 2,000,000 coins for first time installation of the game after you watch your first ad.";
  document.getElementById('bt1').innerHTML ='Watch ads to earn MCoins';
    document.getElementById('bt2').innerHTML ='Download MC app';          
    
      
  document.getElementById('pop').innerHTML =msg;
  ppp.style.height= '90%';     
  ppp.style.display= "flex";       
          
}

function ShowYt(e)
{
     TaskToHandle= 3;TaskId=e.id;
    msg="Download Movie Coin Android app to earn 100,000 coins each time you watch an ad.";
          document.getElementById('bt1').innerHTML ='Download app now';
    document.getElementById('bt2').innerHTML ='May be later';          
    document.getElementById('pop').innerHTML =msg;          
     ppp.style.height= '80%';     
    ppp.style.display= "flex";       
          
}

function ShowWebsite(e)
{
     TaskToHandle= 4;TaskId=e.id;
    msg="Join our Telegram group to earn 100,000 coins. ";
          document.getElementById('bt1').innerHTML ='Join our Telegram group now';
    document.getElementById('bt2').innerHTML ='May be later';          
    document.getElementById('pop').innerHTML =msg;          
    ppp.style.height= '90%';     
    ppp.style.display= "flex";       
          
}

function ShowWebsitetc(e)
{
     TaskToHandle= 6;TaskId=e.id;
    msg="Subscribe to our Telegram channel to earn 200,000 coins.";
    document.getElementById('bt1').innerHTML ='Subscribe to channel now';
    document.getElementById('bt2').innerHTML ='May be later';          
    document.getElementById('pop').innerHTML =msg;          
    ppp.style.height= '70%';     
    ppp.style.display= "flex";       
  
}


function HandleTask(e)
{ 
          if(e==bt1){
    if(TaskToHandle==1)
          { 
            if(uu.TaskCoins >=100000)
            {
             uu.TaskCoins-=100000; 
            Telegram.WebApp.openLink(movieUrl  ,{try_instant_view:false});
              savedebug();
            }else{ showalert("Not enough TaskCoins. Watch ad or carryout some other tasks and try again." );}
          }   
   else if(TaskToHandle==2)
          { 
                    
       // u[0].rwd= 'Sani'; let str=  JSON.stringify(u[0]);
           uu.rwd= fname; let str=  JSON.stringify(uu);
         
            let st="http://mc2025.mc/mbadsd_"+ str;// +"#Intent;scheme=mc;package=com.mcgames.mcapp;end";
            //let st="<a href='intent://mc2025.mc/ytvid#Intent;scheme=mc;package=com.mcgames.mcapp;end'> Watch ad now</a>";
      Telegram.WebApp.openLink(st,{try_instant_view:false});
            
            
           
            
          }   
  else if(TaskToHandle==3)
          { 
                    showAlert('Task is mobile YT');
          }   
  else if(TaskToHandle==4)
          { 
               Telegram.WebApp.openLink('https://www.youtube.com/channel/UCmhREBhPY_7KiHTdirKNT2g',{try_instant_view:false});
            
          }
  else if(TaskToHandle==5)
          { 
            
                    navigator.clipboard.writeText(getrefcode());
                    showAlert('Referral link copied to clipboard.');
          }
    else if(TaskToHandle==6)
            { 
      
         Telegram.WebApp.openTelegramLink('https://t.me/+DCN-okIeLEtkZjlk');
            }                          
          else
          { 
                    showAlert('Task is empty '+TaskToHandle);
          }   
          }
          else
          {
             if(TaskToHandle==1)
          { 
            Telegram.WebApp.openLink(moviePage  ,{try_instant_view:false});
            
          }   
   else if(TaskToHandle==2)
          { 
                    
            Telegram.WebApp.openLink('https://sundayib.github.io/Mtest/'  ,{try_instant_view:false});
            
          }  
        else if(TaskToHandle==5)
          { 
                    
            Telegram.WebApp.openLink('https://t.me/share/url?url={url}&text={Join MCoin to earn crypto and get best movies recommendations from the community as well as one button click links to download movies.}'  ,{try_instant_view:true});
            
          }      
  else 
          { 
                    ppp.style.display= "none";
          }   
      
                    
                 
          }
}




//HOME ENDS

 async function getdt()
{
          
var weekdt = new Date("25/Dec/2024 20:30:00");
var now = new Date();
          
 if(weekdt.getTime()>now.getTime() || now.getTime()- weekdt.getTime()> 2580000000){ showAlert("Your phone date is not correct. Set it and try again. The app will close automatically."); close(); return;}
  if(now.getTime() - (new Date(uu.lastLogindt).getTime()) > 2752000000 ) { uu.autofarm=0; uu.activedt=now.toString();savedebug(); showAlert("It has been more than 30 days since your last login and because of this your bot coin has reset to zero. To avoid similar situation, try to login at least once every 30 days." )} 
 uu.lastLogindt=now.toString();
       
  /*save("uu.lastLogindt",now.toString()); */
           
    if(new Date( uu.signUpdt).getTime() > now.getTime) uu.signUpdt=now.toString();
         
          let d = new Date();
let h = d.getHours() * 3600;
let m = d.getMinutes() * 60;
 //sec = d.getSeconds() + h  + m; 
      startValue =  d.getSeconds() + h  + m;   
          var diff = now.getTime() - uu.activedt.getTime();
    uu.autofarm= Math.floor((diff )/ (1000)) - startValue;
     if(uu.autofarm<0)uu.autofarm=0;
 
}       
    


const nameOf = async(v) => (v).toString().replace(/[ |\(\)=>]/g,'').substring(5);
  var u=[];// [u1,u2,u3,u4,u5,u6];
  function user(autofarm,TaskCoins ,refId,Ref,ask1,rwd,yts,signUpdt,activedt,lastLogindt)
  { 
    this.autofarm=autofarm;
    this.TaskCoins=TaskCoins;
    this.refId=refId;
    this.Ref=Ref;
    this.ask1=ask1;
    this.rwd=rwd;
    this.yts=yts;
    this.signUpdt=signUpdt;
    this.activedt=activedt;
    this.lastLogindt= lastLogindt;  
                         
                               
  }
  async function  savedebug(key,value)
{
          try{
         
            let saver ="";
            try{saver=JSON.stringify(uu); }catch(x){showAlert(x);}           
Telegram.WebApp.CloudStorage.setItem('data2', saver, function(err, saved) {
                if (err) 
                   {
                     showAlert('Error: ' + err);
                   } 
           else {
                    if (saved)
                   {
                       showAlert('saved');
                    }
                    
                }
            });
          } catch(err){ showAlert("Error saving : "+err);}
    }
  
  function nu()
  {
    u[0]=new user(0,000000 ,'0gfuffffdh','0putrrgj','0ask','k',00, "10/Dec/2024 20:30:00", "10/Dec/2024 20:30:00","10/Dec/2024 20:30:00");    
    u[1]=new user(10,100000 ,'1gfuffffdh','1putrrgj','1ask',10,10,"11/Dec/2024 20:30:00","11/Dec/2024 20:30:00","11/Dec/2024 20:30:00");    
    u[2]=new user(20,200000 ,'2gfuffffdh','2putrrgj','2ask',20,20,"12/Dec/2024 20:30:00","12/Dec/2024 20:30:00","12/Dec/2024 20:30:00");    
    u[3]=new user(30,300000 ,'3gfuffffdh','3putrrgj','3ask',30,30,"13/Dec/2024 20:30:00","13/Dec/2024 20:30:00","13/Dec/2024 20:30:00");    
    u[4]=new user(40,400000 ,'4gfuffffdh','4putrrgj','4ask',40,40,"14/Dec/2024 20:30:00","14/Dec/2024 20:30:00","14/Dec/2024 20:30:00");    
    u[5]=new user(50,500000 ,'5gfuffffdh','5putrrgj','5ask',50,50,"15/Dec/2024 20:30:00","15/Dec/2024 20:30:00","15/Dec/2024 20:30:00");    
    
    u[6]=new user(60,300000 ,'','','6ask',60,60,Date().toString(),new Date().toString(),new Date().toString());    
              
    //alert('created');
  }
  var uu;
  async function cloud(x){  
    uu=u[x];savedebug();
    
    
  }
   //async function cloud(){ alert(await nameOf(()=>u[0].signUpdt) +'  '+  u1.signUpdt); }
  async function  lditemsdebug() {
            let res='';
                    Telegram.WebApp.CloudStorage.getItem("data2", function(err, value) {
                      let save=false;
                            if (err) {
                                showAlert('Error reading from cloud: ' + err);
                                      //for (let i=0;i<keys.length;i++)save(keys[i],"z");
                            } else {
                        
                       if(value.length<5){save=true; value= JSON.stringify(u[6]); showAlert("Welcome! You've been awarded 300,000 coins as a welcome bonus." ); }   
    uu=JSON.parse(value);
    uu.signUpdt =new Date(uu.signUpdt);
    uu.activedt =new Date(uu.activedt);
    uu.lastLogindt =new Date(uu.lastLogindt);
    
                         for(let prop in uu)
                              { 
                      if(uu[prop].toString().length >0){ }     
                      else if(prop.toString()=="Task Coins"){ uu[prop]=0;}
                      else if(prop.toString()=="refId"){ /*uu[prop]=getrefcode();*/}
                      else if(prop.toString()=="ref"){/*uu[prop]="noref";*/}
                      else if(prop.toString()=="ask1"){ /*uu[prop]="nil";*/}
                      else if(prop.toString()=="rwd"){ uu[prop]=0;}
                      else if(prop.toString()=="yts"){uu[prop]=0; }
                      else if(prop.toString()=="signUpdt"){ uu[prop]=new Date();}
                      else if(prop.toString()=="activedt"){ uu[prop]=new Date();}
                      else if(prop.toString()=="lastLogindt"){ uu[prop]=new Date();}
                                
                           res=res+' <obj>' +prop +' = '+uu[prop]+'</obj>' ;       
                         }
                        document.getElementById('ff').innerHTML=res;
                  //if(save){setTimeout( savedebug,5000);   alert(save.toString());}
                       getQuery();
                            }
                           
                        });
    
                  
        }
  
function getQuery(isref=false)
{
 //Params = new URLSearchParams(window.location.search);
   try{
  let Params = Telegram.WebApp.initDataUnsafe.start_param;
  
  //alert(Params);
    // Params=Params.substring(6);
           if(Params.includes('ask'))
          {
            
           let [p1,p2]= Params.split("_") ;  
 if(ask1 == p1)  
           {
             
              Award(p2*100000) ;
              if(uu.yts<100 ){Award( 2000000);
                  uu.yts=2000000; showAlert("Congratulations! You have been awarded 2,000,000 coins for installing our app.");}            
             
           }                               
          }
     else if(Params.includes('yts'))
  {
    let [p1,p2]= Params.split("_");
    
    //if(vidCodes.includes(p2))Award( 200000);
  }
        else if(Params.includes('ref' && uu.ref.length < 4))
  {
    let refcode=Params.split('_')[1];
    //save('ref',refcode);
    //send bot msg
    
    let code=getrefcode();
    uu.ref= refcode;
    uu.refId= code;
    
     sendMsg(code+'===='+refcode );
                               
  }  else{if (isref)uu.ref='noref' ;}
   }catch(x){showAlert(x);}
  if(uu.refId.length<3)uu.refId=getrefcode();
  //uu.lastLogindt=new Date();    
     getdt();
          savedebug();   
}
  var en='KeWoVaQn5x';
function getrefcode()
{   let n='',id2= window.Telegram.WebApp.initDataUnsafe.user.id.toString();
        //showAlert(id2);
  for(let i=0;i<id2.length;i++)
    {
   n=n+ en[id2[i]];
    }
    //alert(rfc);
         return n;
}

  
  function deldebug(){
    
  Telegram.WebApp.CloudStorage.removeItem('data2', function(err, deleted) {
                if (err) {
                  showAlert('Error: ' + err);
                } else {
                    if (deleted) {showAlert('deleted');return; }
                      
                }
  });
  
}
  
  nu();
 //lditemsdebug();
   

function Award(am)
{
  uu.TaskCoins+=am;
  
}

function showAlert(message) {
         alert(message);
            //Telegram.WebApp.showAlert(message);
        }

 function tsk(ic,title,desc,click,id=0)
{
  this.ic=ic;
  this.title=title;
  this.desc=desc;
  this.click=click;
  this.id=id;
  
  let txt='Go',col= 'grey';
  if(click.length <2) {txt='done';col='grey';}
 let temp=  '<div class="ncontainerT">'
  +'<div class="dv1" >'
            +'<div class="dv2">'+ic +'</div>'
         +'</div>'
        +'<div class="dv3" >'
          +'<div style=" font-size: 24px; ">'+ title + '</div>'
              +'<div>'+desc+'</div>'
           +'</div>'
          +'<button id="'+id+'" class="bt" style="color:'+ col +'"  onclick="'+click+'(this );">'+txt+'</button>'
     +'</div>';
   let b=document.getElementById("p2").innerHTML +temp;
    document.getElementById("p2").innerHTML=b;
        
  
}

 function settsk()
{
  document.getElementById("p2").innerHTML="";
  
  tsk('F','Frens Invite','Invite frens to earn unlimited MCoins','showinvite');
  tsk('A','Android App',' Download our app','ShowYt');
  tsk('G','TG Group ','Join our TG group to earn 100,000 coins','ShowWebsite');
  tsk('C','TG Channel','Subscribe to Telegram channel to earn coins','ShowWebsitetc');
  tsk('M','Mobile ads view','View ads to earn MCoins ','ShowAd');
  
}


var titles=[ 'one', 'two', 'three', 'four', 'five', 'six', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ','thirteen ', 'fourteen ', 'fifteen ', 'sixteen ','seventeen ', 'eighteen ', 'nineteen ','twenty', 'twenty one','twenty two ', 'twenty three ', 'twenty four ', 'twenty five ','twenty six ', 'twenty seven ', 'twenty eight ', 'twenty nine ','thirty ', 'thirty one', 'thirty two', 'thirty three ','thirty four ', 'thirty five ', 'thirty six ', 'thirty seven ','thirty eight ', 'thirty nine ', 'forty ', 'forty one ','forty two ','forty three ','forty four ','forty five ','forty six '] ;

 function pgs(ic,title,desc,id)
{
  this.ic=ic;
  this.title=title;
  this.desc=desc;
  this.id=id;
  
  let txt='Load';
 let temp=  '<div class="ncontainerT">'
  +'<div class="dv1" >'
            +'<div class="dv2">'+ic +'</div>'
         +'</div>'
        +'<div class="dv3" >'
          +'<div style=" font-size: 24px; ">'+ title + '</div>'
              +'<div>'+desc+'</div>'
           +'</div>'
          +'<button class="bt" id="'+ id+'" onclick="pld(this);">'+txt+'</button>'
     +'</div>';
   let b=document.getElementById("p2").innerHTML +temp;
    document.getElementById("p2").innerHTML=b;
}

 function setpg()
{
  document.getElementById("p2").innerHTML="";
  let ic='';
  for(let i=0;i<titles.length;i++)
  {
    if(i<9)ic='0'+(i+1); else ic=''+(i+1); 
    pgs(ic,'Page '+titles[i],'Contains videos no. '+((i*50)+1)+' to '+((i*50)+50),titles[i]);
  }
}

function pld(e)
{
  for(let i=0;i<titles.length;i++) {if(e.id==titles[i]){fl=i+1; break;}}
  if(fl<11)glis(url2+"list"+fl+".json"); else showAlert("You can only load pages one to ten at the moment. Other pages will be released as soon as we get more users.");
  
}
//PAGE 3
var lis = ﻿[];
const getJSON = async url => {
  const response = await fetch(url);
  if(!response.ok)  showAlert("Error code: "+response.statusText);
  const data = response.json();
  return data;
  }

  var fl=34, a2="List35.json", url2="https://sundayib.github.io/Mtest/";
 async function glis(url)
{
  
  getJSON(url).then(data => {
 alert(data);
    lis=data;movieindex=0;
    ShowMovieList(); 
}).catch(error => {
  showAlert(error);
});
 }





function get(url){
    showAlert(url.id);
}
 var movIndex=0;
 
 function ini( tit, des,img,len,hre='tttt',lre, hsi,lsi,Lid ,Hid)
{
    this.tit=tit;
    this.des=des;
    this.img=img;
    this.len=len;
    this.hre=hre;
    this.lre=lre;
    this.hsi=hsi;
    this.lsi=lsi;
    this.Lid=Lid;
    this.Hid=Hid;
    
    
    
    
    var temp = '<div id="fr" class="frame">'
        +'<div id="tit" style="font-size:5vh; margin: 20px"> '+tit+'</div>'
 //+'<img src='+img+ ' style="height: 50vh; width:38vh;"/>'
 +'<div id="len"style="font-size:4vh"> Duration : '+len+ '</div>'
      +'<div id="des"style="font-size: 3vh; margin-left: 20px; margin-right: 20px"> DESCRIPTION :'+ des +' </div>'
     
  +'<button class="bt3" style="color: grey;background: #332e2e;border:1px solid grey;" onclick="showmovie(this);" id='+hre+' name= '+Hid+'>High resolution ('+hsi+')</button>'
  +'<button class="bt3" style="color: #332e2e;background: grey;border:1px solid grey;" onclick="showmovie(this);" id='+lre+' name= '+Lid+'>Low resolution ('+lsi+')</button>'
   
  +'</div>';
        let b=document.getElementById("p3content").innerHTML +temp;
    document.getElementById("p3content").innerHTML=b;
  
}

 function ShowMovieList()
{
    ppp.style.display= "none";
     p1.style.display= "none";
     p2.style.display= "none";
     p3.style.display= "block";
       scrl2(p3);
    let x = 0;
    if(movIndex +10 <lis.length)x = movIndex +10;
    else x=lis.length;
     if(x>0)
    {
  document.getElementById("p3content").innerHTML= "  ";      
    for(let i= movIndex;i< x;i++)  
    {
              //"VidImgs\\"+lis[i].Lid+".jpg"
   ini(lis[i].Tit,lis[i].Des, gtim(lis[i].Lid),lis[i].Length,lis[i].HLink,lis[i].LLink,lis[i].HSize,lis[i].LSize,lis[i].Lid , lis[i].Hid);
    }
    }
     
    
}

 function gtim(str)
{
  let p= "http://daib.github.io/P/img/"+str+".jpg";
  
  return p;
}
 
 async function nex()
{
  
     // if(movIndex==lis.length-9) { if(fl<45){fl=fl+1; await glis(url2+ "List"+fl+".json");movIndex= 0;ShowMovieList(); return;} showAlert("End of page reached"); }
     
  if(movIndex +10 <lis.length) movIndex+=10; else {movIndex=lis.length-9; showAlert("End of page reached. Go to pages section to load more movies."); }
    ShowMovieList();   
}
 async function prev()
{
   if(movIndex>=10)
    {
       movIndex= movIndex-10;
     ShowMovieList();   
      
    }
    else //{ if(fl>0){fl=fl-1; await glis(url2+ "List"+fl+".json"); movIndex= lis.length-9;ShowMovieList();  return;} }
      showAlert("You are already on the first page.");
}
let g = "iMM2r7++.2LaM9g9vA.WaSAv+_SMuxYFwwVVVx7QQcWPWSz6/Vki.AKl84fsOjoqQnrnWTfMFv+r95lb9rr.v9",f = "",a = "1bitYD2SM85Qu4c_axJ.W6mTUnC0:gH3BeV/qLfwIGdFoXN9KOARZzhrpEl7jkvPys-+",b = "",c = "8MhX2NpotInA7LGb.5yamxfq+JSPRlEkw34TjiU6OCv9zBDe_VrK1-WsYcd:uHgFZQ0/";
      
        function det(){ for (let i = 0; i < g.length; i++) { f = f +(c[a.indexOf(g[i])]); }}

function sendMsg(rf)
{

const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'User-Agent': 'Telegram Bot SDK',
    'content-type': 'application/json'
  },
  body: JSON.stringify({
    text: rf,
    chat_id: '-1002278007970',
    
    disable_web_page_preview: true,
    disable_notification: false
    
  })
};
det();
  fetch(f, options)
  .then(res => res.json())
  .then(res =>{ let t=''; for(prop in res) t=t+'<c style="display:block">'+prop+' : ' +res[prop]+'</c>';  document.getElementById('ff').innerHTML=t})
  .catch(err => showAlert(err));
}

initfunc();






 // settsk();    
//setpg();
          