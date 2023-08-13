import React from 'react';
import SubHeader from '../../components/SubHeader';
import GroupInfoInput from "../../components/Group/GroupInfoInput";
import Footer from "../../components/Footer/Footer";

const GroupAddPage = ({ PROXY }) => {
    return (
        <div>
            <SubHeader page={"그룹원 추가"}></SubHeader>
            <GroupInfoInput PROXY={PROXY}></GroupInfoInput>
            <Footer></Footer>
        </div>
    );
};

export default GroupAddPage;