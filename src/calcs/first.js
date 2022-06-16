

const first = (arr) => {
const mapped = arr.map((x, k) => <p key={k}> {x * 2}</p>)
    return mapped

}

export default first;