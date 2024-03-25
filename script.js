//your JS code here. If required.
function mapLetters(s){
    let obj={}
    let i=0;
    for(let c of s){
        if(obj[c]===undefined){
            obj[c]=[i]
        }
        else{
            obj[c].push(i)
        }
        i++
    }
    return obj
}