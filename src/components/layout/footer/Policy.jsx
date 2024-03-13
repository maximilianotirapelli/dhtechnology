import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../custom-ui/PrimaryButton';

const Policy = () => {
  useEffect(() => {
    // Scroll al inicio de la página cuando se monta el componente
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h1 className="py-8 text-3xl font-bold text-black">
          TERMINOS Y CONDICIONES
        </h1>
      </div>

      <div className="m-12">
        Versión vigente: 24 de noviembre, 2023. Resumen de términos y
        condiciones DH technology es una compañía de tecnología que ofrece
        servicios vinculados principalmente al comercio electrónico y a los
        pagos digitales. El techplace es una plataforma de comercio electrónico
        donde se pueden alquilar productos usando distintas soluciones de pago y
        envío. techno Envíos es la herramienta tecnológica que ofrecemos para
        que las Personas Usuarias puedan recibir sus compras hechas en sitios o
        aplicaciones que utilicen la tecnología de DH technology También
        ofrecemos otros servicios como techno Shops, techno Ads, techno
        Créditos, entre muchos otros, todos con el mismo fin: democratizar el
        comercio y los servicios financieros en la región. Para poder operar en
        la plataforma todas las Personas Usuarias deberán aceptar los Términos y
        Condiciones, los anexos y la Declaración de Privacidad. Podrán operar
        dentro de DH technology quienes tengan capacidad legal y menores de edad
        debidamente autorizados. Cada Persona Usuaria es responsable de los
        datos personales que brinda al momento de registrarse y se obliga a
        mantenerlos actualizados. Además, es el único responsable del uso y
        resguardo de su contraseña. En algunos casos, podremos cobrar una tarifa
        por el uso de los servicios que integran el ecosistema de DH technology,
        que la Persona Usuaria se compromete a pagar.
        <div className="pt-2 font-bold"> 1- DH Technology </div>
        DH technology es una compañía de tecnología que ofrece servicios
        vinculados principalmente al comercio electrónico y a los pagos
        digitales. Los servicios que ofrece DH technology en los sitios
        www.dhtechnology.com.ar y www.dhtechnology.com.ar y sus aplicaciones
        móviles (de ahora en más: “Sitio”) están diseñados para formar un
        ecosistema que permita a las personas , comprar, pagar, enviar productos
        y realizar otras actividades comerciales con tecnología aplicada (de
        ahora en más:“Ecosistema dh”).
        <div className="pt-2 font-bold"> 2- Términos y Condiciones </div>
        Estos términos y condiciones y los anexos que explican los servicios del
        Ecosistema dh (de ahora en más: “Términos y Condiciones”) regulan la
        relación entre DH technology y las personas que usan sus servicios
        (“Personas Usuarias”). Las Personas Usuarias aceptan estos Términos y
        Condiciones desde el momento en que se registran en el Sitio y usan el
        Ecosistema dh. Cuando debamos hacer cambios importantes en nuestros
        servicios, publicaremos las modificaciones con 10 días corridos de
        anticipación para que las Personas Usuarias puedan revisarlas y seguir
        usando el Ecosistema dh. El plazo será de 2 días hábiles en caso de que
        tengamos que actualizar las tarifas de nuestros servicios. En ningún
        caso afectarán las operaciones que ya hayan finalizado. Las Personas
        Usuarias que no tengan obligaciones pendientes con DH technology o con
        otras Personas Usuarias, podrán finalizar la relación con DH technology
        cancelando su cuenta.
        <div className="pt-2 font-bold">3- Capacidad </div>
        Podrán usar nuestros servicios las personas mayores de edad que tengan
        capacidad legal para contratar. Los menores de edad, a partir de los 13
        años, sólo podrán utilizar su cuenta con autorización del representante
        legal, quien responderá por todas las acciones y obligaciones que se
        deriven de la utilización de esa cuenta y quien deberá velar por el uso
        responsable y adecuado de ella en atención a la madurez del menor de
        edad que autorice. Quien use el Ecosistema DH en representación de una
        empresa deberá tener capacidad para contratar a nombre de ella. Además,
        para poder usar la cuenta, la Persona Usuaria debe encontrarse activa.
        <div className="pt-2 font-bold">4- Registro y Cuenta</div>
        Quien quiera usar nuestros servicios, deberá completar el formulario de
        registro con los datos que le sean requeridos. Al completarlo, se
        compromete a hacerlo de manera exacta, precisa y verdadera y a mantener
        sus datos siempre actualizados. La Persona Usuaria será la única
        responsable de la certeza de sus datos de registro. Sin perjuicio de la
        información brindada en el formulario, podremos solicitar y/o consultar
        información adicional para corroborar la identidad de la Persona
        Usuaria. La cuenta es personal, única e intransferible, es decir que
        bajo ningún concepto se podrá vender o ceder a otra persona. Se accede a
        ella con la clave personal de seguridad que haya elegido y que deberá
        mantener bajo estricta confidencialidad. La Persona Usuaria podrá crear
        Cuentas Colaboradoras y definir sus permisos de acceso. En cualquier
        caso, la Persona Usuaria será la única responsable por las operaciones
        que se realicen en su cuenta. En caso de detectar un uso no autorizado
        de su cuenta, deberá notificar de forma inmediata y fehaciente a DH.
        Podremos rechazar una solicitud de registro o bien cancelar un registro
        ya aceptado, sin que esto genere derecho a un resarcimiento. No podrán
        registrarse nuevamente en el Sitio las Personas Usuarias que hayan sido
        inhabilitadas previamente. Tampoco podrán registrarse quienes estén
        incluidos o relacionados a personas incluidas en listas nacionales o
        internacionales de sanciones. Además, en caso de detectar el uso de más
        de una cuenta, podremos aplicar retenciones, débitos y/o cualquier otra
        medida si consideramos que ese accionar puede perjudicar al resto de las
        personas que usan el Sitio o a DH technology, más allá de las sanciones
        que pudieran corresponder.
        <div className="pt-2 font-bold">5- Privacidad de datos</div>
        En DH technology hacemos un uso responsable de la información personal,
        protegiendo la privacidad de las Personas Usuarias que nos confiaron sus
        datos y tomando las medidas necesarias para garantizar la seguridad en
        nuestro Ecosistema DH. Conocé más sobre nuestra Declaración de
        Privacidad.
        <div className="pt-2 font-bold">
          6- Acceso a Otra Información Comercial
        </div>
        Además de lo previsto en las secciones anteriores, DH technology
        proporciona herramientas, aplicaciones y servicios basados en otra
        información comercial provista por las Personas Usuarias y/o generada al
        utilizar los servicios del Ecosistema DH, para ayudar a optimizar LAS
        ventas, aumentar EL volumen y gestionar EL negocio. También podremos
        usarla para ofrecer a las Personas Usuarias promociones, productos y
        servicios de otras empresas o de marca compartida, también podrá
        utilizarse en programas de prevención de fraude y otras medidas
        destinadas a aumentar la seguridad del TECHNOplace, de las Personas
        Usuarias y el cumplimiento de los Términos y Condiciones. Conoce más
        sobre nuestra política de Acceso a Información.
        <div className="pt-2 font-bold">7- Sanciones</div>
        En caso que la Persona Usuaria incumpliera una ley o los Términos y
        Condiciones, podremos advertir, suspender, restringir o inhabilitar
        temporal o definitivamente su cuenta, sin perjuicio de otras sanciones
        que se establezcan en las reglas de uso particulares de los servicios de
        DH technology.
        <div className="pt-2 font-bold">8- Responsabilidad</div>
        DH technology será responsable por cualquier defecto en la prestación de
        su servicio, en la medida en que le sea imputable y con el alcance
        previsto en las leyes vigentes.
        <div className="pt-2 font-bold">9- Tarifas</div>
        DH technology podrá cobrar por sus servicios y la Persona Usuaria se
        compromete a pagarlos a tiempo. Podremos modificar o eliminar las
        tarifas en cualquier momento con el debido preaviso establecido en la
        cláusula 2 de estos Términos y Condiciones. De la misma manera, podremos
        modificar las tarifas temporalmente por promociones en favor de las
        Personas Usuarias. La Persona Usuaria autoriza a DH technology a retener
        y/o debitar los fondos existentes y/o futuros de su cuenta de TECHNO
        Pago y/o de las cuentas bancarias que haya registrado en ella, para
        saldar las tarifas impagas o cualquier otra deuda que pudiera tener.
        Para conocer el detalle de las tarifas de cada servicio, las Personas
        Usuarias deberán consultar los términos y condiciones correspondientes.
        En todos los casos se emitirá la factura de conformidad con los datos
        fiscales que las personas tengan cargados en su cuenta.
        <div className="pt-2 font-bold">10- Propiedad Intelectual</div>
        DH technology y/o sus sociedades relacionadas son propietarias de todos
        los derechos de propiedad intelectual sobre sus sitios, todo su
        contenido, servicios, productos, marcas, nombres comerciales, logos,
        diseños, imágenes, frases publicitarias, derechos de autor, dominios,
        programas de computación, códigos, desarrollos, software, bases de
        datos, información, tecnología, patentes y modelos de utilidad, diseños
        y modelos industriales, secretos comerciales, entre otros (“Propiedad
        Intelectual”) y se encuentran protegidos por leyes nacionales e
        internacionales. Aunque DH technology otorga permiso para usar sus
        productos y servicios conforme a lo previsto en los Términos y
        Condiciones, esto no implica una autorización para usar su Propiedad
        Intelectual, excepto consentimiento previo y expreso de DH technology
        y/o sus sociedades vinculadas. En cualquier caso, los usuarios
        vendedores que usen dichos productos y servicios no podrán utilizar la
        Propiedad Intelectual de DH technology de una manera que cause confusión
        en el público y deberán llevar a cabo su actividad comercial bajo una
        marca o nombre comercial propio y distintivo, que no resulte confundible
        con la marca DH technology y su familia de marcas “TECHNO”, siguiendo
        con los lineamientos del Legal Brandbook. Está prohibido usar nuestros
        productos o servicios para fines ilegales, realizar cualquier tipo de
        ingeniería inversa u obras derivadas, utilizar herramientas de búsqueda
        o de extracción de datos y contenidos de nuestra plataforma para su
        reutilización y/o crear bases de datos propias que incluyan en todo o en
        parte nuestro contenido sin nuestra expresa autorización. Está también
        prohibido el uso indebido, sin autorización y/o contrario a la normativa
        vigente y/o que genere confusión o implique uso denigratorio y/o que le
        cause perjuicio, daños o pérdidas a DH technology y/o a sus sociedades
        relacionadas. La utilización de los productos y servicios de DH
        technology tampoco implica la autorización para usar propiedad
        intelectual de terceros que pueda estar involucrada, cuyo uso quedará
        bajo exclusiva responsabilidad del usuario. En caso que una Persona
        Usuaria o cualquier publicación infrinja la Propiedad Intelectual de DH
        technology o de terceros, DH technology podrá remover dicha publicación
        total o parcialmente), sancionar al usuario conforme a lo previsto en
        estos Términos y Condiciones y ejercer las acciones extrajudiciales y/o
        judiciales correspondientes.
        <div className="pt-2 font-bold">11- Indemnidad</div>
        La Persona Usuaria mantendrá indemne a DH technology y sus sociedades
        relacionadas, así como a quienes la dirigen, suceden, administran,
        representan y/o trabajan en ellas, por cualquier reclamo administrativo
        o judicial iniciado por otras Personas Usuarias, terceros o por
        cualquier Organismo, relacionado con sus actividades en el Ecosistema
        DH. En virtud de esa responsabilidad, podrán realizar compensaciones,
        retenciones u otras medidas necesarias para la reparación de pérdidas,
        daños y perjuicios, cualquiera sea su naturaleza.
        <div className="pt-2 font-bold">12- Anexos</div>
        Además de estos Términos y Condiciones, cada servicio del Ecosistema DH
        tiene sus propias reglas de uso.
        <div className="pt-2 font-bold">13- Jurisdicción y Ley Aplicable</div>
        Estos Términos y Condiciones se rigen por la ley argentina. Toda
        controversia derivada de su aplicación, interpretación, ejecución o
        validez será resuelta por los tribunales nacionales ordinarios
        competentes, con asiento en la Ciudad de Buenos Aires, salvo disposición
        específica de normas de orden público, como por ejemplo, legislación
        relativa al Consumidor. Para todos los efectos relacionados con estos
        Términos y Condiciones y con el uso del sitio, DH technology S.R.L. con
        CUIT XX-12345678-X establece como domicilio FAKE 123, Ciudad Autónoma de
        Buenos Aires, Argentina.
      </div>

      <div style={{ textAlign: 'center' }}>
        <h1 className="py-8 text-3xl font-bold text-red-500">
          ¿SUENA GENIAL?, ¡ALQUILA AHORA!
        </h1>
      </div>

      <div className="flex items-center justify-center py-8">
        <Link to={'/contact'}>
          <PrimaryButton>Contáctanos</PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default Policy;
