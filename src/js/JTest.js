
var a = J.extend({a:{c:1,b:1},c:3},{a:{c:2},b:1},true);
console.log(a);
var $ = J.dom;
var b = $('a[x-soj]');
console.log(b.attr('href'));
$('#hello').on('click',function () {
    console.log('item--- clicked');
});
$('#hello').fire('click');
// $('.item').click();