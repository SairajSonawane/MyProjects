function Clock(){
    const now=new Date();
    let hr=now.getHours();
    const meridian=hr >= 12 ? "PM" :"AM";
    hr= hr % 12 || 12;
    hr=hr.toString().padStart(2,0);
    const min=now.getMinutes().toString().padStart(2,0);
    const sec=now.getSeconds().toString().padStart(2,0);
    const timestring=`${hr}:${min}:${sec}${meridian}`;
    document.getElementById("clock").textContent=timestring;

}
Clock();
setInterval(Clock,1000);