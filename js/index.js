// Import packages

const prompt = require("prompt-sync")();

// Global variable

let userData = {
    "Pudis": {
        firstname: "Pudis",
        lastname: "Stanmuang",
        email: "pudis.2550@gmail.com",
        password: "kkong30102550",
        amountMoney: 23424,

    },
    "Nutthakit": {
        firstname: "Nutthakit",
        lastname: "Sonsamdang",
        email: "nutthakit.2550@gmail.com",
        password: "first30102550",
        amountMoney: 2343452,

    },
    "Banlang": {
        firstname: "Banlang",
        lastname: "Ketsakul",
        email: "bank.2550@gmail.com",
        password: "bank30102550",
        amountMoney: 23424234,

    }
    

}






// Class

class Bank {
    constructor(firstname, lastname, email, password) {
        this.fname = firstname.trim();
        this.lname = lastname;
        this.e = email;
        this.pwd = password;
    }

    login() {
        console.log(this.fname);
        // Check for subscription
        if (this.checkUser()) {
            this.chooseSevice();
            
        } else {
            this.signup();

        }
        

    }
   
    askAgain() {
        // Ask the user again
        let newfname = prompt("Please enter your firstname again : ");
        let newlname = prompt("Please enter your last name again : ");
        let newemail = prompt("Please enter your email again : ");
        let newpwd = prompt("Please enter your password again : ");
        
        const bank = new Bank(newfname, newlname, newemail, newpwd);

        bank.login();

    }
    signup() {
        if (this.checkUser()) {
            this.login();

        } else {
            // Update a value to the database
            userData[this.fname] = {
                "firstname": this.fname,
                "lastname": this.lname,
                "email": this.e,
                "password": this.pwd,
                "amountMoney": 0,
            
            };
            console.log("Add succesfully");

            this.chooseSevice();
            

        }
        

    }
    checkUser() {
        const keys = Object.keys(userData);

        for (let k of keys) {
            let data = Object.entries(userData[k]);

            if (data.includes(this.fname) && data.includes(this.lname)) {
                if (data.includes(this.e) && data.includes(this.password)) {
                    return true;
                } else {
                    return false;
                }

            } else {
                return false;
            }

            
        }

    }
    addMoney() {
        if (this.checkUser()) {
            // Get the amount of money
            let money = prompt("How much money do you wanted to add : ");

            // Add the money to the database

            userData[this.fname]["amountMoney"] += Number(money);

            console.log("Add money to your account succesfuly");


        } else {
            console.log("Please login or signup an account before add money");
            this.login();
        }

    }
    getMoney() {
        if (this.checkUser()) {
            let money = prompt("Enter the amount of money you wanna get");
            let usermoney = userData[this.fname]["amountMoney"];
            if (money <= usermoney) {
                usermoney -= money;
                userData[this.fname]["amountMoney"] = usermoney;

                console.log("Get money succesful");
                
            } else {
                let index = 0;
                while (index <= 5) {
                    let newmoney = prompt("Please enter the amount of money again : ");
                    if (newmoney <= usermoney) {
                        break;
                    }
                    index++;
                }

            }

        
        } else {
            console.log("Please login or signup an account before get money from your account");
            this.login();
        }

    }
    chooseSevice() {
        // Get service
        let service = prompt("What service you wanted to use : ");

        switch (service) {
            case "add money":
                this.addMoney();
                break;
            case "get money":
                this.getMoney();
                break;
            
        }

    }
}

function interact() {
    // Get input from user 
    let firstname = prompt("What is your first name : ");
    let lastname = prompt("What is your last name : ");
    let email = prompt("What is your email : ");
    let password = prompt("What is your password : ");

    const bank = new Bank(firstname, lastname, email, password);

    bank.signup();


}

interact();