/**
* @ngdoc function
* @name open
* @methodOf Audit
*
* @description open audit script
*
* @example
* <pre>
*   Audit.open();
* </pre>
*/

module.exports = function(){
    window.location = window.location.origin + '/audit?page=' + encodeURIComponent(window.location.href);
};