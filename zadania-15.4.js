/*
Zadanie pierwsze

Połączenie dwóch stringów przy użyciu operatora + jest bardzo łatwym zadaniem. Innym sposobem jest użycie metody concat albo join, ale co jeśli nie moglibyśmy skorzystać z żadnej z tych opcji?
Twoim zadaniem będzie stworzenie dwóch zmiennych z wartościami Hello oraz World, a następnie połączenie ich metodą inną niż wymienione powyżej.
*/

const greeting = 'Hello';
const greeted = 'World';
const output = `${greeting} ${greeted}`
console.log("----------------------");
console.log(output);


/*

Zadanie drugie

Stwórz funkcję multiply, która ma zwracać wynik działania operacji mnożenia dwóch wartości a i b. Przykładowo:

multiply(2, 5) // 10
multiply(6, 6) // 36

Zadanie wydaje się być proste, ale co jeśli użytkownik poda na wejściu tylko jedną wartość? Przykładowo:

multiply(5) // ?

Chcemy, aby wynik takiego wywołania był również prawidłowy - możesz założyć, że jeśli użytkownik nie poda któregoś z parametrów,
ma on zostać zastąpiony 1. Nie wolno korzystać z instrukcji warunkowych! Funkcję stwórz za pomocą arrow function.

*/

const multiply = (num1 = 1, num2 = 1) => {return num1 * num2};
console.log("----------------------");
console.log(multiply(2, 5));
console.log(multiply(6, 6));
console.log(multiply(5));


/*

Zadanie trzecie

Napisz funkcję average, która obliczy średnią arytmetyczną wszystkich argumentów, które zostaną do niej przekazane. Załóż, że argumenty zawsze będą liczbami:

average(1) // 1
average(1, 3) // 2
average(1, 3, 6, 6) // 4

Skorzystaj z rest parameters! Funkcję stwórz za pomocą arrow function.

*/

const average = (...nums) => {return nums.reduce( (prev, next) => {return prev + next} )/nums.length};
console.log("----------------------");
console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));


/*

Zadanie czwarte

Stwórz tablicę z ocenami const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1], a następnie w umiejętny sposób przekaż oceny do funkcji average tak, aby otrzymać wynik. Skorzystaj z operatora spread!

*/

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log("----------------------");
console.log(average(...grades).toFixed(2));


/*
Zadanie piąte

Podczas pracy nad projektem natknąłeś się na bardzo dziwną strukturę danych - [1, 4, 'Iwona', false, 'Nowak'].
Twoim zadaniem jest skorzystanie z destrukturyzacji w celu wyciągnięcia z tablicy zmiennych firstname oraz lastname.

*/

[,,firstname,,lastname] = [1, 4, 'Iwona', false, 'Nowak']
console.log("----------------------");
console.log(`${firstname} ${lastname}`);
