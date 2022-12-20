import { useEffect } from "react";
import { useQuery } from '@apollo/client';
import { TotalOrdersByMonthQuery } from "../gql"

const useTotalOrdersByMonthData = (selectedDate: Date) => {
  const { data, loading, error, refetch } = useQuery(
    TotalOrdersByMonthQuery, {
    variables: { selectedDate },
    fetchPolicy: "cache-first",
    pollInterval: 0,
  }
  );

  useEffect(() => {
    refetch();
  }, [selectedDate, refetch]);

  return { data, loading, error };
};

export default useTotalOrdersByMonthData;
