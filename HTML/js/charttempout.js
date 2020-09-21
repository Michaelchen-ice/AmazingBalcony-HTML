
//=========================================================================================================
//http://47.100.248.118:8888/CO2_web/michael

function changeTime(option) {
    // currentTime当前时间，假设是 2019-7-2 19:03
    var currentTime = option;
    var reg = new RegExp("-","g");//去掉时间里面的-
    var a = currentTime.replace(reg,"");
    var regs = new RegExp(" ","g");//去掉时间里面的空格
    var b = a.replace(regs,"");
    var regss = new RegExp(":","g");//去掉时间里面的:冒号
    var c = b.replace(regss,"");
    console.log('时间变成数字的结果:',c)
    return c - 20200315141500;
}

function CurentTime()
{
    var now = new Date();
    var year = now.getFullYear();       //年
    var month = now.getMonth() + 1;     //月
    var day = now.getDate();            //日

    var hh = now.getHours();            //时
    var mm = now.getMinutes();          //分
    var ss = now.getSeconds();          //分

    var clock = year + "-";

    if(month < 10)
        clock += "0";

    clock += month + "-";

    if(day < 10)
        clock += "0";

    clock += day + " ";

    if(hh < 10)
        clock += "0";

    clock += hh + ":";
    if (mm < 10) clock += '0';
    clock += mm + ":";

    if(ss < 10) clock += '0';
    clock += ss;
    return(clock);
}
console.log(CurentTime());

var retime = changeTime(CurentTime());//函数调用


//=========================================================================================================


// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('tempout'));


var demo = [];
var list =[];
var total = [];


var co2 = JSON.parse(localStorage.getItem("co2"));


for(var i = 0; i < 5; i++){

    var retime = changeTime(CurentTime());//函数调用
    demo[0] = 10 + i;
    console.log("demo0",demo[0]);
    demo[1] = co2[i] + Math.round(Math.random()*10) - Math.round(Math.random()*10) + i;
    demo[2] = (co2[i] * co2[i] * co2[i] * co2[i])/1000000;
    if(demo[2] > 20800000){
        demo[2] = demo[2] * 5;
    }
    if(demo[2] > 127910000){
        demo[2] = demo[2] * 5;
    }
    demo[3] = 'CO' + i;
    demo[4] = 'CO2';

    console.log(i);
    localStorage.setItem("datademo",JSON.stringify(demo))
    var demoi = JSON.parse(localStorage.getItem("datademo"));

    list[i] = demoi;
    console.log("List",list[i])

    localStorage.setItem("datalist",JSON.stringify(list));
    var listi = JSON.parse(localStorage.getItem("datalist"));
    total[0] = listi;
}


var co21 = [2020,2120,2080,2290,2153,2222];
for(var i = 0; i < 5; i++){
    var retime = changeTime(CurentTime());//函数调用
    demo[0] = 20 + i;
    console.log("demo0",demo[0]);
    demo[1] = co21[i] + Math.round(Math.random()*10) - Math.round(Math.random()*10) + i;
    demo[2] = (co21[i] * co21[i] * co21[i] * co21[i])/1000000;
    if(demo[2] > 20800000){
        demo[2] = demo[2] * 5;
    }
    if(demo[2] > 127910000){
        demo[2] = demo[2] * 7;
    }
    demo[3] = 'CO' + i;
    demo[4] = 'CO2';

    console.log(i);
    localStorage.setItem("datademo",JSON.stringify(demo))
    var demoi = JSON.parse(localStorage.getItem("datademo"));

    list[i] = demoi;
    console.log("List",list[i])

    localStorage.setItem("datalist",JSON.stringify(list));
    var listi = JSON.parse(localStorage.getItem("datalist"));
    total[1] = listi;
}


var co22 = [2130,2230,2180,2190,2253];

for(var i = 0; i < 5; i++){
    var retime = changeTime(CurentTime());//函数调用
    demo[0] = 30 + i;
    console.log("demo0",demo[0]);
    demo[1] = co22[i] + Math.round(Math.random()*10) - Math.round(Math.random()*10) + i;
    demo[2] = (co22[i] * co22[i] * co22[i] * co22[i])/1000000;
    if(demo[2] > 20800000){
        demo[2] = demo[2] * 5;
    }
    if(demo[2] > 127910000){
        demo[2] = demo[2] * 7;
    }
    demo[3] = 'CO' + i;
    demo[4] = 'CO2';

    console.log(i);
    localStorage.setItem("datademo",JSON.stringify(demo))
    var demoi = JSON.parse(localStorage.getItem("datademo"));

    list[i] = demoi;
    console.log("List",list[i])

    localStorage.setItem("datalist",JSON.stringify(list));
    var listi = JSON.parse(localStorage.getItem("datalist"));
    total[2] = listi;
}

var co23 = [2004,2152,2094,2291,2213];
for(var i = 0; i < 5; i++){
    var retime = changeTime(CurentTime());//函数调用
    demo[0] = 40+ i;
    console.log("demo0",demo[0]);
    demo[1] = co23[i] + Math.round(Math.random()*10) - Math.round(Math.random()*10) + i;
    demo[2] = (co23[i] * co23[i] * co23[i] * co23[i])/1000000;
    if(demo[2] > 20800000){
        demo[2] = demo[2] * 5;
    }
    if(demo[2] > 127910000){
        demo[2] = demo[2] * 7;
    }
    demo[3] = 'CO' + i;
    demo[4] = 'CO2';

    console.log(i);
    localStorage.setItem("datademo",JSON.stringify(demo))
    var demoi = JSON.parse(localStorage.getItem("datademo"));

    list[i] = demoi;
    console.log("List",list[i])

    localStorage.setItem("datalist",JSON.stringify(list));
    var listi = JSON.parse(localStorage.getItem("datalist"));
    total[3] = listi;
}


for(var i = 0; i < 5; i++){
    var retime = changeTime(CurentTime());//函数调用
    demo[0] = 50 + i;
    console.log("demo0",demo[0]);
    demo[1] = co2[i] + Math.round(Math.random()*10) - Math.round(Math.random()*10) + i;
    demo[2] = (co2[i] * co2[i] * co2[i] * co2[i])/1000000;
    if(demo[2] > 20800000){
        demo[2] = demo[2] * 5;
    }
    if(demo[2] > 127910000){
        demo[2] = demo[2] * 7;
    }
    demo[3] = 'CO' + i;
    demo[4] = 'CO2';

    console.log(i);
    localStorage.setItem("datademo",JSON.stringify(demo))
    var demoi = JSON.parse(localStorage.getItem("datademo"));

    list[i] = demoi;
    console.log("List",list[i])

    localStorage.setItem("datalist",JSON.stringify(list));
    var listi = JSON.parse(localStorage.getItem("datalist"));
    total[4] = listi;
}

var i = 0; var j = 1;

total[0] = total[0].concat(total[1]);

total[0] = total[0].concat(total[2]);

total[0] = total[0].concat(total[3]);

total[0] = total[0].concat(total[4]);

var used = [];
used[0] = total[0];

console.log(used); //used == data

/*
    var adc = [];
    adc[0] = c;
    console.log(adc)

    console.log(c)*/

console.log(total);

var redata = used;

// 指定图表的配置项和数据
var data = used;
/*[
[[28604,10,17903468.100001,'Australia','CO2'],[28604,45,22543893.337681,'VINA','CO2'],[28604,65,17096869,'APRIL','CO2'],[28604,23,17096869,'VR','CO2'],[31163,77.4,27662440,'Canada','CO2'],[1516,68,1154605773,'China','CO2'],[13670,74.7,10582082,'Cuba','CO2'],[28599,75,4986705,'Finland','CO2'],[29476,77.1,56943299,'France','CO2'],[31476,75.4,78958237,'Germany','CO2'],[28666,78.1,254830,'Iceland','CO2'],[1777,57.7,870601776,'India','CO2'],[29550,79.1,122249285,'Japan','CO2'],[2076,67.9,20194354,'North Korea','CO2'],[12087,72,42972254,'South Korea','CO2'],[24021,75.4,3397534,'New Zealand','CO2'],[43296,76.8,4240375,'Norway','CO2'],[10088,70.8,38195258,'Poland','CO2'],[19349,69.6,147568552,'Russia','CO2'],[10670,67.3,53994605,'Turkey','CO2'],[26424,75.7,57110117,'United Kingdom','CO2'],[37062,75.4,252847810,'United States','CO2']],
//[[44056,81.8,23968973,'Australia',2015],[28604,88,3593992070,'VINA',2015],[28604,99,17096869,'APRIL',2015],[28604,44,17096869,'VR',2015],[43294,81.7,35939927,'Canada',2015],[13334,76.9,1376048943,'China',2015],[21291,78.5,11389562,'Cuba',2015],[38923,80.8,5503457,'Finland',2015],[37599,81.9,64395345,'France',2015],[44053,81.1,80688545,'Germany',2015],[42182,82.8,329425,'Iceland',2015],[5903,66.8,1311050527,'India',2015],[36162,83.5,126573481,'Japan',2015],[1390,71.4,25155317,'North Korea',2015],[34644,80.7,50293439,'South Korea',2015],[34186,80.6,4528526,'New Zealand',2015],[64304,81.6,5210967,'Norway',2015],[24787,77.3,38611794,'Poland',2015],[23038,73.13,143456918,'Russia',2015],[19360,76.5,78665830,'Turkey',2015],[38225,81.4,64715810,'United Kingdom',2015],[53354,79.1,321773631,'United States',2015]]
];*/

option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#f7f8fa'
    }, {
        offset: 1,
        color: '#f7f8fa'
    }]),
    title: {
        text: ''
    },
    legend: {
        right: 10,
        data: ['CO2']
    },
    xAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    yAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        scale: true
    },
    series: [{
        name: 'CO2',
        data: data[0],
        type: 'scatter',
        symbolSize: function (data) {
            return Math.sqrt(data[2]) / 5e2;
        },
        emphasis: {
            label: {
                show: true,
                formatter: function (param) {
                    return param.data[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(120, 36, 50, 0.5)',
            shadowOffsetY: 5,
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                offset: 0,
                color: 'rgb(251, 118, 123)'
            }, {
                offset: 1,
                color: 'rgb(204, 46, 72)'
            }])
        }
    }, {
        name: '2015',
        data: data[1],
        type: 'scatter',
        symbolSize: function (data) {
            return Math.sqrt(data[2]) / 5e2;
        },
        emphasis: {
            label: {
                show: true,
                formatter: function (param) {
                    return param.data[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(25, 100, 150, 0.5)',
            shadowOffsetY: 5,
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                offset: 0,
                color: 'rgb(129, 227, 238)'
            }, {
                offset: 1,
                color: 'rgb(25, 183, 207)'
            }])
        }
    }]
};

console.log(data);
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);


/*    setInterval(getList,1090);
    var i = 0;
    function getList() {
        if(i > 10){
            i = 0;
        }
        option.series[0].data = redata[i];
        myChart.setOption(option);
        i++;
    }*/
