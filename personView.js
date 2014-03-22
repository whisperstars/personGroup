function PersonView(elem) {
    var person,
        eventHandler = function() {
            var btn_preview = elem.getElementsByClassName('btn_preview')[0],
                btn_edit = elem.getElementsByClassName('btn_edit')[0],

                name_tab = elem.getElementsByClassName('tab_name')[0],
                contacts_tab = elem.getElementsByClassName('tab_contacts')[0],
                personal_tab = elem.getElementsByClassName('tab_personal')[0],

                active_tab_name = 'name',
                inputs = {
                            'name': ['name', 'last_name'],
                            'contacts': ['skype', 'email', 'phone'],
                            'personal': ['age', 'sex']
                        },

                showTabContent = function(name) {
                    var i,
                        tab_captions = elem.getElementsByClassName('tab_caption');

                    elem.getElementsByClassName('tab_' + active_tab_name)[0].style.textDecoration = 'none';
                    elem.getElementsByClassName('tab_' + active_tab_name + '_content')[0].style.display = 'none';

                    elem.getElementsByClassName('tab_' + name)[0].style.textDecoration = 'underline';
                    elem.getElementsByClassName('tab_' + name + '_content')[0].style.display = 'block';

                    for(i=0; i < inputs[active_tab_name].length; i++) {
                        person.set(inputs[active_tab_name][i], elem.getElementsByClassName('edit_' + inputs[active_tab_name][i] + '_field')[0].value);
                    }

                    active_tab_name = name;
                    this.update();
                },

                showPage = function(name) {
                    for(i=0; i < inputs[active_tab_name].length; i++) {
                        person.set(inputs[active_tab_name][i], elem.getElementsByClassName('edit_' + inputs[active_tab_name][i] + '_field')[0].value);
                    }

                    this.update();

                    elem.getElementsByClassName('preview_page')[0].style.display = 'none';
                    elem.getElementsByClassName('edit_page')[0].style.display = 'none';
                    elem.getElementsByClassName(name + '_page')[0].style.display = 'block';
                };

            addEvent(btn_preview, 'click', showPage.bind(this, 'preview'));
            addEvent(btn_edit, 'click', showPage.bind(this, 'edit'));

            addEvent(name_tab, 'click', showTabContent.bind(this, 'name'));
            addEvent(contacts_tab, 'click', showTabContent.bind(this, 'contacts'));
            addEvent(personal_tab, 'click', showTabContent.bind(this, 'personal'));
        }.bind(this);

    function renderPersonEdit(){
        var person_template = _.template($('#person_template').html());
        elem.innerHTML = person_template(person.toJSON());
    }

    this.start = function(){
        renderPersonEdit();
        eventHandler();
    };

    this.update = function() {
        for(property in person.toJSON()) {
            if(person.toJSON()[property] !== '') {
                elem.getElementsByClassName('edit_' + property + '_field')[0].value = person.toJSON()[property];
                elem.getElementsByClassName('preview_' + property + '_field')[0].innerHTML = person.toJSON()[property];
            } else {
                elem.getElementsByClassName('edit_' + property + '_field')[0].value = 'none';
                elem.getElementsByClassName('preview_' + property + '_field')[0].innerHTML = 'none';
            }
        }

        return this;
    };

    this.setPerson = function(person_instance) {
        person = person_instance;

        return this;
    };

    this.renderToGroup = function(id) {
        var person_item = _.template($('#person_item_template').html());
        
        return person_item({
            'name': person.get('name'),
            'id': id
        });
    };

    return this;
}