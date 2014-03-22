function PageControlView(group_elem, person_elem) {
    function eventHandler() {
        var i,
            group_btns_edit = group_elem.getElementsByClassName('btn_edit');

        function groupBtnsEditClick() {
            group_elem.style.display = 'none';
            person_elem.style.display = 'block';
        }

        function personBtnSaveClick() {
            group_elem.style.display = 'block';
            person_elem.style.display = 'none';
        }

        for (i = 0; i < group_btns_edit.length; i++) {
            (function(i){
                addEvent(group_btns_edit[i], 'click', groupBtnsEditClick);
            })(i);
        };

        addEvent(person_elem.getElementsByClassName('btn_save')[0], 'click', personBtnSaveClick);
    }

    this.start = function(){
        eventHandler();
    };

    return this;
}