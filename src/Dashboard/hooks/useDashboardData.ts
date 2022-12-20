import { useEffect } from "react";

import { useQuery } from '@apollo/client';
import { DashboardQuery } from "../gql"

const useDashboardData = (numOrders: number) => {
  const { data, loading, error, refetch } = useQuery(
    DashboardQuery, {
    variables: { numOrders },
    fetchPolicy: "cache-first",
    pollInterval: 0,
  }
  );

  useEffect(() => {
    refetch();
  }, [numOrders, refetch]);

  return { data, loading, error };
};

export default useDashboardData;
