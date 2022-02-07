const { normalize, schema } = require('normalizr')

const blogposts = {
  id: 10,
  title: "My blogpost",
  description: "Short blogpost description",
  content: "Hello world",
  author: {
    id: 1,
    name: "John Doe"
  },
  comments: [
    {
      id:1,
      author: {
        id: 2,
        name: "Rob",
      },
      content: "Nice post!"
    },
    {
      id:2,
      author:{
        id: 3,
        name: "Jane",
      },
      content: "I totally agree with you"
    }
  ]
};

const authorSchema = new schema.Entity('authors')

const commentSchema = new schema.Entity('comments', {
  author:authorSchema
})

const postSchema = new schema.Entity("posts", {
  author: authorSchema,
  comments:[commentSchema]
})

const util = require('util')

function print(objeto) {
  console.log(util.inspect(objeto,false,12,true))
}


const normData = normalize(blogposts, postSchema)
print(normData)

console.log('Data original',JSON.stringify(blogposts).length)
console.log('Data normalizada',JSON.stringify(normData).length)
