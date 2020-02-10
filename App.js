import React from 'react';
import Axios from 'axios';
import './App.css';

class DisplayedChars extends React.Component {
  render() {
    return (
      <div id="displayedChar">
          <div id="id">{this.props.apiResult.id}</div>
          <div id="name">{this.props.apiResult.name}</div>
          <div id="description">{this.props.apiResult.description}</div>
          <div id="img"><img src={`{this.props.apiResult.thumbnail.path}.{this.props.apiResult.thumbnail.extension}`} alt="personnage Marvel" /></div>
    </div>
    )
  }
}

export default class CharList extends React.Component {
  state = {
    chars: [],
  }

  componentDidMount() {
    Axios.get(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=81cfb00bcab273da1a435081f267f362&hash=cf8e35b69d77e19e42319e39a7839166`)
      .then(res => {
        const chars = res.data.data.results;
        this.setState({ chars: chars });

      })
  }

  render() {
    console.log(this.state.chars)
    return (
      <ul>
        {this.state.chars.map(char => <li><DisplayedChars apiResult={char}/></li>)}
      </ul>
    )
  }
}

