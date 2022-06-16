const capitalise = (word)=> {
    const result = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    return result
}

export const capitalizeNames = (arr) => {
    const mapped = arr.map((x,k) => <p key={k}>{capitalise(x)}</p>)
    return mapped

}