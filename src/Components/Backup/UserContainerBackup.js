// import React, {useState, useEffect} from "react";
// import UserPresenter from "./UserPresenter";
import React from "react";
import styled from "styled-components";
import UserPresenter from "./UserPresenter";

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const Container = styled.div`
    margin-top : 40px;
`;

const Contents = styled.div`
    font-size : 15px;
`;

const UserContainer= () =>{
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [nickname, setNickname] = useState(null);
    // const [walletAddress, setwalletAddress] = useState(null);
    // const [id, setId] = useState(null);
    // const [investment, setInvestment] = useState(null);
    // const [keepIn, setKeepIn] = useState(null);
    // const [dueDate, setDueDate] = useState(null);
    // const [report, setReport] = useState(null);
    // const [freeze, setFreeze] = useState(false);

    // useEffect(()=> {
    //     const fetchData = async () => {
    //         try{

    //         }catch{

    //         }finally{

    //         }
    //     };
    //     fetchData();
    // }, []);

    const dummyData = [
        {
            id : 1,
            nickname : '김사보',
            walletAddress : '0x123123123',
            investment : '100000원',
            keepIn : '100000 KeepIn',
            dueDate : '2020-11-11',
            report : '0회',
            freeze : true,
        },
        {
            id : 2,
            nickname : '루치',
            walletAddress : '0x123123123',
            investment : '100000원',
            keepIn : '100000 KeepIn',
            dueDate : '2020-11-11',
            report : '0회',
            freeze : true,
        },
        {
            id : 3,
            nickname : '로디언즈',
            walletAddress : '0x123123123',
            investment : '100000원',
            keepIn : '100000 KeepIn',
            dueDate : '2020-11-11',
            report : '0회',
            freeze : true,
        },
        {
            id : 4,
            nickname : '브룩',
            walletAddress : '0x123123123',
            investment : '100000원',
            keepIn : '100000 KeepIn',
            dueDate : '2020-11-11',
            report : '0회',
            freeze : true,
        },
        {
            id : 5,
            nickname : '퀴로스',
            walletAddress : '0x123123123',
            investment : '100000원',
            keepIn : '100000 KeepIn',
            dueDate : '2020-11-11',
            report : '0회',
            freeze : true,
        },
        {
            id : 6,
            nickname : '퀴로스2',
            walletAddress : '0x123123123',
            investment : '100000원',
            keepIn : '100000 KeepIn',
            dueDate : '2020-11-11',
            report : '0회',
            freeze : true,
        },
        {
            id : 7,
            nickname : '퀴로스2',
            walletAddress : '0x123123123',
            investment : '100000원',
            keepIn : '100000 KeepIn',
            dueDate : '2020-11-11',
            report : '0회',
            freeze : true,
        },
        {
            id : 8,
            nickname : '퀴로스2',
            walletAddress : '0x123123123',
            investment : '100000원',
            keepIn : '100000 KeepIn',
            dueDate : '2020-11-11',
            report : '0회',
            freeze : true,
        },
        {
            id : 9,
            nickname : '퀴로스2',
            walletAddress : '0x123123123',
            investment : '100000원',
            keepIn : '100000 KeepIn',
            dueDate : '2020-11-11',
            report : '0회',
            freeze : true,
        },
    ];

        return (
            <>
            <Container>
                {dummyData.map(data => (
                    <>
                        <Contents>
                        {data.id},{data.nickname},{data.walletAddress},{data.investment},{data.keepIn},{data.dueDate},{data.report},{data.freeze};
                        </Contents>
                    </>
                ))}
            </Container>

            </>
            
        )
    

}

export default UserContainer;