import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
type Props = {
  totalOrders: number;
  ordersInProgress: number;
  totalRevenue: number;
};

const BasicCard: React.FC<Props> = (props): any => {
  const { totalOrders, ordersInProgress, totalRevenue } = props;
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Total Orders:
        </Typography>
        <Typography variant="h5" component="div">
          {totalOrders}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Orders in Progress:
        </Typography>
        <Typography variant="h5" component="div">
          {ordersInProgress}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Total Revenue:
        </Typography>
        <Typography variant="h5" component="div">
          {totalRevenue}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BasicCard;
