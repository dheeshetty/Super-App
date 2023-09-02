import { useEffect, useState } from "react"
import styles from './List.module.css'
const List = ({genre})=>{
    const [movies, setMovies] = useState([])
    console.log(movies)
    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a5d5617b88msh7361a2b90b1b8b3p175400jsn24dfbd347824',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };
        const fetchMovies = async()=>{
            await fetch(`https://moviesdatabase.p.rapidapi.com/titles?genre=${genre}&year=2022`, options)
                .then(response => response.json())
                .then(response => setMovies(response.results.splice(4,4)))
                .catch(err => console.error(err));
        }
        fetchMovies();
    },[])
    return(
        <>
        <p className={styles.heading}>{genre}</p>
        <div style={{display:"flex",overflow:"hidden",marginLeft:"2vw"}}>
            {movies.map((movie,idx)=>{
                console.log(movie?.primaryImage?.url)
                return (
                <div key={idx} style={{width:"20vw",margin:"2vw"}}>
                    <img src={movie?.primaryImage?.url} style={{objectFit:"cover", width:"20vw", height:"20vh",borderRadius:"12px"}}/>
                </div>
                )
            })}
        </div>
        </>
    )
}

export default List