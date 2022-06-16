const checkAge = (obj) => {
    let result = []
    let message = ""
    console.log(obj)
    if(obj.age > 18){
        message = `${obj.name}  is good`
    }  else {
        message = `${obj.name} is to young`
    }
    result.push(message)
    return result
}

export const makeStrings = (arr) => {
const result = arr.map((x, k) => <p>{checkAge(x)}</p>)
    return result
}