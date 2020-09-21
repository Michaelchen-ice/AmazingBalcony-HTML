var myChartwaterkept = echarts.init(document.getElementById('waterkept'));

var waterkept = 300;
$.ajax({
    url: 'http://47.100.248.118:8888//WaterKept_web/michael',
    type: 'get',
    data: "",
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
            waterkept = result[0].data;
            console.log(waterkept);
        }
    }
});

var valiable = 4000 - waterkept;

option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    color:['#20a0ff ', '#5dd5a4','#ffb460','blueviolet'],
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['闲置空间', '水箱水量']
    },
    series: [
        {
            name: '储水信息',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: valiable, name: '闲置空间'},
                {value: waterkept, name: '水箱水量'}
            ]
        }
    ]
};



myChartwaterkept.setOption(option);