
    var spans = document.querySelectorAll('#hd span');

    var divs =  document.querySelectorAll('#bd div');

    var i = 0 ; len = spans.length;
    for(; i < len ; i++) {
        var span = spans[i];
        span.setAttribute('suoyin', i);
        span.onclick = function () {
            for (i = 0; i < len; i++) {
                spans[i].className = '';
            }
            this.className = 'current';
            var suoyin = parseInt(this.getAttribute('suoyin'));
            var divlen = divs.length;
            for (i = 0; i < divlen; i++) {
                divs[i].className = '';
            }
            divs[suoyin].className = 'current';
        }
    }

