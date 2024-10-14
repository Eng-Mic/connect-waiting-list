import { Body, Container, Heading, Head, Hr, Html, Img, Link, Preview, Text } from '@react-email/components'


export const PartnerEmail = (props) => {
    const { firstName } = props
    return (
        <Html>
            <Head />
            <Preview>
                Glad to Have You with Us, {firstName}! Let&apos;s Collaborate for Impact!
            </Preview>
            <Body style={main}>
                <Container style={container}>
                    <Img
                    src="https://res.cloudinary.com/du6obar6t/image/upload/v1728853394/logo_wgnw3z.png"
                    width='115'
                    height='45'
                    alt='connect.'
                    style={logo}
                    />
                    <Text style={logoText}>
                        Fostering Collaboration and Synergy.
                    </Text>
                    <Hr style={hr} />
                    <Text style={paragraph}>
                        Dear {firstName},
                    </Text>
                    <Text style={paragraph}>
                        Welcome to Connect! We&apos;re thrilled to have you as a partner. Together, we can collaborate to shape impactful ventures, create value, and build a stronger entrepreneurial ecosystem.
                    </Text>
                    <Text style={paragraph}>
                        At Connect, our mission is building a community with the right tools, resources, and networks needed to turn bold ideas into impactful realities. Your collaboration is key in helping us foster innovation and drive meaningful change.
                    </Text>
                    <Heading style={heading}>
                        As a partner, you’ll enjoy:
                    </Heading>
                    <Text>
                        <ul>
                            <li style={li}>
                                The chance to collaborate on initiatives with entrepreneurs and investors.
                            </li>
                            <li style={li}>
                                Opportunities to create value through impactful partnerships.
                            </li>
                            <li style={li}>
                                Access to resources that enhance your role in supporting innovation and growth.
                            </li>
                        </ul>
                    </Text>
                    <Heading style={{ fontSize: '18px', marginTop: '20px' }}>
                        Next Steps:
                    </Heading>
                    <Text style={paragraph}>
                        We&apos;ll be reaching out soon with ways to collaborate on exciting projects. Keep an eye on your inbox for opportunities to drive real impact through partnership.
                    </Text>
                    <Text style={paragraph}>
                        Follow us on
                        <ul>
                            <li style={li}>
                                <Link href="https://chat.whatsapp.com/LUhDROrOz8LFi5QM1V8GjU">
                                    Whatsapp
                                </Link>
                            </li>
                            <li style={li}>
                                <Link href="https://x.com/TheConnect____">
                                    X
                                </Link>
                            </li>
                            <li style={li}>
                                <Link href="https://www.instagram.com/theconnect_community/">
                                    Instagram
                                </Link>
                            </li>
                            <li style={li}>
                                <Link href="https://www.linkedin.com/company/theconnect-space/">
                                    LinkedIn
                                </Link>
                            </li>
                            <li style={li}>
                                <Link href="https://www.youtube.com/@Connect_Community">
                                    Youtube
                                </Link>
                            </li>
                        </ul>
                    </Text>
                    <Text style={paragraph}>
                        We&apos;re excited to work with you and make a lasting impact together!
                    </Text>
                    <Text style={paragraph}>
                        Best regards,<br /> -The Connect Team
                        </Text>
                    <Hr style={hr} />
                    <Text style={{ fontSize: '15.5px' }}>
                        For any questions, feel free to reach out at <Link href="mailto:connectletcollaborate@gmail.com">connectletcollaborate@gmail.com</Link>. We’re here to help!
                    </Text>
                </Container>
            </Body>
        </Html>
    )
}


const main = {
  backgroundColor: "#fefefe",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};


const container = { 
  margin: "0 auto",
  padding: "20px 0 48px", 
}

const logo = {
  margin: "0 auto",
  padding: "20px 0 0 0",
};

const logoText = {
  fontSize: '15px',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: '30px',
}

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const heading = { 
  fontSize: '18px', 
  marginBottom: '20px' 
}

const paragraph = {
  fontSize: '16px',
  lineHeight: "26px",
}


const li = {
  fontSize: '16px',
  marginBottom: '10px'
}