// Создать объект у которого есть 5 ключей после создать новый объект и распаковав в новый объект дополнить 3 ключами


const first = [{
    J: 'J',
    A: 'A',
    N: 'N',
    N: 'A',
    T: 'T'
}
]
const second = [{
    ...first,
    B: 'B',
    K: 'K',
    T: 'T'
}]
console.log(second)