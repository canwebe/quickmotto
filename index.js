const div = document.querySelector('.main')
const btn = document.querySelector('.btn')

window.addEventListener('DOMContentLoaded', async () => {
  fetchResult()
  btn.addEventListener('click', () => {
    fetchResult()
  })
})

const fetchResult = async () => {
  div.innerHTML = '<h4>Loading...</h4>'
  const result = await fetch(
    'https://programming-quotes-api.herokuapp.com/quotes/random'
  )
  const data = await result.json()

  div.innerHTML = `<p class='quote'>" ${data.en} "</p><br/>
   <h3>${data.author} </h3>
  `
}
