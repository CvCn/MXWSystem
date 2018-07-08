$(function() {
    var $body = $(document.body);
    width = $(window).width();
    height = $(window).height()
    var ca = document.createElement("canvas");
    $body.append(ca);
    var $canvas = $("canvas");
    $canvas.attr("height", height);
    $canvas.attr("width", width);
    $canvas.css({
        zIndex: '-1', //使canvas在最底层
        position: 'fixed',
        top: '0',
        pointerEvents: 'none' //禁用canvas的事件
    })

    window.onresize = function() {
        width = $(window).width();
        height = $(window).height()
        $canvas.attr("height", height);
        $canvas.attr("width", width);
    }


    var can = $canvas[0].getContext('2d');

    function words() {
        var word = "MXWSystem".split("");
        return word[Math.floor(Math.random() * 100 % word.length)];
    }

    function randomXY(num) {
        return Math.floor(Math.random() * 10000000) % num;
    }

    function drawOne() {
        var x = randomXY(width);
        var y = randomXY(height);
        var w = words();
        var sum = 0;
        can.font = '12px 微软雅黑';
        var r = color();
        var g = 0;
        var b = color();
        var timer = setInterval(function() {
            sum += 0.1;
            can.fillStyle = "rgba(" + r + "," + g + "," + b + "," + Math.floor(sum * 100) / 100 + ")";
            can.fillText(w, x, y);
        }, 50);
        setTimeout(function() {
            clearInterval(timer);
        }, 150);
        setTimeout(function() {
            var timer2 = setInterval(function() {
                sum -= 0.1;
                can.clearRect(x, y + 2, 13, -13);
                can.fillStyle = "rgba(" + r + "," + g + "," + b + "," + Math.floor(sum * 100) / 100 + ")";
                can.fillText(w, x, y);
            }, 50);
            setTimeout(function() {
                clearInterval(timer2);
                can.clearRect(x, y + 2, 12, -12);
            }, 150);
        }, 5000);
    }

    function color() {
        return Math.floor(Math.random() * 1000) % 127;
    }
    setInterval(drawOne, 500);
})