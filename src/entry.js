require("./css/reset.css");
require("./style.css");
require("./css/index.css");
var Mock = require('mockjs');
// var style2 = require("./style2.css");
// var html = require("./p1.html");
// var alert = require('./components/alert/index.js');
// var $ = J.dom;
// var data = [];
// var tpl = require('./components/template/index.js')

// for (var i = 0; i < 20; i++) {
//     data[i] = {
//         exp: JSON.stringify({
//             action: 'exposure_name_' + i,
//             cp: {
//                 'exposure': [{
//                     propid: 648,
//                     ftype: 3,
//                     userid: 123456,
//                     utype: 1,
//                     hptype: 2,
//                     index: 5
//                 }, {
//                     lpid: 648,
//                     fype: 4,
//                     index: 6
//                 }],
//                 'exposure_type': i % 2
//             }
//         })
//     };
// }
// var html = $('#tpl-list').template(data, { variable: 'items' });
// $('body').append(html);
// var $ = require('zepto');
// require("./js/JTest.js");

// var data = Mock.mock(/\/my/,{
//     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//     'list|1-10': [{
//         // 属性 id 是一个自增数，起始值为 1，每次增 1
//         'id|+1': 1
//     }]
// });


// J.get({
//     url: '/my',
//     type: 'json',
//     onSuccess: function(data, status, jqXHR) {
//         console.log(data);
//         $('#mockjs-view').html(JSON.stringify(data, null, 4));
//     }
// });


// var nodes = {}
// function init() {
//     var alert1 = nodes.alert1 = alert.create({
//         name:'danny1',
//         theme:'index'
//     });
//     alert1.appendTo($('body'));

//     var alert2 = nodes.alert2 = alert.create({
//         name:'danny2',
//         theme:'style2'
//     });
//     alert2.appendTo($('body'));
// }


// function initEvent() {
//     $('.t-btn1').on('click',function (ev) {
//         nodes.alert1.show();
//     });
//     $('.t-btn2').on('click',function (ev) {
//         nodes.alert2.show();
//     });
// }

// init();
// initEvent();


var clickFunc = function () {
    console.log('btn clicked');
}
$('.t-btn1').on('click',clickFunc);
$('.t-btn1').on('click',clickFunc);
$(function() {
//     $("#file_uploader_1").uploadify({
//         height: 30,
//         buttonText: '上传头像照片',
//         swf: 'http://10.249.11.94:4000/lib/vendor/uploader_swf/uploadify.swf',
//         uploader: '/lib/uploadify/uploadify.php',
//         width: 120,
//         onSelect: function() {
//             console.log('aaa')
//         }
//     });

    // $('#avatar-uploader').uploadify({
    //     'uploader': "http://pages.danny.fang.front.anjuke.test/swf/uploadify/uploadify.swf?_=1481247360",
    //     'script': "http://upd1.ajkimg.com/upload",
    //     'buttonClass': 'btn btn-a',
    //     'buttonText': '上传头像照片',
    //     'buttonImg': 'http://pages.danny.fang.front.anjuke.test/img/afsale/v2-sale/customer/upload-avatar.png',
    //     'width': 140,
    //     'height': 32,
    //     'scriptAccess': 'always',
    //     'fileDataName': 'file',
    //     'fileDesc': '上传头像照片',
    //     'sizeLimit': 1024 * 1024 * 2, // fileuplod limitsize only 2MB
    //     'fileExt': '*.jpg;*.png;*.jpeg;',
    //     'multi': false,
    //     'auto': true,
    //     // 'wmode': 'transparent',
    //     'onSelect': function() {
    //         console.log('onSelect');
    //     }
    // });
        console.log('ready-------')
});
