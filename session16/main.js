function logStuff(stuff) {
    console.log('Rezultatul este ${stuff}');
}
    logStuff(10);
    // in consola apare rezultatul este 10

    let sum = 0;

    function addToSum(number) {
        return sum += number;
    }
        addToSum(3);
        logStuff(addToSum(10));

        //vedem in consola 13 sum=13 deoarece
        // stuff este addToSum

        let totalSum = addToSum(10); //23
        addToSum(5);
        logStuff(totalSum); //23 pt ca nu se mai modifica nicaieri
        logStuff(sum);    //28 pt ca se mai adauga 5 de la linia 19
      

        const sumNumbersArrow = (number1, number2) => {
            return number1 + number2
        }

        const result = sumNumbersArrow(5, 7);
        console.log(result);
        //vedem in consola 12
        console.log(sumNumbersArrow(10, 7));
        // vedem 17
        console.log(sumNumbersArrow(-1, 7));
        // vedem 6

        const verifyEquality = (val1, val2) => {
             if (val1 === val2) {
               return true;
            } else {
            return false;
}
        }
        // mereu pt egal e indicat sa folosim === nu doar ==

        console.log(verifyEquality(3, 3)); //true
        console.log(verifyEquality(3, 4)); //false
        console.log(verifyEquality(3, '3')); //false
        console.log(verifyEquality("3", '3')); //false

        //sau mai simplu

        console.log(verifyEqulity(3, 3)) //true
        console.log(verifyEqulity(3, 4)) //false 
        console.log(verifyEqulity(3, '3')) //fralse
        console.log(verifyEqulity("3", '3')) //false

        const verifyEqualitySimplified = (val1, val2) => {
            return val1 === val2;
        }

        console.log(verifyEqualitySimplified(3, 3)); //true
        console.log(verifyEqualitySimplified(3, 4)); //false
        console.log(verifyEqualitySimplified(3, '3')); //false
        console.log(verifyEqualitySimplified("3", '3')); //false

        console.clear();

        //vom vedea nimic, am curatat consola prin aceasta ultima comanda

        







        const doubleValue = (value) => {
            logStuff('Stuff');
            return value * 2; // TOT CE E DUPA RETURN, NU VA FI EXECUTAT !!!
            logStuff('Ionut');
        }

        logStuff(doubleValue(1));
        //vedem in consola Stuff si apoi 2,deoarece cand executam linia 84, 
        // mai intai vedem stuff iar apoi returneaza linia 80




        const addEvenValues = (val1, val2) => {
               if (val1 % 2 ===0 && val2 % 2 !== 0) {
                return val1 + val2;               
            }
            return 'Numerele nu sunt pare';
        }

        debugger;
        logStuff(addEvenValues (4,6)); //10
        logStuff(addEvenValus(4,5)); //numerele nu sunt pare

        // % -operator modulo, rest la impartire
        // !==0 inseamna diferit de 0


      //debugger;
      //F8 revine la normal, iesim din procesul de debug
      // F10 sare un pas
      //F11 intra in executia unei functii
      //Shift + F11 iese din executia unei functii


      //un parametru default ne asigura ca nu vedem undefined in consola

      const greet = (name = 'John String') => {
        console.log('Salut ${name}')
      }
        
      greet(); //apare salut john string pt ca nu avem nimic in paranteza
      greet('Mihai'); //salut Mihai
      greet('   '); //salut spatiu gol
      greet('%^$#^%^&^*'); //salut serie de caractere speciale
      greet(56); //salut 56
      greet(null); //salut null


      function removeFromBiggest(num1, num2) {
        if (num1 > num2) {
            return num1 - num2;
            } else {
                return num2 - num1;
            }

      }

      logStuff(removeFromBiggest(5, 7)); //2
      logStuff(removeFromBiggest(15, 7)); //8
      logStuff(removeFromBiggest(-5, -3)); //2 pt ca avem -3 -(-5) adica -3 + 5 = 2


      function verifyNumber(number) {
        if (number > 10 && number < 50) {
            return 'Da';
        } else {
            return 'Nu';
        }
}

      logStuff(verifyNumber(90)) //nu
      logStuff(verifyNumber(10.001)) //da
      logStuff(verifyNumber(10)) //nu

      const puppy = {
        name: 'Rex',
        age: 1,
        favouriteToys: ['Duck', 'Cat', 'Bone'],
        bark: function() {
            console.log('Ham');
        },
      barkLoud() {
        console.log('HAAAM!!!');
      }
    
    }

    const anotherPuppy = puppy;
    console.log(anotherPuppy);anotherPuppy.name = 'Grivei';
    console.log(pupppy);
    console.log(anotherPuppy);
    // in consola ambii catei vor avea numele Grivei
    puppy.bark()
    anotherPuppy.bark();
    anotherPuppy.barkLoud();
    // vedem bark si barkLoud in consola


    function nameDog(name) {
        return 'Dog $(name)';
    }

    const rex = nameDog('Rex');
    console.log(rex);

    const nameDodCopy = nameDog;
    console.log(nameDogCopy);
    console.log(nameDogCopy('Azorel'));










