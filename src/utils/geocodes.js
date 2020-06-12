// const request=require('request')
// const url='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicG9zaWVkb24iLCJhIjoiY2thd3FocmNmMG54eDJxcGNlN3RlNmdhNCJ9.sy8yNEV7hg0jba-MwkKBWg&limit=1'

const request = require("request")

//destructring
const gecodes=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoicG9zaWVkb24iLCJhIjoiY2thd3FocmNmMG54eDJxcGNlN3RlNmdhNCJ9.sy8yNEV7hg0jba-MwkKBWg&limit=1'
    request({url,json:true},(error,{body}={})=>{
        if(error){
            callback('unable to connect',undefined)
        }else if(body.message){
            callback(body.message,undefined)
        }else if(body.features.length===0){
            callback({
                error:'no such place '+body.query[0]+'found'
            },undefined)
        }else{
            callback(undefined,{
                latitude:body.features[0].center[0],
                longitude:body.features[0].center[1],
                location:body.features[0].place_name
            })
        }

    })

}
module.exports=gecodes