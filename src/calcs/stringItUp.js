

export const stringItUp = (arr) => {
    const mapped = arr.map((x, k) => <p style={{color: "red"}} key={k}> {x.toString()}</p>)
    return mapped
}