class Score extends React.Component {
    incrementScore() {
        console.log('increment');
    }
    render() {
        return (
            <div>
                <h2>
                    Score board for the {this.props.teamName}
                </h2>
                <div>
                    Score: 50 <br />
                    <button onClick={this.incrementScore}> + </button>
                    <button onClick={this.decrementScore}> + </button>
                </div>
            </div>
        )
    }
}