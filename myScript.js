    var shape = "default";
    var prevShape= "default";
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext('2d');
    var img = document.getElementById("scream");
    setTimeout(function () { ctx.drawImage(img, 0, 0); },1000);
    var all = 0;
    var prevString = "def";
    var tonicFret="def";

    var resetGlobals = function () {
        ctx.drawImage(img, 0, 0);
        shape = "default";
        prevShape="default";
        all = 0;
        prevString = "def";
        tonicFret="def";
    }

    
    
    var getm2 = function (note) {
        if (note === "E") {
            return "F"
        }
        else if (note === "B") {
            return "C";
        }
        else if (note.length === 1) {
            return (note.concat("s"));
        }
        else {
            switch (note.charAt(0)) {
                case "A":
                    {
                        return "B";
                        break;
                    }
                case "C":
                    {
                        return "D";
                        break;
                    }
                case "D":
                    {
                        return "E";
                        break;
                    }
                case "F":
                    {
                        return "G";
                        break;
                    }
                case "G":
                    {
                        return "A";
                        break;
                    }
            }
        }
    }
    var getM2 = function (note) {
        return getm2(getm2(note));
    }
    var getm3 = function (note) {
        return getm2(getm2(getm2(note)));
    }
    var getM3 = function (note) {
        return getm2(getm2(getm2(getm2(note))));
    }
    var getp4 = function (note) {
        return getm2(getm2(getm2(getm2(getm2(note)))));
    }
    var getb5 = function (note) {
        return getm2(getm2(getm2(getm2(getm2(getm2(note))))));
    }
    var getp5 = function (note) {
        return getm2(getm2(getm2(getm2(getm2(getm2(getm2(note)))))));
    }
    var getm6 = function (note) {
        return getm2(getm2(getm2(getm2(getm2(getm2(getm2(getm2(note))))))));
    }
    var getM6 = function (note) {
        return getm2(getm2(getm2(getm2(getm2(getm2(getm2(getm2(getm2(note)))))))));
    }
    var getm7 = function (note) {
        return getm2(getm2(getm2(getm2(getm2(getm2(getm2(getm2(getm2(getm2(note))))))))));
    }
    var getM7 = function (note) {
        return getm2(getm2(getm2(getm2(getm2(getm2(getm2(getm2(getm2(getm2(getm2(note)))))))))));
    }
    //1i xordh 1o tasto!!!(40,125)
    //orizontia diafora 38,38,
    //katakorifi diafora 18
    //var t = setTimeout(function () { ctx.drawImage(img, 0, 0) }, 3000, JavaScript);
    var draw = function (string, fret, color) {
        var horizontal = 40;
        var vertical = 123;
        if (color === "red") { ctx.fillStyle = "#FF0000"; }
        else if (color === "blue") { ctx.fillStyle = "#0000FF"; }
        else if (color === "green") { ctx.fillStyle = "#00FF00"; }
        ctx.beginPath();

        if (fret === 0) {
            horizontal = 16;
            for (i = 1; i < string; i++) {
                vertical += 18;
            }
        }
        else {
            for (i = 1; i < string; i++) {
                vertical += 18;
            }
            for (j = 1; j < fret; j++) {
                horizontal += 40;
            }
        }

        ctx.arc(horizontal, vertical, 8, 0, 2 * Math.PI);
        ctx.fill();
    }

    var sixth=[["E",0],["F",1],["Fs",2],["G",3],["Gs",4],["A",5],["As",6],["B",7],["C",8],["Cs",9],["D",10],["Ds",11]];
    var fifth=[["A",0],["As",1],["B",2],["C",3],["Cs",4],["D",5],["Ds",6],["E",7],["F",8],["Fs",9],["G",10],["Gs",11]];
    var fourth=[["D",0],["Ds",1],["E",2],["F",3],["Fs",4],["G",5],["Gs",6],["A",7],["As",8],["B",9],["C",10],["Cs",11]];

    var A=[[5,0],[3,2],[1,5],[6,5],[4,7],[5,12],[2,10],[3,14]];
    var As=[[5,1],[3,3],[1,6],[6,6],[4,8],[5,13],[2,11]];
    var B = [[2,0],[5,2], [3,4], [1,7], [6,7], [4,9], [2,12], [2,0],[5,14]];
    var C=[[5,3],[3,5],[1,8],[6,8],[4,10],[2,13],[2,1]];
    var Cs=[[5,4],[3,6],[1,9],[6,9],[4,11],[2,2],[2,14]];
    var D=[[4,0],[5,5],[3,7],[1,10],[6,10],[4,12],[2,3]];
    var Ds=[[5,6],[3,8],[1,11],[6,11],[4,1],[4,13],[2,4]];
    var E=[[5,7],[3,9],[1,12],[6,12],[4,2],[2,5],[1,0],[6,0],[4,14]];
    var F=[[5,8],[3,10],[1,1],[6,1],[4,3],[2,6],[1,13],[6,13]];
    var Fs=[[5,9],[3,11],[6,2],[4,4],[2,7],[1,2],[6,14],[1,14]];
    var G=[[3,0],[5,10],[3,12],[1,3],[6,3],[4,5],[2,8],[1,3]];
    var Gs=[[5,11],[3,1],[3,13],[1,4],[6,4],[2,9],[1,4],[4,6]];


    /*
    var drawNote = function (note,colour) {
        var i = 0;
        while (i < window[note].length) {
            draw(window[note][i][0], window[note][i][1],colour);
            i++;
        }
    }*/

    /*
    var canDraw = function (tonic,shape) {
        switch (shape)
        {
            case "6,4":
                {
                    if ((tonic==="E")||(tonic==="F")||(tonic==="Fs")) {return 0;}
                    else { return 1; }
                }
            case "6,2":
                {
                    if (tonic==="E") {return 0;}
                    else { return 1; }
                }
            case "5,4":
                {
                    if ((tonic==="A")||(tonic==="As")||(tonic==="B")) {return 0;}
                    else { return 1; }
                }
            case "5,2":
                {
                    if (tonic==="A") {return 0;}
                    else { return 1; }
                }
            default:{ return 1;}
                   

             
        }
    }
    */

    var drawNote = function (note,colour,fret,shape) {
        var i = 0;
        while (i < window[note].length) {
        if (fret==="tonic")
        {
            switch (shape[0])
            {
                case '6':{
                    if (window[note][i][0]===6)
                    {
                        if (canDraw(note,shape))
                        {
                            if (window[note][i][1]<=11){
                            draw(6, window[note][i][1],colour);
                            if (shape==="6,4")
                            {
                                draw(3, window[note][i][1]-3,colour);
                                draw(1, window[note][i][1],colour);
                            }
                            else 
                            {   
                                draw(4, window[note][i][1]+2,colour);
                                draw(1, window[note][i][1],colour);
                            }
                            tonicFret=window[note][i][1];
                            break;
                            }
                        }
                        else
                        {
                            draw(6, window[note][i][1]+12,colour);
                            if (shape==="6,4")
                            {
                                draw(3, window[note][i][1]+9,colour);
                                draw(1, window[note][i][1]+12,colour);
                            }
                            else 
                            {
                                draw(4, window[note][i][1]+14,colour);
                                draw(1, window[note][i][1]+12,colour);
                            }
                            if (window[note][i][1]<=11) { tonicFret=window[note][i][1]+12; }
                            break;
                        }
                    }
                    break;
                }
                case '5':{
                    if (window[note][i][0]===5)
                    {
                        if (canDraw(note,shape))
                        {
                            if (window[note][i][1]<=11){
                            draw(5, window[note][i][1],colour);
                            if (shape==="5,4")
                            {
                                draw(2, window[note][i][1]-2, colour);
                            }
                            else
                            {
                                draw(3, window[note][i][1]+2,colour);
                            }
                            tonicFret=window[note][i][1];
                            break;
                            }
                        }
                        else
                        {
                            draw(5, window[note][i][1]+12,colour);
                            if (shape==="5,4")
                            {
                                draw(2, window[note][i][1]+10,colour);
                            }
                            else
                            {
                                draw(3, window[note][i][1]+14,colour);
                            }
                            if (window[note][i][1]<=11) { tonicFret=window[note][i][1]+12; }
                            break;
                        }
                        
                    }
                    break;
                }
            }
        }
        else
        {
            switch(shape)
            {
                case "6,4":
                {
                    if ((window[note][i][1]>=fret-3)&&(window[note][i][1]<=fret+1)&&((window[note][i][0]!=3)||(window[note][i][1]!=fret+1))) {draw(window[note][i][0], window[note][i][1],colour);}
                    break;
                }
                case "6,2":
                {
                    if ((window[note][i][1]>=fret-1)&&(window[note][i][1]<=fret+2)) {draw(window[note][i][0], window[note][i][1],colour);}
                    break;
                }
                case "6,1":
                {
                    if ((window[note][i][1]>=fret)&&(window[note][i][1]<=fret+4)&&((window[note][i][0]!=2)||(window[note][i][1]!=fret))) {draw(window[note][i][0], window[note][i][1],colour);}
                    break;
                }
                case "5,4":
                {
                    if ((window[note][i][1]>=fret-3)&&(window[note][i][1]<=fret)) {draw(window[note][i][0], window[note][i][1],colour);}
                    break;
                }
                case "5,2":
                {
                    if ((window[note][i][1]>=fret-2)&&(window[note][i][1]<=fret+2)) {draw(window[note][i][0], window[note][i][1],colour);}
                    break;
                }
                case "5,1":
                {
                    if ((window[note][i][1]>=fret)&&(window[note][i][1]<=fret+4)&&((window[note][i][0]!=2)||(window[note][i][1]!=fret))) {draw(window[note][i][0], window[note][i][1],colour);}
                    break;
                }                
            }
        }
        i++;
        }
    }
    /*
    var showScale = function () {
        ctx.drawImage(img, 0, 0);
        var x = document.getElementById("myTonic").selectedIndex;
        var tonic = (document.getElementsByTagName("option")[x].value);
        var k = document.getElementById("myScaleRoot");
        var string = k.options[k.selectedIndex].value;
        
        if (string === "sixth") { if (prevShape==="default") {shape = "6,4"; prevShape="6,4";}
                                  else if(prevShape==="6,4") {shape = "6,2"; prevShape="6,2";}
                                  else if(prevShape==="6,2") {shape = "6,1"; prevShape="6,1";}
                                  else if(prevShape==="6,1") {shape = "6,4"; prevShape="6,4";}
                                }
        else if (string === "fifth"){ if (prevShape==="default") {shape = "5,4"; prevShape="5,4";}
                                      else if(prevShape==="5,4") {shape = "5,2"; prevShape="5,2";}
                                      else if(prevShape==="5,2") {shape = "5,1"; prevShape="5,1";}
                                      else if(prevShape==="5,1") {shape = "5,4"; prevShape="5,4";}
                                    }
        else if (string === "all") {
            if (prevShape === "default") {shape = "6,4"; prevShape="6,4";}
            else if (prevShape === "6,4") {shape = "6,2"; prevShape="6,2";}
            else if (prevShape ==="6,2") {shape = "6,1"; prevShape="6,1";}
            else if(prevShape==="6,1") {shape = "5,4"; prevShape="5,4";}
            else if(prevShape==="5,4") {shape = "5,2"; prevShape="5,2";}
            else if(prevShape==="5,2") {shape = "5,1"; prevShape="5,1";}
            else if(prevShape==="5,1") {shape = "6,4"; prevShape="6,4";}
        }

        
        drawNote(tonic, "blue","tonic",shape);//draw the tonics
        
        var scaleType = document.getElementById("myScaleType").value;

        if (scaleType === "major") {
            drawNote(getM2(tonic), "red",tonicFret,shape);
            drawNote(getM3(tonic), "red",tonicFret,shape);
            drawNote(getp4(tonic), "red",tonicFret,shape);
            drawNote(getp5(tonic), "red",tonicFret,shape);
            drawNote(getM6(tonic), "red",tonicFret,shape);
            drawNote(getM7(tonic), "red",tonicFret,shape);
        }
        else if (scaleType === "minor") {
            drawNote(getM2(tonic), "red",tonicFret,shape);
            drawNote(getm3(tonic), "red",tonicFret,shape);
            drawNote(getp4(tonic), "red",tonicFret,shape);
            drawNote(getp5(tonic), "red",tonicFret,shape);
            drawNote(getm6(tonic), "red",tonicFret,shape);
            drawNote(getm7(tonic), "red",tonicFret,shape);
        }
        else if (scaleType === "phrygian") {
            drawNote(getm2(tonic), "red",tonicFret,shape);
            drawNote(getm3(tonic), "red",tonicFret,shape);
            drawNote(getp4(tonic), "red",tonicFret,shape);
            drawNote(getp5(tonic), "red",tonicFret,shape);
            drawNote(getm6(tonic), "red",tonicFret,shape);
            drawNote(getM7(tonic), "red",tonicFret,shape);
        }
        else if (scaleType === "dorian") {
            drawNote(getM2(tonic), "red",tonicFret,shape);
            drawNote(getm3(tonic), "red",tonicFret,shape);
            drawNote(getp4(tonic), "red",tonicFret,shape);
            drawNote(getp5(tonic), "red",tonicFret,shape);
            drawNote(getM6(tonic), "red",tonicFret,shape);
            drawNote(getm7(tonic), "red",tonicFret,shape);
        }
        else if (scaleType === "lydian") {
            drawNote(getM2(tonic), "red",tonicFret,shape);
            drawNote(getM3(tonic), "red",tonicFret,shape);
            drawNote(getb5(tonic), "red",tonicFret,shape);
            drawNote(getp5(tonic), "red",tonicFret,shape);
            drawNote(getM6(tonic), "red",tonicFret,shape);
            drawNote(getM7(tonic), "red",tonicFret,shape);
        }
        else if (scaleType === "mixolydian") {
            drawNote(getM2(tonic), "red",tonicFret,shape);
            drawNote(getM3(tonic), "red",tonicFret,shape);
            drawNote(getp4(tonic), "red",tonicFret,shape);
            drawNote(getp5(tonic), "red",tonicFret,shape);
            drawNote(getM6(tonic), "red",tonicFret,shape);
            drawNote(getm7(tonic), "red",tonicFret,shape);
        }
        else if (scaleType === "locrian") {
            drawNote(getm2(tonic), "red",tonicFret,shape);
            drawNote(getm3(tonic), "red",tonicFret,shape);
            drawNote(getp4(tonic), "red",tonicFret,shape);
            drawNote(getb5(tonic), "red",tonicFret,shape);
            drawNote(getm6(tonic), "red",tonicFret,shape);
            drawNote(getm7(tonic), "red",tonicFret,shape);
        }
    }
    */
//-----------------ARPEGGIOS--------------------------//

    var showArpeggio = function () {
        ctx.drawImage(img, 0, 0);

        var k = document.getElementById("myTonic");
        var tonic = k.options[k.selectedIndex].value;


        var e = document.getElementById("myArpeggioRoot");
        var string = e.options[e.selectedIndex].value;

        var x = document.getElementById("myArpeggioType");
        var arpeggioType = x.options[x.selectedIndex].value;

        var i;
        var string2;
        if (string === "sixth") { string2 = 6; }
        else if (string === "fifth") { string2 = 5; }
        else if (string === "fourth") { string2 = 4; }
        else if (string === "all") {

            all = 1;
            if (shape === "default") { string = "sixth"; prevString = "sixth"; }
            else if (shape === "6,1") { string = "fifth"; prevString = "fifth"; }
            else if (shape === "5,1") { string = "fourth"; prevString = "fourth"; }
            else if (shape === "4,1") { string = "sixth"; prevString = "sixth"; }
            else { string = prevString; }
        }
        //draw tonic on selected string     
        for (i = 0; i < window[string].length; i++) {
            if (tonic === window[string][i][0]) {
                if (all === 1) {
                    if ((shape === "default") || (shape === "4,1")) {
                        shape = "6,4";
                        document.getElementById('textToChange').innerHTML = shape;
                        draw64(window[string][i][1], arpeggioType);
                    }
                    else if (shape === "6,4") {
                        shape = "6,2";
                        document.getElementById('textToChange').innerHTML = shape;
                        draw62(window[string][i][1], arpeggioType);
                    }
                    else if (shape === "6,2") {
                        shape = "6,1";
                        document.getElementById('textToChange').innerHTML = shape;
                        draw61(window[string][i][1], arpeggioType);
                    }
                    else if (shape === "6,1") {
                        shape = "5,4";
                        document.getElementById('textToChange').innerHTML = shape;
                        draw54(window[string][i][1], arpeggioType);
                    }
                    else if (shape === "5,4") {
                        shape = "5,2";
                        document.getElementById('textToChange').innerHTML = shape;
                        draw52(window[string][i][1], arpeggioType);
                    }
                    else if (shape === "5,2") {
                        shape = "5,1";
                        document.getElementById('textToChange').innerHTML = shape;
                        draw51(window[string][i][1], arpeggioType);
                    }
                    else if (shape === "5,1") {
                        shape = "4,4";
                        document.getElementById('textToChange').innerHTML = shape;
                        draw44(window[string][i][1], arpeggioType);
                    }
                    else if (shape === "4,4") {
                        shape = "4,2";
                        document.getElementById('textToChange').innerHTML = shape;
                        draw42(window[string][i][1], arpeggioType);
                    }
                    else if (shape === "4,2") {
                        shape = "4,1";
                        document.getElementById('textToChange').innerHTML = shape;
                        draw41(window[string][i][1], arpeggioType);
                    }
                }
                else if (string2 === 6) {
                    if ((shape === "default") || (shape[0] === '5') || (shape[0] === '4')) {
                        shape = "6,4";
                        document.getElementById('textToChange').innerHTML = shape;
                        draw64(window[string][i][1], arpeggioType);
                    }
                    else if (shape === "6,4") {
                        shape = "6,2";
                        document.getElementById('textToChange').innerHTML = shape;
                        draw62(window[string][i][1], arpeggioType);
                    }
                    else if (shape === "6,2") {
                        shape = "6,1";
                        document.getElementById('textToChange').innerHTML = shape;
                        draw61(window[string][i][1], arpeggioType);
                    }
                    else if (shape === "6,1") {
                        shape = "6,4";
                        document.getElementById('textToChange').innerHTML = shape;
                        draw64(window[string][i][1], arpeggioType);
                    }
                }
                else if (string2 === 5) {
                    if ((shape === "default") || (shape[0] === '6') || (shape[0] === '4')) {
                        shape = "5,4";
                        document.getElementById('textToChange').innerHTML = shape;
                        draw54(window[string][i][1], arpeggioType);
                    }
                    else if (shape === "5,4") {
                        shape = "5,2";
                        document.getElementById('textToChange').innerHTML = shape;
                        draw52(window[string][i][1], arpeggioType);
                    }
                    else if (shape === "5,2") {
                        shape = "5,1";
                        document.getElementById('textToChange').innerHTML = shape;
                        draw51(window[string][i][1], arpeggioType);
                    }
                    else if (shape === "5,1") {
                        shape = "5,4";
                        document.getElementById('textToChange').innerHTML = shape;
                        draw54(window[string][i][1], arpeggioType);
                    }
                }
                else if (string2 === 4) {
                    if ((shape === "default") || (shape[0] === '6') || (shape[0] === '5')) {
                        shape = "4,4";
                        document.getElementById('textToChange').innerHTML = shape;
                        draw44(window[string][i][1], arpeggioType);
                    }
                    else if (shape === "4,4") {
                        shape = "4,2";
                        document.getElementById('textToChange').innerHTML = shape;
                        draw42(window[string][i][1], arpeggioType);
                    }
                    else if (shape === "4,2") {
                        shape = "4,1";
                        document.getElementById('textToChange').innerHTML = shape;
                        draw41(window[string][i][1], arpeggioType);
                    }
                    else if (shape === "4,1") {
                        shape = "4,4";
                        document.getElementById('textToChange').innerHTML = shape;
                        draw44(window[string][i][1], arpeggioType);
                    }
                }
                break;
            }
        }
    }

    
    var draw64 = function (fret, arpeggioType) {
        if (fret >= 4) {
            draw(6, fret, "green");
            if ((arpeggioType != "maj9") && (arpeggioType != "m9") && (arpeggioType != "9")) {
                draw(3, fret - 3, "green");
            }
            if (arpeggioType === "maj") {
                draw(5, fret - 1, "blue");
                draw(4, fret - 3, "blue");
            }
            else if (arpeggioType === "min") {
                draw(5, fret - 2, "blue");
                draw(4, fret - 3, "blue");
            }
            else if (arpeggioType === "dim") {
                draw(5, fret - 2, "blue");
                draw(4, fret - 4, "blue");
            }
            else if (arpeggioType === "aug") {
                draw(5, fret - 1, "blue");
                draw(4, fret - 2, "blue");
            }
            else if (arpeggioType === "6") {
                draw(5, fret - 1, "blue");
                draw(4, fret - 3, "blue");
                draw(4, fret - 1, "blue");
            }
            else if (arpeggioType === "m6") {
                draw(5, fret - 2, "blue");
                draw(4, fret - 3, "blue");
                draw(4, fret - 1, "blue");
            }
            else if (arpeggioType === "maj7") {
                draw(5, fret - 1, "blue");
                draw(4, fret - 3, "blue");
                draw(3, fret - 4, "blue");
            }
            else if (arpeggioType === "m7") {
                draw(5, fret - 2, "blue");
                draw(4, fret - 3, "blue");
                draw(4, fret, "blue");
            }
            else if (arpeggioType === "7") {
                draw(5, fret - 1, "blue");
                draw(4, fret - 3, "blue");
                draw(4, fret, "blue");
            }
            else if (arpeggioType === "m7b5") {
                draw(5, fret - 2, "blue");
                draw(4, fret - 4, "blue");
                draw(4, fret, "blue");
            }
            else if (arpeggioType === "dim7") {
                draw(5, fret - 2, "blue");
                draw(4, fret - 4, "blue");
                draw(4, fret - 1, "blue");
            }
            else if (arpeggioType === "sus4") {
                draw(5, fret, "blue");
                draw(4, fret - 3, "blue");
            }
            else if (arpeggioType === "7sus4") {
                draw(5, fret, "blue");
                draw(4, fret - 3, "blue");
                draw(4, fret, "blue");
            }
            else if (arpeggioType === "maj9") {
                draw(5, fret - 1, "blue");
                draw(4, fret - 3, "blue");
                draw(3, fret - 4, "blue");
                draw(3, fret - 1, "blue");
            }
            else if (arpeggioType === "m9") {
                draw(5, fret - 2, "blue");
                draw(4, fret - 3, "blue");
                draw(4, fret, "blue");
                draw(3, fret - 1, "blue");
            }
            else if (arpeggioType === "9") {
                draw(5, fret - 1, "blue");
                draw(4, fret - 3, "blue");
                draw(4, fret, "blue");
                draw(3, fret - 1, "blue");
            }
        }
        else { draw64(fret + 12, arpeggioType); }
    }
    var draw62 = function (fret, arpeggioType) {
        if (fret >= 2) {
            draw(6, fret, "green");
            if ((arpeggioType != "maj9")&&(arpeggioType != "m9")&&(arpeggioType != "9")) {
                draw(4, fret + 2, "green");
            }
            if (arpeggioType === "maj") {
                draw(5, fret - 1, "blue");
                draw(5, fret + 2, "blue");
            }
            else if (arpeggioType === "min") {
                draw(5, fret - 2, "blue");
                draw(5, fret + 2, "blue");
            }
            else if (arpeggioType === "dim") {
                draw(5, fret - 2, "blue");
                draw(5, fret + 1, "blue");
            }
            else if (arpeggioType === "aug") {
                draw(5, fret - 1, "blue");
                draw(5, fret + 3, "blue");
            }
            else if (arpeggioType === "6") {
                draw(5, fret - 1, "blue");
                draw(5, fret + 2, "blue");
                draw(4, fret - 1, "blue");
            }
            else if (arpeggioType === "m6") {
                draw(5, fret - 2, "blue");
                draw(5, fret + 2, "blue");
                draw(4, fret - 1, "blue");
            }
            else if (arpeggioType === "maj7") {
                draw(5, fret - 1, "blue");
                draw(5, fret + 2, "blue");
                draw(4, fret + 1, "blue");
            }
            else if (arpeggioType === "m7") {
                draw(5, fret - 2, "blue");
                draw(5, fret + 2, "blue");
                draw(4, fret, "blue");
            }
            else if (arpeggioType === "7") {
                draw(5, fret - 1, "blue");
                draw(5, fret + 2, "blue");
                draw(4, fret, "blue");
            }
            else if (arpeggioType === "m7b5") {
                draw(5, fret - 2, "blue");
                draw(5, fret + 1, "blue");
                draw(4, fret, "blue");
            }
            else if (arpeggioType === "dim7") {
                draw(5, fret - 2, "blue");
                draw(5, fret + 1, "blue");
                draw(4, fret - 1, "blue");
            }
            else if (arpeggioType === "sus4") {
                draw(5, fret, "blue");
                draw(5, fret + 2, "blue");
            }
            else if (arpeggioType === "7sus4") {
                draw(5, fret, "blue");
                draw(5, fret + 2, "blue");
                draw(4, fret, "blue");
            }
            else if (arpeggioType === "maj9") {
                draw(5, fret - 1, "blue");
                draw(5, fret + 2, "blue");
                draw(4, fret + 1, "blue");
                draw(3, fret - 1, "blue");
            }
            else if (arpeggioType === "m9") {
                draw(5, fret - 2, "blue");
                draw(5, fret + 2, "blue");
                draw(4, fret, "blue");
                draw(3, fret - 1, "blue");
            }
            else if (arpeggioType === "9") {
                draw(5, fret - 1, "blue");
                draw(5, fret + 2, "blue");
                draw(4, fret, "blue");
                draw(3, fret - 1, "blue");
            }
        }
        else { draw62(fret+12, arpeggioType); }
    }
    var draw61 = function (fret, arpeggioType) {
            draw(6, fret, "green");
            if ((arpeggioType != "maj9")&&(arpeggioType != "m9")&&(arpeggioType != "9")) {
                draw(4, fret + 2, "green");
            }
            if (arpeggioType === "maj") {
                draw(6, fret + 4, "blue");
                draw(5, fret + 2, "blue");
            }
            else if (arpeggioType === "min") {
                draw(6, fret + 3, "blue");
                draw(5, fret + 2, "blue");
            }
            else if (arpeggioType === "dim") {
                draw(6, fret + 3, "blue");
                draw(5, fret + 1, "blue");
            }
            else if (arpeggioType === "aug") {
                draw(6, fret + 4, "blue");
                draw(5, fret + 3, "blue");
            }
            else if (arpeggioType === "6") {
                draw(6, fret + 4, "blue");
                draw(5, fret + 2, "blue");
                draw(5, fret + 4, "blue");
            }
            else if (arpeggioType === "m6") {
                draw(6, fret + 3, "blue");
                draw(5, fret + 2, "blue");
                draw(5, fret + 4, "blue");
            }
            else if (arpeggioType === "maj7") {
                draw(6, fret + 4, "blue");
                draw(5, fret + 2, "blue");
                draw(4, fret + 1, "blue");
            }
            else if (arpeggioType === "m7") {
                draw(6, fret + 3, "blue");
                draw(5, fret + 2, "blue");
                draw(4, fret, "blue");
            }
            else if (arpeggioType === "7") {
                draw(6, fret + 4, "blue");
                draw(5, fret + 2, "blue");
                draw(4, fret, "blue");
            }
            else if (arpeggioType === "m7b5") {
                draw(6, fret + 3, "blue");
                draw(5, fret + 1, "blue");
                draw(4, fret, "blue");
            }
            else if (arpeggioType === "dim7") {
                draw(6, fret + 3, "blue");
                draw(5, fret + 1, "blue");
                draw(5, fret + 4, "blue");
            }
            else if (arpeggioType === "sus4") {
                draw(5, fret, "blue");
                draw(5, fret + 2, "blue");
            }
            else if (arpeggioType === "7sus4") {
                draw(5, fret, "blue");
                draw(5, fret + 2, "blue");
                draw(4, fret, "blue");
            }
            else if (arpeggioType === "maj9") {
                draw(6, fret + 4, "blue");
                draw(5, fret + 2, "blue");
                draw(4, fret + 1, "blue");
                draw(4, fret + 4, "blue");
            }
            else if (arpeggioType === "m9") {
                draw(6, fret + 3, "blue");
                draw(5, fret + 2, "blue");
                draw(4, fret, "blue");
                draw(4, fret + 4, "blue");
            }
            else if (arpeggioType === "9") {
                draw(6, fret + 4, "blue");
                draw(5, fret + 2, "blue");
                draw(4, fret, "blue");
                draw(4, fret + 4, "blue");
            }
    }
    var draw54 = function (fret, arpeggioType) {
        if (fret >= 4) {
            draw(5, fret, "green");
            if ((arpeggioType != "maj9") && (arpeggioType != "m9") && (arpeggioType != "9")) {
                draw(2, fret - 2, "green");
            }
            if (arpeggioType === "maj") {
                draw(4, fret - 1, "blue");
                draw(3, fret - 3, "blue");
            }
            else if (arpeggioType === "min") {
                draw(4, fret - 2, "blue");
                draw(3, fret - 3, "blue");
            }
            else if (arpeggioType === "dim") {
                draw(4, fret - 2, "blue");
                draw(3, fret - 4, "blue");
            }
            else if (arpeggioType === "aug") {
                draw(4, fret - 1, "blue");
                draw(3, fret - 2, "blue");
            }
            else if (arpeggioType === "6") {
                draw(4, fret - 1, "blue");
                draw(3, fret - 3, "blue");
                draw(3, fret - 1, "blue");
            }
            else if (arpeggioType === "m6") {
                draw(4, fret - 2, "blue");
                draw(3, fret - 3, "blue");
                draw(3, fret - 1, "blue");
            }
            else if (arpeggioType === "maj7") {
                draw(4, fret - 1, "blue");
                draw(3, fret - 3, "blue");
                draw(2, fret - 3, "blue");
            }
            else if (arpeggioType === "m7") {
                draw(4, fret - 2, "blue");
                draw(3, fret - 3, "blue");
                draw(3, fret, "blue");
            }
            else if (arpeggioType === "7") {
                draw(4, fret - 1, "blue");
                draw(3, fret - 3, "blue");
                draw(3, fret, "blue");
            }
            else if (arpeggioType === "m7b5") {
                draw(4, fret - 2, "blue");
                draw(3, fret - 4, "blue");
                draw(3, fret, "blue");
            }
            else if (arpeggioType === "dim7") {
                draw(4, fret - 2, "blue");
                draw(3, fret - 4, "blue");
                draw(3, fret - 1, "blue");
            }
            else if (arpeggioType === "sus4") {
                draw(4, fret, "blue");
                draw(3, fret - 3, "blue");
            }
            else if (arpeggioType === "7sus4") {
                draw(4, fret, "blue");
                draw(3, fret - 3, "blue");
                draw(3, fret, "blue");
            }
            else if (arpeggioType === "maj9") {
                draw(4, fret - 1, "blue");
                draw(3, fret - 3, "blue");
                draw(2, fret - 3, "blue");
                draw(2, fret , "blue");
            }
            else if (arpeggioType === "m9") {
                draw(4, fret - 2, "blue");
                draw(3, fret - 3, "blue");
                draw(3, fret, "blue");
                draw(2, fret , "blue");
            }
            else if (arpeggioType === "9") {
                draw(4, fret - 1, "blue");
                draw(3, fret - 3, "blue");
                draw(3, fret, "blue");
                draw(2, fret , "blue");
            }
        }
        else { draw54(fret + 12, arpeggioType); }
    }
    var draw52 = function (fret, arpeggioType) {
        if (fret >= 2) {
            draw(5, fret, "green");
            if ((arpeggioType != "maj9") && (arpeggioType != "m9") && (arpeggioType != "9")) {
                draw(3, fret + 2, "green");
            }
            if (arpeggioType === "maj") {
                draw(4, fret - 1, "blue");
                draw(4, fret + 2, "blue");
            }
            else if (arpeggioType === "min") {
                draw(4, fret - 2, "blue");
                draw(4, fret + 2, "blue");
            }
            else if (arpeggioType === "dim") {
                draw(4, fret - 2, "blue");
                draw(4, fret + 1, "blue");
            }
            else if (arpeggioType === "aug") {
                draw(4, fret - 1, "blue");
                draw(4, fret + 3, "blue");
            }
            else if (arpeggioType === "6") {
                draw(4, fret - 1, "blue");
                draw(4, fret + 2, "blue");
                draw(3, fret - 1, "blue");
            }
            else if (arpeggioType === "m6") {
                draw(4, fret - 2, "blue");
                draw(4, fret + 2, "blue");
                draw(3, fret - 1, "blue");
            }
            else if (arpeggioType === "maj7") {
                draw(4, fret - 1, "blue");
                draw(4, fret + 2, "blue");
                draw(3, fret + 1, "blue");
            }
            else if (arpeggioType === "m7") {
                draw(4, fret - 2, "blue");
                draw(4, fret + 2, "blue");
                draw(3, fret, "blue");
            }
            else if (arpeggioType === "7") {
                draw(4, fret - 1, "blue");
                draw(4, fret + 2, "blue");
                draw(3, fret, "blue");
            }
            else if (arpeggioType === "m7b5") {
                draw(4, fret - 2, "blue");
                draw(4, fret + 1, "blue");
                draw(3, fret, "blue");
            }
            else if (arpeggioType === "dim7") {
                draw(4, fret - 2, "blue");
                draw(4, fret + 1, "blue");
                draw(3, fret - 1, "blue");
            }
            else if (arpeggioType === "sus4") {
                draw(4, fret, "blue");
                draw(4, fret + 2, "blue");
            }
            else if (arpeggioType === "7sus4") {
                draw(4, fret, "blue");
                draw(4, fret + 2, "blue");
                draw(3, fret, "blue");
            }
            else if (arpeggioType === "maj9") {
                draw(4, fret - 1, "blue");
                draw(4, fret + 2, "blue");
                draw(3, fret + 1, "blue");
                draw(2, fret , "blue");
            }
            else if (arpeggioType === "m9") {
                draw(4, fret - 2, "blue");
                draw(4, fret + 2, "blue");
                draw(3, fret, "blue");
                draw(2, fret , "blue");
            }
            else if (arpeggioType === "9") {
                draw(4, fret - 1, "blue");
                draw(4, fret + 2, "blue");
                draw(3, fret, "blue");
                draw(2, fret , "blue");
            }
        }
        else { draw52(fret + 12, arpeggioType); }
    }
    var draw51 = function (fret, arpeggioType) {
        draw(5, fret, "green");
        if ((arpeggioType != "maj9") && (arpeggioType != "m9") && (arpeggioType != "9")) {
            draw(3, fret + 2, "green");
        }
        if (arpeggioType === "maj") {
            draw(5, fret + 4, "blue");
            draw(4, fret + 2, "blue");
        }
        else if (arpeggioType === "min") {
            draw(5, fret + 3, "blue");
            draw(4, fret + 2, "blue");
        }
        else if (arpeggioType === "dim") {
            draw(5, fret + 3, "blue");
            draw(4, fret + 1, "blue");
        }
        else if (arpeggioType === "aug") {
            draw(5, fret + 4, "blue");
            draw(4, fret + 3, "blue");
        }
        else if (arpeggioType === "6") {
            draw(5, fret + 4, "blue");
            draw(4, fret + 2, "blue");
            draw(4, fret + 4, "blue");
        }
        else if (arpeggioType === "m6") {
            draw(5, fret + 3, "blue");
            draw(4, fret + 2, "blue");
            draw(4, fret + 4, "blue");
        }
        else if (arpeggioType === "maj7") {
            draw(5, fret + 4, "blue");
            draw(4, fret + 2, "blue");
            draw(3, fret + 1, "blue");
        }
        else if (arpeggioType === "m7") {
            draw(5, fret + 3, "blue");
            draw(4, fret + 2, "blue");
            draw(3, fret, "blue");
        }
        else if (arpeggioType === "7") {
            draw(5, fret + 4, "blue");
            draw(4, fret + 2, "blue");
            draw(3, fret, "blue");
        }
        else if (arpeggioType === "m7b5") {
            draw(5, fret + 3, "blue");
            draw(4, fret + 1, "blue");
            draw(3, fret, "blue");
        }
        else if (arpeggioType === "dim7") {
            draw(5, fret + 3, "blue");
            draw(4, fret + 1, "blue");
            draw(4, fret + 4, "blue");
        }
        else if (arpeggioType === "sus4") {
            draw(4, fret, "blue");
            draw(4, fret + 2, "blue");
        }
        else if (arpeggioType === "7sus4") {
            draw(4, fret, "blue");
            draw(4, fret + 2, "blue");
            draw(3, fret, "blue");
        }
        else if (arpeggioType === "maj9") {
            draw(5, fret + 4, "blue");
            draw(4, fret + 2, "blue");
            draw(3, fret + 1, "blue");
            draw(3, fret + 4, "blue");
        }
        else if (arpeggioType === "m9") {
            draw(5, fret + 3, "blue");
            draw(4, fret + 2, "blue");
            draw(3, fret, "blue");
            draw(3, fret + 4, "blue");
        }
        else if (arpeggioType === "9") {
            draw(5, fret + 4, "blue");
            draw(4, fret + 2, "blue");
            draw(3, fret, "blue");
            draw(3, fret + 4, "blue");
        }
    }
    var draw44 = function (fret, arpeggioType) {
        if (fret >= 4) {
            draw(4, fret, "green");
            if ((arpeggioType != "maj9") && (arpeggioType != "m9") && (arpeggioType != "9")) {
                draw(1, fret - 2, "green");
            }
            if (arpeggioType === "maj") {
                draw(3, fret - 1, "blue");
                draw(2, fret - 2, "blue");
            }
            else if (arpeggioType === "min") {
                draw(3, fret - 2, "blue");
                draw(2, fret - 2, "blue");
            }
            else if (arpeggioType === "dim") {
                draw(3, fret - 2, "blue");
                draw(2, fret - 3, "blue");
            }
            else if (arpeggioType === "aug") {
                draw(3, fret - 1, "blue");
                draw(2, fret - 1, "blue");
            }
            else if (arpeggioType === "6") {
                draw(3, fret - 1, "blue");
                draw(2, fret - 2, "blue");
                draw(2, fret , "blue");
            }
            else if (arpeggioType === "m6") {
                draw(3, fret - 2, "blue");
                draw(2, fret - 2, "blue");
                draw(2, fret , "blue");
            }
            else if (arpeggioType === "maj7") {
                draw(3, fret - 1, "blue");
                draw(2, fret - 2, "blue");
                draw(1, fret - 3, "blue");
            }
            else if (arpeggioType === "m7") {
                draw(3, fret - 2, "blue");
                draw(2, fret - 2, "blue");
                draw(2, fret + 1, "blue");
            }
            else if (arpeggioType === "7") {
                draw(3, fret - 1, "blue");
                draw(2, fret - 2, "blue");
                draw(2, fret + 1, "blue");
            }
            else if (arpeggioType === "m7b5") {
                draw(3, fret - 2, "blue");
                draw(2, fret - 3, "blue");
                draw(2, fret + 1, "blue");
            }
            else if (arpeggioType === "dim7") {
                draw(3, fret - 2, "blue");
                draw(2, fret - 3, "blue");
                draw(2, fret , "blue");
            }
            else if (arpeggioType === "sus4") {
                draw(3, fret, "blue");
                draw(2, fret - 2, "blue");
            }
            else if (arpeggioType === "7sus4") {
                draw(3, fret, "blue");
                draw(2, fret - 2, "blue");
                draw(2, fret + 1, "blue");
            }
            else if (arpeggioType === "maj9") {
                draw(3, fret - 1, "blue");
                draw(2, fret - 2, "blue");
                draw(1, fret - 3, "blue");
                draw(1, fret, "blue");
            }
            else if (arpeggioType === "m9") {
                draw(3, fret - 2, "blue");
                draw(2, fret - 2, "blue");
                draw(2, fret + 1, "blue");
                draw(1, fret, "blue");
            }
            else if (arpeggioType === "9") {
                draw(3, fret - 1, "blue");
                draw(2, fret - 2, "blue");
                draw(2, fret + 1, "blue");
                draw(1, fret, "blue");
            }
        }
        else { draw44(fret + 12, arpeggioType); }
    }
    var draw42 = function (fret, arpeggioType) {
        if (fret >= 2) {
            draw(4, fret, "green");
            if ((arpeggioType != "maj9") && (arpeggioType != "m9") && (arpeggioType != "9")) {
                draw(2, fret + 3, "green");
            }
            if (arpeggioType === "maj") {
                draw(3, fret - 1, "blue");
                draw(3, fret + 2, "blue");
            }
            else if (arpeggioType === "min") {
                draw(3, fret - 2, "blue");
                draw(3, fret + 2, "blue");
            }
            else if (arpeggioType === "dim") {
                draw(3, fret - 2, "blue");
                draw(3, fret + 1, "blue");
            }
            else if (arpeggioType === "aug") {
                draw(3, fret - 1, "blue");
                draw(3, fret + 3, "blue");
            }
            else if (arpeggioType === "6") {
                draw(3, fret - 1, "blue");
                draw(3, fret + 2, "blue");
                draw(2, fret , "blue");
            }
            else if (arpeggioType === "m6") {
                draw(3, fret - 2, "blue");
                draw(3, fret + 2, "blue");
                draw(2, fret, "blue");
            }
            else if (arpeggioType === "maj7") {
                draw(3, fret - 1, "blue");
                draw(3, fret + 2, "blue");
                draw(2, fret + 2, "blue");
            }
            else if (arpeggioType === "m7") {
                draw(3, fret - 2, "blue");
                draw(3, fret + 2, "blue");
                draw(2, fret + 1, "blue");
            }
            else if (arpeggioType === "7") {
                draw(3, fret - 1, "blue");
                draw(3, fret + 2, "blue");
                draw(2, fret + 1, "blue");
            }
            else if (arpeggioType === "m7b5") {
                draw(3, fret - 2, "blue");
                draw(3, fret + 1, "blue");
                draw(2, fret + 1, "blue");
            }
            else if (arpeggioType === "dim7") {
                draw(3, fret - 2, "blue");
                draw(3, fret + 1, "blue");
                draw(2, fret , "blue");
            }
            else if (arpeggioType === "sus4") {
                draw(3, fret, "blue");
                draw(3, fret + 2, "blue");
            }
            else if (arpeggioType === "7sus4") {
                draw(3, fret, "blue");
                draw(3, fret + 2, "blue");
                draw(2, fret + 1, "blue");
            }
            else if (arpeggioType === "maj9") {
                draw(3, fret - 1, "blue");
                draw(3, fret + 2, "blue");
                draw(2, fret + 2, "blue");
                draw(1, fret, "blue");
            }
            else if (arpeggioType === "m9") {
                draw(3, fret - 2, "blue");
                draw(3, fret + 2, "blue");
                draw(2, fret + 1, "blue");
                draw(1, fret, "blue");
            }
            else if (arpeggioType === "9") {
                draw(3, fret - 1, "blue");
                draw(3, fret + 2, "blue");
                draw(2, fret + 1, "blue");
                draw(1, fret, "blue");
            }
        }
        else { draw42(fret + 12, arpeggioType); }
    }
    var draw41 = function (fret, arpeggioType) {
        draw(4, fret, "green");
        if ((arpeggioType != "maj9") && (arpeggioType != "m9") && (arpeggioType != "9")) {
            draw(2, fret + 3, "green");
        }
        if (arpeggioType === "maj") {
            draw(4, fret + 4, "blue");
            draw(3, fret + 2, "blue");
        }
        else if (arpeggioType === "min") {
            draw(4, fret + 3, "blue");
            draw(3, fret + 2, "blue");
        }
        else if (arpeggioType === "dim") {
            draw(4, fret + 3, "blue");
            draw(3, fret + 1, "blue");
        }
        else if (arpeggioType === "aug") {
            draw(4, fret + 4, "blue");
            draw(3, fret + 3, "blue");
        }
        else if (arpeggioType === "6") {
            draw(4, fret + 4, "blue");
            draw(3, fret + 2, "blue");
            draw(3, fret + 4, "blue");
        }
        else if (arpeggioType === "m6") {
            draw(4, fret + 3, "blue");
            draw(3, fret + 2, "blue");
            draw(3, fret + 4, "blue");
        }
        else if (arpeggioType === "maj7") {
            draw(4, fret + 4, "blue");
            draw(3, fret + 2, "blue");
            draw(2, fret + 2, "blue");
        }
        else if (arpeggioType === "m7") {
            draw(4, fret + 3, "blue");
            draw(3, fret + 2, "blue");
            draw(2, fret + 1, "blue");
        }
        else if (arpeggioType === "7") {
            draw(4, fret + 4, "blue");
            draw(3, fret + 2, "blue");
            draw(2, fret + 1, "blue");
        }
        else if (arpeggioType === "m7b5") {
            draw(4, fret + 3, "blue");
            draw(3, fret + 1, "blue");
            draw(2, fret + 1, "blue");
        }
        else if (arpeggioType === "dim7") {
            draw(4, fret + 3, "blue");
            draw(3, fret + 1, "blue");
            draw(2, fret , "blue");
        }
        else if (arpeggioType === "sus4") {
            draw(3, fret, "blue");
            draw(3, fret + 2, "blue");
        }
        else if (arpeggioType === "7sus4") {
            draw(3, fret, "blue");
            draw(3, fret + 2, "blue");
            draw(2, fret + 1, "blue");
        }
        else if (arpeggioType === "maj9") {
            draw(4, fret + 4, "blue");
            draw(3, fret + 2, "blue");
            draw(2, fret + 2, "blue");
            draw(1, fret , "blue");
        }
        else if (arpeggioType === "m9") {
            draw(4, fret + 3, "blue");
            draw(3, fret + 2, "blue");
            draw(2, fret + 1, "blue");
            draw(1, fret, "blue");
        }
        else if (arpeggioType === "9") {
            draw(4, fret + 4, "blue");
            draw(3, fret + 2, "blue");
            draw(2, fret, "blue");
            draw(1, fret, "blue");
        }
    }

//-----------------SCALES-----------------------------//
    var showScale = function () {
        ctx.drawImage(img, 0, 0);

        var k = document.getElementById("myTonic");
        var tonic = k.options[k.selectedIndex].value;


        var e = document.getElementById("myScaleRoot");
        var string = e.options[e.selectedIndex].value;

        var x = document.getElementById("myScaleType");
        var scaleType = x.options[x.selectedIndex].value;

        var i;
        var string2;
        if (string === "sixth") { string2 = 6; }
        else if (string === "fifth") { string2 = 5; }
        else if (string === "all") {

            all = 1;
            if (shape === "default") { string = "sixth"; prevString = "sixth"; }
            else if (shape === "6,1") { string = "fifth"; prevString = "fifth"; }
            else if (shape === "5,1") { string = "fourth"; prevString = "fourth"; }
            else if (shape === "4,1") { string = "sixth"; prevString = "sixth"; }
            else { string = prevString; }
        }
        //draw tonic on selected string     
        for (i = 0; i < window[string].length; i++) {
            if (tonic === window[string][i][0]) {
                if (all === 1) {
                    if (shape === "default") {
                        shape = "6,4";
                        document.getElementById('textToChange').innerHTML = shape;
                        draw64sc(window[string][i][1], scaleType);
                    }
                    else if (shape === "6,4") {
                        shape = "6,2";
                        document.getElementById('textToChange').innerHTML = shape;
                        draw62sc(window[string][i][1], scaleType);
                    }
                    else if (shape === "6,2") {
                        shape = "6,1";
                        document.getElementById('textToChange').innerHTML = shape;
                        draw61sc(window[string][i][1], scaleType);
                    }
                    else if (shape === "6,1") {
                        shape = "5,4";
                        document.getElementById('textToChange').innerHTML = shape;
                        draw54sc(window[string][i][1], scaleType);
                    }
                    else if (shape === "5,4") {
                        shape = "5,2";
                        document.getElementById('textToChange').innerHTML = shape;
                        draw52sc(window[string][i][1], scaleType);
                    }
                    else if (shape === "5,2") {
                        shape = "5,1";
                        document.getElementById('textToChange').innerHTML = shape;
                        draw51sc(window[string][i][1], scaleType);
                    }
                    else if (shape === "5,1") {
                        shape = "6,4";
                        document.getElementById('textToChange').innerHTML = shape;
                        draw64sc(window[string][i][1], scaleType);
                    }
                }
                else if (string2 === 6) {
                    if ((shape === "default") || (shape[0] === '5') ) {
                        shape = "6,4";
                        document.getElementById('textToChange').innerHTML = shape;
                        draw64sc(window[string][i][1], scaleType);
                    }
                    else if (shape === "6,4") {
                        shape = "6,2";
                        document.getElementById('textToChange').innerHTML = shape;
                        draw62sc(window[string][i][1], scaleType);
                    }
                    else if (shape === "6,2") {
                        shape = "6,1";
                        document.getElementById('textToChange').innerHTML = shape;
                        draw61sc(window[string][i][1], scaleType);
                    }
                    else if (shape === "6,1") {
                        shape = "6,4";
                        document.getElementById('textToChange').innerHTML = shape;
                        draw64sc(window[string][i][1], scaleType);
                    }
                }
                else if (string2 === 5) {
                    if ((shape === "default") || (shape[0] === '6') ) {
                        shape = "5,4";
                        document.getElementById('textToChange').innerHTML = shape;
                        draw54sc(window[string][i][1], scaleType);
                    }
                    else if (shape === "5,4") {
                        shape = "5,2";
                        document.getElementById('textToChange').innerHTML = shape;
                        draw52sc(window[string][i][1], scaleType);
                    }
                    else if (shape === "5,2") {
                        shape = "5,1";
                        document.getElementById('textToChange').innerHTML = shape;
                        draw51sc(window[string][i][1], scaleType);
                    }
                    else if (shape === "5,1") {
                        shape = "5,4";
                        document.getElementById('textToChange').innerHTML = shape;
                        draw54sc(window[string][i][1], scaleType);
                    }
                }
                break;
            }
        }
    }



    var draw64sc = function (fret, scaleType) {
        if (fret >= 4) {
            draw(6, fret, "green");
            draw(3, fret - 3, "green");
            draw(1, fret, "green");
            
            if (scaleType === "major") {
                draw(6, fret-1,"blue");
                draw(6, fret-3,"blue");
                draw(5, fret,"blue"); 
                draw(5, fret-1,"blue");
                draw(5, fret-3,"blue");
                draw(4, fret+1,"blue");
                draw(4, fret-1,"blue");
                draw(4, fret-3,"blue");
                draw(3, fret-1,"blue");
                draw(2, fret,"blue");
                draw(2, fret-2,"blue");
                draw(2, fret-3,"blue");
                draw(1, fret-1,"blue");
                draw(1, fret-3,"blue");
            }
            else if (scaleType === "minor") {
                draw(5, fret - 2, "blue");
                draw(4, fret - 3, "blue");
            }
        }
        else { draw64sc(fret + 12, scaleType); }
    }
    var draw62sc = function (fret, scaleType) {
        if (fret >= 1) {
            draw(6, fret, "green");
            draw(4, fret + 2, "green");
            draw(1, fret, "green");
            if (scaleType === "major") {
                draw(6, fret-1,"blue");
                draw(6, fret+2,"blue");
                draw(5, fret,"blue"); 
                draw(5, fret-1,"blue");
                draw(5, fret+2,"blue");
                draw(4, fret-1,"blue");
                draw(4, fret+1,"blue");
                draw(3, fret-1,"blue");
                draw(3, fret+1,"blue");
                draw(3, fret+2,"blue");
                draw(2, fret,"blue");
                draw(2, fret+2,"blue");
                draw(1, fret-1,"blue");
                draw(1, fret+2,"blue");
            }
            else if (scaleType === "minor") {
                draw(5, fret - 2, "blue");
                draw(5, fret + 2, "blue");
            }
        }
        else { draw62sc(fret+12, scaleType); }
    }
    var draw61sc = function (fret, scaleType) {
            draw(6, fret, "green");
            draw(4, fret + 2, "green");
            draw(1,fret,"green");
            if (scaleType === "major") {
                draw(6, fret + 2, "blue");
                draw(6, fret + 4, "blue");
                draw(5, fret,"blue"); 
                draw(5, fret+2,"blue");
                draw(5, fret+4,"blue");
                draw(4, fret+1,"blue");
                draw(4, fret+4,"blue");
                draw(3, fret+1,"blue"); 
                draw(3, fret+2,"blue");
                draw(3, fret+4,"blue");
                draw(2, fret+2,"blue");
                draw(2, fret+4,"blue");
                draw(1, fret+2,"blue");
                draw(1, fret+4,"blue");
            }
            else if (scaleType === "minor") {
                draw(6, fret + 3, "blue");
                draw(5, fret + 2, "blue");
            }
    }
    var draw54sc = function (fret, scaleType) {
        if (fret >= 4) {
            draw(5, fret, "green");
            draw(2, fret - 2, "green");
            
            if (scaleType === "major") {
                draw(6, fret,"blue");
                draw(6, fret-2,"blue");
                draw(6, fret-3,"blue"); 
                draw(5, fret-1,"blue");
                draw(5, fret-3,"blue");
                draw(4, fret,"blue");
                draw(4, fret-1,"blue");
                draw(4, fret-3,"blue");
                draw(3, fret-1,"blue"); 
                draw(3, fret-3,"blue");
                draw(2, fret,"blue");
                draw(2, fret-3,"blue");
                draw(1, fret,"blue");
                draw(1, fret-2,"blue");
                draw(1, fret-3,"blue");
            }
            else if (scaleType === "minor") {
                draw(4, fret - 2, "blue");
                draw(3, fret - 3, "blue");
            }
        }
        else { draw54sc(fret + 12, scaleType); }
    }
    var draw52sc = function (fret, scaleType) {
        if (fret >= 2) {
            draw(5, fret, "green");
            draw(3, fret + 2, "green");
            
            if (scaleType === "major") {
                draw(6, fret,"blue");
                draw(6, fret-2,"blue");
                draw(6, fret+2,"blue"); 
                draw(5, fret-1,"blue");
                draw(5, fret+2,"blue");
                draw(4, fret,"blue");
                draw(4, fret-1,"blue");
                draw(4, fret+2,"blue");
                draw(3, fret-1,"blue"); 
                draw(3, fret+1,"blue");
                draw(2, fret,"blue");
                draw(2, fret+2,"blue");
                draw(1, fret,"blue");
                draw(1, fret-2,"blue");
                draw(1, fret+2,"blue");
            }
            else if (scaleType === "minor") {
                draw(4, fret - 2, "blue");
                draw(4, fret + 2, "blue");
            }
        }
        else { draw52sc(fret + 12, scaleType); }
    }
    var draw51sc = function (fret, scaleType) {
        draw(5, fret, "green");
        draw(3, fret + 2, "green");
        
        if (scaleType === "major") {
            draw(6, fret,"blue");
            draw(6, fret+2,"blue");
            draw(6, fret+4,"blue"); 
            draw(5, fret+2,"blue");
            draw(5, fret+4,"blue");
            draw(4, fret,"blue");
            draw(4, fret+2,"blue");
            draw(4, fret+4,"blue");
            draw(3, fret+1,"blue"); 
            draw(3, fret+4,"blue");
            draw(2, fret+2,"blue");
            draw(2, fret+3,"blue");
            draw(1, fret,"blue");
            draw(1, fret+2,"blue");
            draw(1, fret+4,"blue");
        }
        else if (scaleType === "minor") {
            draw(5, fret + 3, "blue");
            draw(4, fret + 2, "blue");
        }
    }