import React from 'react';
import "../styles/components/SubHeader.css";
import { useNavigate } from 'react-router-dom';

// 검색창이 없는 헤더. (로고와 뒤로가기 버튼만 있는.)

const SubHeader = ({ page }) => {

    const navigate = useNavigate();

    const onBack = () => {
        navigate(-1);
    }

    return (
        <div className='subHeader_container'>
            <div id='subHeader_back'><img src='./img/imgs/back.svg' alt='Back' onClick={onBack} /></div>
            <div id='subHeader_iconlogo'><img src='./img/imgs/icon_logo.svg' alt='logo' /></div>
            <div id='subHeader_pageName'><span>{page}</span></div>
        </div>
    );
};

export default SubHeader;