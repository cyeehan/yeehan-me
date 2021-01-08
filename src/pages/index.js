import React from "react"
import { H1, P, A } from "../elements"
import { Container, Content, Seo } from "../components"
// import myPhoto from "../img/yeehanchung-casual.jpg"

export default () => {
  return (
    <Container>
      <Seo title="YeeHan Chung | Homepage" />
      <Content>
        <H1 textAlign="left" margin=" 0 1rem 0">
          YeeHan Chung
        </H1>
        <br />
        <P lineHeight="medium">
          Hello there, I'm a software engineer. Passionate in bringing my ideas to life to make things easier. Currently located at Petaling Jaya, Selangor, Malaysia, and originally from East Malaysia, Sandakan, Sabah.
        </P>
        <br/>
        <P lineHeight="medium">
          If you're curious about my Chinese name, here you go, 钟易翰 (zhōng yī hàn).
        </P>
        <br />
        <P lineHeight="medium">
          I enjoy spending my time on the Internet, doing web development stuff,
          which I keep on{" "}
          <A
            href="https://yeehan.dev/"
            rel="noopener noreferrer"
            target="_blank"
          >
            yeehan.dev
          </A>
          {" "} and my <A
            href="https://github.com/cyeehan"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </A>
          , and blogging some of my thoughts here.
        </P>
        <br />
        <P lineHeight="medium">
          Video games played a huge part in my life as I was a hardcore gamer before I decided to fully focus on my career which is challenging and fun too. My most favorite game on my <A href="https://steamcommunity.com/profiles/76561198068565447" rel="noopener noreferrer" target="_blank">Steam account</A> would be The Witcher 3.
        </P>
      </Content>
    </Container>
  )
}
