//The player class
class Player{
    line = '--------------------------------'
    //for logins
    username = '' 
    password = ''
    //
    
    constructor(firstname, lastname, phone, gender, email, residential){
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone
        this.gender = gender
        this.email = email
        this.residential = residential
    }

    greetPlayer() {

        console.log(`Hello ${this.firstname}`)
        
    }
}

const player = new Player('Freeman', 'Dlamini', 76594512, 'm', 'mail@google.com', 'mbabane mncitsini')
player.greetPlayer()
//Since we are using javascript, we won't be doing much of a console program, we just need to incoporate the html and css