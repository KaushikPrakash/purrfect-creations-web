import React, { useState, useMemo, useEffect } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";

import type {} from "@mui/x-data-grid/themeAugmentation";
import { Container, Paper, styled, TextField, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";

import useDashboardData from "./hooks/useDashboardData";
import RevenueGraph from "./components/RevenueGraph";
import LatestOrders from "./components/RecentOrders";
import BasicCard from "./components/Summary";

import { TOTAL_ORDERS_BY_MONTH } from "./gql";

const Dashboard: React.FC = (): any => {
  const [selectedDate, setSelectedDate] = useState<any>();
  const { data, loading } = useDashboardData(10);

  const [getTotalOrdersByMonth] = useLazyQuery(TOTAL_ORDERS_BY_MONTH);

  const [totalOrderByMonth, setTotalOrderByMonth] = useState(0);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
    const { data: total } = await getTotalOrdersByMonth({
      variables: { selectedDate: event.target.value },
    });
    setTotalOrderByMonth(total.totalOrderByMonth);
  };

  return loading ? (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  ) : (
    <Container maxWidth="lg" sx={{ marginTop: "24px" }}>
      <Typography variant="h3" gutterBottom>
        Purrfect Creations
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <BasicCard
            totalOrders={data?.totalOrders}
            ordersInProgress={data?.ordersInProgress}
            totalRevenue={data?.totalRevenue}
          />
        </Grid>
        <Grid item xs={8}>
          <Item>
            <RevenueGraph
              totalRevenueByMonth={data?.totalRevenueByMonthAndYear}
            />
          </Item>
        </Grid>
        <Grid item xs={4}>
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
        </Grid>
      </Grid>
      <LatestOrders recentOrders={data?.recentOrders} />
    </Container>
  );
};

export default Dashboard;
