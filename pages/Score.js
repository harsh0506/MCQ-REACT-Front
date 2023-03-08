import { useRouter } from 'next/router'
import React from 'react'
import { Button } from 'rsuite'
import HAPPY from "../public/Happy.png"
import TRYAGAIN from "../public/TRYAGAIN.png"
import Image from 'next/image'

function Score() {

    const router = useRouter()
    const { score, len } = router.query
    console.log(score)

    return (
        <div className="container" style={{
            flexDirection: "column",
            display: 'flex',
            alignItems: 'center',
            justifyContent: "center",
            width: "100vw",
            height: "100vh",
            background: "#dabbc4",
            gap: 20
        }}>

            <div className="container" style={{
                textAlign: "center"
            }}>
                <h3 style={{
                    color: "#220c3c"
                }}>Score Board</h3>
            </div>

            <Image src={score === (len / 2) || score <= (len / 2) ? TRYAGAIN : HAPPY}
                alt="Picture of a score"
                width={300} />

            <div className="container" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: "center",
                flexDirection: "column"
            }}>
                <p style={{
                    color: "#220c3c",
                    fontSize: 30,
                    fontWeight: 300,
                }}>Score is {String(score)}</p>

                <Button
                    onClick={() => router.push("/")}
                    style={{
                        fontSize: 15, background: "#270c39", color: "#FFF", width: 150, fontWeight: 600
                    }} className='get'>Go To Home</Button>

            </div>
        </div>
    )
}

export default Score