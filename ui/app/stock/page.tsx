'use client'

import { IResponseJson } from '@/interfaces'
import { EmptyState } from '@components/layout/empty-state'
import { Loading } from '@components/layout/loading'
import { PageHeader } from '@components/layout/page-header'
import { Pagination } from '@components/layout/pagination'
import { StockTable } from '@components/stock/stock-table'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { apiFetch } from '../_helper/fetch'
// import { useSearchParams } from 'next/navigation'

export default function Page() {
  const [apiRes, setApiRes] = useState<IResponseJson | undefined>(undefined)
  const searchParams = useSearchParams()

  const searchParamPage = searchParams.get('page')
    ? parseInt(searchParams.get('page') as string, 10)
    : 1

  // TODO: Make this configurable and move it to ENV
  // For now, we will hardcode it to 2 to keep it simple and test the pagination
  const defaultPerPage = 2
  const searchParamLimit = searchParams.get('limit')
    ? parseInt(searchParams.get('limit') as string, 10)
    : defaultPerPage

  useEffect(() => {
    console.log('fetching item data for list')
    apiFetch({
      method: 'GET',
      url: 'http://localhost:7011/v1/stock',
      query: {
        page: searchParamPage,
        limit: searchParamLimit
      }
    }).then((res) => {
      setApiRes(res)
    })
  }, [])

  if (apiRes === undefined) {
    return <Loading />
  }

  console.log('apiRes?.result', apiRes?.result)
  console.log('apiRes?.result?.length', apiRes?.result?.length)
  if (apiRes === null || !apiRes?.result?.length) {
    return (
      <EmptyState
        title="Stock is empty"
        description="Get started by adding a new item."
        btnHref="/stock/add"
        btnText="Add Item to Stock"
      />
    )
  }

  return (
    <>
      <PageHeader
        title="Stocks"
        description="A list of all the stocks. You can add, view, and delete stocks."
        btnText="Add Item"
        btnColor="sky"
        btnHref="/stock/add"
      />
      <StockTable stockItems={apiRes?.result} />
      <Pagination
        currentPage={apiRes?.meta?.page}
        totalResults={apiRes?.meta?.totalCount}
        resultsPerPage={apiRes?.meta?.perPage}
        baseUrl="/stock"
      />
    </>
  )
}
