const request=require('request')

// const url='http://api.weatherstack.com/current?access_key=e46fffae03d50172a1e78450f71486ea&query=fetch:ip&units=f'


// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)


const forecast=(a,b,callback)=>{
    
const url='http://api.weatherstack.com/current?access_key=e46fffae03d50172a1e78450f71486ea&query='+encodeURIComponent(a)+','+encodeURIComponent(b)+'&units=f'
    request({url , json:true},(error,{body}={})=>{
        if(error){  
            callback("no access to weather api")
        }else if(body.error){
          callback(body.error,undefined);
        }else{ 
            const current_data=
            callback(undefined,body.current)
        }
    })
}


// forecast(-75.7088, 44.1545, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
//   })

  module.exports=forecast
 
  //////////////////////////////////////////////////////////////////


// request({ url:url },(error,response)=>{
//     const data=JSON.parse(response.body)
//     console.log(data)
// }) 
//json:true can return json parsed data wic




// request({ url:url,json:true },(error,response)=>{
//     if(error){  
//       console.log("no access to weather api")
//     }else if(response.body.error){
//       console.log('unable to find location because '+response.body.error.type);
//     }
//      else{ 
//       //const data=JSON.parse(response.body)
//       //parse already done with json:true only lower case letters
//       const current_data=response.body.current
//       console.log(current_data.weather_descriptions[0]+' it is ',current_data.temperature,'but feels like '+current_data.feelslike)
//     }
//   })