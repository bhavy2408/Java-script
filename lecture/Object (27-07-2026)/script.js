/* Object in js */
{
    let obj = {
        name:"bhavy",
        age:18,
        country: {
            state: "Gujarat",
            City: "Surat"
        },
        say : function(){
            console.log("hello!!");
        }
    };


    /* Javascript Object Access */
    
    // 1. Dot Notation
    
    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.country.state);
    console.log(obj.country.City);
    obj.say()

    // 2. Bracket Notation

    console.log(obj["name"]);
    console.log(obj["age"]);
    console.log(obj["country"]["state"]);
    console.log(obj["country"]["City"]);
    obj["say"]()    


/* Creation of Javascript Object */

// 1.  Object Literals 
    

}