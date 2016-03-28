/**
 * Created by Amit Thakkar on 23/06/15.
 */
(() => {
    "use strict";
    class Person {
        constructor(name) {
            this.name = name;
        }

        getName() {
            return this.name;
        }
    }
    class Employee extends Person {
        constructor(name, id) {
            super(name);
            this.id = id;
        }

        getId() {
            return this.id;
        }
    }

    let amit = new Employee('Amit Thakkar', 32);
    let namita = new Employee('Namita Malik', 45);

    console.log(amit.getName()); // Amit Thakkar
    console.log(amit.getId()); // 32
    console.log(amit.name); // Amit Thakkar
    console.log(amit.id); // 32
    console.log(namita.getName()); // Namita Malik
    console.log(namita.getId()); // 45
})();