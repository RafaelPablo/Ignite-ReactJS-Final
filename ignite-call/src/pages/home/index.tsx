import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'
import { Container, Hero, Preview } from './styles'

import previewImage from '../../assets/app-preview.png'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Uncomplicated Scheduling</Heading>
      </Hero>
      <Text size="lg">
        Connect you calendar and allow people to make appointments on your free time.
      </Text>
      <Preview>
        <Image
          src={previewImage}
          height={400}
          quality={100}
          priority
          alt="Calendar symbolizing the application working"
        />
      </Preview>
    </Container>
  )
}
