

export const stringItUp = (arr) => {
    const mapped = arr.map(x => <p style={{color: "red"}}> {x.toString()}</p>)
    return mapped
}