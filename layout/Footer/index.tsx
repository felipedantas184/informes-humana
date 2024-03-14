import { FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";
import { Container, IWrap, IconsNav, Item, LogoWrapper, Nav, Wrapper } from "./styles";
import Image from "next/image";

const Footer = () => {
  return ( 
    <Container>
      <Wrapper>
        <LogoWrapper>
          <Image src={'/images/black_logo.png'} alt={'ADUFPI Logo'} fill className={'image'} />
        </LogoWrapper>
        <IconsNav>
          <a target='_blank' href='https://pt-br.facebook.com/adufpi/' arial-label='Instagram'><FaInstagram size={24} color={'#13131A'} /></a>
          <a target='_blank' href='https://www.instagram.com/adufpi/' arial-label='Facebook'><FaFacebook size={24} color={'#13131A'} /></a>
          <a target='_blank' href='mailto:secretaria@adufpi.org.br' arial-label='Email'><FaEnvelope size={24} color={'#13131A'} /></a>
        </IconsNav>
      </Wrapper>
    </Container>
   );
}
 
export default Footer;