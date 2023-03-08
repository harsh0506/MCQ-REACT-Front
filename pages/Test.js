import React from 'react'
import { Button } from 'rsuite'
import { useRouter } from 'next/router'
import axios from 'axios';

function Test() {

    const router = useRouter()

    const [mcqs, setMcqs] = React.useState([
        {
            Question: "",
            Ans: "",
            O1: "",
            O2: "",
            O3: "",
            O4: "",
            Sub:""
        }
    ]);

    const [givenAns, setgivenAns] = React.useState("");

    let [index, setIndex] = React.useState(0);

    const [style, setStyle] = React.useState("none");

    let [score, setScore] = React.useState(0);

    React.useEffect(() => {
        GetQuestions().then(res => setMcqs(res.mcqs)).catch(err => console.log(err))
    }, []);

    return (
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
                }}>Test Area</h3>
            </div>
            <div className="container" style={{ maxWidth: 400, textAlign: "center", padding: 10, gap: 10 }}>
                {/* has previous and next button to choose next and previous question */}
                <div className="container" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: "space-between",
                    maxWidth: 500, marginBottom: 50
                }}>
                    <Button
                        onClick={() => {
                            if (index > 0) {
                                setgivenAns("");
                                setStyle("none");
                                setIndex(--index);
                            }
                        }}
                        style={{
                            fontSize: 15, background: "#903eb3", color: "#270c39", width: 150, fontWeight: 600
                        }} className='get'>PREVIOUS</Button>
                    <Button
                        onClick={() => {
                            if (index > mcqs.length - 2 || index < 0) {
                                setIndex(index);
                            } else {
                                setgivenAns("");
                                setStyle("none");
                                setIndex(++index);
                            }
                        }}
                        style={{
                            fontSize: 15, background: "#903eb3", color: "#270c39", width: 150, fontWeight: 600
                        }} className='get'>NEXT</Button>
                </div>

                <div className="container" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: "center",
                    margin: 10,
                    flexDirection: "column"
                }}>
                    <span className="question" style={{
                        color: "#dabbc4", fontWeight: 600
                    }}>
                        QUESTION
                    </span>
                    <span className="question" style={{
                        color: "#dabbc4", height: 100
                    }}>
                        {mcqs[index].Question}
                    </span>
                </div>
                <div className="container options" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: "center",
                    maxWidth: 500
                }}>
                    <div className="row" style={{ gap: 10 }}>
                        <div className="col">
                            <Button
                                onClick={() => null}
                                style={{
                                    margin: 5, fontSize: 15, background: "#903eb3", color: "#270c39", width: 150, fontWeight: 600
                                }} className='get'> {mcqs[index].O1}</Button>
                            <Button
                                onClick={() => null}
                                style={{
                                    margin: 5, fontSize: 15, background: "#903eb3", color: "#270c39", width: 150, fontWeight: 600
                                }} className='get'> {mcqs[index].O2}</Button>
                        </div>
                        <div className="col" style={{ gap: 10 }}>
                            <Button
                                onClick={() => null}
                                style={{
                                    margin: 5, fontSize: 15, background: "#903eb3", color: "#270c39", width: 150, fontWeight: 600
                                }} className='get'> {mcqs[index].O3}</Button>
                            <Button
                                onClick={() => null}
                                style={{
                                    margin: 5, fontSize: 15, background: "#903eb3", color: "#270c39", width: 150, fontWeight: 600
                                }} className='get'> {mcqs[index].O4}</Button>
                        </div>
                    </div>

                </div>
                <div className="ans">
                    <div className="container" style={{
                        textAlign: "center", marginTop: 10
                    }}>
                        <h5 style={{
                            color: "#dabbc4", display: style
                        }}> {mcqs[index].Ans}</h5>
                    </div>
                </div>
                <div className="button-Submit">

                    <Button
                        onClick={() => {
                            style === "none" ? setStyle("block") : setStyle("none");
                            givenAns === mcqs[index].Ans ? setScore(++score) : setScore(score);
                        }}
                        style={{
                            margin: 5, fontSize: 15, background: "#903eb3", color: "#270c39", width: 150, fontWeight: 600
                        }} className='get'>Submit question</Button>

                    <Button
                        onClick={() => {
                            router.push({
                                pathname: 'Score',
                                query: { score, len: mcqs.length },
                            })
                        }}
                        style={{
                            display: (index === mcqs.length - 1) ? "block" : "none", margin: 5, fontSize: 15, background: "#903eb3", color: "#270c39", width: 150, fontWeight: 600
                        }} className='get'>Submit Test</Button>

                </div>
            </div>
        </div>
    )
}

export default Test

export async function GetQuestions() {
    try {
        return (await axios.get("http://localhost:4500/MCQs")).data
    } catch (error) {
        return error
    }
}

const data = [
    {
        question: "what is my name",
        ans: "q",
        op1: "w",
        op2: "e",
        op3: "r",
        op4: "q",
        choosedAns: ""
    },
    {
        question: "what is my age",
        ans: "q",
        op1: "w",
        op2: "e",
        op3: "r",
        op4: "q",
        choosedAns: ""
    },
    {
        question: "what is my color",
        ans: "q",
        op1: "w",
        op2: "e",
        op3: "r",
        op4: "q",
        choosedAns: ""
    }
];
