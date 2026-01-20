import React from 'react';
import arrowIcon from '../assets/icon-arrow.svg';

export const FaqSection = () => {
    const questionRefs = React.useRef<(HTMLDivElement | null)[]>([]);

    const faqs = [
        {
            question: "What is Bookmark?",
            answer: "Bookmark is a free online service that allows you to save and organize your favorite websites in one convenient location. With Bookmark, you can easily access your bookmarks from any device, share them with others, and discover new websites based on your interests."
        },
        {
            question: "How can I request a new browser?",
            answer: "To request a new browser, please visit our support page and fill out the request form with the name of the browser you would like us to prioritize. We value user feedback and will consider all requests as we plan future updates."
        },
        {
            question: "Is there a mobile app?",
            answer: "Yes, Bookmark offers a mobile app for both iOS and Android devices. You can download the app from the App Store or Google Play Store to access your bookmarks on the go."
        },
        {
            question: "What about other Chromium browsers?",
            answer: "Bookmark is compatible with all Chromium-based browsers, including Microsoft Edge, Brave, and Vivaldi. You can install the Bookmark extension from the respective browser's extension store."
        }
    ];

    const toggleQuestion = (id: number) => {
        const currentQuestion = questionRefs.current[id];
        const currentAnswer = currentQuestion?.nextElementSibling as HTMLElement | null;
        if (currentAnswer) {
            currentAnswer.classList.toggle('animateAnswer');
            currentQuestion?.querySelector('img')?.classList.toggle('rotatetedArrorw');
            questionRefs.current.forEach((question, index) => {
                if (index !== id) {
                    const answer = question?.nextElementSibling as HTMLElement | null;
                    answer?.classList.remove('animateAnswer');
                    question?.querySelector('img')?.classList.remove('rotatetedArrorw');
                }       
            });
        }
    }

    return (
        <section className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <p className='faq-section--desc'>
                Here are some of our FAQs. If you have any other questions you’d like 
                answered please feel free to email us.
            </p>
            {faqs.map((faq, index) => (
                <div key={index} className="faq-section__item">
                    <div 
                        className="faq-section__item--question" 
                        onClick={() => toggleQuestion(index)} 
                        ref={(el: HTMLDivElement | null) => { questionRefs.current[index] = el }}
                    >
                        <p>{faq.question}</p>
                        <img src={arrowIcon} alt="Toggle Answer" />
                    </div>
                    <p className="faq-section__item--answer">{faq.answer}</p>
                </div>
            ))}
            <button className="btn btn--primary">More Info</button>
        </section>
    );
}