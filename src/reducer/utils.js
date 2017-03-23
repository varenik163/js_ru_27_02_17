import {Map} from 'immutable'

export function arrToMap(arr, Model) {
    return arr.reduce((acc, el) => acc.set(el.id, new Model(el)), new Map({}))
}

export function mapToArr(map) {
    return Object.keys(map).map(id => map[id])
}