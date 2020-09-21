window.onload = function () {
    var myChart = echarts.init(document.getElementById('myAreaChartjs'));
    var option = {


        xAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            areaStyle: {
                normal: {
                    color: '#3498db' //改变区域颜色
                }
            },
            itemStyle : {
                normal : {
                    color:'#1abc9c', //改变折线点的颜色
                    lineStyle:{
                        color:'#8cd5c2' //改变折线颜色
                    }
                }
            },
            data: [12,32,43,34,23,34,32],
            type: 'line'
        },
        ]
    };


    myChart.setOption(option);
/*    var res = [
        [12,32,43,34,23,34,32],
        [32,43,34,23,34,32,35],
        [43,34,23,34,32,35,37],
        [34,23,34,32,35,37,38],
        [23,34,32,35,37,38,35],
        [34,32,35,37,38,35,34],
        [34,32,35,37,38,35,34],
        [34,32,35,37,38,35,34],
    ];

    setInterval(getList,1000);
    var i = 0;
    function getList() {

        if(i > 6){
            i = 0;
        }
        option.series[0].data = res[i];
        myChart.setOption(option);
        i++;
    }
    window.onresize = function () {
        myChart.resize();
    }*/
}