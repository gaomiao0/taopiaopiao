<template>
  <div class="mapbox">
    <div id="allmap" class="allmap">
    </div>
  </div>
</template>

<script>
    import BMap from 'BMap'
    export default {
          name: "CinemaMap",
          mounted() {
            // 百度地图API功能
            var map = new BMap.Map("allmap"); // 创建Map实例
            map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设置中心点坐标和地图级别
            map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
            map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
            map.enableScrollWheelZoom();//启用地图滚轮放大缩小
            map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
            var geolocation = new BMap.Geolocation();
            geolocation.getCurrentPosition(function (r) {
              if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                var mk = new BMap.Marker(r.point);
                map.addOverlay(mk);
                map.panTo(r.point);
                alert('您的位置：' + r.point.lng + ',' + r.point.lat);
              }
              else {
                alert('failed' + this.getStatus());
              }
            })
          }
    }
</script>

<style scoped>
.mapbox{
  width:100%;
  height:100%;
}
.allmap {
  width:100%;
  height:100%;
}
</style>
