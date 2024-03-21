import { gql, useQuery } from "@apollo/client";

const query = gql`
  query invoices($limit: Int!, $offset: Int!, $search: String!) {
    invoices(
      order_by: { issue_date: asc, due_date: asc },
      limit: $limit,
      offset: $offset,
      where: {
        client: {
          _or: [
            { first_name: { _ilike: $search } },
            { last_name: { _ilike: $search } },
            { company: { name: { _ilike: $search } } }
          ]
        }
      }
    ) {
      id
      issue_date
      due_date
      transaction
      total
      currency
      exchange
      client {
        first_name
        last_name
        company {
          name
        }
      }
    }
    invoices_aggregate {
      aggregate {
        count
      }
    }
  }
`

export interface Invoice {
  id: number
  issue_date: string
  due_date: string
  transaction: string
  total: number
  currency: string
  exchange: number
  client: {
    first_name: string
    last_name: string
    company: {
      name: string
    }
  }
}

interface Result {
  invoices: Invoice[]
  invoices_aggregate: {
    aggregate: {
      count: number
    }
  }
}

interface Variables {
  search: string
  limit: number
  offset: number
}

export function useInvoicesList(search: string, limit: number, offset: number) {
  return useQuery<Result, Variables>(query, {
    variables: { search: `%${search ?? ''}%`, limit, offset },
    skip: limit < 10,
  })
}
