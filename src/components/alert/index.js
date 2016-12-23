var tplHtml = require('./index.html');
var $ = require('zepto');
var _ = require('../template/index.js');
var ID = require('../../id_generator');
require('./common.css');

class Alert {
    constructor(data,ops) {
        data.id = this.id = ID.get();
        this.data = data;
        var html = _.template(tplHtml,{variable:'items'})(data);
        this.html = html;
        require('./'+(data.theme||'index')+'.css');
        this.ops = Object.assign({}.ops||{});
    }
    _bindEvent() {
        var owner = this;
        this.view.on('click','.close',function () {
            console.log('close--clicked')
            owner.close();
        });
    }
    appendTo(dom) {
        dom.append($(this.html));
        this.view = $('.'+this.id,dom);
        this._bindEvent();
    }
    show(){
        this.view.css('display','-webkit-box');
    }
    close(){
        this.view.css('display','none')
    }
}

function create(data,ops) {
    return new Alert(data,ops);
}

module.exports = {
    create:create,
}