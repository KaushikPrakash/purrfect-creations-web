import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";

import { Paper, TextField, styled } from "@mui/material";
import Typography from "@mui/material/Typography";

import { TOTAL_ORDERS_BY_MONTH } from "./../../gql";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const TotalOrdersOfMonth: React.FC = (): any => {
  const [selectedDate, setSelectedDate] = useState<any>("2022-12-16");
  const [totalOrderByMonth, setTotalOrderByMonth] = useState(0);

  const [getTotalOrdersByMonth] = useLazyQuery(TOTAL_ORDERS_BY_MONTH);
  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
    const { data } = await getTotalOrdersByMonth({
      variables: { selectedDate: event.target.value },
    });
    setTotalOrderByMonth(data.totalOrdersByMonth);
  };
  return (
    <Item sx={{ marginTop: "8px" }}>
      <TextField
        id="date"
        label="Select a date for total orders"
        type="date"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
        value={selectedDate}
        onChange={handleChange}
      />
      <Typography variant="h5" component="div">
        Total orders for month: {totalOrderByMonth}
      </Typography>
    </Item>
  );
};

export default TotalOrdersOfMonth;
