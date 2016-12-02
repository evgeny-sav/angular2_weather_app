export const template = `
<div class="col-xxs-12 col-xs-6 col-sm-6 col-md-3">
   <div class="panel panel-default">
       <div class="panel-heading">
           <h3 class="panel-title">{{ city.name }}</h3>
       </div>
       <div class="panel-body">
           <div class="weather">
               <img src="http://openweathermap.org/img/w/{{ city.weather[0].icon }}.png">
               <div class="params">
                    <p class="param">
                       <strong><i class="wi wi-thermometer"></i> {{ city.main.temp }} <i class="wi wi-celsius"></i></strong>
                       <strong><i class="wi wi-humidity"></i> {{ city.main.humidity }} </strong>
                    </p>
                   
                    <p class="param">
                       <strong><i class="wi wi-wind-beaufort-{{ city.wind.speed }}"></i> {{ city.wind.speed }} <i class="wi wi-wind towards-{{ city.wind.deg }}"></i></strong>
                       <strong><i class="wi wi-cloudy"></i> {{ city.clouds.all }} %</strong>
                    </p>
                   
                    <p class="param">
                       <strong><i class="wi wi-barometer"></i> {{ city.main.pressure }}</strong>
                    </p>
               </div>
           </div>
       </div>
   </div>
 </div>
`;
