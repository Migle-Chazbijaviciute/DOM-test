
class ApartmentCardComponent {
  constructor(props) {
    this.props = props;
    this.init();
  }

  createdCard = () => {

    const element = document.createElement('div');
    element.innerHTML = `
    <div class="border shadow">
      <button class="btn btn-sm btn-danger float-end">✕</button>
      <div class="card-body">
        <h3 class="card-title">HouseType</h3>
      </div>
      <div class ="mx-2">
      <h6 class ="">Address: kazkoks kazkoks </h6>
      </div>
      <img
        src="https://www.ashtonmitchell.com/wp-content/uploads/160908_ONEHUNGA_V07_VIC_ENTRANCE_FINAL_AMA-1250-400x400.jpg"
        class="card-img-top pb-3">
      
      <ul class ="list-group">
      <li class ="list-group-item"><b>Room Count: </b> 5</li>
      <li class ="list-group-item"><b>Squares: </b> 120</li>
      <li class ="list-group-item"><b>Price: </b> 120 000$</li>
      </ul>
      
      <h6 class ="mx-2 my-1">Contacts: </h6>
      
      <li class ="list-group-item"><b>Owner: </b> Tomas Tominis</li>
      <li class ="list-group-item"><b>Email: </b> tomas @gmail.ocm</li>
      <li class ="list-group-item"><b>Mobile: </b> 865353535</li>
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
