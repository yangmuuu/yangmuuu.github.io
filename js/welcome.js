if (window.console) {
    Function.prototype.makeMulti = function () {
        let l = new String(this);
        l = l.substring(l.indexOf("/*") + 3, l.lastIndexOf("*/"));
        return l;
    };
    let string = function () {
        /*
    _    _ _____ _     _____ ________  ___ _____ _ 
    | |  | |  ___| |   /  __ \  _  |  \/  ||  ___| |
    | |  | | |__ | |   | /  \/ | | | .  . || |__ | |
    | |/\| |  __|| |   | |   | | | | |\/| ||  __|| |
    \  /\  / |___| |___| \__/\ \_/ / |  | || |___|_|
    \/  \/\____/\_____/\____/\___/\_|  |_/\____/(_)
                                                                 
                                                    
                ───▄▀▀▀▄▄▄▄▄▄▄▀▀▀▄───
                ───█▒▒░░░░░░░░░▒▒█───
                ────█░░█░░░░░█░░█────
                ─▄▄──█░░░▀█▀░░░█──▄▄─
                █░░█─▀▄░░░░░░░▄▀─█░░█
                                                    
        */
    };
    console.log("%c" + string.makeMulti(), "color:#1fc7b6;");
}