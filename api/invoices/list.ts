import { gql, useQuery } from "@apollo/client";

const query = gql`
  query invoices($limit: Int!, $offset: Int!) {
    invoices(order_by: { issue_date: asc, due_date: asc }, limit: $limit, offset: $offset) {
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
  id: string
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
  limit: number
  offset: number
}

export function useInvoicesList(limit: number, offset: number) {
  return useQuery<Result, Variables>(query, {
    variables: { limit, offset },
    skip: limit < 10,
  })
}
