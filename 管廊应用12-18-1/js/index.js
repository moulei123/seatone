/*
 * @Descripttion: 
 * @version: 
 * @Author: yang_ft
 * @Date: 2020-11-16 09:25:16
 * @github: famensaodiseng
 * @LastEditTime: 2020-12-18 09:49:44
 */
$(function () {

  // gallery开始
  $("#gallery").click(function () {
    galleryIndex = layer.open({
      type: 2
      , skin: 'layui-layer-lan'
      , title: '管架信息'
      , area: ['930px', '830px']
      , shade: 0
      , id: 'galleryId'
      , maxmin: true
      , btn: []
      , content: './pages/gallery.html'
      , resize: false
      , zIndex: layer.zIndex //重点1
      , success: function (layero) {
        layer.setTop(layero); //重点2
      }
    });
  })
  // gallery结束
  // 二维码设置
  $("#setPrint").click(function () {
    setIndex = layer.open({
      type: 2
      , title: '二维码设置'
      , skin: 'layui-layer-lan'
      , area: ['860px', '750px']
      , shade: 0
      , id: 'setId'
      , maxmin: true
      , scrollbar: false
      , resize: false
      , content: './pages/setting.html',
      btn: ['保存设置', '取消'],
      skin: 'layui-btn-normal',
      yes: function () {
        layer.closeAll();
        layer.msg('保存样式成功', { icon: 1 });
      },
      zIndex: layer.zIndex, //重点1
      success: function (layero) {
        layer.setTop(layero); //重点2

      }
    });
  })
  // 二维码结束

  // support管道信息
  $(".support").click(function () {
    supportIndex = layer.open({
      type: 2
      , title: '剖面图'
      , area: ['900px', '675px']
      , shade: 0
      , skin: 'layui-layer-lan'
      , id: 'supportId'
      , scrollbar: false
      , maxmin: true
      , content: './pages/support.html'
      , resize: false
    });
  })
  // support结束
  // threes
  $("#threes").click(function () {
    threesIndex = layer.open({
      type: 2
      , skin: 'layui-layer-lan'
      , title: '信息分布'
      , area: ['920px', '820px']
      , shade: 0
      , btn: []
      , scrollbar: false
      , id: 'threesId'
      , maxmin: true
      , resize: false
      , content: './pages/threes.html'
    });
  })
  // threes结束
  // location开始
  // 高级查询开始
  $("#highQuery").click(function () {
    setIndex = layer.open({
      type: 2
      , skin: 'layui-layer-lan'
      , title: '高级查询'
      , area: ['1230px', '850px']
      , shade: 0
      , id: 'highQueryId'
      , maxmin: true
      , scrollbar: true
      , content: './pages/highQuery.html'
      , resize: false
      , btn: []
      , zIndex: layer.zIndex //重点1
      , success: function (layero) {
        layer.setTop(layero); //重点2
      }
    });
  })
  // 高级查询结束
  // location结束
  // PrintLog开始
  $("#PrintLog").click(function () {
    printIndex = layer.open({
      type: 2
      , skin: 'layui-layer-lan'
      , title: '打印记录'
      , area: ['1360px', '900px']
      , shade: 0
      , id: 'PrintLogId'
      , maxmin: true
      , btn: []
      , content: './pages/PrintLog.html'
      , resize: false
      , zIndex: layer.zIndex //重点1
      , success: function (layero) {
        layer.setTop(layero); //重点2
      }
    });
  })
  // PrintLog结束
  // slide开始
  $("#slide").click(function () {
    slideIndex = layer.open({
      type: 2
      , skin: 'layui-layer-lan'
      , id: 'slideId'
      , title: '资产目录'
      , shadeClose: true
      , shade: 0
      , scrollbar: false
      , offset: ['100px', '50px']
      // , resize: false
      , area: ['280px', '80%']
      , content: '../pages/slide.html'
    });

  })

  // slide结束
  // 部件结构开始
  $('#structure').click(function () {
    structure = layer.open({
      type: 2
      , skin: 'layui-layer-lan'
      , title: '部件结构'
      , area: ['330px', '430px']
      , shade: 0
      , btn: []
      , id: 'structureId'
      , maxmin: true
      , content: './pages/structure.html'
      , resize: false
      , zIndex: layer.zIndex //重点1
      , success: function (layero) {
        layer.setTop(layero); //重点2
      }
    });
  })
  // 部件结构结束
  // 部件属性开始
  $('#viewProp').click(function () {
    viewProp = layer.open({
      type: 1
      , skin: 'layui-layer-lan'
      , title: '部件结构'
      , area: ['330px', '430px']
      , shade: 0
      , id: 'viewPropId'
      , maxmin: true
      , btn: []
      , content: $('#attrView').html()
      , resize: false
      , zIndex: layer.zIndex //重点1
      , success: function (layero) {
        layer.setTop(layero); //重点2
      }
    });
  })
  // 部件属性结束
  // checkInfo开始
  $("#checkInfo").click(function () {
    galleryIndex = layer.open({
      type: 2,
      title: '管道属性',
      content: 'pages/infomation.html',
      closeBtn: 1,
      id: 'infoId',
      shade: 0,
      scrollbar: false,
      skin: 'layui-layer-lan',
      area: ['720px', '480px'],
      maxmin: true,
      resize: false,
      btn: []
      // resizing: function () {
      //   $("threesTable").css({ "width": "100%", "height": "100%" });
      // },
    });
  })
  // checkInfo结束
  // serch开始
  $("#serchResult").click(function () {
    galleryIndex = layer.open({
      type: 2,
      title: '搜索结果',
      content: 'pages/serch.html',
      closeBtn: 1,
      id: 'serchId',
      shade: 0,
      scrollbar: true,
      skin: 'layui-layer-lan',
      area: ['1220px', '780px'],
      maxmin: true,
      resize: false,
      btn: []
      // resizing: function () {
      //   $("threesTable").css({ "width": "100%", "height": "100%" });
      // },
    });
  })
  // serch结束

  // 管架属性开始
  $("#checkInfoGj").click(function () {
    gjIndex = layer.open({
      type: 2,
      title: '管架属性',
      content: 'pages/infomationPie.html',
      closeBtn: 1,
      id: 'checkInfoGjId',
      shade: 0,
      scrollbar: false,
      skin: 'layui-layer-lan',
      area: ['720px', '480px'],
      maxmin: true,
      resize: false,
      // resizing: function () {
      //   $("threesTable").css({ "width": "100%", "height": "100%" });
      // },
    });
  })
  // 管架属性结束
  // 管件统计开始
  $("#parts").click(function () {
    setIndex = layer.open({
      type: 2
      , skin: 'layui-layer-lan'
      , title: '管件统计'
      , area: ['630px', '550px']
      , shade: 0
      , id: 'partsId'
      , maxmin: true
      , scrollbar: true
      , content: './pages/parts.html'
      , resize: false,

      zIndex: layer.zIndex //重点1
      , success: function (layero) {
        layer.setTop(layero); //重点2
      }
    });
  })
  // 管件统计结束
  // 右键二维码信息
  $(".ercode").click(function () {
    supportIndex = layer.open({
      type: 2
      , title: '二维码'
      , area: ['900px', '750px']
      , shade: 0
      , skin: 'layui-layer-lan'
      , id: 'supportId'
      , btn: []
      , scrollbar: false
      , maxmin: true
      , content: './pages/dimensionalCode.html'
      , resize: false
    });
  })
  // 右键二维码信息结束
})


