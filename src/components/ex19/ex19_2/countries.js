import React from "react";
import axios from "axios";

const Countries = () => {

    const [countries, setCountries] = React.useState([]);

    React.useEffect(() => {
        axios.get('https://restcountries.com/v2/all')
            .then((res) => {
                setCountries(res.data);
            })
    }, []);


    const showCountries =()=> {
        return countries.map(cntry=>(
            <li>{cntry.name}</li>
        ));
    }

    return (
        <>
            <h1>hello</h1>
            <input type="text" onChange={showCountries}/>
            <ul>
                {countries.map(country => (
                    <li>{country.name}</li>
                ))}
            </ul>
        </>
    )
}

export default Countries;