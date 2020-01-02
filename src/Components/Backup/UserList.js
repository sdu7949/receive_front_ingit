import React from "react";
import {Link} from "react-router-dom";
import {user} from "./UserData.json";
import MaterialTable from 'material-table';

import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Button from '@material-ui/core/Button';

function UserList({match}){

    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
    };

    const [state,setState] = React.useState({
        columns: [
            { title: '닉네임', field: 'nickname' },
            { title: '지갑 주소', field: 'walletAddress' },
            { title: '식별 번호', field: 'id' },
            { title: '투자 금액', field: 'investment' },
            { title: '보유 KeepIn', field: 'keepIn' },
            { title: '만기일', field: 'dueDate' },
            { title: '신고 횟수', field: 'report' },
            { title: '동결', field: 'freeze' },
            //   { title: 'Birth Year', field: 'birthYear', type: 'numeric' }, 오른쪽 정렬
            //   {
            //     title: 'Birth Place',
            //     field: 'birthCity',
            //     lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
            //   },
        ],
        data:[]

    });

    const handleSubmit = (id) => {
        console.log(id)
        
    }

    return (
        <div style={{ marginTop: "20px" }}>
            <MaterialTable
                title=""
                icons={tableIcons}
                columns={state.columns}
                data={state.data}
                onRowClick={(_, rowData) => handleSubmit(rowData)}
            // onRowClick={(event, rowData, togglePanel) => togglePanel()}
            />
        </div>
    );
}