import { Link, Typography } from '@mui/material';

function Contact() {
    return (
        <>
            <br />
            <Typography variant="h3" sx={{ color: "primary.dark"}}>
                Contact Us
            </Typography>
            <br />
            <Typography>Do you have a project you need help with? Are you interested in our products? We'd love to hear from you, please reach out to us at <Link href="mailto:bajainnotech@proton.me">bajainnotech@proton.me</Link></Typography>
        </>
    );
}

export default Contact;