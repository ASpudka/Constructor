// const cat1 = {
//   name: 'Liza',
//   isMale: false,
//   age: 8,
//   color: 'red',
//   breed: 'yard',
//   say: function(){
//     return 'mew'
//   },
//   slip: function(){
//     return 'i\'m sliping'
//   },
// };
// console.log(cat1);

// function Cat (nameValue, isMaleValue, colorValue, breedValue, ageValue){
//   this.name = nameValue;
//   this.isMale = isMaleValue;
//   this.color = colorValue;
//   this.breed = breedValue;
//   this.age = ageValue;
//   this.say = function (){
//     return 'mew'
//   };
//   this.run = function()
// {return this.name + ' run'
// };
// }
// const cat2 = new Cat('Muha', false, 'grey', 'yard', 2);

// function User (fname, sname, age){
//   this.fname = fname;
//   this.sname = sname;
//   this.age = age;
//     this.fullName = function (){
//     return this.fname +' '+ this.sname
//   };
//   };

//   const user1 = new User ('Lora', 'Petrova', 25);
//   const user2 = new User ('Lisa', 'Petrova', 26);

//   console.log(user1);
//   console.log(user1.fullName());
//   console.log(user2.fullName());

//   function Country (name, population, area){
//     this.name = name;
//     this.population = population;
//     this.area = area;
//       this.getDansity = function (){
//       return this.area/this.population
//     };
//   }

//     const country1 = new Country ('Ukrain', 44000000, 603548);
//     console.log(country1);
//     console.log(country1.getDansity());

function Kettle(maxVolume = 1000) {
  this.maxVolume = maxVolume;
  this.volume = 0;

  this.addWater = function (value) {
    if (this.volume + value <= maxVolume) {
      this.volume += value;
    } else {
      console.log("rest water:", value - (this.maxVolume - this.volume));
    }
    return this.volume;
  };
  this.drainWater = function (value) {
    if (this.volume - value >= 0) {
      this.volume -= value;
    } else {
      this.volume = 0;
    }
    return this.volume;
  };
}

const pot = new Kettle();
console.log(pot.addWater(200));
