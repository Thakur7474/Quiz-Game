import "./Result.css";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Result = ({name, score}) => {

    const navigate = useNavigate();

    useEffect(() => {
        if(!name) {
            navigate("/");
        }
    }, [name, navigate])

    return (
        <div className = "result">
            <span className = "title">
                Final Score : {score}
            </span>

            <Button 
                variant = "contained"
                color = "secondary"
                size = "large"
                style = {{ alignSelf: "center", marginTop: 20 }}
                href = "/"
            >
                Go To Home Page
            </Button>

        </div>
    );
};

export default Result;