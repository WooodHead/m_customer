export function filter_distance(val){
     return val>=1000? `${(val/1000).toFixed(2)} km`:`${val} m`
}