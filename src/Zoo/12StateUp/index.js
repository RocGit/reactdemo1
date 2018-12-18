import React from 'react'

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>水会烧开</p>;
  }
  return <p>水不会烧开</p>;
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

/*
子组件
*/
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleChanges = this.handleChanges.bind(this)
    // this.state = { temperature: '' }
  }

  handleChanges(e) {
    // this.setState({ temperature: e.target.value })
    this.props.onTemperatureChange(e.target.value)

  }

  render() {
    const temperature = this.props.temperature
    const scale = this.props.scale
    return (
      <div>
        <fieldset>
          <legend>
            Enter temperature in {scaleNames[scale]}:</legend>
          <input value={temperature} onChange={this.handleChanges} />
        </fieldset>
      </div>
    )

  }
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

/*
父组件
*/
class Calculator extends React.Component {
  constructor(props) {
    super(props)
    // this.handleChanges = this.handleChanges.bind(this)
    this.state = { scale: 'c', temperature: '' }
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  // handleChanges(e) {
  //   this.setState({
  //     temperature: e.target.value
  //   })
  // }
  handleCelsiusChange(temperature) {
    this.setState({ scale: 'c', temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: 'f', temperature });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        {/* <fieldset>
          <legend>输入一个摄氏温度</legend>
          <input value='{temperature}' onChange='{this.handleChanges}' />
          <boilingverdict celsius="{parseFloat(temperature)}"></boilingverdict>
        </fieldset> */}

        {/* <TemperatureInput scale="c" />
        <TemperatureInput scale="f" /> */}

        <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    )
  }
}

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Calculator />
      </div>
    )
  }
}