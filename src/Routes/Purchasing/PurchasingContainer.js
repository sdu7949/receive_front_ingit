import React from "react";
import MaterialTable from "material-table";
import Notice from "Components/Notice";

import { forwardRef } from "react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import Button from "@material-ui/core/Button";

export default function UserTable(props) {
  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

  // const [state, setState] = React.useState({
  const [state] = React.useState({
    columns: [
      {
        title: "닉네임",
        field: "nickname"
      },
      {
        title: "지갑 주소",
        field: "walletAddress",
        searchable: false
      },
      {
        title: "식별 번호",
        field: "id"
      },
      {
        title: "입금자명",
        field: "depositName"
      },
      {
        title: "구매 신청 금액",
        field: "purchasingCost",
        searchable: false
      },
      {
        title: "전송 예정 코인",
        field: "transmitCoin",
        searchable: false
      }
    ],
    data: [
      {
        id: 1,
        nickname: "브룩",
        walletAddress: "0x123awsw123",
        depositName: "심동욱",
        purchasingCost: "100000원",
        transmitCoin: "1222222In",
        approval: "승인하기"
      },
      {
        id: 2,
        nickname: "사보",
        walletAddress: "0x123awsw123",
        depositName: "김동욱",
        investment: "100000원",
        purchasingCost: "100000원",
        transmitCoin: "1222222In",
        approval: "승인하기"
      },
      {
        id: 3,
        nickname: "루치",
        walletAddress: "0x123awsw123",
        depositName: "김인기",
        purchasingCost: "100000원",
        transmitCoin: "1222222In",
        approval: "승인하기"
      },
      {
        id: 4,
        nickname: "로디언즈",
        walletAddress: "0x123awsw123",
        depositName: "윤창기",
        purchasingCost: "100000원",
        transmitCoin: "1222222In",
        approval: "승인하기"
      },
      {
        id: 5,
        nickname: "조지아",
        walletAddress: "0x123awsw123",
        depositName: "강지훈",
        purchasingCost: "100000원",
        transmitCoin: "1222222In",
        approval: "승인하기"
      },
      {
        id: 6,
        nickname: "귤",
        walletAddress: "0x123awsw123",
        depositName: "오한나",
        purchasingCost: "100000원",
        transmitCoin: "1222222In",
        approval: "승인완료"
      },
      {
        id: 7,
        nickname: "갤럭시",
        walletAddress: "0x123awsw123",
        depositName: "심동욱",
        purchasingCost: "100000원",
        transmitCoin: "1222222In",
        approval: "승인하기"
      },
      {
        id: 8,
        nickname: "컵",
        walletAddress: "0x123awsw123",
        depositName: "심동욱",
        purchasingCost: "100000원",
        transmitCoin: "1222222In",
        approval: "승인하기"
      },
      {
        id: 9,
        nickname: "노트북",
        walletAddress: "0x123awsw123",
        depositName: "심동욱",
        purchasingCost: "100000원",
        transmitCoin: "1222222In",
        approval: "승인하기"
      }
    ]
  });

  const handleSubmit = rowData => {
    // console.log(rowData.id);
    props.history.push(`/purchasing/${rowData.id}`, {
      id: rowData.id,
      nickname: rowData.nickname,
      walletAddress: rowData.walletAddress,
      purchasingCost: rowData.purchasingCost,
      transmitCoin: rowData.transmitCoin,
      approval: rowData.approval
    });
    // console.log(props.history);
  };

  return (
    <>
      <Notice />
      <MaterialTable
        title=""
        icons={tableIcons}
        columns={state.columns}
        data={state.data}
        options={{
          pageSize: 20,
          pageSizeOptions: [20, 40, 60]
        }}
        onRowClick={(_, rowData) => handleSubmit(rowData)}
        // onRowClick={(event, rowData, togglePanel) => togglePanel()}

        actions={[
          {
            icon: "save",
            tooltip: "승인하기",
            onClick: (event, rowData) => {
              alert(rowData.nickname + "님 승인하기");
              event.stopPropagation();
            }
          }
        ]}
        components={{
          Action: props => (
            <Button
              // onClick={(event) => props.action.onClick(event, props.data)}
              onClick={event => props.action.onClick(event, props.data)}
              color="primary"
              variant="contained"
              style={{ textTransform: "none" }}
              size="small"
            >
              승인
            </Button>
          )
        }}
      />
    </>
  );
}
