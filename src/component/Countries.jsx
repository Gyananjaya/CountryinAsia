import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import './Countries.css';

const url = "https://restcountries.eu/rest/v2/region/asia"
function Countries() {
    const [countries,setCountries] = useState([])

    const fetchCountryData = async()=>{
        const res = await fetch(url)
        const countries = await res.json()
        setCountries(countries)
        console.log(countries)
    }
    useEffect(()=>{
        fetchCountryData()
    },[])

    const removeCountry = (numericCode)=>{
        const newCountry = countries.filter((country)=>country.numericCode !== numericCode )
        setCountries(newCountry)
    }
    return (
        <div className="countries">
            <>
                <section className="grid">
                    {countries.map((country)=>{
                        const{numericCode,name,population,region,capital,flag,subregion} = country

                        return<article key={numericCode}>
                            <div className="Detail">
                                <img src={flag} height="250px" alt={name} />
                                <div className="Detail">
                                    <h2>{name}</h2>
                                    <h3>Capital: <span>{capital}</span></h3>
                                    <h3>Population: <span>{population}</span></h3>
                                    <h3>Region: <span>{region}</span></h3>
                                    <h3>SubRegion: <span>{subregion}</span></h3>
                                    <div className="buttons">
                                        <Link to={`/countries/${name}`} className="btn">learn More</Link>
                                        <button className="btn" onClick={()=>removeCountry(numericCode)}>Remove country</button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    })}
                </section> 
            </>
        </div>
    )
}

export default Countries


