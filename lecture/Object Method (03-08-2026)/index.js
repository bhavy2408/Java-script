/* JavaScript object Method */

//1.Assign

{

    let obj1 = {"a":1 , "b":2}
    let obj2 = {"b":3 , "d":5}
    
    let result = Object.assign(obj1 , obj2);
    
    console.log(obj1);
    console.log(obj2);

}
 
// 2.create
{
    let peron = {
        name : "Bhavy",
        Age : 29 ,
        user(){
            console.log(`My Name is ${this.name} and My Age is ${this.Age}`);
            
        },
    };
    
    let result = Object.create(peron);
    console.log(result.user());
   
    let result1 = peron.user();
}

// 3.Entries
// 4.keys
// 5.values

{
    let obj1 = {a:1 , b:2 , c:3 }

    for(let [keys , value] of Object.entries(obj1)){
        console.log(`${key} : ${value}`); //Entries
    }

    for(var key of Object.keys(obj1)){
        console.log(`${key}`); //Keys        
    }

    for(var value of Object.values(obj1)){
        console.log(`${value}`); //Values
    }    
}

