import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from '@/components/ui/accordion';
  
export const AccordionDetail = () => {
    return (
        <div>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-blue-600">
                        ¿Puedo comprar productos de DH Technology mediante pagos a
                        plazos?
                    </AccordionTrigger>
                    <AccordionContent>
                        Sí, DH Technology ofrece la opción de comprar productos mediante
                        pagos en efectivo y a plazos. Esto te permite elegir el método
                        de pago que se adapte a tus necesidades y presupuesto.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-blue-600">
                        ¿Cómo puedo interactuar con el contenido de la revista en DH
                        Technology?
                    </AccordionTrigger>
                    <AccordionContent>
                        Puede interactuar activamente con el contenido de la revista
                        dejando comentarios y participando en la sección de preguntas y
                        respuestas. No dude en compartir sus pensamientos, hacer
                        preguntas e interactuar con otros entusiastas de la tecnología
                        en la comunidad.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-blue-600">
                        ¿DH Technology ofrece garantía sobre sus productos?
                    </AccordionTrigger>
                    <AccordionContent>
                        Sí, DH Technology ofrece una garantía para todos los productos
                        elegibles. Los detalles específicos de la garantía pueden variar
                        según el fabricante y la categoría del producto. Consulte la
                        descripción del producto o comuníquese con nuestro servicio de
                        atención al cliente para obtener más información.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-4">
                    <AccordionTrigger className="text-blue-600">
                        ¿Es DH Technology una plataforma segura para compras online?
                    </AccordionTrigger>
                    <AccordionContent>
                        Sí, DH Technology ofrece una garantía para todos las compras
                        online. Los detalles específicos de los medios de pago pueden
                        variar según el metodo y la forma del pago. Consulte la
                        descripción de los pagos o comuníquese con nuestro servicio de
                        atención al cliente para obtener más información.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-5">
                    <AccordionTrigger className="text-blue-600">
                        ¿Cómo puedo obtener ayuda con mi compra o cualquier otra
                        consulta?
                    </AccordionTrigger>
                    <AccordionContent>
                        Si necesita ayuda con su compra o tiene alguna pregunta, nuestro
                        dedicado equipo de atención al cliente está aquí para ayudarlo.
                        Puede comunicarse con nosotros a través de la página de contacto
                        en nuestro sitio web y estaremos encantados de ayudarle de
                        inmediato.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
