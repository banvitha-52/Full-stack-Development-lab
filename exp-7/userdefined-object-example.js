function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function() {
      return this.firstName + " " + this.lastName;
    };
    Object.defineProperty(this, 'info', {
      get: function() {
        return `${this.fullName()}, Age: ${this.age}`;
      },
      set: function(value) {
        let parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
      }
    });
  }
  let person1 = new Person("John", "Doe", 30);
  console.log(person1.firstName);
  console.log(person1.fullName());
  console.log(person1.info);
  person1.info = "Jane Smith";
  console.log(person1.firstName);
  console.log(person1.lastName);
  console.log(person1.info);
  