import { useQuery } from '@apollo/client';
import { DASHBOARD_QUERY } from "../gql"

const useDashboardData = (numOrders: number) => {
  console.log("useDashboardData");
  const { data, loading, error } = useQuery(
    DASHBOARD_QUERY, {
    variables: { numOrders }
  }
  );

  return { data, loading, error };
};

export default useDashboardData;
