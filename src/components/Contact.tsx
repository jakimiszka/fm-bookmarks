export const Contact = () => {
    return (
        <section className="contact">
            <p>35,000+ already joined</p>
            <h3>
                Stay up-to-date with what we’re doing
            </h3>
            <form className="contact--form">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
                <button type="submit" className="btn btn--contact">Send Message</button>
            </form>
        </section>
    );
}