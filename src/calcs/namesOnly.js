export const namesOnly = (arr) => {
    let result = []
    const mapped = arr.map(x => result.push(x.name))
    const prepared = mapped.map((x, k) => <p >{x}</p>)
    return prepared


}