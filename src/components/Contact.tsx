import React from "react";

export const Contact = () => {
    const emailRef = React.useRef<HTMLInputElement>(null);
    const emailWrapperRef = React.useRef<HTMLDivElement>(null);

    const emailOnFocus = () => {
        if (emailWrapperRef.current) {
            emailWrapperRef.current.classList.remove("contactErrorShow");
        }
    }

    const contactOnClick = (e: React.FormEvent) => {
        e.preventDefault(); 
        const email = emailRef.current?.value || "";
        if (validateEmail(email)) {
            alert(`Thank you for subscribing with email: ${email}`);
            if (emailRef.current) {
                emailRef.current.value = "";
            }
        } else {
            if (emailWrapperRef.current) {
                emailWrapperRef.current.classList.add("contactErrorShow");
            }
        }
    }

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    return (
        <section className="contact">
            <p>35,000+ already joined</p>
            <h3>
                Stay up-to-date with what we’re doing
            </h3>
            <form className="contact--form" onSubmit={contactOnClick}>
                <div className="input-wrapper" ref={emailWrapperRef}>
                    <input type="text" id="email" name="email" placeholder="email@example.com" ref={emailRef} onFocus={emailOnFocus} />
                    <p>Whoops, make sure it's an email</p>
                </div>
                <button type="submit" className="btn btn--contact">Send Message</button>
            </form>
        </section>
    );
}