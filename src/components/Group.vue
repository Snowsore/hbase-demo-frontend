<template>

    <div class='container'>
        <highcharts v-if='show' :options="chartOptions"></highcharts>
    </div>
    
</template>

<script>
import api from './api.js'

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
                    text: 'World\'s largest cities per 2017'
                },
                subtitle: {
                    text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
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
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Population (millions)'
                    }
                },
                legend: {
                    enabled: false
                },
                tooltip: {
                    pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
                },
                series: [{
                    name: 'Population',
                    data: [],
                    dataLabels: {
                        enabled: true,
                        rotation: -90,
                        color: '#FFFFFF',
                        align: 'right',
                        format: '{point.y:.1f}', // one decimal
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

            data = data.filter(x => x.count)
            data = data.map(x => {
                return {
                    name:
                        (x.gender ? x.gender : '') +
                        (x.job ? x.job : '') +
                        (x.marriage ? x.marriage : '') +
                        (x.politicalFace ? x.politicalFace : ''),
                    y: x.count
                }
            })

            this.chartOptions.series[0].data = data
            this.show = true
            console.log(data)
        }
    }
    
}
</script>