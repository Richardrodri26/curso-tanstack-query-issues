

// https://api.github.com/repos/facebook/react/issues

import { useInfiniteQuery } from "@tanstack/react-query"
import { State } from "../interfaces"
import { getIssues } from "../actions";

interface Props {
  state: State;
  selectedLabels: string[];
}

export const useIssuesInfinite = ({ state, selectedLabels }: Props) => {


  const issuesQuery = useInfiniteQuery({
    queryKey: ['issues', 'infinite', { state, selectedLabels }],
    queryFn: ({ pageParam, queryKey }) => {

      const [, , args] = queryKey;
      const { state, selectedLabels } = args as Props;
      

      return getIssues( state, selectedLabels, pageParam)

    },
    staleTime: 1000 * 60, // 1 minuto de stale time
    getNextPageParam: (lastPage, pages) => lastPage.length > 0 ? pages.length : undefined,
    initialPageParam: 0,
  });


  return {
    issuesQuery,


  }

}
