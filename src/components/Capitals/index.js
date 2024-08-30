import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {country: countryAndCapitalsList[0].country}

  onChangingCapital = event => {
    const capitalId = event.target.value
    const getCountry = countryAndCapitalsList.find(
      eachItem => eachItem.id === capitalId,
    )
    this.setState({country: getCountry.country})
  }

  render() {
    const {country} = this.state
    return (
      <div className="main-container">
        <div className="capitals-card">
          <h1>Countries And Capitals</h1>
          <select id="capitals" onChange={this.onChangingCapital}>
            {countryAndCapitalsList.map(eachItem => (
              <option value={eachItem.id} key={eachItem.id}>
                {eachItem.capitalDisplayText}
              </option>
            ))}
          </select>
          <label htmlFor="capitals"> is capital of which country?</label>
          <p>{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
