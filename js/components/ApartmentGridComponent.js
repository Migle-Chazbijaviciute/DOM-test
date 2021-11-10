
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
      this.htmlElement.innerHTML = '<div class="d-flex justify-content-center align-items-center"><img src="js/assets/loading.gif"></div>'
    } else {
      this.htmlElement.className = "row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-3 justify-content-start"
      this.htmlElement.innerHTML = '';
      this.state.apartments.forEach(apartments => {
        const newApartment = new ApartmentCardComponent({
          data: apartments
        })
        this.htmlElement.appendChild(newApartment.htmlElement);
      })
    }
  }
}
