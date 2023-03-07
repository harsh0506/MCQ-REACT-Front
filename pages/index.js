import Head from 'next/head'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Test from "../public/Test.png"
import { Button } from 'rsuite'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const router = useRouter()
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container" style={{
        flexDirection: "column",
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        background: "#270c39",
        gap: 20
      }}>

        <div className="container" style={{
          textAlign: "center"
        }}>
          <h3 style={{
            color: "#dabbc4"
          }}>MCQ Application</h3>
        </div>

        <Image src={Test}
          alt="Picture of the author"
          width={300} />

        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: "center",
        }}>
          <Button
            onClick={() => router.push("Test")}
            style={{
              fontSize: 15, background: "#903eb3", color: "#270c39", width: 150, fontWeight: 600
            }} className='get'>Go To Test</Button>
        </div>
      </div>
    </>
  )
}
