import { Component } from 'react'
import Header from '@components/Header'

import style from '@styles/Cercle.module.sass'

// TODO: make an end screen


export default class Cercle extends Component
{
    constructor()
    {
        super()
        this.state = { ball: { rotation: 0, inside: false }, ennemies: [], score: 0, firstGame: true, dead: false }
    }

    spawnEnnemy = (n) =>
    {
        if (n === 0)
            return

        let inside = Math.floor(Math.random() * 2) === 0
        let rotation = (this.state.ennemies[this.state.ennemies.length - 1]?.rotation || 40) + 30 + Math.floor(Math.random() * 40)
        if (rotation >= 360)
            rotation -= 360

        this.setState((prev) => { return { ennemies: [ ...prev.ennemies, { rotation: rotation, inside: inside } ] } }, () => {
            this.spawnEnnemy(n - 1)
        })
    }

    animateBall = () =>
    {
        const isAfter = (rotation, ennemyRotation) => rotation >= ennemyRotation + 7 && rotation <= ennemyRotation + 20
        
        let id = setInterval(() => {
            if (this.state.ball.rotation >= 360)
                this.setState((prev) => { return { ball: { ...prev.ball, rotation: 0 } } })

            this.setState((prev) => { return { ball: { ...prev.ball, rotation: prev.ball.rotation + 1 } } })

            if ((this.state.ball.rotation >= this.state.ennemies[0].rotation - 7 &&
                this.state.ball.rotation <= this.state.ennemies[0].rotation + 7 &&
                this.state.ball.inside === this.state.ennemies[0].inside &&
                this.state.ball.inside === true) // Ball is ±7 deg around ennemy and both are inside the circle
                ||
                (this.state.ball.rotation >= this.state.ennemies[0].rotation - 6 &&
                this.state.ball.rotation <= this.state.ennemies[0].rotation + 6 &&
                this.state.ball.inside === this.state.ennemies[0].inside &&
                this.state.ball.inside === false) // Ball is ±6 deg around ennemy and both are outside the circle
            )
            {
              clearInterval(id)
              this.setState({ dead: true })
            }
            else if (isAfter(this.state.ball.rotation, this.state.ennemies[0].rotation) || isAfter(this.state.ball.rotation + 360, this.state.ennemies[0].rotation))
            {
              this.setState((prev) => { return { score: prev.score + 1, ennemies: prev.ennemies.slice(1) } })
              this.spawnEnnemy(1)
            }

            this.forceUpdate()
        }, 8)
    }

    handleSwitchBall = () =>
    {
        if (this.state.dead)
        {
            this.setState({ ball: { rotation: 0, inside: false }, ennemies: [], score: 0, dead: false }, () => {
                this.spawnEnnemy(5)
                this.animateBall()
            })
        }
        
        else if (this.state.firstGame)
        {
            this.setState({ firstGame: false }, () => {
                this.spawnEnnemy(5)
                this.animateBall()
            })
        }
        
        else
        {
            this.setState((prev) => { return { ball: { ...prev.ball, inside: !prev.ball.inside } } })
            this.forceUpdate()
        }
    }
    
    render()
    {
        return (
            <div className="page">
                <Header title="Cercle" caption=""/>

                <div className="section">
                    <div className={(this.state.firstGame || this.state.dead) ? style.game : `${style.game} ${style.playing}`}>
                        <div className={style.ball} style={{ transform: `rotate(${this.state.ball.rotation}deg) translateY(${this.state.firstGame ? 0 : (this.state.ball.inside ? -9.25 : -11.25)}em)` }}></div>
                        {this.state.ennemies.map((ennemy) =>
                            <div className={style.ennemy} key={ennemy.rotation} style={{ transform: `rotate(${ennemy.rotation}deg) translateY(${ennemy.inside ? -8.5 : -12}em)` }}></div>
                        )}
                    </div>

                    <div className="separator"/>

                    <p className={style.textScore}>{this.state.firstGame ? "Appuyez sur le bouton pour jouer." : `Score: ${this.state.score}`}</p>
                    <button type="button" onKeyPress={this.handleSwitchBall} onMouseDown={this.handleSwitchBall}>{this.state.firstGame ? "Commencer" : (this.state.dead ? "Recommencer" : "Changer de côté")}</button>
                </div>
            </div>
        )
    }
}
