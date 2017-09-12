/**
* @ngdoc object
* @name Audit
*
* @description
* Audit script
*/
module.exports = new function(){
    this.init = require('./init');
    this.open = require('./open');
};
