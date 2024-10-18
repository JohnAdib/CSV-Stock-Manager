'use client'

import { FileUploaderInput } from '@/components/layout/file-uploader-input'
import { IResponseJson } from '@/interfaces'
import { EmptyState } from '@components/layout/empty-state'
import { Loading } from '@components/layout/loading'
import { PageHeader } from '@components/layout/page-header'
import { Pagination } from '@components/layout/pagination'
import { StockTable } from '@components/stock/stock-table'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'
import { apiFetch, apiNotification } from '../_helper/fetch'
import { apiUrlStockV1 } from '../_helper/url/stock'

function StockPage() {
  const router = useRouter()
  const [apiRes, setApiRes] = useState<IResponseJson | undefined>(undefined)
  const searchParams = useSearchParams()

  const searchParamPage = searchParams.get('page')
    ? parseInt(searchParams.get('page') as string, 10)
    : 1

  const defaultPerPage = 2
  const searchParamLimit = searchParams.get('limit')
    ? parseInt(searchParams.get('limit') as string, 10)
    : defaultPerPage

  useEffect(() => {
    apiFetch({
      method: 'GET',
      url: apiUrlStockV1,
      query: {
        page: searchParamPage,
        limit: searchParamLimit
      }
    }).then((res) => {
      setApiRes(res)
    })
  }, [searchParamLimit, searchParamPage])

  const handleFileUpload = async (file: File) => {
    const formData = new FormData()
    formData.append('csv', file)

    const apiResponse = await apiFetch({
      method: 'POST',
      url: apiUrlStockV1 + '/upload',
      body: formData,
      stringify: false
    })
    apiNotification({ apiResponse })

    if (apiResponse?.okay) {
      // refresh the page to show the table
      router.refresh()
    }
  }

  if (apiRes === undefined) {
    return <Loading />
  }

  if (apiRes === null || !apiRes?.result?.length) {
    return (
      <>
        <FileUploaderInput onFileSelect={handleFileUpload} />
        <EmptyState
          title="Stock is empty"
          description="Get started by adding a new item."
          btnHref="/stock/add"
          btnText="Add Item to Stock"
        />
      </>
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
      <FileUploaderInput onFileSelect={handleFileUpload} />
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

// Wrap the component with Suspense
export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <StockPage />
    </Suspense>
  )
}
