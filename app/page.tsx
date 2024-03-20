'use client'
import Image from 'next/image'
import { useCompaniesList } from '~/api'

export default function Home() {
  const { data, loading, error } = useCompaniesList()

  return (
    <main>
      Hello
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        By{' '}
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          width={100}
          height={24}
          priority
        />
      </a>
    </main>
  )
}
