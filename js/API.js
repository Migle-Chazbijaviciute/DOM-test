const baseUrl = "http://localhost:3000";

class API {
  static fetchApartments = (resolve, reject) => {
    fetch(`${baseUrl}/apartment`)
      .then(data => data.json())
      .then(resolve)
      .catch(reject)
  }

  static deleteApartment = (resolve, reject, id) => {
    fetch(`${baseUrl}/apartment/${id}`, { method: 'DELETE' })
      .then(resolve)
      .catch(reject)
  }
}

// API.fetchApartments(
//   (data) => console.log('Got these apartments:', data),
//   (reject) => console.error('Error', reject)
// )

// API.deleteApartment(
//   (data) => console.log('Apartment deleted', data),
//   (reject) => console.error('Error', reject), '6'
// )
