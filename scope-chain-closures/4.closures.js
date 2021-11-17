function foo(){
    var bar;
    quux = 'hey';
    function zip(){
        var quux = 'ho';
        bar = true;
    }
    return zip;
}