import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  Container,
  Dificuldade,
  Header,
  Titulo,
  Preview,
  Footer,
  Number,
  Avaliacao,
  Separator,
  Desenvolvedor,
} from './styles';

export default function Post({item, index}) {
  return (
    <Container key={index}>
      <Header>
        <Dificuldade nivel={index > 4 ? 4 : index} />
        <Titulo>Como funciona um aplicativo</Titulo>
      </Header>
      <Preview>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id velit
        vitae nibh consectetur tincidunt. Sed lacinia consectetur nunc nec
        pretium. Pellentesque facilisis nisi ligula, lobortis fermentum quam
        imperdiet et. In gravida dui odio, vel maximus diam sollicitudin at.
        Aenean iaculis bibendum leo non feugiat. Morbi ac tellus efficitur,
        interdum lorem at, vestibulum elit. Integer tempus augue eget ante
        tincidunt, id maximus augue tincidunt. Praesent ultricies, ante eget
        sodales egestas, mauris dui dictum leo, eget rhoncus tellus ante et
        magna. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Nunc felis massa, dictum interdum mi vitae, sagittis pulvinar magna. Ut
        viverra et purus quis placerat. Sed ac nibh sed est aliquam bibendum eu
        at diam. Aliquam mollis sodales leo, euismod facilisis leo imperdiet
        vel. Nam elit ex, maximus non porta eu, congue ac justo. Praesent quis
        justo tortor. Donec consectetur id massa a efficitur. Donec arcu odio,
        scelerisque eu velit et, fermentum cursus arcu. Duis bibendum ante ac
        ligula convallis, eget ornare neque rhoncus. Nulla eget lacus nulla. Ut
        bibendum lacus sit amet tortor pellentesque, ut rhoncus diam
        condimentum. Donec nulla turpis, aliquet vel ante sed, hendrerit
        vulputate dui. Praesent augue dui, auctor in velit vel, tincidunt mollis
        eros. Donec ac nisi non felis rhoncus sagittis lobortis sed sem. Nulla
        facilisi. Mauris congue elit a sem elementum sollicitudin. Fusce nec
        laoreet urna. In consequat nisi eget nunc auctor pharetra. Nam porttitor
        dictum metus eu lobortis. Maecenas sed arcu sed augue commodo venenatis
        in ut ipsum. Sed vel tempor nibh. Nullam ut justo consectetur, faucibus
        arcu ut, pellentesque turpis. Cras quis ligula tortor. Sed mattis nisl
        non neque imperdiet consectetur. Duis viverra nulla nisl, et cursus leo
        dictum et. Nunc mollis, nunc quis egestas egestas, turpis velit ultrices
        ante, at ornare neque est ut sapien. Vestibulum convallis augue in est
        finibus hendrerit ullamcorper in leo. Integer urna dolor, vehicula id
        metus tristique, auctor tempor orci. Integer iaculis, lectus id
        elementum semper, risus eros tempus magna, ac hendrerit lacus est at
        mauris. Cras eget condimentum nunc. Phasellus elementum ultrices
        volutpat. In elementum tincidunt urna, eu malesuada arcu rutrum quis.
        Suspendisse eu dolor ut nisl tincidunt imperdiet eleifend ut lorem.
        Vivamus iaculis enim lectus. Proin sollicitudin posuere nisi sed
        sodales. Duis tincidunt commodo auctor. Donec volutpat turpis urna, non
        venenatis dolor vehicula sed. Praesent eu justo a quam consectetur
        volutpat quis a urna.
      </Preview>

      <Footer>
        <Avaliacao>
          <Number>52</Number>
          <Icon name={'like2'} size={22} color={'#232222'} />
          <Separator />
          <Icon name={'dislike2'} size={22} color={'#232222'} />
          <Number>2</Number>
        </Avaliacao>

        <Desenvolvedor>Victor Manuel</Desenvolvedor>
      </Footer>
    </Container>
  );
}
