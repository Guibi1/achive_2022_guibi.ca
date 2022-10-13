import Header from "@components/Header";
import { Component } from "react";

import style from "@styles/TicTacToe.module.sass";

const X = "X";
const O = "O";
const vide = null;

export default class TicTacToe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            joueurActuel: X,
            plateau: [
                [vide, vide, vide],
                [vide, vide, vide],
                [vide, vide, vide],
            ],
            gagnant: "",
            plateauGagnant: [
                [false, false, false],
                [false, false, false],
                [false, false, false],
            ],
        };
    }

    nouvellePartie = () => {
        this.setState({
            joueurActuel: X,
            plateau: [
                [vide, vide, vide],
                [vide, vide, vide],
                [vide, vide, vide],
            ],
            gagnant: "",
            plateauGagnant: [
                [false, false, false],
                [false, false, false],
                [false, false],
            ],
        });
    };

    jouer = (row, index) => {
        if (this.state.gagnant === "") {
            if (this.state.plateau[row][index] === vide) {
                var temp = Array.from(this.state.plateau);
                temp[row].splice(index, 1, this.state.joueurActuel);

                this.setState({ plateau: temp }, this.vérifierVictoire());

                this.setState((prevState) => {
                    return { joueurActuel: prevState.joueurActuel === X ? O : X };
                });
            }
        }
    };

    vérifierVictoire = () => {
        // Partie nulle
        if (this.state.plateau.every((row) => row.every((element) => element !== vide))) this.setState({ gagnant: vide });

        // Vertical
        this.state.plateau.forEach((row, rowIndex) => {
            if (
                row.every((element) => {
                    return element === this.state.joueurActuel;
                })
            ) {
                var temp = Array.from(this.state.plateauGagnant);
                temp[rowIndex] = [true, true, true];

                this.setState((prevState) => {
                    return { gagnant: prevState.joueurActuel, plateauGagnant: temp };
                });
                return;
            }
        });

        // Horizontal
        for (let i = 0; i < 3; i++) {
            if (
                this.state.plateau.every((row) => {
                    return row[i] === this.state.joueurActuel;
                })
            ) {
                let temp = Array.from(this.state.plateauGagnant);
                temp.forEach((row) => (row[i] = true));

                this.setState((prevState) => {
                    return { gagnant: prevState.joueurActuel, plateauGagnant: temp };
                });
                return;
            }
        }

        // Diagonale \
        if (
            this.state.plateau.every((row, rowIndex) => {
                return row[rowIndex] === this.state.joueurActuel;
            })
        ) {
            let temp = Array.from(this.state.plateauGagnant);
            temp.forEach((row, rowIndex) => (row[rowIndex] = true));

            this.setState((prevState) => {
                return { gagnant: prevState.joueurActuel, plateauGagnant: temp };
            });
            return;
        }

        // Diagonale /
        if (
            this.state.plateau.every((row, rowIndex) => {
                return row[rowIndex === 1 ? 1 : rowIndex === 0 ? 2 : 0] === this.state.joueurActuel;
            })
        ) {
            let temp = Array.from(this.state.plateauGagnant);
            temp.forEach((row, rowIndex) => (row[rowIndex === 1 ? 1 : rowIndex === 0 ? 2 : 0] = true));

            this.setState((prevState) => {
                return { gagnant: prevState.joueurActuel, plateauGagnant: temp };
            });
            return;
        }
    };

    render() {
        return (
            <div className="page">
                <Header title="Tic Tac Toe" caption="" />

                <div className="section">
                    <div className={style.board}>
                        {this.state.plateau.map((row, rowIndex) =>
                            row.map((element, index) => (
                                <button
                                    type="button"
                                    disabled={element !== vide || this.state.gagnant !== ""}
                                    className={this.state.plateauGagnant[rowIndex][index] ? `${style.cell} ${style.win}` : style.cell}
                                    onClick={() => this.jouer(rowIndex, index)}
                                    key={index}
                                >
                                    {element}
                                </button>
                            ))
                        )}
                    </div>

                    <div className="separator" />

                    <p>
                        {this.state.gagnant === ""
                            ? this.state.joueurActuel === X
                                ? "C'est le tour aux X."
                                : "C'est le tour aux O."
                            : this.state.gagnant === vide
                            ? "Partie nulle !"
                            : this.state.gagnant === X
                            ? "Les X ont gagné !"
                            : "Les O ont gagné !"}
                    </p>
                    <button type="button" onClick={this.nouvellePartie}>
                        {this.state.gagnant !== "" ? "Recommencer" : "Rejouer"}
                    </button>
                </div>
            </div>
        );
    }
}
