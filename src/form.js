class ReservationViewModel {
    constructor() {
        this.plate = "";
        this.ownerName = "";
        this.apartmentNumber = 0;
        this.apartmentBlock = 0;
        this.vehicleModel = "";
        this.vehicleColor = "";
        this.parkingNumber = 0;
    }

    updateViewModel() {
        this.plate = document.getElementById('plate').value;
        this.ownerName = document.getElementById('owner-name').value;
        this.apartmentNumber = parseInt(document.getElementById('apartment-number').value);
        this.apartmentBlock = parseInt(document.getElementById('apartment-block').value);
        this.vehicleModel = document.getElementById('vehicle-model').value;
        this.vehicleColor = document.getElementById('vehicle-color').value;
        this.parkingNumber = parseInt(document.getElementById('parking-number').value);
    }

    isInteger(value) {
        return !isNaN(value) && Number.isInteger(value);
    }

    displayInformation() {
        console.log(this);

        const confirmationMessage = `Reserva realizada com sucesso:\nPlaca: ${this.plate}\nProprietário: ${this.ownerName}\nNúmero: ${this.apartmentNumber}\nBloco: ${this.apartmentBlock}\nModelo: ${this.vehicleModel}\nCor: ${this.vehicleColor}\nVaga: ${this.parkingNumber}`;
        alert(confirmationMessage);
    }

    handleSubmit() {
        this.updateViewModel();

        if (!this.plate || !this.ownerName || !this.isInteger(this.apartmentNumber) || !this.isInteger(this.apartmentBlock) || !this.vehicleModel || !this.vehicleColor || !this.isInteger(this.parkingNumber)) {
            alert("Preencha todos os campos do formulário corretamente.");
            return;
        }

        reservations.push({ ...this });
        document.getElementById('reservation-form').reset();
        this.displayInformation();
    }
}

const reservations = [];
const viewModel = new ReservationViewModel();

document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById('submit-button');
    if (submitButton) {
        submitButton.addEventListener("click", function (e) {
            e.preventDefault();
            viewModel.handleSubmit();
        });
    }
});
