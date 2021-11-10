
class ApartmentGridComponent {
  constructor() {
    this.state = {
      apartments: [],
      loading: false
    }
    this.init();
  }

  fetchApartments = () => {
    this.state.loading = true;
    API.fetchApartments(
      (apartments) => {
        this.state.apartments = apartments;
        this.state.loading = false;
        this.render();
      },
      (err) => console.log(err)
    );
  }

  init = () => {
    this.fetchApartments();
    this.htmlElement = document.createElement('div');
    this.render();
  }

  render = () => {
    const { loading } = this.state;
    if (loading) {
      this.htmlElement.innerHTML = 'siunčiama...'
    } else {
      this.htmlElement.innerHTML = 'parsiųsta!'
    }
  }
}
