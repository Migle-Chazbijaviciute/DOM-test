
class ApartmentCardComponent {
  static usd_eur = 0.86;

  constructor(props) {
    this.props = props;
    this.init();
  }

  convert = (amount, currency) => {
    let newPrice;
    if (currency === '$') {
      newPrice = Math.round(amount * ApartmentCardComponent.usd_eur)
      return newPrice
      // console.log(newPrice);
    } else {
      return amount;
    }
  }

  createdCard = () => {
    const { id, type, owner: { fullname, email, phone }, roomCount, squares, address: { city, country, street, number }, price: { amount, currency }, imgSrc } = this.props.data;

    const fullAdr = `${street}-${number}, ${city}, ${country}.`

    const element = document.createElement('div');
    element.innerHTML = `
    <div class="border shadow">
      <button class="btn btn-sm btn-danger float-end">✕</button>
      <div class="card-body">
        <h3 class="card-title">${type}</h3>
      </div>
      <div class ="mx-2">
      <h6 class ="">Address: ${fullAdr}</h6>
      </div>
      <img
        src="${imgSrc}"
        class="card-img-top pb-3">
      
      <ul class ="list-group">
      <li class ="list-group-item"><b>Room Count: </b>${roomCount}</li>
      <li class ="list-group-item"><b>Squares: </b>${squares}</li>
      <li class ="list-group-item"><b>Price: </b>${this.convert(amount, currency)} €</li>
      </ul>
      
      <h6 class ="mx-2 my-1">Contacts: </h6>
      
      <li class ="list-group-item"><b>Owner: </b>${fullname}</li>
      <li class ="list-group-item"><b>Email: </b>${email}</li>
      <li class ="list-group-item"><b>Phone: </b>${phone}</li>
    </div>
    `

    return element;
  }

  init = () => {
    this.htmlElement = document.createElement('div');
    this.render();
  }

  render = () => {
    this.htmlElement.appendChild(this.createdCard());
  }
}
