

// https://api.github.com/repos/facebook/react/issues

import { useQuery } from "@tanstack/react-query"
import { getIssues } from "../actions"
import { State } from "../interfaces"
import { useEffect, useState } from "react";

interface Props {
  state: State;
  selectedLabels: string[];
}

export const useIssues = ({ state, selectedLabels }: Props) => {

  const [page, setPage] = useState(1);

  const issuesQuery = useQuery({
    queryKey: ['issues', { state, selectedLabels, page }],
    queryFn: () => getIssues( state, selectedLabels, page ),
    staleTime: 1000 * 60, // 1 minuto de stale time
  });

  const nextPage = () => {
    if (issuesQuery.data?.length === 0) {
      return;
    }

    setPage(page + 1)
  }

  const prevPage = () => {

    if (page === 1) {
      return;
    }

    setPage(prev => prev - 1);
  }

  useEffect(() => {
    
    setPage(1)

  }, [state, selectedLabels])

  return {
    issuesQuery,

    page,

    nextPage,
    prevPage
  }

}
