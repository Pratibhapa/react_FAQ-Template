import React from "react";
import  './Faq.css';

const Faq =() => {

    const faqData = [
        {
            question: 'What is React?',
            answer: 'React is a javascript library for buildig user interfaces',
        },
        {
            question: 'How do I install React?',
            answer: 'You can install react by using npm or yarn and create a new React application',
        },
    ];
    return (
        <div className="faq">
            <h1>Frequently Asked Questions</h1>
            <ul>
                {faqData.map((item, index) => (
                    <li key={index}>
                            <button className="question">{item.question}</button>
                            <div className="answer">{item.answer}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Faq;

