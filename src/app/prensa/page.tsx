import { sanityClient, urlFor } from "@/lib/sanity";
import PrensaGallery, { PrensaItem } from "@/components/PrensaGallery";

const PRENSA: PrensaItem[] = [
  { title: "Diario Kultura. España", image: "https://marcelokatz.com.ar/wp-content/uploads/2019/06/2-Nota-a-Marcelo-Katz-2015-Diario-Kultura-690x899.jpg", href: "https://marcelokatz.com.ar/nota-a-marcelo-katz-2015-diario-kultura/" },
  { title: "Buenos Aires Herald", image: "https://marcelokatz.com.ar/wp-content/uploads/2019/06/Buenos-Aires-Herald-690x574.jpg", href: "https://marcelokatz.com.ar/02_clases-3/" },
  { title: "El Diario de Ibiza, España", image: "https://marcelokatz.com.ar/wp-content/uploads/2019/06/11-El-diario-de-Ibiza.-Nota-a-M.Katz_-690x946.jpg", href: "https://marcelokatz.com.ar/el-diario-de-ibiza-nota-a-m-katz/" },
  { title: "Revista Mutis por el Foro", image: "https://marcelokatz.com.ar/wp-content/uploads/2019/06/15-Nota-a-M.Katz_.-Revista-Mutis-por-el-Foro.-690x352.jpg", href: "https://marcelokatz.com.ar/nota-a-m-katz-revista-mutis-por-el-foro/" },
  { title: "Clarín — Aguas", image: "https://marcelokatz.com.ar/wp-content/uploads/2019/06/Clarin.-Aguas.-690x623.jpg", href: "https://marcelokatz.com.ar/clarin-aguas/" },
  { title: "Revista Anfibia", image: "https://marcelokatz.com.ar/wp-content/uploads/2019/06/3-reite-de-vos-690x459.jpg", href: "https://marcelokatz.com.ar/reite-de-vos/" },
  { title: "Buenos Aires Económico", image: "https://marcelokatz.com.ar/wp-content/uploads/2019/06/Buenos-Aires-Económico.-Entrevista-a-M.Katz_-690x1202.jpg", href: "https://marcelokatz.com.ar/clases-5/" },
  { title: "El Correo. País Vasco", image: "https://marcelokatz.com.ar/wp-content/uploads/2019/06/16-EL-Correo.-País-Vasco.-2019-690x511.jpg", href: "https://marcelokatz.com.ar/el-correo-pais-vasco-2019/" },
  { title: "Diario Berria. España", image: "https://marcelokatz.com.ar/wp-content/uploads/2019/06/12-Nota-a-Marcelo-Katz-2015-Diario-Berria-690x896.jpg", href: "https://marcelokatz.com.ar/nota-a-marcelo-katz-2015-diario-berria/" },
  { title: "Clarín — Amargo Dulzor", image: "https://marcelokatz.com.ar/wp-content/uploads/2019/06/Clarin.-Amargo-Dulzor-690x551.jpg", href: "https://marcelokatz.com.ar/clarin-amargo-dulzor/" },
  { title: "Diario Clarín. Entrevista", image: "https://marcelokatz.com.ar/wp-content/uploads/2019/06/4-Diario-Clarin.-Entrevista-690x966.jpg", href: "https://marcelokatz.com.ar/diario-clarin-entrevista/" },
  { title: "Buenos Aires Herald — Hazañas", image: "https://marcelokatz.com.ar/wp-content/uploads/2019/06/Buenos-Aires-Herald-Hazañas-690x806.jpg", href: "https://marcelokatz.com.ar/clases-4/" },
  { title: "Diario Clarín — Aires", image: "https://marcelokatz.com.ar/wp-content/uploads/2019/06/7-Diario-Clarin.-Nota-por-espectáculo-Aires.-690x462.jpg", href: "https://marcelokatz.com.ar/diario-clarin-nota-por-espectaculo-aires/" },
  { title: "La Voz del Interior, Córdoba", image: "https://marcelokatz.com.ar/wp-content/uploads/2019/06/8-La-Voz-del-Interior-Córdoba.-2018-690x709.jpg", href: "https://marcelokatz.com.ar/la-voz-del-interior-cordoba-2018/" },
  { title: "Entrevista en Clarín", image: "https://marcelokatz.com.ar/wp-content/uploads/2019/06/10-Marcelo-Katz.-Entrevista-en-Clarin-690x959.jpg", href: "https://marcelokatz.com.ar/marcelo-katz-entrevista-en-clarin/" },
  { title: "«Guillermo Tell» — Página 12", image: "https://marcelokatz.com.ar/wp-content/uploads/2019/06/20-Pagina-12.-guillermo-tell.-690x710.jpg", href: "https://marcelokatz.com.ar/guillermo-tell/" },
  { title: "Diario Z", image: "https://marcelokatz.com.ar/wp-content/uploads/2019/06/capital-de-clowns-690x753.jpg", href: "https://marcelokatz.com.ar/capital-de-clowns/" },
  { title: "Revista Viva — noviembre", image: "https://marcelokatz.com.ar/wp-content/uploads/2019/06/14-Revista-Viva-noviembre-2011_1-690x461.jpg", href: "https://marcelokatz.com.ar/revista-viva-noviembre-2011/" },
  { title: "BAE (Buenos Aires Económico)", image: "https://marcelokatz.com.ar/wp-content/uploads/2019/06/21-M.Katz-en-BAE-Buenos-aires-economico-690x683.jpg", href: "https://marcelokatz.com.ar/m-katz-en-bae-buenos-aires-economico/" },
  { title: "El arte de soñar entre risas", image: "https://marcelokatz.com.ar/wp-content/uploads/2019/06/18-nueva-690x950.jpg", href: "https://marcelokatz.com.ar/el-arte-de-sonar-entre-risas/" },
];

export const metadata = { title: "Prensa" };

export const revalidate = 60;

export default async function PrensaPage() {
  const query = `*[_type == "prensaItem"] | order(order asc, publishedAt desc)`;
  let sanityPrensa = [];
  try {
    sanityPrensa = await sanityClient.fetch(query);
  } catch (error) {
    console.error("Error fetching from Sanity:", error);
  }

  const items = sanityPrensa.length > 0
    ? sanityPrensa.map((doc: any) => ({
        title: doc.title,
        href: doc.href,
        image: doc.image ? urlFor(doc.image).url() : "",
      }))
    : PRENSA;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <header className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-wider text-gray-900 uppercase">
          PRENSA
        </h1>
        <p className="text-gray-500 mt-2 text-sm tracking-wider uppercase">
          Notas y entrevistas completas
        </p>
      </header>

      {/* GALERÍA CON POPUP EN LUGAR DE REDIRECCIÓN */}
      <PrensaGallery items={items} />
    </div>
  );
}

