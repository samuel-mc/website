import bje from '../assets/images/bje.jpg';
import bje2 from '../assets/images/bje2.jpg';
import bje3 from '../assets/images/bje3.jpg';
import bje4 from '../assets/images/bje4.jpg';
import camen from '../assets/images/camen.jpg';
import camen2 from '../assets/images/camen2.jpg';
import camen3 from '../assets/images/camen3.jpg';
import camen4 from '../assets/images/camen4.jpg';
import coop from '../assets/images/coop.jpg';
import coop2 from '../assets/images/coop2.jpg';
import coop3 from '../assets/images/coop3.jpg';
import coop4 from '../assets/images/coop4.jpg';
import hcmedical from '../assets/images/hcmedical.jpg';
import hcmedical2 from '../assets/images/hcmedical2.jpg';
import hcmedical3 from '../assets/images/hcmedical3.jpg';
import hcmedical4 from '../assets/images/hcmedical4.jpg';
import indexity from '../assets/images/indexity.jpg';
import indexity2 from '../assets/images/indexity2.jpg';
import indexity3 from '../assets/images/indexity3.jpg';
import indexity4 from '../assets/images/indexity4.jpg';
import lexperts from '../assets/images/lexperts.jpg';
import lexperts2 from '../assets/images/lexperts2.jpg';
import lexperts3 from '../assets/images/lexperts3.jpg';
import lexperts4 from '../assets/images/lexperts4.jpg';
import olk from '../assets/images/olk.jpg';
import olk2 from '../assets/images/olk2.jpg';
import olk3 from '../assets/images/olk3.jpg';
import olk4 from '../assets/images/olk4.jpg';
import vtde from '../assets/images/vtde.jpg';
import vtde2 from '../assets/images/vtde2.jpg';
import vtde3 from '../assets/images/vtde3.jpg';
import vtde4 from '../assets/images/vtde4.jpg';
import jfe from '../assets/images/jfe.jpg';
import jfe2 from '../assets/images/jfe2.jpg';
import jfe3 from '../assets/images/jfe3.jpg';
import jfe4 from '../assets/images/jfe4.jpg';

const useProyects = () => {
    const proyects = [{
            title: 'COOP',
            images: [coop, coop2, coop3, coop4],
            description: 'Sitio web para una empresa que representa, distribuye e incuba otras marcas.',
            link: 'https://coopspirits.com/',
        },
        {
            title: 'OLK',
            images: [olk, olk2, olk3, olk4],
            description: 'Sitio web para una empresa encargada de logistica en paquetes.',
            link: 'https://encargoolk.com/',
        },
        {
            title: 'JFE',
            images: [jfe, jfe2, jfe3, jfe4],
            description: 'Sitio web para una empresa dedicada al al corte y transportacion de acero.',
            link: 'https://www.jssbmx.com/',
        },
        {
            title: 'Life Experts',
            images: [lexperts, lexperts2, lexperts3, lexperts4],
            description: 'Sitio web que corresponde a una consultora que ayuda a las personas con temas de seguros.',
            link: 'https://www.life-experts.consulting/',
        },
        {
            title: 'BJE',
            images: [bje, bje2, bje3, bje4],
            description: 'Sitio web para un bufete juridico especializado en derecho empresarial.',
            link: 'https://www.bje.mx/',
        },
        {
            title: 'Indexity',
            images: [indexity, indexity2, indexity3, indexity4],
            description: 'Sitio web para una agencia dedicada al analisis de datos financieros.',
            link: 'https://indexity.mx/',
        },
        {
            title: 'Camen quimica',
            images: [camen, camen2, camen3, camen4],
            description: 'Sitio web para una empresa que se dedica a la venta de productos químicos.',
            link: 'https://www.camen-q.com/',
        },
        {
            title: 'VTDE',
            images: [vtde, vtde2, vtde3, vtde4],
            description: 'Sitio web para una agencia que promueve la Transformación Digital Empresarial.',
            link: 'https://www.vtdemp.com/',
        },
        {
            title: 'HC - Medical',
            images: [hcmedical, hcmedical2, hcmedical3, hcmedical4],
            description: 'Sitio web que corresponde a un consultorio medico para personas con heridas crónicas.',
            link: 'https://www.hcmedicalmexico.com.mx/',
        },


    ];

    return {proyects};
};

export default useProyects;