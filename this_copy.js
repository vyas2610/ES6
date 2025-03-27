        const user = {
            username : "Deepak",
            price : 1500,
            welcome :function(){
                //console.log(this);
                console.log(`Hello ,${this.username} Welcome to ES6`);
            }
        }
        user.welcome();
        user.username = "Sujal";
        user.welcome();
        
        const hint = (num1) => {
            console.log(this.num1);
        }
        hint(3);
        const ans = (num1, num2) => {
            return num1+num2;
        }
       console.log(ans(12,2));
