const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit } = require('../src/math')

test('Should calcultate total with tip', ()=>{
    const total = calculateTip(10, .3)
    expect(total).toBe(13)

    // if(total !== 13) {
    //     throw new Error('Total tip should be 13. Got ' + total)
    // }
})

test('Should calculate total default tip', ()=> {
    const total =  calculateTip(10)
    expect(total).toBe(12.5)
})

test('Should convert F to C', ()=> {
    const c = fahrenheitToCelsius(32)
    expect(c).toBe(0)
})

test('Should convert C to F', ()=> {
    const c = celsiusToFahrenheit(0)
    expect(c).toBe(32)
})
