import { Body, Container, Heading, Head, Hr, Html, Img, Link, Preview, Text } from '@react-email/components'


export const InvestorEmail = (props) => {
  const { firstName } = props
  return (
    <Html>
      <Head />
      <Preview>
        Thank You for Joining Connect, {firstName}! Empower Innovation with Us!
      </Preview>
      <Body style={main}>
          <Container style={container}>
              <Img
                src={process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_URL}
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
                Thank you for joining Connect! As a key player in the investment world, your role is crucial in driving innovation and supporting the next generation of entrepreneurs. Together, we can create opportunities and fuel the growth of tomorrow&apos;s biggest ideas.
              </Text>
              <Text style={paragraph}>
                At Connect, our mission is building a community with the right tools, resources, and networks needed to turn bold ideas into impactful realities. Whether you&apos;re funding the next breakthrough or looking for new ventures, Connect is here to help you find and support projects that matter.
              </Text>
              <Heading style={heading}>
                  As an investor, you&apos;ll benefit from:
              </Heading>
              <Text>
                <ul>
                    <li style={li}>
                      Opportunities to discover and support innovative startups.
                    </li>
                    <li style={li}>
                      A platform to connect with like-minded investors and industry leaders.
                    </li>
                    <li style={li}>
                      Invitations to exclusive events showcasing emerging talent and ventures.
                    </li>
                    <li style={li}>
                      Resources to stay informed on the latest market trends and opportunities.
                    </li>
                </ul>
              </Text>
              <Heading style={{ fontSize: '18px', marginTop: '20px' }}>
                Next Steps:
              </Heading>
              <Text style={paragraph}>
                Stay tuned for updates on upcoming ventures and opportunities to invest. We&apos;ll also keep you informed about events where you can meet the next wave of innovators.
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
                Thank you for your support. Together, we&apos;re driving change, and we&apos;re thrilled to have you with us.
              </Text>
              <Text style={paragraph}>Best regards,<br /> -The Connect Team</Text>
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