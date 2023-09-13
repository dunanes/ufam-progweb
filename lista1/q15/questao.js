var fullname = 'John Doe';
var obj = {
    fullname: 'Colin Ihrig',
    prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function () {
            return this.fullname;
        }
    }
};

console.log(obj.prop.getFullname());
var test = obj.prop.getFullname;
console.log(test());

console.log("Obj.prop é uma:", typeof (obj.prop));
console.log("Teste é uma: ", typeof (test));
