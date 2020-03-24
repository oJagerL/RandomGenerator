$(document).ready(function () {
    function e() {
        return Math.floor(6 * Math.random() + 1)
    }

    function n() {
        $("#diceResults").children().children().length > 0 && $("#diceResults").children().empty();
        for (var n = $("#numDice").val(), l = 0; l < n; l++) {
            var t = e(), a = "images/dice/die" + t + ".png";
            $("#diceResults ul").append('<li><img class="dieResult" src="' + a + '" alt="' + t + '"</li>')
        }
        $(".dieResult").css("max-width", "50px"), $(".dieResult").css("max-height", "50px")
    }

    $("#rollButton").on("click", function () {
        n()
    })
}), $(document).ready(function () {
    function e(e) {
        for (var n, l, t = e.length; 0 !== t;) l = Math.floor(Math.random() * t), t -= 1, n = e[t], e[t] = e[l], e[l] = n;
        return e
    }

    function n() {
        var n = [], l = [];
        $("#results").children().children().length > 0 && $("#results").children().empty(), n = $("#players").val().split(/\n/);
        for (var t = 0; t < n.length; t++) /\S/.test(n[t]) && l.push($.trim(n[t]));
        var a = $("#numTeams").val();
        if (l.length < 3) return window.alert("Number of Players Invalid: 3 or more players required to create random teams"), void $("#players").focus();
        if (a < 2 || a > l.length - 1) return window.alert("Number of Teams Invalid: number must be between 2 and the number of players minus 1"), void $("#numTeams").focus();
        if (e(l), l.length % a != 0) {
            for (var r = Math.ceil(l.length / a), s = Math.floor((l.length - r) / (a - 1)), i = Math.floor(l.length / r), o = a - i; i * r + o * s != l.length;) i * r + o * s < l.length ? (i++, o--) : (i--, o++);
            for (var u = 1, t = 0; t < i * r; t += r) {
                for (var m = "", c = 0; c < r; c++) m += l[t + c] + "<br>";
                $("#results ul").append('<li><span class="teamTitle">Hunters</span><p class="names">' + m + "</p></li>")
            }
            for (var t = r * i; t < l.length; t += s) {
                for (var m = "", c = 0; c < s; c++) m += l[t + c] + "<br>";
                $("#results ul").append('<li><span class="teamTitle">Survivors</span><p class="names">' + m + "</p></li>")
            }
        } else for (var d = l.length / a, u = 1, t = 0; t < l.length; t += d) {
            for (var h = "", c = 0; c < d; c++) h += l[t + c] + "<br>";
            $("#results ul").append('<li><span class="teamTitle">Survivors</span><p class="names">' + h + "</p></li>")
        }
        $(".teamTitle").css("font-weight", "bold"), $(".names").css("margin-top", "0px"), $(".names").css("margin-left", ".5em")
    }

    $("#teamGenSubmit").on("click", function () {
        n()
    })
});
