!function(){
    $.extend({
        //图片放大
        bigPhoto: (photoObj) => {
            layer.open({
                type: 1,
                title: false,
                closeBtn: 0,
                area: ['auto'],
                skin: 'layui-layer-nobg', //没有背景色
                shadeClose: true,
                content: photoObj
              });
        }

    });
}();