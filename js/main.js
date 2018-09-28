
let miestai = [ "Kaunas", "Vilnius", "London", "New York"];

$('#button').on('click', function() {
    let value = $("#search-box").val();
    // let miestai = [ "Kaunas", "Vilnius", "London", "New York"];
    if(miestai.indexOf(value) > -1)
    {
        console.log(miestai.indexOf(value));
        var radauMiesta = "Toks miestas yra";
    } else {
        var radauMiesta = "Tokio miesto nera";
    }
    document.getElementById("answer").innerHTML = "<h3>" + radauMiesta + "</h3>";
});