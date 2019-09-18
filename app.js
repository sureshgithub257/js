
//Object literals:
person = {
    firstName: 'Suresh',
    age: 30,
    address: {
        city: 'Atlanta',
        state: 'GA'
    },
    hobbies: ['music', 'movies'],
    getBirthYear: function(){
        return 2019 - this.age
    }
}

let val = person;
val = person.getBirthYear();
console.log(val)