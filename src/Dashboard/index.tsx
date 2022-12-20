import React, { useEffect, useState, useMemo, useCallback } from "react";

import type {} from "@mui/x-data-grid/themeAugmentation";
import { Container, Paper, styled, TextField, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";

import useDashboardData from "./hooks/useDashboardData";
import RevenueGraph from "./components/RevenueGraph";
import LatestOrders from "./components/RecentOrders";
import BasicCard from "./components/Summary";
import useTotalOrdersByMonthData from "./hooks/useTotalOrdersByMonthData";

const Dashboard: React.FC = (): any => {
  const [selectedDate, setSelectedDate] = useState<any>();
  const { data, loading } = useDashboardData(10);
  const { data: totalOrdersByMonthData } =
    useTotalOrdersByMonthData(selectedDate);

  const [totalOrderByMonth, setTotalOrderByMonth] = useState(0);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const memoizedRevenueGraph = useMemo(
    () => (
      <RevenueGraph totalRevenueByMonth={data?.totalRevenueByMonthAndYear} />
    ),
    [data?.totalRevenueByMonthAndYear]
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  useMemo(() => {
    setTotalOrderByMonth(totalOrdersByMonthData?.totalOrdersByMonth);
  }, [totalOrdersByMonthData]);

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
          <Item>{memoizedRevenueGraph}</Item>
        </Grid>
        <Grid item xs={4}>
          <Item sx={{ marginTop: "8px" }}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Total Orders this month: {totalOrderByMonth}
            </Typography>
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
              {totalOrderByMonth}
            </Typography>
          </Item>
        </Grid>
      </Grid>
      <LatestOrders recentOrders={data?.recentOrders} />
    </Container>
  );
};

export default Dashboard;
