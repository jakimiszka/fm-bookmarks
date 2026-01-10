export const Contact = () => {
    return (
        <section className="contact">
            <p>35,000+ already joined</p>
            <h3>
                Stay up-to-date with what we’re doing
            </h3>
            <form className="contact--form">
                <div className="input-wrapper">
                    <input type="email" id="email" name="email" required placeholder="email@example.com" />
                </div>
                <button type="submit" className="btn btn--contact">Send Message</button>
            </form>
        </section>
    );
}