function PersonsGroupView(elem) {
    var persons_group,
        person_view;

    this.setPersonsGroup = function(persons_group_instance) {
        persons_group = persons_group_instance;

        return this;
    };

    this.setPersonView = function(person_view_instance) {
        person_view = person_view_instance;

        return this;
    };

    this.render = function() {
        var i,
            table_body = '',
            persons = persons_group.getPersons(),
            group_template = _.template($('#group_template').html());

        for (i = 0; i < persons.length; i++) {
            person_view.setPerson(persons[i]);
            table_body += person_view.render(i);
        };

        elem.innerHTML = group_template({'table_body': table_body});
    };

    return this;
}