export const namesOnly = (arr) => {
    let result = []
    const mapped = arr.map(x => result.push(x.name))
    const prepared = result.map((x, k) => <p key={k}>{x}</p>)
    console.log(prepared)
    return prepared


}