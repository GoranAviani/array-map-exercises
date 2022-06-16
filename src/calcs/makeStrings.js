const checkAge = (obj) => {
    let result = []
    console.log(obj)
    if(obj.age > 18){
        result.push(obj.name + "is good")
    }
    return result
}

export const makeStrings = (arr) => {
const result = arr.map((x, k) => <p>{checkAge(x)}</p>)
    return result
}