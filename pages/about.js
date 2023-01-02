import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'


export default function About() {
  return (
    <Layout>

      <Header />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24"
        >
         
        </m.div>
      </LazyMotion>

      <Footer />
    </Layout>
  )
}
