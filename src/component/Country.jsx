import React,{useState,useEffect} from 'react'
import "./Country.css"
import {Link, useParams} from "react-router-dom"

function Country() {
    const [country,setCountry] = useState([])
    const {name} = useParams()
    useEffect(()=>{
        const fetchCountryData = async () => {
            const res = await fetch(`https://restcountries.eu/rest/v2/name/${name}`)

            const country = await res.json()
            setCountry(country)
            // console.log(country)
        }
        fetchCountryData()
    },[])
    return (
        <div>
            
            <section className="country">
            <Link to="/" className="btn btn-light">back to Home</Link>
                {country.map((e)=>{
                    const{numericCode,flag,name,nativeName,population,
                    region,subregion,capital,languages,borders} = e
                    return(
                        <article key={numericCode}>
                            <div className="country-style">
                                <div className="flag">
                                    <img src={flag} className="flagpic" alt={name} />
                                </div>
                                <div className="countryDetail">
                                    <h1>{name}</h1>
                                    <h3>Native Name: <span>{nativeName}</span></h3>
                                    <h3>Population: <span>{population}</span></h3>
                                    <h3>Region: <span>{region}</span></h3>
                                    <h3>Sub Region: <span>{subregion}</span></h3>
                                    <h3>Capital: <span>{capital}</span></h3>
                                    <h3>Languages: <span>{languages[0].name}</span></h3>   
                                </div>
                            </div>
                            
                            <div >
                                <h2>Borders</h2>
                                <div className="borders">
                                    {borders.map((border)=>{
                                        return(
                                            <ul key={border}>
                                                <li>{border}</li>
                                            </ul>
                                        )
                                        
                                    })}
                                </div>
                                
                            </div>
                        </article>
                    )
                })}
            </section>

        </div>
    )
}

export default Country
