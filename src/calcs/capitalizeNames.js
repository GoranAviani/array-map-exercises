export const capitalizeNames = (arr) => {
    const mapped = arr.map((x,k) => <p key={k}>{x.autoCapitalize}</p>)
    return mapped

}