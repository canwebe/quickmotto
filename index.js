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
    'https://api.quotable.io/random'
  )
  const data = await result.json()

  div.innerHTML = `<p class='quote'>" ${data?.content} "</p><br/>
   <h3>${data?.author} </h3>
  `
}
