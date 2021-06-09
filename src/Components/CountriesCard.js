import React from 'react'
import '../Styles/CountriesCard.css'
import {useEffect, useState} from 'react'

const CountriesCard = ({Search}) => {
const [Countries, setCountries] = useState([])


  const fetchData = async () => {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const Countries = await response.json();

    setCountries(Countries);
    console.log(Countries);
}

useEffect(() => {
  fetchData()
}, [])


    return (


        <div class="container-fluid p-4">
          <div class="row justify-content-center ">
          {Countries.filter((country) => {
            if(Search == "") {
             return country
            } else if(country.name.toLowerCase().includes(Search.toLowerCase())) {
              return country

           } else if(country.region.toLowerCase().includes(Search.toLowerCase()))
              return country.region
          }).map((country) => {
            const { alpha2Code, name, population, region, capital, flag} = country;
                return  <div key={alpha2Code} class="card m-3">
                <img src={flag} width="200" height="150"  />
                  <div class="card-body">
                    <h3 class="card-title">{name}</h3>
                    <p class="card-text"><b>Population: </b>{population}</p>
                    <p class="card-text"><b>Region: </b>{region}</p>
                    <p class="card-text"><b>Capital: </b>{capital}</p>
                  </div>
                </div>
    })}
                </div>
          </div>


    )
}

export default CountriesCard
