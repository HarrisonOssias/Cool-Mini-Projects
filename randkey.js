
$(document).ready(function () {
    var lets = ["q", "1", "w", "2" , "e", "3", "r", "4", "t", "5", "6", "y", "7", "u", "8", "i", "9", "o", "1", "p", "2", "a", "3", "s", "4", "d", "5", "f", "6", "g", "7", "h", "8", "j", "9", "k", "1", "l", "2", "z", "3", "x", "4", "c", "1", "v", "2", "b"];
    var count = 0;
    function makeid(chars) { //function params using characters and numbers above
        var lenChar = chars.length + 1;
        var numKey = [];
        for (i = 0; i <5; i++) {
            var randChar = Math.floor(Math.random() * lenChar);
            var x = chars[randChar];
            numKey[i] = x;
        }
        var key = numKey.join("");
        return key;
    }
    var randing = '<h1 id=key>' + makeid(lets) + '</h1>';
    var bar = '<div id=timebar class="bar"><div class="in"></div></div>';
    $('#keyid').append(randing);
    $('#bar').append(bar);
    setInterval(function(){
        $('#key').remove();
        $('#timebar').remove();
        count++;
        var keyid = makeid(lets);
        var bar = '<div id=timebar' + count + ' class="bar"><div class="in"></div></div>';
        var randing = '<h1 id=key' + count + ' >' + keyid + '</h1>';
        $('#key' + count).remove();
        $('#timebar' + count).remove();
        count--;
        $('#keyid').append(randing);
        $('#bar').append(bar);
        $.ajax({
            url: 'key.php',
            type: 'POST',
            data: keyid ,
            success: function(response){
                console.log("yessir");
                //do whatever.
            }
        });
    }, 10000);
});