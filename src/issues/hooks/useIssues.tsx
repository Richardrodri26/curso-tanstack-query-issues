

// https://api.github.com/repos/facebook/react/issues

import { useQuery } from "@tanstack/react-query"
import { getIssues } from "../actions"

export const useIssues = () => {
  const issuesQuery = useQuery({
    queryKey: ['issues'],
    queryFn: getIssues,
    staleTime: 1000 * 60, // 1 minuto de stale time
  })

  return {
    issuesQuery
  }

}