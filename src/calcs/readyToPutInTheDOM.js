export const readyToPutInTheDOM = (arr) => {
    const mapped = arr.map((x, k) => {<p style={{color: "red"}} key={k}><h1>{x.name}</h1> <h2>{x.age}</h2></p>})
    return mapped
}