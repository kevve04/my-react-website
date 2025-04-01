import { useEffect } from 'react';
import '../styles/pages/contact.css'

function Contact() {
	useEffect(() => {
		document.title = "Vegabaren - Kontakt"
	});

	return (
			<main id="contact_main">
			<h1>Kontakt</h1>

			<p>Har du någon feedback eller något annat som du vill dela med dig? Använd isåfall det här kontaktformuläret</p>
			<p>
				<b>Notera:</b> Det här formuläret är inte för beställningar, utan om du vill beställa gör du det via telefon på 08-777 20 58. <br/>
				Är det så att du vill boka en spelning är det bättre om du kontaktar via mejl Cenkan.polat@gmail.com eller telefon 070-721 14 55.
			</p>

			<form action="mailto:someone@example.com" method="post" encType="text/plain" id="contact_form">
				<p className="form_text"><b>Namn:</b></p>
				<input tabIndex="6" type="text" name="namn" className="form_input"/><br/>

				<p className="form_text"><b>E-mail:</b></p>
				<input tabIndex="7" type="text" name="mail" className="form_input"/><br/>

				<p className="form_text"><b>Meddelande:</b></p>
				<textarea tabIndex="8" name="meddelande" className="form_input" id="message_input"></textarea>				
				<br/>
				<button tabIndex="9" type="submit" className="form_button"><b>Skicka</b></button> <br/> <br/>
				<button tabIndex="10" type="reset" className="form_button"><b>Återställ</b></button>
			</form>

			<p>Genom att klicka på ”Skicka” samtycker jag till att Handens Hamburgerbar AB ges möjligheten att spara Namn och E-mail.</p>
		</main>
	)
}

export default Contact;