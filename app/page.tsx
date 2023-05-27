import Text from "@/components/Text";
import { Metadata } from "next";

export default function Home() {
  return (
    <>
      <Text variant='h1'>¡Bienvenido a nuestro sitio web de amenidades!</Text>
      <Text>Aquí encontrarás una amplia gama de opciones que mejorarán tu experiencia en tu propiedad. Nuestra lista de amenidades está organizada en diferentes categorías para que puedas explorarlas fácilmente.</Text>

      <Text>Disponemos de amenidades principales que se adaptan a diversos estilos de vida y necesidades. Estas amenidades están diseñadas para brindarte comodidad y mejorar tu calidad de vida en tu hogar. Algunas de las categorías principales que ofrecemos son:</Text>
      <br />
      <Text>1. Estilo de vida: Esta categoría incluye amenidades que promueven un estilo de vida activo y saludable. Podrás encontrar opciones como áreas de juegos infantiles, alberca y accesibilidad para adultos mayores, entre otras.</Text>
      <Text>2. Impacto ambiental: Aquí encontrarás amenidades que fomentan prácticas sostenibles y respetuosas con el medio ambiente. Podrás explorar opciones como sistemas de aire acondicionado eficientes y calefacción ecológica.</Text>
      <br />
      <Text>Además de las amenidades principales, también ofrecemos una variedad de amenidades secundarias asociadas. Estas amenidades complementan y amplían las opciones disponibles, brindándote aún más beneficios y comodidades en tu propiedad.</Text>

      <Text>Te invitamos a explorar nuestro catálogo completo de amenidades padres e hijas para descubrir las opciones que se ajusten mejor a tus necesidades y preferencias. Nuestro objetivo es ayudarte a encontrar la combinación perfecta de amenidades para hacer de tu hogar un lugar acogedor y funcional.</Text>

      <Text>Si tienes alguna pregunta o necesitas más información sobre alguna amenidad en particular, no dudes en contactarnos. Nuestro equipo estará encantado de ayudarte.</Text>
      <br />
      <Text>Esperamos que disfrutes navegando por nuestro sitio web y encuentres las amenidades ideales para mejorar tu experiencia en tu propiedad. ¡Gracias por visitarnos y que encuentres exactamente lo que estás buscando!</Text>
    </>
  )
}

export const metadata: Metadata = {
  title: 'Inicio'
}
