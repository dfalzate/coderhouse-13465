import faker from 'faker'
faker.locale='es'

export default function generateUser() {
  return {
    nombre:faker.name.findName(),
    email: faker.internet.email(),
    website:faker.internet.url(),
    imagen:faker.image.imageUrl()
  }
}