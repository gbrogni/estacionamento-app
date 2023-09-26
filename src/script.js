class ReservationsViewModel {
    constructor() {
        this.reservations = [
            {
                placaVeiculo: "ABC1234",
                nomeProprietario: "João",
                numApartamento: "101",
                blocoApartamento: "A",
                modeloVeiculo: "Sedan",
                corVeiculo: "Prata",
                numVagaEstacionamento: "1"
            },
            {
                placaVeiculo: "XYZ5678",
                nomeProprietario: "Maria",
                numApartamento: "202",
                blocoApartamento: "B",
                modeloVeiculo: "SUV",
                corVeiculo: "Preto",
                numVagaEstacionamento: "2"
            }
        ];
    }

    getReservations() {
        return this.reservations;
    }

    removeReservation(index) {
        this.reservations.splice(index, 1);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const viewModel = new ReservationsViewModel();
    const tabelaCorpo = document.getElementById("tabela-corpo");

    function popularTabela() {
        tabelaCorpo.innerHTML = "";

        viewModel.getReservations().forEach((dados, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td><i class="fas fa-trash" data-index="${index}"></i></td>
                <td>${dados.placaVeiculo}</td>
                <td>${dados.nomeProprietario}</td>
                <td>${dados.numApartamento}</td>
                <td>${dados.blocoApartamento}</td>
                <td>${dados.modeloVeiculo}</td>
                <td>${dados.corVeiculo}</td>
                <td>${dados.numVagaEstacionamento}</td>
            `;
            tabelaCorpo.appendChild(row);
        });
    }

    popularTabela();

    function excluirLinha(botaoExcluir) {
        const index = botaoExcluir.getAttribute("data-index");
        viewModel.removeReservation(index);
        tabelaCorpo.removeChild(tabelaCorpo.children[index]);
        popularTabela();
    }

    const trashIcons = document.querySelectorAll('.fas.fa-trash');
    trashIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            excluirLinha(this);
        });
    });
});
