import { Body, Container, Heading, Head, Hr, Html, Img, Link, Preview, Row, Section, Text, render } from '@react-email/components'


const EntrepreneurEmail = () => {
  const firstName = 'John';
  const previewProps = { firstName }; // Define PreviewProps
  return (
    <Html>
        <Head />
        <Preview>Welcome to Connect, {firstName}! Let’s Bring Your Ideas to Life!</Preview>
        <Body style={{ backgroundColor: '#f9f9f9', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
            <Container style={{ maxWidth: '600px', backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px' }}>
                <Img
                  src="http://localhost:3000/public/logo.png"
                  width='100'
                  height='100'
                  alt='connect.'
                />
                <Heading style={{ fontSize: '24px', marginBottom: '20px' }}>
                Welcome to Connect, {firstName}!
                </Heading>
                <Text>
                We’re excited to welcome you to Connect—a community designed to fuel your entrepreneurial journey. 
                Your ideas have the potential to change the world, and we’re here to support you every step of the way.
                </Text>
                <Text>
                At Connect, our mission is to bring together entrepreneurs, investors, partners, and innovators to create a space where ideas, resources, and opportunities converge.
                Whether you’re building the next big thing or seeking mentorship, Connect is here to make sure that every dream gets the chance it deserves.
                </Text>
                <Text>
                As an entrepreneur, you’ll have access to:
                <ul>
                    <li>A network of investors, mentors, and fellow entrepreneurs.</li>
                    <li>Workshops and resources to help you grow your business.</li>
                    <li>Opportunities to showcase your venture to potential backers.</li>
                    <li>Exclusive early access to tools and events designed to accelerate your startup journey.</li>
                </ul>
                </Text>
                <Heading style={{ fontSize: '18px', marginTop: '20px' }}>Next Steps:</Heading>
                <Text>
                We’ll be in touch with exclusive content and resources to help you get started. In the meantime, feel free to connect with us on social media and share your story with the #ConnectCommunity.
                </Text>
                <Text>
                Follow us on <Link href="https://socialmedia.com">[Social Media Links]</Link>.
                </Text>
                <Text>
                Explore our website <Link href="https://connect.com">[Insert Link]</Link> to learn more.
                </Text>
                <Text>
                Feel free to reply to this email if you have any questions or want to get involved right away.
                </Text>
                <Text>Best regards,<br />The Connect Team</Text>
                <Text>
                For any questions, feel free to reach out at <Link href="mailto:support@connect.com">support@connect.com</Link>. We’re here to help!
                </Text>
            </Container>
        </Body>
    </Html>
  )
}

// Add PreviewProps to your component
EntrepreneurEmail.PreviewProps = {
  firstName: 'John',
};

export default EntrepreneurEmail;