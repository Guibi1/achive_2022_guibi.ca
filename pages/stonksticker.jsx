import Header from "@components/Header";
import { Component } from "react";

export default class StonksTicker extends Component {
    render() {
        return (
            <div className="page">
                <Header title="Stonks Ticker" caption="En ligne avec vos amis" />

                <div className="section"></div>
            </div>
        );
    }
}
