import { gql, useQuery } from "@apollo/client";

const query = gql`
  query companies {
    companies(limit: 10) {
      id
      name
      location
    }
  }
`

interface Result {
  companies: {
    id: string
    name: string
    location: string
  }[]
}

export function useCompaniesList() {
  return useQuery<Result>(query)
}
