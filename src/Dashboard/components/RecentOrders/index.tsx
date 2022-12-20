import React from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";

import { Order } from "../../../__generated__/graphql";

type Props = {
  recentOrders: Order[];
};
const RecentOrders: React.FC<Props> = (props): any => {
  const recentOrders = props.recentOrders.map((item) => {
    const { __typename, ...rest } = item;
    return rest;
  });
  const rows = recentOrders;
  const columns =
    Object.keys(recentOrders[0]).map((key) => {
      return {
        field: key,
        type: "string",
        width: 150,
        headerName: key,
      };
    }) ?? [];
  return (
    <Box sx={{ height: 400, width: "100%", marginTop: "16px" }}>
      <Typography variant="h5" gutterBottom>
        Recent Orders
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection={false}
        disableSelectionOnClick={true}
        getRowId={(row: any) => row.order_id}
      />
    </Box>
  );
};

export default RecentOrders;
