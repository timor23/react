import React from "react";
import axios from "axios";

const SimpleFetch = () => {

    const [title, setTitle] = React.useState(null);
    const [director, setDirector] = React.useState(null);

    React.useEffect(() => {
        axios.get('https://swapi.dev/api/films/1/')
            .then((res) =>{
                setTitle(res.data.title);
                setDirector(res.data.director);
            })
    },[]);

    return(
        <>
            <h1>{title}</h1>
            <h2>{director}</h2>
        </>)
}

export default SimpleFetch;