import React from "react";

import type {} from "@mui/x-data-grid/themeAugmentation";
import { Container, Paper, styled, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";

import useDashboardData from "./hooks/useDashboardData";
import RevenueGraph from "./components/RevenueGraph";
import LatestOrders from "./components/RecentOrders";
import TotalOrdersOfMonth from "./components/TotalOrderOfMonth";

import BasicCard from "./components/Summary";

const Dashboard: React.FC = (): any => {
  const { data, loading } = useDashboardData(10);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

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
          <TotalOrdersOfMonth />
        </Grid>
      </Grid>
      <LatestOrders recentOrders={data?.recentOrders} />
    </Container>
  );
};

export default Dashboard;
