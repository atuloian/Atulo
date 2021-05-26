const value1 =document.getElementById('value1')
const value2 =document.getElementById('value2')
const results =document.getElementById('results')

function exchange(){
results =value2
value2 =value1
value2 =results
}
results =exchange();