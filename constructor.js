/*Create a function called 'person' that accepts a name and an age parameter
  and returns an object with those properties. 
*/

    //code here
    var person = function(name,age) {
    	person.name = name;
    	person.age = age;
    	return person;
    }
    

/* Call your function twice creating to different objects */


    //code here
    var esau = person('Esau', 13);
    var zaira = person('Zaira', 10);


    



/* In this scenario, can you add a method to your person functions prototoype and then have
   the objects you create with that function delegate to the person's prototype?

   //Explain your answer here

   /* No, because   */


/* Create a Constructor function called 'Person' that accepts a name and an age paramter
    and returns an object with those parameters */

    //code here
    var Person = function(name, age) {
    	this.name = name;
    	this.age = age;
    	return this;
    };


/* Add a property called sayAge to the Person's prototype which says that instances name */

    //code here

    Person.prototype.sayAge = function() {
    	alert(this.name);
   
    };

/* Create two instances of Person and call sayAge with one of those instances.*/

	var zaira = new Person('Zaira', 10);
    var esau = new Person('Esau', 13);

    zaira.sayAge();
