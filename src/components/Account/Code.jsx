import React, { useEffect } from 'react';
import "../../styles/Account/Code.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Code = ({code, setCode, PROXY, setUserData}) => {

    const navigate = useNavigate();

    const onCode = (e) => {
        setCode(e.currentTarget.value);
    }

    const onEnter = (e) => {
        if (e.key === 'Enter') {
            axios.post(`${PROXY}/api/login/guest`, {
                invite_code : code})
            .then((res) => localStorage.setItem('access_token', res.data.token))
            .then((res) => navigate("/main"))
            .catch((err) => console.log(err))
        }
    }
    
    return (
        <div className='code_container'>
            <input type='text' value={code} placeholder='코드 입력 후 엔터' onChange={onCode} onKeyPress={onEnter} />
        </div>
    );
};

export default Code;