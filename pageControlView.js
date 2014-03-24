function PageControlView(group_elem, person_elem, persons_group_view) {
    function eventHandler() {
        var i,
            group_btns_edit = group_elem.getElementsByClassName('btn_edit');

        function groupBtnsEditClick(id) {
            group_elem.style.display = 'none';
            person_elem.style.display = 'block';

            person_elem.className += id;
        }

        function personBtnSaveClick() {
            group_elem.style.display = 'block';
            person_elem.style.display = 'none';

            persons_group_view.update(Number(person_elem.className));
        }

        for (i = 0; i < group_btns_edit.length; i++) {
            (function(i){
                addEvent(group_btns_edit[i], 'click', function() {
                        groupBtnsEditClick(group_btns_edit[i].classList[0]);
                    });
            })(i);
        };

        addEvent(person_elem.getElementsByClassName('btn_save')[0], 'click', personBtnSaveClick);
        addEvent(person_elem.getElementsByClassName('btn_save')[1], 'click', personBtnSaveClick);
    }

    this.start = function() {
        eventHandler();
    };

    return this;
}