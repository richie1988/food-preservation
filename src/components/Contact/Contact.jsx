import React,{useState} from 'react'
import './Contact.css'
import EmailIcon from '../../assets/email-icon.png'
import Phone from '../../assets/phone-icon.png'
import Location from '../../assets/location-icon.png'

const Contact =()=> {
    const [result, setResult]=useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "c8ae3f9a-fb0e-4649-817e-4377818f2989");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Your Message Was Successfully Sent");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
    return (
        <div className='contact-container' name="contact">
           <div className='contact-column'>
                <h3>Reach out to us</h3>
                <p>We’re here to help and answer any questions you may have. Whether you're interested in our food preservation efforts or have a specific inquiry, don’t hesitate to get in touch. Let’s work together to create a brighter future.</p>
                <ul>
                    <li><img src={EmailIcon} alt='emailicon'/>richiessikaonga@gmail.com</li>
                    <li><img src={Phone} alt='emailicon'/>+27680944204 or +27764929880</li>
                    <li><img src={Location} alt='emailicon'/>102 kaunda square stage two Lusaka, Zambia 10101</li>
                </ul>
            </div>
            <div className='contact-column'>
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" name="name" placeholder="Enter your full Name"  required/>
                    <label>Phone Number</label>
                    <input type="tel" name="phone" placeholder="Enter Phone Number"  required/>
                    <label>Write your message here!</label>
                    <textarea name="message"  row="6" placeholder='Enter your message here'  required></textarea>
                    <button className='support_btn submit-btn' type='submit'>Submit Now</button>
                </form>
                <span>{result}</span>
            </div>

        </div>
    )
}

export default Contact