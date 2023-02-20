import { usePreview } from 'lib/sanity.preview'
import { pageInfoQuery } from 'lib/sanity.queries'
import type { PageInfo } from 'types'

import { HomePage, HomePageProps } from './Hero'

export default function HomePagePreview({
  token,
  page,
  settings,
}: { token: null | string } & HomePageProps) {
  const home: PageInfo= usePreview(token, pageInfoQuery)

  if (!home) {
    return (
      <div className="text-center">
        Please start editing your Home document to see the preview!
      </div>
    )
  }

  return <HomePage page={home} settings={settings} preview={true} />
}