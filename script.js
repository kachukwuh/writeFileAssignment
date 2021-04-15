const fs = require('fs')
const fetch = require('node-fetch')

const writePosts = async () => {
  try {
    let response = await fetch('http://jsonplaceholder.typicode.com/posts')
    response = await response.json()
    fs.writeFile('result/posts.json', `${JSON.stringify(response)}`, (err) => {
      if (err) throw err
      console.log('...File Created!')
    })
  } catch (err) {
    console.log(err)
  }
}

writePosts()