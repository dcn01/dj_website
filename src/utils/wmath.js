// js精准计算库
function add (a, b) {
  let c = 0
  let d = 0
  let e = 0
  try {
    c = a.toString().split('.')[1].length
  } catch (f) {
    c = 0
  }
  try {
    d = b.toString().split('.')[1].length
  } catch (f) {
    d = 0
  }
  e = Math.pow(10, Math.max(c, d))
  return (mul(a, e) + mul(b, e)) / e
}

function sub (a, b) {
  let c = 0
  let d = 0
  let e = 0
  try {
    c = a.toString().split('.')[1].length
  } catch (f) {
    c = 0
  }
  try {
    d = b.toString().split('.')[1].length
  } catch (f) {
    d = 0
  }
  e = Math.pow(10, Math.max(c, d))
  return (mul(a, e) - mul(b, e)) / e
}

function mul (a, b) {
  var c = 0

  var d = a.toString()

  var e = b.toString()
  try {
    c += d.split('.')[1].length
  } catch (f) {}
  try {
    c += e.split('.')[1].length
  } catch (f) {}
  return Number(d.replace('.', '')) * Number(e.replace('.', '')) / Math.pow(10, c)
}

function div (a, b) {
  let c
  let d
  let e = 0
  let f = 0
  try {
    e = a.toString().split('.')[1].length
  } catch (g) {}
  try {
    f = b.toString().split('.')[1].length
  } catch (g) {}
  c = Number(a.toString().replace('.', ''))
  d = Number(b.toString().replace('.', ''))
  return mul(c / d, Math.pow(10, f - e))
}

export default {
  add,
  sub,
  mul,
  div
}
