import Header from "@components/Header";
import { Component, createRef } from "react";

import style from "@styles/Flow.module.sass";

export default class Flow extends Component {
    constructor(props) {
        super(props);
        this.board = createRef();
        this.state = { boardSize: 7, flowCount: 8, flows: [], movesCounter: 0, showSolution: false };
    }

    /**
     * Start a new game when the page is loaded
     */
    componentDidMount = () => {
        this.createGame();
    };

    /**
     * Creates a new level
     */
    createGame = () => {
        let flows = [];

        // Shuffle colors and then create a flow for each line
        this.colors
            .slice(0, this.state.flowCount)
            .sort(() => Math.floor(Math.random() * 3) - 1)
            .forEach((color, i) => {
                let solution = [];
                if (i < this.state.boardSize)
                    for (let row = 0; row < this.state.boardSize - (this.state.flowCount - this.state.boardSize); row++) solution.push({ row: row, column: i });
                else
                    for (let column = 0; column < this.state.boardSize; column++)
                        solution.push({ row: i - (this.state.flowCount - this.state.boardSize), column: column });

                flows.push({
                    color: color,
                    corners: [],
                    lines: [],
                    lineCompleted: false,
                    solution: solution,
                });
            });

        // Randomizes flows
        for (let iterationCount = 0; iterationCount < flows.length * 400; ) {
            // Select a random flow that is long enough
            let flow = flows
                .filter((f) => f.solution.length < Math.pow(this.state.flowCount, 1.2))
                .sort(() => Math.floor(Math.random() * 3) - 1)
                .at(0);
            let growingIndex = Math.floor(Math.random() * 2) - 1;

            // If newDot is on an existing dot
            if (
                flows
                    .filter((f, i) => f != flow && f.solution.length > 3)
                    .sort(() => Math.floor(Math.random() * 3) - 1)
                    .some((f) => {
                        let shrinkingAt;
                        if (this.pointsAreNeighboors(f.solution.at(0), flow.solution.at(growingIndex))) shrinkingAt = 0;
                        else if (this.pointsAreNeighboors(f.solution.at(-1), flow.solution.at(growingIndex))) shrinkingAt = -1;
                        // Can't shrink f
                        else return false;

                        // Shrink f
                        let growTo = f.solution.at(shrinkingAt);
                        f.solution.splice(shrinkingAt, 1);

                        // Grow flow
                        if (growingIndex == 0) flow.solution.unshift(growTo);
                        else flow.solution.push(growTo);
                        return true;
                    })
            ) {
                iterationCount += 1;
            }
        }

        // Finds the corners in the newly created lines (flow.solution)
        flows.forEach((flow) => {
            flow.start = flow.solution.at(0);
            flow.end = flow.solution.at(-1);

            let solutionLine = flow.solution;
            flow.solution = [flow.start, flow.end];

            for (let i = 1; i < solutionLine.length - 1; i++)
                if (solutionLine.at(i - 1).row != solutionLine.at(i + 1).row && solutionLine.at(i - 1).column != solutionLine.at(i + 1).column)
                    flow.solution.splice(-1, 0, solutionLine.at(i));
        });

        // Set new values
        this.setState({
            flows: flows,
            movesCounter: 0,
            showSolution: false,
            tracingFlow: undefined,
            timeStart: new Date().getTime(),
        });
    };

    /**
     * Compare the position of two points
     * @param {object} first A point
     * @param {object} second A point
     * @returns {boolean} If the two points are at the same position
     */
    pointsAreEqual(first, second) {
        return first.row == second.row && first.column == second.column;
    }

    /**
     * Compare the position of two points
     * @param {object} first A point
     * @param {object} second A point
     * @returns {boolean} If the two points are at the same position
     */
    pointsAreNeighboors(first, second) {
        return (
            (Math.abs(first.row - second.row) == 1 && first.column == second.column) || (Math.abs(first.column - second.column) == 1 && first.row == second.row)
        );
    }

    /**
     * Checks wheater the game is won or not
     * @returns {boolean} If the board is completed
     */
    boardCompleted = () => {
        if (!this.state.flows.every((f) => f.lineCompleted)) return false;

        return this.state.flows.reduce((total, current) => total + current.lines.length, 0) == this.state.boardSize * this.state.boardSize;
    };

    /**
     * Toggle the visibility of the solution
     */
    toggleSolution = () => {
        this.setState((prevState) => {
            return { showSolution: !prevState.showSolution };
        });
    };

    /**
     * Starts the tracing of the flow *flow* at the case *c*.
     * @param {number} flow The flow to trace
     * @param {object} c An object containing the *row* and *column* of the first point of the flow
     */
    startTracingFlow = (flow, c) => {
        // Don't trace if the solution is visible
        if (this.state.showSolution) return;

        // Get the index of the flow
        let tracingFlow = this.state.flows.indexOf(flow);

        // Set flow lines
        let flows = [...this.state.flows];
        flows[tracingFlow] = { ...flows[tracingFlow], lines: [c], corners: [c], lineCompleted: false };

        // Set new values
        this.setState({ flows: flows, tracingFlow: tracingFlow });
    };

    /**
     * Stops the tracing of the current flow.
     */
    stopTracingFlow = () => {
        if (this.state.tracingFlow == undefined) return;

        // Reset flow lines
        let flows = [...this.state.flows];
        flows[this.state.tracingFlow] = { ...flows[this.state.tracingFlow], lines: [], corners: [], lineCompleted: false };

        // Set new values
        this.setState({ flows: flows, tracingFlow: undefined });
    };

    /**
     * A handle to call when the mouse enters a case.
     * @param {object} c An object containing the *row* and *column* case that just got entered
     */
    handleMouseEnterCase = (c) => {
        // Do nothing if no flow is being traced
        if (this.state.tracingFlow === undefined) return;

        // Get the tracing flow
        let tracingFlow = this.state.tracingFlow;
        let flow = { ...this.state.flows[tracingFlow] };

        // If the line is completed
        if (
            (this.pointsAreEqual(flow.start, flow.corners.at(0)) && this.pointsAreEqual(flow.end, c)) ||
            (this.pointsAreEqual(flow.end, flow.corners.at(0)) && this.pointsAreEqual(flow.start, c))
        ) {
            // If the line is too small
            if (flow.lines.length == 1) {
                // Stop tracing
                flow.lines = [];
                flow.corners = [];
                tracingFlow = undefined;
            } else {
                // Add the corner if it is one
                if (flow.corners.at(-1).row != c.row && flow.corners.at(-1).column != c.column) flow.corners.push(flow.lines.at(-1));

                this.setState((prevState) => {
                    return { movesCounter: prevState.movesCounter + 1 };
                });
                // Add the last point
                flow.lines.push(c);
                flow.corners.push(c);
                flow.lineCompleted = true;
                tracingFlow = undefined;
            }
        }

        // If we touch another color's point
        else if (this.state.flows.filter((_f, i) => i != tracingFlow).some((f) => this.pointsAreEqual(f.start, c) || this.pointsAreEqual(f.end, c))) {
            // Stop tracing
            flow.lines = [];
            flow.corners = [];
            tracingFlow = undefined;
        }

        // If we wrap
        else if (flow.lines.some((line) => this.pointsAreEqual(line, c))) {
            // Remove points that are wrapping
            while (!this.pointsAreEqual(flow.lines.at(-1), c)) {
                let removed = flow.lines.pop();
                if (this.pointsAreEqual(flow.corners.at(-1), removed)) flow.corners.pop();
            }
        }

        // If we touch another color's line
        else if (this.state.flows.filter((_f, i) => i != tracingFlow).some((f) => f.lines.some((l) => this.pointsAreEqual(l, c)))) {
            // Stop tracing
            flow.lines = [];
            flow.corners = [];
            tracingFlow = undefined;
        }

        // If the case is empty
        else {
            // Add the corner if it is one
            if (flow.corners.at(-1).row != c.row && flow.corners.at(-1).column != c.column) flow.corners.push(flow.lines.at(-1));

            // Add the line
            flow.lines.push(c);
        }

        // Set new values
        let flows = [...this.state.flows];
        flows[this.state.tracingFlow] = flow;
        this.setState({ flows: flows, tracingFlow: tracingFlow });
        this.forceUpdate(() => {
            if (this.boardCompleted()) this.setState({ timeEnd: new Date().getTime() });
        });
    };

    /**
     * A handle to call when the flow count selector changes.
     * @param {object} event The onChange event's object
     */
    handleFlowCountChange = (event) => {
        this.setState({ boardSize: Math.floor(parseInt(event.target.value) * 0.7 + 2), flowCount: parseInt(event.target.value) }, this.createGame);
    };

    render() {
        let caseSize = 0;
        if (this.board.current) caseSize = getComputedStyle(this.board.current).width.slice(0, -2) / this.state.boardSize;
        const lineThickness = 0.4;

        return (
            <div className="page">
                <Header title="Flow" caption="avec ced" />

                <div className="section">
                    <div className={`${style.fixedWidth} flex`}>
                        <p>{`Flows: ${this.state.flows.filter((f) => f.lineCompleted).length}/${this.state.flows.length}`}</p>
                        <p>{`Coups: ${this.state.movesCounter}`}</p>
                        <p>{`Complété: ${Math.floor(
                            (this.state.flows.reduce((total, current) => total + current.lines.length, 0) / (this.state.boardSize * this.state.boardSize)) * 100
                        )}%`}</p>
                    </div>

                    <div ref={this.board} onMouseUp={this.stopTracingFlow} onMouseLeave={this.stopTracingFlow} className={style.board}>
                        {this.boardCompleted() ? (
                            <div className={style.windowGameOver}>
                                <h3>Victoire !</h3>
                                <p>{`Vous avez réussi en ${Math.floor((this.state.timeEnd - this.state.timeStart) / 1000)} secondes et en ${
                                    this.state.movesCounter
                                } coups.`}</p>
                                <button onClick={this.createGame}>Nouveau niveau</button>
                            </div>
                        ) : null}

                        {[...Array(this.state.boardSize)].map((_, row) => (
                            <div className={style.row} key={row}>
                                {[...Array(this.state.boardSize)].map((_, column) => {
                                    // Get the flow that starts or end at this case
                                    let c = { row: row, column: column };
                                    let flow = this.state.flows.find((f) => {
                                        return this.pointsAreEqual(f.start, c) || this.pointsAreEqual(f.end, c);
                                    });

                                    if (flow) {
                                        return (
                                            <div
                                                onMouseEnter={() => this.handleMouseEnterCase(c)}
                                                onMouseDown={() => this.startTracingFlow(flow, c)}
                                                className={style.case}
                                                key={column}
                                            >
                                                <div
                                                    className={style.dot}
                                                    style={{
                                                        backgroundColor: flow.color,
                                                        boxShadow:
                                                            flow.lineCompleted && !this.state.showSolution
                                                                ? `0 0 ${caseSize * lineThickness}px 0 ${flow.color}`
                                                                : "none",
                                                    }}
                                                />
                                            </div>
                                        );
                                    }

                                    return <div onMouseEnter={() => this.handleMouseEnterCase(c)} className={style.case} key={column} />;
                                })}
                            </div>
                        ))}

                        {this.state.flows.map((flow) => {
                            let lines = [];
                            const createLine = (start, end, glow) => {
                                let s = {
                                    backgroundColor: flow.color,
                                    width:
                                        start.row === end.row
                                            ? `${(Math.abs(start.column - end.column) + lineThickness) * caseSize}px`
                                            : `${caseSize * lineThickness}px`,
                                    height:
                                        start.column === end.column
                                            ? `${(Math.abs(start.row - end.row) + lineThickness) * caseSize}px`
                                            : `${caseSize * lineThickness}px`,
                                    top:
                                        start.row < end.row
                                            ? `${(start.row + (1 - lineThickness) / 2) * caseSize}px`
                                            : `${(end.row + (1 - lineThickness) / 2) * caseSize}px`,
                                    left:
                                        start.column < end.column
                                            ? `${(start.column + (1 - lineThickness) / 2) * caseSize}px`
                                            : `${(end.column + (1 - lineThickness) / 2) * caseSize}px`,
                                    borderRadius: `${caseSize * lineThickness}px`,
                                    boxShadow: glow ? `0 0 ${caseSize * lineThickness}px 0 ${flow.color}` : "none",
                                };

                                lines.push(
                                    <div style={s} className={style.line} key={`${flow.color} ${start.row};${start.column} ${end.row};${end.column}`} />
                                );
                            };

                            if (this.state.showSolution)
                                for (let i = 0; i < flow.solution.length - 1; i++) createLine(flow.solution.at(i), flow.solution.at(i + 1), false);
                            else {
                                for (let i = 0; i < flow.corners.length - 1; i++) createLine(flow.corners.at(i), flow.corners.at(i + 1), flow.lineCompleted);

                                if (this.state.tracingFlow === this.state.flows.indexOf(flow))
                                    createLine(flow.corners.at(-1), flow.lines.at(-1), flow.lineCompleted);
                            }

                            return lines;
                        })}
                    </div>

                    <div className={`${style.fixedWidth} flex vertical spaced`}>
                        <div className={`${style.fixedWidth} flex`}>
                            <div className="flex">
                                <p>Nombre de flow: </p>
                                <select value={this.state.flowCount} onChange={this.handleFlowCountChange} name="Flow count" className={style.select}>
                                    <option className={style.option}>4</option>
                                    <option className={style.option}>5</option>
                                    <option className={style.option}>6</option>
                                    <option className={style.option}>7</option>
                                    <option className={style.option}>8</option>
                                    <option className={style.option}>9</option>
                                    <option className={style.option}>10</option>
                                    <option className={style.option}>11</option>
                                    <option className={style.option}>12</option>
                                    <option className={style.option}>13</option>
                                    <option className={style.option}>14</option>
                                    <option className={style.option}>15</option>
                                </select>
                            </div>

                            <button onClick={this.createGame}>Nouveau niveau</button>
                        </div>

                        <button onClick={this.toggleSolution}>Solution</button>
                    </div>
                </div>
            </div>
        );
    }

    colors = [
        "red",
        "orange",
        "yellow",
        "green",
        "cyan",
        "blue",
        "purple",
        "pink",
        "silver",
        "lime",
        "chocolate",
        "crimson",
        "darksalmon",
        "orangered",
        "yellowgreen",
    ];
}
