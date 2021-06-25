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
                    type: 'column',
                    width: '500',
                    height: '300',
                },
                title: {
                    text: 'User group distrubute'
                },
                xAxis: {
                    type: 'category',
                    labels: {
                        rotation: -45,
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                },
                legend: {
                    enabled: false
                },
                series: [{
                    name: 'Population',
                    data: [],
                    dataLabels: {
                        enabled: true,
                        rotation: -90,
                        color: '#FFFFFF',
                        align: 'right',
                        y: 10, // 10 pixels down from the top
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
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
            var data = await api.getGroup()

            data = data.filter(x => x.describe == 'job')
            data = data.map(x => ({
                name: x.key,
                y: parseInt(x.value)
            }))
            

            this.chartOptions.series[0].data = data
            this.show = true
        }
    }
    
}
</script>