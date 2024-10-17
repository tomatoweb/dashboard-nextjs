/*   node --watch dev/console.js   */

console.log("\n         Welcome !     \n      ...                   \n  .,ok000Oxc.     'oxo,  .' \n ,kWMMMMMMMMXo;. ;KMWMX: lK,\n,0MMMMMMMMMMMWNd'xMMMMMO;xWl\nlWMMMMMMMMMMMMM0lOMMMMMKoOMo\ncNMMMMMMMMMMMMMk:OMMMMM0lkWl\n.dNMMMMMMMMMMKx; lWMMMWd.dN:\n  ;kXWMMMMWKd'   .oXWXx. ;o.\n    .;ccc:,.       .,.      \n")

/* Why ['1', '5', '11'].map(parseInt) returns [1, NaN, 3] ? */
const arr = ['1', '5', '11'].map(parseFloat)

//console.log(arr)

const someStr = "hello"
const demo = {mode: "dark", skin: "solid"}
const init = {
    skin: "bordered",
    ...demo
}
//console.log(init)
//console.log({...demo})
//console.log(...someStr)

const obj1 = {
    un:'1',
    deux:'2',
    trois:'3'
}
const obj2 = {
    trois:'3merge',
    quatre:'4',
    quatre:'5'
}
//console.log( obj2 )
//console.log( ...obj2 )  // error: spread syntax needs an iterable
//console.log( { ...obj2 } ) // { trois: '3merge', quatre: '5' }

const arr1 = [
    {un:'1'},
    {deux:'2'},
    {trois:'3'}    
] 
const arr2 = [
    {trois:'3bis'},
    {quatre:'4'},
    {cinq:'5'}    
]

//console.log( ...arr1, ...arr2 )
console.log( arr1[3] || arr1[1] )