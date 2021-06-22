<template>

    <div class='container'>
        <highcharts v-if='show' :options="chartOptions"></highcharts>
    </div>
    
</template>

<script>
import api from '@/api.js'

export default {
    name: 'Index',
    data() {
        return {
            show:false,
            chartOptions: {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie',
                    width: '600',
                },
                title: {
                    text: '男女比例'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                accessibility: {
                    point: {
                        valueSuffix: '%'
                    }
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                        }
                    }
                },
                series: [{
                    name: 'Brands',
                    colorByPoint: true,
                    data: []
                }]
            }
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            this.refresh()
        },
        async refresh() {
            var data = await api.getGender()
            var maleCount = data[0].count
            var femaleCount = data[1].count
            var sum = maleCount + femaleCount

            api.hello()

            this.chartOptions.series[0].data = [{
                name: '男',
                y: maleCount / sum * 10,
            }, {
                name: '女',
                y: femaleCount / sum * 10
            }]

            this.show = true
        }
    }
    
}
</script>