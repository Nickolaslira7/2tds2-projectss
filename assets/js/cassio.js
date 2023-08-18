function anao(){
let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let age = document.getElementById ("age").value;
    let eyeColor = document.getElementById("eyeColor").value;

    const Samuel ={
        firstname:firstName,
        lastname:lastName,
        age:age,
        eyecolor:eyeColor
        };



let bemvindo   =     '<p>bem vindo' + '   '  + Samuel.firstname + '     '+ Samuel.lastname +'   idade:  '+ Samuel.age + '   '+ Samuel.eyecolor +'</p>';

document.getElementById("result").innerHTML += bemvindo;

}