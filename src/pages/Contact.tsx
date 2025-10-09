export default function Contact() {
  return (
    <section className="contact">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.1932794429727!2d2.162167376676265!3d41.39160874573238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2ed494b4161%3A0x40d2782f9e2e4e0f!2sCasa%20Batll%C3%B3!5e0!3m2!1sen!2ses!4v1759949216460!5m2!1sen!2ses"
        width="80%"
        height="450"
        style={{
          border:0,
          borderRadius: "10px",
          marginTop: "1em",
        }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
        <div className="contact-info">
          <img src="/images/mix-of-herbs.jpg" className="logo-icon pulse-color glow-color" />
                <div>
                    <h4>Mock Shop </h4>
                    <p>Contact:</p>
                    <p>Utopia Hills</p>
                    <p>Pangea 123, TierraLand</p>
                    <p>E-mail: <a href="mailto:mock@plant.es">mock@plant.es</a></p>
                </div>
            
        </div>
    </section>
  )
}
