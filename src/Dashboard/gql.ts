import { gql } from '@apollo/client';

export const DashboardQuery = gql`
  query DashboardQuery($numOrders: Int!) {

    recentOrders(numOrders: $numOrders) {
      address,
      email,
      first_name,
      last_name,
      order_id,
      order_placed,
      order_status,
      price,
      product_name,
  }
  ordersInProgress,
  totalOrders,
  totalRevenue,
  totalRevenueByMonthAndYear{
    month,
    revenue,
    year
  },
}
`
  ;

export const TotalOrdersByMonthQuery = gql`
  query TotalOrdersByMonthQuery($selectedDate: Date!) {

  totalOrdersByMonth(selectedDate: $selectedDate)
}
`
  ;