<template>

<v-chart class="mt-5 " :option="option" ></v-chart > 

</template>

<script>
  export default{
    props:{
      totalQuarterSales: [],
      compColor: String,
      compTittle: String
    },
    name: 'simpleChart',
     data(){
       return{
          option: {
            title: {
              text: this.compTittle
            },
            xAxis: {
            data: ['Jan', 'FEV', 'Mar']
            },
            yAxis: {},
            series: [
              {
                color: this.compColor, 
                areaStyle: {},
                data: this.totalQuarterSales,
                type: 'line',
                smooth: true,               
                lineStyle: {
                  normal:{                    
                    width: 3,
                    type: 'line'
                  }
                },
                label: {
                  show: true,
                  position: 'bottom',
                  textStyle: {
                    fontSize: 12
                  }
                }                 
              }
            ],           
          }
        }
    },
    created(){
      
      console.log(this.totalQuarterSales);
      this.option.series.data = this.totalQuarterSales
    
    }
                    
  }
</script>


<style>
    .echarts {
        width: 50%;
        height: 300px; 
    }
     
</style>