import { Body, Container, Heading, Head, Hr, Html, Img, Link, Preview, Text } from '@react-email/components'


export const OthersEmail = (props) => {
    const { firstName } = props
    return (
        <Html>
            <Head />
            <Preview>
                Welcome to the Connect Community, {firstName}! We&apos;re Thrilled to Have You!
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
                        Fostering Collaboration and Synergy
                    </Text>
                    <Hr style={hr} />
                    <Text style={paragraph}>
                        Dear {firstName},
                    </Text>
                    <Text style={paragraph}>
                        We&apos;re excited to welcome you to the Connect community! Whether you're a supporter, educator, donor or advocate for innovation or social initiatives, your role here is vital in helping ideas or initiatives flourish and driving positive change.
                    </Text>
                    <Text style={paragraph}>
                        At Connect, our mission is building a community with the right tools, resources, and networks needed to turn bold ideas into impactful realities. We&apos;re committed in providing a platform where everyone can contribute and succeed.
                    </Text>
                    <Heading style={heading}>
                        As a member of Connect, you&apos;ll have access to:
                    </Heading>
                    <Text>
                        <ul>
                            <li style={li}>
                                A vibrant community of entrepreneurs, investors, and changemakers.
                            </li>
                            <li style={li}>
                                Opportunities to engage in meaningful conversations and projects.
                            </li>
                            <li style={li}>
                                Resources to stay informed about the entrepreneurial landscape and how you can contribute.
                            </li>
                        </ul>
                    </Text>
                    <Heading style={{ fontSize: '18px', marginTop: '20px' }}>
                        Next Steps:
                    </Heading>
                    <Text style={paragraph}>
                        We&apos;ll send regular updates about the latest trends, opportunities, and ways to contribute to the community. In the meantime, we invite you to follow us on social media and stay connected.
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
                        Thank you once again for being part of Connect. Together, we&apos;re building a brighter future!
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