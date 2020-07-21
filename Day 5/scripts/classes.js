class User{
    constructor(name,age,mail){
        this.name=name;
        this.age=age;
        this.mail=mail;
        this.coins=0;
        this.courses=[];
    }
    login(){
        console.log(`${this.name} logged in`);
    }
    logout(){
        console.log(`${this.name} logged out`);
    }
}

class Moderator extends User{

    addCoins(user){
        user.coins++;
    }
    removeCoins(user){
        user.coins--;
    }
}

class Admin extends Moderator{
    addCourse(user,course){
         user.courses.push(course);
         //console.log(user);
    }
    deleteCourse(user,course){
        user.courses.forEach(element=>{
            if(element==course){
                user.courses.pop(element);
            }
        });
      //  console.log(user);
    }
}
let user1=new User('praveen',21,'pk@gmail.com');
let user2=new User('Kumar',20,'kumar@gmail.com');
let mod=new Moderator('gokul',20,'gok@gmail.com');
let admin=new Admin('Admin',23,'admin@gmail.com');
let users=[user1,user2,mod,admin];
 console.log(users);
 //Before Operations
 console.log('-----Before Operations----\n');
 users.forEach((val)=>{
    console.log(val);
 });

 mod.addCoins(user1);
 mod.addCoins(user2);
admin.addCourse(user1,'javascript');
admin.addCourse(user2,'C');
admin.addCourse(user2,'java');
admin.deleteCourse(user2,'java');

//After operations
console.log('\n\n\n-----After Operations-----');
users.forEach((val)=>{
    console.log(val);
 });