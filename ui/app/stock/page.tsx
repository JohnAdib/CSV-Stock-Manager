'use client'

import { EmptyState } from '@components/layout/empty-state'
import { Loading } from '@components/layout/loading'
import { PageHeader } from '@components/layout/page-header'
import { Pagination } from '@components/layout/pagination'
import { StockTable } from '@components/stock/stock-table'
// import { useSearchParams } from 'next/navigation'

export default function Page() {
  // const searchParams = useSearchParams()

  // const searchParamPage = searchParams.get('page')
  //   ? parseInt(searchParams.get('page') as string, 10)
  //   : 1

  // // TODO: Make this configurable and move it to ENV
  // // For now, we will hardcode it to 2 to keep it simple and test the pagination
  // const defaultPerPage = 2
  // const searchParamLimit = searchParams.get('limit')
  //   ? parseInt(searchParams.get('limit') as string, 10)
  //   : defaultPerPage

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: any = null

  if (data === undefined) {
    return <Loading />
  }

  if (data === null || data?.result?.length === 0) {
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
      <StockTable stockItems={data.result} />
      <Pagination
        currentPage={data?.meta?.currentPage}
        totalResults={data?.meta?.totalItems}
        resultsPerPage={data?.meta?.perPage}
        baseUrl="/stock"
      />
    </>
  )
}
