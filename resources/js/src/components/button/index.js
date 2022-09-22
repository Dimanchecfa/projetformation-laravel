import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IconBack } from "../icons";




export const BackButton = ({ children, route }) => {
    const navigate = useNavigate();
    return (
        <button className="btn btn-dark d-flex align-items-center" onClick={() => navigate(route)} style={{
            'font-family': 'open-sans'
        }}>
           <IconBack fill="#000" />{" "} {children}
        </button>
    );
}

export const ButtonPrimary = ({ children, route }) => {
    const navigate = useNavigate();
    return (
        <>
            <button className="btn btn-primary" onClick={() => navigate(route)} style={{
            'font-family': 'open-sans'
        }}>
            {children}
        </button>
        </>
    );
}

export const ButtonSecondary = ({ children, route }) => {
    const navigate = useNavigate();
    return (
       <>
         <button className="btn btn-secondary d-flex align-items-center" onClick={() => navigate(route)} style={{
            'font-family': 'open-sans'
        }}>
            {children}
        </button>
       </>
    );
}  

export const ButtonDanger = ({ children, route }) => {
    const navigate = useNavigate();
    return (
        <button className="btn btn-danger d-flex align-items-center" onClick={() => navigate(route)} style={{
            'font-family': 'open-sans'
        }}>
            {children}
        </button>
    );
}

export const ButtonSuccess = ({ children, route }) => {
    const navigate = useNavigate();
    return (
        <button className="btn btn-success d-flex align-items-center" onClick={() => navigate(route)} style={{
            'font-family': 'open-sans'
        }}>
            {children}
        </button>
    );
}

export const ButtonInfo = ({ children, route }) => {
    const navigate = useNavigate();
    return (
        <button className="btn btn-info d-flex align-items-center" onClick={() => navigate(route)} style={{
            'font-family': 'open-sans'
        }}>
            {children}
        </button>
    );
}