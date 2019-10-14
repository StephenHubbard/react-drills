import React, {Component} from 'react'

export default class Image extends Component {
    render() {
        return (
            <div>
                <img src={this.props.url} />
                <h1>Dota for Life</h1>
            </div>
        )
    }
}