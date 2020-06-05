
   var sum=0;
    function jumpHelper1(x) {
        if (x == 1) {
            document.getElementById('select1').style.background= 'gray';
            document.getElementById('select1').style.borderLeft='black solid';
            document.getElementById('select2').style.background= '#f1f1f1';
            document.getElementById('select2').style.borderLeft='none';
            document.getElementById('select3').style.background= '#f1f1f1';
            document.getElementById('select3').style.borderLeft='none';

            document.getElementById('Exam').style.display = "";
            document.getElementById('grade').style.display = "none";
            document.getElementById('library').style.display = "none";
        } else if (x == 2) {
            document.getElementById('select2').style.background= 'gray';
            document.getElementById('select2').style.borderLeft='black solid';
            document.getElementById('select1').style.background= '#f1f1f1';
            document.getElementById('select1').style.borderLeft='none';
            document.getElementById('select3').style.background= '#f1f1f1';
            document.getElementById('select3').style.borderLeft='none';

            document.getElementById('grade').style.display = "";
            document.getElementById('Exam').style.display = "none";
            document.getElementById('library').style.display = "none";
        } else if (x == 3) {
            document.getElementById('select3').style.background= 'gray';
            document.getElementById('select3').style.borderLeft='black solid';
            document.getElementById('select2').style.background= '#f1f1f1';
            document.getElementById('select2').style.borderLeft='none';
            document.getElementById('select1').style.background= '#f1f1f1';
            document.getElementById('select1').style.borderLeft='none';

            document.getElementById('library').style.display = "";
            document.getElementById('Exam').style.display = "none";
            document.getElementById('grade').style.display = "none";
        }
    }

    function backLibrary(){
        document.getElementById('library').style.display = "";
        document.getElementById('Page1').style.display = "";
        document.getElementById('A1').style.display = "";
        document.getElementById('Exam').style.display = "none";
        document.getElementById('grade').style.display = "none";
        document.getElementById('Page3').style.display = "none";
    }
    function backL_1(){
        document.getElementById('Page3').style.display = "";
        document.getElementById('A1').style.display = "";
        document.getElementById('Page1').style.display = "none";
        document.getElementById('Page2').style.display = "none";
        document.getElementById('A2').style.display = "none";
        document.getElementById('A4').style.display = "none";
        document.getElementById('A3').style.display = "none";
   }
    function jumpHelper2(){
        document.getElementById('Page2').style.display = "";
        document.getElementById('Page1').style.display = "none";
        document.getElementById('Q2').style.display = "none";
        document.getElementById('Q3').style.display = "none";
        document.getElementById('Q4').style.display = "none";
    }

    function count(){
        sum=sum+25;
    }

    //Timer
    function two_char(n) {
        return n >= 10 ? n : "0" + n;
    }
    function time_fun() {
        var sec=0;
        setInterval(
            function () {
            sec++;
            var date = new Date(0, 0)
            date.setSeconds(sec);
            var h = date.getHours(), m = date.getMinutes(), s = date.getSeconds();
            document.getElementById("mytime").innerText = two_char(h) + ":" + two_char(m) + ":" + two_char(s);
                                            }, 1000);
    }
    function getTime(){
        var time = document.getElementById("mytime").innerText;
        var buffer = new Array();
        buffer = time.split(":");
        if (buffer[0] === "00" && buffer[1] === "00"){
            alert(buffer[2]+" seconds "+" score: "+sum);
        }
        else if(buffer[0] === "00" && buffer[1] !== "00"){
            alert(buffer[1]+"minutes"+buffer[2]+" seconds "+"score: "+sum);
        }
        else{
            alert(buffer[0]+"hours"+buffer[1]+"minutes"+buffer[2]+" seconds "+"score: "+sum);
        }
    }
    function Back(){
        window.location.href="../html/Assessment.html";
    }

    function jumpHelper3(){
    document.getElementById('Q2').style.display = "";
    document.getElementById('Page1').style.display = "none";
    document.getElementById('Q1').style.display = "none";
    document.getElementById('Q3').style.display = "none";
    document.getElementById('Q4').style.display = "none";
    }

     function jumpHelper4(){
    document.getElementById('Q3').style.display = "";
    document.getElementById('Page1').style.display = "none";
    document.getElementById('Q1').style.display = "none";
    document.getElementById('Q2').style.display = "none";
    document.getElementById('Q4').style.display = "none";
    }

     function jumpHelper5(){
    document.getElementById('Q4').style.display = "";
    document.getElementById('Page1').style.display = "none";
    document.getElementById('Q1').style.display = "none";
    document.getElementById('Q2').style.display = "none";
    document.getElementById('Q3').style.display = "none";
    }

     function jumpHelper6(){
        window.location.href="../html/Assessment.html";
    }

     function jumpHelper7(){
         document.getElementById('Page3').style.display = "";
         document.getElementById('Page1').style.display = "none";
         document.getElementById('Page2').style.display = "none";
         document.getElementById('A2').style.display = "none";
         document.getElementById('A4').style.display = "none";
         document.getElementById('A3').style.display = "none";
    }
     function jumpHelper8(){
         document.getElementById('A2').style.display = "";
         document.getElementById('Page1').style.display = "none";
         document.getElementById('Page2').style.display = "none";
         document.getElementById('A1').style.display = "none";
         document.getElementById('A3').style.display = "none";
         document.getElementById('A4').style.display = "none";
    }
     function jumpHelper9(){
         document.getElementById('A3').style.display = "";
         document.getElementById('Page1').style.display = "none";
         document.getElementById('Page2').style.display = "none";
         document.getElementById('A2').style.display = "none";
         document.getElementById('A1').style.display = "none";
         document.getElementById('A4').style.display = "none";
     }
      function jumpHelper10(){
        document.getElementById('A4').style.display = "";
        document.getElementById('Page1').style.display = "none";
        document.getElementById('Page2').style.display = "none";
        document.getElementById('A2').style.display = "none";
        document.getElementById('A3').style.display = "none";
         document.getElementById('A1').style.display = "none";
}