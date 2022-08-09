let meterCon = document.getElementById('meterContent')
let volumeCon = document.getElementById('volumeContent')
let massCon = document.getElementById('massContent')

let input = document.getElementById('inputrel')
let buttonConvert = document.getElementById('convertrel')


buttonConvert.addEventListener('click', function () {
  let value = input.value
  compute(value)
})


function compute(value) {
  /*
    1 meter = 3.281 feet
    1 liter = 0.264 gallon
    1 kilogram = 2.204 pound
  */
  meterCon.textContent = `${value} meters= ${(value * 3.281).toFixed(
    2,
  )} feet | ${value} feet= ${(value / 3.281).toFixed(3)} meters`

  volumeCon.textContent = `${value} liter= ${(value * 0.264).toFixed(
    2,
  )} gallon | ${value} gallon= ${(value / 0.264).toFixed(3)} liter`

  massCon.textContent = `${value} kilogram= ${(value * 2.204).toFixed(
    2,
  )} pound | ${value} pound= ${(value / 2.204).toFixed(3)} kilogram`
}
