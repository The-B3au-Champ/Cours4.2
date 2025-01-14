function add(a,b){
    if(a == undefined || b == undefined){
        return "Les variables ne sont pas définis";
    }else if(!Number.isInteger(a) || !Number.isInteger(b)){
        return "Vous devez utiliser des nombres";
    }else if(arguments.length > 2){
        return "Vous pouvez additionner seulement 2 nombres";
    }else{
        return a + b;
    }
}

module.exports = {add};