addEvent(window, 'load', function() {
    var person1 = new Person(),
        person2 = new Person(),
        person3 = new Person(),
        person4 = new Person(),
        person_view = new PersonView(document.getElementById("person"));

        persons_group = new PersonsGroup(),
        persons_group_view = new PersonsGroupView(document.getElementById('group')),

        page_control_view = new PageControlView(document.getElementById('group'), document.getElementById("person"), persons_group_view);

    person1.bulkSet(
        {
            'name': 'Andrey0',
            'last_name': 'Granat0',
            'skype': 'kreol_19920',
            'email': 'granat.andrey@gmail.com0',
            'phone': '06763532770',
            'age': '210',
            'sex': 'M0'
        }
    );
    
    person2.bulkSet(
        {
            'name': 'Andrey1',
            'last_name': 'Granat1',
            'skype': 'kreol_19921',
            'email': 'granat.andrey@gmail.com1',
            'phone': '06763532771',
            'age': '211',
            'sex': 'M1'
        }
    );

    person3.bulkSet(
        {
            'name': 'Andrey2',
            'last_name': 'Granat2',
            'skype': 'kreol_19922',
            'email': 'granat.andrey@gmail.com2',
            'phone': '06763532772',
            'age': '212',
            'sex': 'M2'
        }
    );

    person4.bulkSet(
        {
            'name': 'Andrey3',
            'last_name': 'Granat3',
            'skype': 'kreol_19923',
            'email': 'granat.andrey@gmail.com3',
            'phone': '06763532773',
            'age': '213',
            'sex': 'M3'
        }
    );

    person_view.setPerson(person1);
    person_view.start();
    
    persons_group.addPerson(person1);
    persons_group.addPerson(person2);
    persons_group.addPerson(person3);
    persons_group.addPerson(person4);

    persons_group_view.setPersonView(person_view);
    persons_group_view.setPersonsGroup(persons_group);
    persons_group_view.render();

    page_control_view.start();
});