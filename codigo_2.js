const dennis = {
    name: 'Dennis'
}

const anghelo = {}
Object.assign(anghelo, dennis)
// const anghelo = {...dennis}
anghelo.name = 'Anghelo'

console.log(dennis)
console.log(anghelo)

const a = [1]
console.log(a)
a.push(2)
console.log(a)
