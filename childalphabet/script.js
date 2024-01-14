var buttonselector=document.querySelectorAll(".bet").length;
for(var i=0; i<buttonselector;i++){
    document.querySelectorAll(".bet")[i].addEventListener("click",function() {

        var buttonInnerHTML= this.innerHTML;
         makeSound(buttonInnerHTML);
        // var audio=new Audio("sounds/tom-1.mp3");
        // audio.play();
        buttonAnimation(buttonInnerHTML);
    });

}
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});
     function makeSound(key){
        switch (key) {
            case "a":
                var a=new Audio('audio/a.mp3');
                a.play();
                break;
                case "b":
                    var b=new Audio('audio/b.mp3');
                    b.play();
                    break;
                    case "c":
                        var c=new Audio('audio/c.mp3');
                        c.play();
                        break;
                        case "d":
                            var d=new Audio('audio/d.mp3');
                            d.play();
                            break;
                            case "e":
                                var e=new Audio('audio/e.mp3');
                                e.play();
                                break;
                                case "f":
                                    var f=new Audio('audio/f.mp3');
                                    f.play();
                                    break;
                                    case "g":
                                        var g=new Audio('audio/g.mp3');
                                        g.play();
                                        break;
                                        case "h":
                                            var h=new Audio('audio/h.mp3');
                                            h.play();
                                            break;
                                            case "i":
                                                var i=new Audio('audio/i.mp3');
                                                i.play();
                                                break;
                                                case "j":
                                                    var j=new Audio('audio/j.mp3');
                                                    j.play();
                                                    break;
                                                    case "k":
                                                        var k=new Audio('audio/k.mp3');
                                                        k.play();
                                                        break;
                                                        case "l":
                                                            var l=new Audio('audio/l.mp3');
                                                            l.play();
                                                            break;
                                                            case "m":
                                                                var m=new Audio('audio/m.mp3');
                                                                m.play();
                                                                break;
                                                                case "n":
                                                                    var n=new Audio('audio/n.mp3');
                                                                    n.play();
                                                                    break;
                                                                    case "o":
                                                                        var o=new Audio('audio/o.mp3');
                                                                        o.play();
                                                                        break;
                                                                        case "p":
                                                                            var p=new Audio('audio/p.mp3');
                                                                            p.play();
                                                                            break;
                                                                            case "q":
                                                                                var q=new Audio('audio/q.mp3');
                                                                                q.play();
                                                                                break;
                                                                                case "r":
                                                                                    var r=new Audio('audio/r.mp3');
                                                                                    r.play();
                                                                                    break;
                                                                                    case "s":
                                                                                        var s=new Audio('audio/s.mp3');
                                                                                        s.play();
                                                                                        break;
                                                                                        case "t":
                                                                                            var t=new Audio('audio/t.mp3');
                                                                                            t.play();
                                                                                            break;
                                                                                            case "u":
                                                                                                var b=new Audio('audio/u.mp3');
                                                                                                u.play();
                                                                                                break;
                                                                                                case "v":
                                                                                                    var v=new Audio('audio/v.mp3');
                                                                                                    v.play();
                                                                                                    break;
                                                                                                    case "w":
                                                                                                        var w=new Audio('audio/w.mp3');
                                                                                                        w.play();
                                                                                                        break;
                                                                                                        case "x":
                                                                                                            var x=new Audio('audio/x.mp3');
                                                                                                            x.play();
                                                                                                            break;
                                                                                                            case "y":
                                                                                                                var y=new Audio('audio/y.mp3');
                                                                                                                y.play();
                                                                                                                break;
                                                                                                                case "z":
                                                                                                                    var z=new Audio('audio/z.mp3');
                                                                                                                    z.play();
                                                                                                                    break;

                
        
        }
     }