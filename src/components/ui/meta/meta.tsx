import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'

import Head from 'next/head'

import logoImage from '@/assets/image/logo.svg'

interface ISeo {
  title: string
  description?: string
  image?: string
}

export const titleMarge = (title: string) => `${title} | Shop`

const Meta: FC<PropsWithChildren<ISeo>> = ({
  title,
  description,
  image,
  children
}) => {
  const { asPath } = useRouter()
  const currentUrl = `${process.env.APP_URL}${asPath}`
  console.log('====================================')
  console.log('meta.tsx', 24, children)
  console.log('====================================')

  return (
    <>
      <Head>
        <title itemProp='headline'>{titleMarge(title)}</title>
        {description ? (
          <>
            <meta
              itemProp='description'
              name='description'
              content={description}
            />
            <link rel='canonical' href={currentUrl} />
            <meta property='og:locale' content='en' />
            <meta property='og:title' content={titleMarge(title)} />
            <meta property='og:url' content={currentUrl} />
            <meta property='og:image' content={image || logoImage} />
            <meta property='og:site_name' content='Sate namE' />
            <meta property='og:description' content={description} />
          </>
        ) : (
          <meta name='robots' content='noindex, nofollow' />
        )}
      </Head>
      {children}
    </>
  )
}

export default Meta
