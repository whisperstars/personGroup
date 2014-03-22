function Person() {
    var info = {
            'name': '',
            'last_name': '',
            'skype': '',
            'email': '',
            'phone': '',
            'age': '',
            'sex': ''
        };

        this.set = function(property, value) {
            if(info[property] !== undefined && value !== undefined) {
                info[property] = value;
            }

            return this;
        };

        this.bulkSet = function(person_info) {
            var i;

            for(property in person_info) {
                if(info[property] !== undefined) {
                    info[property] = person_info[property];
                }
            }

            return this;
        };

        this.get = function(property) {
            return info[property];
        };

        this.toJSON = function(){
            return info;
        }

        return this;
}