// 基于准备好的dom，初始化echarts实例
var myChartco2 = echarts.init(document.getElementById('co2'));

var tmp = 2100;

function randomData() {
    now = new Date();

    value = 2100;
    console.log("Why not me?")
    var valueName = now.getFullYear() + '/' + (now.getMonth() + 1) + '/' + now.getDate() +
        ' ' + (now.getHours() >= 10 ? now.getHours() : '0' + now.getHours()) + ':' +
        (now.getMinutes() >= 10 ? now.getMinutes() : '0' + now.getMinutes()) +
        ':' + (now.getSeconds() >= 10 ? now.getSeconds() : '0' + now.getSeconds());

    return {
        name: now.toString(),
        value: [
            valueName,
            parseInt(value)
        ]
    }
}

var data = [];
var now = +new Date();
var oneDay = 1000;
//var oneDay = 24 * 3600 * 1000;
var value = Math.random() * 1000;
for (var i = 0; i < 60; i++) {
    data.push(randomData());
}

var temp = 59;

option = {
    title: {
        text: '实时监测'
    },
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            params = params[0];
            var date = new Date(params.name);
            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
        },
        axisPointer: {
            animation: false
        }
    },
    xAxis: {
        type: 'time',
        splitLine: {
            show: false
        },
        triggerEvent: true
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
            show: false
        }
    },
    series: [{
        name: '模拟数据',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        markPoint: {
            data: [
                [{
                    symbol: 'none',
                    x: '95%',
                    yAxis: data[temp].value[1]
                }, {
                    symbol: 'circle',
                    label: {
                        normal: {
                            position: 'start',
                            formatter: 'Value\n{c}'
                        }
                    },
                    name: '实时数据',
                    value: data[temp].value[0],
                    xAxis: data[temp].value[0],
                    yAxis: data[temp].value[1]
                }]
            ]
        },

        areaStyle: {
            normal: {
                color: '#8cd5c2' //改变区域颜色
            }
        },
        itemStyle : {
            normal : {
                color:'#8cd5c2', //改变折线点的颜色
                lineStyle:{
                    color:'#8cd5c2' //改变折线颜色
                }
            }
        },

        data: data
    }]
};

setInterval(function() {


    $.ajax({
        url: 'http://47.100.248.118:8888/CO2_web/michael',
        type: 'get',
        dataType: 'json',
        async:false,
        xhrFields: {
            withCredentials: true // 这里设置了withCredentials
        },
        error:function(){
            console.log("get redis error!!!")
        },
        success: function(result){
            if(result != null){
                console.log(result[0].data);
                tmp = 2100;
            }
        }
    });

    for (var i = 0; i < 5; i++) {
        data.shift();
        data.push(randomData());
    }
    //alert(data[999].name)
    myChartco2.setOption({
        series: [{
            data: data,
            markLine: {
                data: [
                    [{
                        symbol: 'none',
                        x: '95%',
                        yAxis: data[temp].value[1]
                    }, {
                        symbol: 'circle',
                        label: {
                            normal: {
                                position: 'start',
                                formatter: 'Value\n{c}'
                            }
                        },
                        name: '实时数据',
                        value: data[temp].value[1],
                        xAxis: data[temp].value[0],
                        yAxis: data[temp].value[1]
                    }]
                ]
            }
        },]
    });
}, 1000);

myChartco2.setOption(option);

window.onresize=function(){
    for(var i = 0;i<echarts.length;i++){
        echarts[i].resize();
    }
}
