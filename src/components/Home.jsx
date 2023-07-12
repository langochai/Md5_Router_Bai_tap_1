import {useLocation, useNavigate} from "react-router-dom";

export const Home = () => {
    const {state} = useLocation()
    const navigate = useNavigate()
    const back = () => {
        navigate("/")
    }
    return (
        <>
            <p>{state.username}</p>
            <p>{state.password}</p>
            <button onClick={back}>Back</button>
        </>
    )
}