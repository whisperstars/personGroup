function PersonsGroup() {
    var persons = [];

    this.addPerson = function(person_instance) {
        persons.push(person_instance);

        return this;
    };

    this.removePerson = function(id) {
        persons.splice(id, 1);
    };

    this.getPersons = function() {
        return persons;
    };

    return this;
}