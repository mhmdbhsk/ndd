import { Container } from '@/components/container'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About'
}

export default function Page() {
  return (
    <div className="py-6">
      <Container>About</Container>
    </div>
  )
}
