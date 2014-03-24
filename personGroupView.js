function PersonsGroupView(elem) {
    var persons_group,
        person_view;

    function eventHandler() {
        var i,
            btns_edit = elem.getElementsByClassName('btn_edit');

        function btnEditClick(id) {
            person_view.setPerson(persons_group.getPerson(Number(id)));
            person_view.update();
        }

        for (i = 0; i < btns_edit.length; i++) {
            (function(i) {
                addEvent(btns_edit[i], 'click', function() {
                        btnEditClick(btns_edit[i].classList[0]);
                    }
                );
            })(i);
        }
    }

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
            table_body += person_view.renderToGroup(i);
        };

        elem.innerHTML = group_template({'table_body': table_body});

        eventHandler();
    };

    this.update = function(id) {
        var html = person_view.renderToGroup(id);
        console.log(html);
        $('.person_' + id).replaceWith(html);
    }

    return this;
}