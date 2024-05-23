function ContactEmailLinkedIn() {
  return (
    <section className="contact-email-linkedin-section mt-9 text-xl px-6 py-8 lg:py-14 flex flex-col md:flex-row md:justify-center md:gap-36">
      <div>
        <p>You&apos;re welcome to</p>
        <a href="mailto:tora@teidsvag.com" className="block inter-text-link text-primary">Send me an email &gt;</a>
      </div>
      <div>
        <p className="mt-4 md:mt-0">Or you can contact me on my</p>
        <a href="https://linkedin.com/in/toraoeidsvag/" className="block inter-text-link text-primary">LinkedIn page &gt;</a>
      </div>
    </section>
   );
}

export default ContactEmailLinkedIn;
