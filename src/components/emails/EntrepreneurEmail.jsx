import { Body, Container, Heading, Head, Hr, Html, Img, Link, Preview, Text } from '@react-email/components'


export const EntrepreneurEmail = (props) => {
  const { firstName } = props
  return (
    <Html>
      <Head />
      <Preview>
        Welcome to Connect, {firstName}! Let&apos;s Bring Your Ideas to Life!
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
            <Text style={logoText}>Fostering Collaboration and Synergy</Text>
            <Hr style={hr} />
            <Text style={paragraph}>
              Dear {firstName},
            </Text>
            <Text style={paragraph}>
              We&apos;re excited to welcome you to Connect a community designed to fuel your entrepreneurial journey. Your ideas have the potential to change the world, and we&apos;re here to support you every step of the way.
            </Text>
            <Text style={paragraph}>
              At Connect, our mission is building a community with the right tools, resources, and networks needed to turn bold ideas into impactful realities. Whether you&apos;re building the next big thing or seeking mentorship, Connect is here to make sure that every dream gets the chance it deserves.
            </Text>
            <Heading style={heading}>
                As an entrepreneur, you&apos;ll have access to:
              </Heading>
            <Text>
              <ul>
                  <li style={li}>
                    A network of investors, mentors, and fellow entrepreneurs.
                  </li>
                  <li style={li}>
                    Workshops and resources to help you grow your business.
                  </li>
                  <li style={li}>
                    Opportunities to showcase your venture to potential backers.
                  </li>
                  <li style={li}>
                    Exclusive early access to tools and events designed to accelerate your startup journey.
                  </li>
              </ul>
            </Text>
            <Heading style={{ fontSize: '18px', marginTop: '20px' }}>
              Next Steps:
            </Heading>
            <Text style={paragraph}>
              We&apos;ll be in touch with exclusive content and resources to help you get started. In the meantime, feel free to connect with us on social media and share your story with the #ConnectCommunity.
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
              Thank you once again for joining Connect. Together, we&apos;re building something truly special, and we&apos;re excited to have you with us on this journey.
            </Text>
            <Text style={paragraph}>Best regards,<br /> -The Connect Team</Text>
              <Hr style={hr} />
            <Text style={{ fontSize: '15.5px' }}>
              For any questions, feel free to reach out at <Link href="mailto:connectletcollaborate@gmail.com">connectletcollaborate@gmail.com</Link>. We&apos;re here to help!
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