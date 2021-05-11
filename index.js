// Lecture :Activating Strict Mode
// -> for writing secure Js code

'use strict';  // for activatin strict mode
// it should be the very first statement then only it works

// let hasDriversLicense=false;
// const passTest=true;

// if(passTest)hasDriversLicense=true;
// if(hasDriversLicense)console.log('I can drive :D');

// const interface='Audio';
// const private=534;

// Lecture : Functions Date : 16/4/2021


// function logger(){
//     console.log('My name is Kanisht!');
// }

// logger();

// function  fruitProcessor(apples,oranges)
// {
//     const juice=`Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice=fruitProcessor(5,0);
// console.log(appleJuice);

// const appleOrangeJuice=fruitProcessor(2,4);
// console.log(appleOrangeJuice);

// function describeCountry(country,population,capitalCity)
// {
//     const res=`${country} has ${population} million people and its capital city is ${capitalCity}`;
//     return res;
// }

// const value1=describeCountry('India',1366,'Delhi');
// const value2=describeCountry('Germany',13,'Berlin');
// const value3=describeCountry('England',20,'London');
// console.log(value1);
// console.log(value2);
// console.log(value3);

// Lecture : Function Declarations vs Expressions Date 16/04/2021

// function declaration
// function calcAge1(birthYear)
// {
//     return 2021-birthYear;
// }
// const age1=calcAge1(2001);

// function expression
// const calcAge2=function(birthYear)
// {
//     return 2021-birthYear;
// }

// const age2=calcAge2(2001);
// console.log(age1,age2);

// function percentageOfWorld1(population)
// {
//     return (population/7900)*100;
// }

// const pop1=percentageOfWorld1(1441);
// const pop2=percentageOfWorld1(1366);
// const pop3=percentageOfWorld1(12);
// console.log(pop1,pop2,pop3);

// const percentageOfWorld2=function(population)
// {
//     return (population/7900)*100;
// }
// const pop11=percentageOfWorld2(1441);
// const pop22=percentageOfWorld2(1366);
// const pop33=percentageOfWorld2(12);
// console.log(pop1,pop22,pop33);


// // Lecture : Arrow Functions Date: 16/04/2021

// const calcAge3=birthYear => 2021-birthYear; 
// const age3=calcAge3(2001);
// console.log(age3);

// const yearsUntilRetirement=(birthYear,firstName)=> {
//     const age=2021-birthYear;
//     const retirement=65-age;
//     return `${firstName} retires in ${retirement} years`;
// } 
// console.log(yearsUntilRetirement(2001,'Kanisht'));

// const percentageOfWorld3=population=>(population/7900)*100;
// console.log(percentageOfWorld3(1441),percentageOfWorld3(1366),percentageOfWorld3(12));


// // Lecture : Functions Calling Other Functions Date: 17/04/2021


// const describePopulation=(country,population)=>{
//     const populationPercentage=percentageOfWorld1(population);
//     const statemenT=`${country} has ${population} million people, which is about ${populationPercentage}% of the world.\n`;
//     return statemenT;
// }
// console.log(describePopulation('India',1366));
// console.log(describePopulation('England',136));
// console.log(describePopulation('China',1441));

// // Coding Challenge #1  Date: 18/04/2021

// const calcAverage=(a,b,c)=>(a+b+c)/3;

// const scoreDolphin=calcAverage(85,54,41);
// const scoreKoalas=calcAverage(23,34,27);

// console.log(scoreDolphin,scoreKoalas);
// const checkWinner=(avgDolphins,avgKoalas)=>{
//     if(avgDolphins>=2*avgKoalas){
//         const statemenT=`Dolphins win (${avgDolphins} vs ${avgKoalas})`;
//         return statemenT;
//     }
//     else if(avgKoalas>=2*avgDolphins){
//        const statemenT=`Koalas win (${avgKoalas} vs ${avgDolphins})`;
//        return statemenT;
//     }
//     else{
//         const statemenT='Draw';
//         return statemenT;
//     }

// }
// console.log(checkWinner(scoreDolphin,scoreKoalas));

// // Lecture: Introduction to Arrays : Date : 18/04/2021

// // const friends=['Michael','Steven','292',45];
// // console.log(friends);

// // const years=new Array(1991,1994,2020);

// // console.log(years[0]);
// // console.log(friends[0]);

// // console.log(friends.length);
// // console.log(friends[friends.length-1]);

// // friends[2]='Jay';
// // console.log(friends);

// // const jonas=['Kanisht','Agarwal',2001,friends];
// // console.log(jonas);

// // const populations=[1441,34,748,9];
// // console.log(populations.length===4);

// // const percentages=[
// //     percentageOfWorld1(populations[0]),
// //     percentageOfWorld1(populations[1]),
// //     percentageOfWorld1(populations[2]),
// //     percentageOfWorld1(populations[3])
// // ];
// // console.log(percentages);

// // Lecture: Basic Array Operations(Methods)  Date : 21/04/2021

// // const friends=[18,19,29];
// // console.log(friends);
// // friends.push(5);
// // console.log(friends);
// // friends.unshift('Ohn');
// // console.log(friends);
// // friends.pop();
// // console.log(friends);
// // friends.shift();
// // console.log(friends);

// // console.log(friends.indexOf(10));
// // console.log(friends.indexOf(18));

// const neighbours=["China","Sri Lanka","Bangladesh"];
// console.log(neighbours);
// neighbours.push('Utopia');
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);
// if(neighbours.includes('Germany'))
//     console.log('Probably not a central European country :D');
// const xc=neighbours.indexOf("China");
// neighbours[xc]='Maldives';
// console.log(neighbours);



// // Coding Challenge #2   Date: 09/05/2021


// const calcTip=(bill)=>{

//     if(bill>=50 && bill<=300)
//     {
//         const tip=(15*bill)/100;
//         return tip;
//     }
//     else{
//         const tip=(20*bill)/100;
//         return tip;
//     }
// }
// console.log(calcTip(100));
// const bills=[125,555,44];
// const tips=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
// const total=[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
// console.log(bills);
// console.log(tips);
// console.log(total);

// // Lecture: Introduction to Objects  Date: 09/05/2021

// // objects used to make key value pairs

// // curly braces to be used
// // order here doesnot matters , because here we have unique keys
// // and keys dont follow a fix order
// const kanisht={
// // properties
//     firstName:'Kanisht',
//     lastName:'Agarwal',
//     age:2021-2001,
//     job:'Student',
//     friends:['Ravi','Ris','Vicks','Sal','Chaman','nnat','aiz','abhinabh']

// };
// console.log(kanisht);

// const myCountry={
//     country:'India',
//     capital:'Delhi',
//     language:'Hindi',
//     population:13.3,
//     neighbours:['Maldives','China','Sri Lanka','Bangladesh']

// }

// console.log(myCountry);

// // Lecture : Dot vs Bracket Notation Date:10/5/2021

// console.log(kanisht.firstName); // dot notation

// console.log(kanisht['firstName']); // bracket notation

// // advantage of bracket notation
// const nameKey='Name';
// console.log(kanisht['first'+nameKey]);
// console.log(kanisht['last'+nameKey]);

// // when property name needs to be computed to then use bracket
// // else use dot which is clean

// // const intresetedIn=prompt("What do you want to know about Kanisht?")
// // console.log(kanisht[intresetedIn]);

// kanisht.location='Kolkata';
// kanisht['twitter']='@agarwalKanisht';
// console.log(kanisht);

// // challenge : Kanisht has three friends and his best friend is called

// const nuo=`${kanisht.firstName} has ${kanisht.friends.length} friends and his best friend is called ${kanisht.friends[0]}.`;
// console.log(nuo);

// const fgv=`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people,${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`;
// console.log(fgv);

// myCountry.population+=2;
// console.log(myCountry.population);
// myCountry['population']-=2;
// console.log(myCountry.population);


// Lecture : Object Methods   10/05/2021

const Ritesh={
    // properties
        firstName:'Ritesh',
        lastName:'Agarwal',
        birthYear:1989,
        job:'Student',
        friends:['Ravi','Ris','Vicks','Sal','Chaman','nnat','aiz','abhinabh'],
        calcAge:function(birthYear)
        {
            return 2021-birthYear;
        }
    };
    console.log(Ritesh);

console.log(Ritesh.calcAge(1989));
console.log(Ritesh['calcAge'](1991));




















