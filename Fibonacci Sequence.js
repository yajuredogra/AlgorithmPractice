function fib(n) { // to print nth element
    let result = [0, 1]
    for (let i = 2; i <= n; i++) {
        result.push(result[i - 1] + result[i - 2])
    }
    return result[n]
}

function fibRecursion(n) {
    if (n < 2) {
        return n
    }
    return fibRecursion(n - 1) + fibRecursion(n - 2)
}
console.log(fib(7))



/* Memoization */
function memoize(fn) {
    const cache = {}
    return function (...args) {
        if (cache[args]) {
            return cache[args]
        }
        const result = fn.apply(this, args)
        cache[args] = result
        return result
    }
}

function slowFib(n) {
    if (n < 2) {
        return n
    }
    return fib(n - 1) + fib(n - 2)
}

const fib = memoize(slowFib)
console.log(fib(6))



