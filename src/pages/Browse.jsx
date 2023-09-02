import Info from '../components/Browse/Info'
import Weather from '../components/Browse/Weather'
import Notes from '../components/Browse/Notes'
import News from '../components/Browse/News'
import Timer from '../components/Browse/Timer'
import { useNavigate } from 'react-router-dom'
const Browse = ()=>{
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate('/movies')
    }
    return (
        <div style={{height:"130vh",width:"100vw",background:"black",paddingLeft:"3vw",paddingTop:"3vh",boxSizing:"border-box"}}>
        <div style={{display:"flex",gap:"30px"}}>
        <div>
        <Info/>
        <Weather/>
        <Timer/>
        </div>
        <div>
            <Notes/>
        </div>
        <div>
            <News/>
        </div>
        </div>
        <button style={{position:"absolute",top:"750px",right:"50px",height:"30px",width:"100px",background:"green",border:"none",color:"white",padding:"6px",borderRadius:"12px"}} onClick={handleClick}>Browse</button> 
        </div>
    )
}

export default Browse