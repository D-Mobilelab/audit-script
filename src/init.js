/**
* @ngdoc function
* @name init
* @methodOf Audit
*
* @description init audit script
*
* @param {Object} options options object
* @param {boolean} options.enable enable/disable audit script
*
* @example
* <pre>
*   Audit.init({
*    enable: true
*   });
* </pre>
*/

module.exports = function(options){
    if(options.enable){
        var element = document.createElement('div');
        element.style.display = 'block';
        element.style.width = '100%';
        element.style.opacity = '0.5';
        element.style.position = 'absolute';
        element.style.backgroundColor = '#dddddd';
        element.style.zIndex = '999999999';
        element.innerHTML = 'This message is visible only with set track <a style=\'color:red;\' href=\'#\' onclick=\'Audit.open();return false;\'>Audit tool</a>';
        document.body.prepend(element);
    }    
};