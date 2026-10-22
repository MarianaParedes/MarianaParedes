import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

function Contact({ parentToChild }: { parentToChild: { mode: string } }) {
  const mode = parentToChild.mode;

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [snackbar, setSnackbar] = useState<{ open: boolean; severity: 'success' | 'error' }>({
    open: false,
    severity: 'success',
  });
  const [sending, setSending] = useState<boolean>(false);

  const form = useRef();

  const serviceId = process.env?.REACT_APP_SERVICE_ID;
  const templateId = process.env?.REACT_APP_TEMPLATE_ID;
  const apiKey = process.env.REACT_APP_API_KEY;

  const sendEmail = (e: any) => {
    e.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();
    const emailIsValid = isValidEmail(normalizedEmail);

    setNameError(name === '');
    setEmailError(!emailIsValid);
    setMessageError(message === '');

    /* Uncomment below if you want to enable the emailJS */

    if (name !== '' && emailIsValid && message !== '') {
      if (!serviceId || !templateId || !apiKey) {
        console.error("Check the logs");
        setSnackbar({ open: true, severity: 'error' });
        return;
      }

      const templateParams = {
        name: name,
        email: normalizedEmail,
        message: message
      };

      setSending(true);
      emailjs.send(serviceId, templateId, templateParams, apiKey).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setName('');
          setEmail('');
          setMessage('');
          setSnackbar({ open: true, severity: 'success' });
        },
        (error) => {
          console.log('FAILED...', error);
          setSnackbar({ open: true, severity: 'error' });
        },
      ).finally(() => {
        setSending(false);
      });
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Looking for a developer? I'm open to projects and opportunities — let's talk.</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                type="email"
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="outlined-required"
                label="Email"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? "Please enter a valid email address" : ""}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={sendEmail}
              disabled={sending}
            >
              {sending ? 'Sending...' : 'Send'}
            </Button>
          </Box>
          <Snackbar
            open={snackbar.open}
            autoHideDuration={snackbar.severity === 'success' ? 4000 : 6000}
            onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          >
            <Alert
              severity={snackbar.severity}
              variant="filled"
              onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
              sx={{
                width: '100%',
                ...(mode === 'dark'
                  ? snackbar.severity === 'success'
                    ? { bgcolor: '#122b1e', color: '#86efac', border: '1px solid rgba(134,239,172,.25)' }
                    : { bgcolor: '#2f1417', color: '#fca5a5', border: '1px solid rgba(252,165,165,.25)' }
                  : snackbar.severity === 'success'
                    ? { bgcolor: '#2e7d32', color: '#fff' }
                    : { bgcolor: '#c62828', color: '#fff' }),
                '& .MuiAlert-icon': { color: 'inherit' },
              }}
            >
              {snackbar.severity === 'success'
                ? "Message sent successfully! I'll get back to you soon."
                : 'Something went wrong. Please try again.'}
            </Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
}

export default Contact;
