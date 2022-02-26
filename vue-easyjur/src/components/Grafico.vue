<template>

<v-chart  :option="option"></v-chart >

</template>

<script>
  export default{
    props:{
      totalQuarterSales: []
    },
    name: 'simpleChart',
     data(){
       return{
          option: {
            xAxis: {
            data: ['A', 'B', 'C','D']
            },
            yAxis: {},
            series: [
              {
                data: this.totalQuarterSales,
                type: 'line',
                smooth: true
              }
            ]
          }
        }
    },
    created(){
      
      console.log(this.totalQuarterSales);
      this.option.series.data = this.totalQuarterSales
    
    }
                    
  }
</script>