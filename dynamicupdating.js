import Ember from 'ember';

export default function() {
   var Person = Ember.Object.extend ({
      firstName: null,
      lastName: null,
      age: null,
      mobno: null,
      
      //Defining the Details1 and Details2 computed property function
      Details1: Ember.computed('firstName', 'lastName', function() {
         return this.get('firstName') + ' ' + this.get('lastName');
      }),

      Details2: Ember.computed('age', 'mobno', function() {
         return 'Name: ' + this.get('Details1') + '<br>' + ' Age: ' + this.get('age') + 
            '<br>' + ' Mob No: ' + this.get('mobno');
      }),
   });

   //initializing the Person details
   var person_details = Person.create ({
      //Dynamically Updating the properties
      firstName: 'Jhon',
      lastName: 'Smith',
      age: 26,
      mobno: '1234512345'
   });

   //updating the value for 'firstName' using set() method
   person_details.set('firstName', 'Steve');
   document.write("<h2>Details of the Person: <br></h2>");
   document.write(person_details.get('Details2'));
}