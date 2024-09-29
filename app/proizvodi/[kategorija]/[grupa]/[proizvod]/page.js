import ImageWithFallback from "@/components/global/ImageWithFallback";
import { getArticleById } from "@/services/articlesApi";
import Script from "next/script";
import dynamic from "next/dynamic";
import AddToCartButton from "@/components/buttons/AddToCartButton";
import PageHeader from "@/components/global/PageHeader";

const ProizvodPageClient = dynamic(
  () => import("@/components/pages/ProizvodPageClient"),
  {
    ssr: false,
  }
);

export async function generateMetadata({ searchParams }) {
  const { id } = searchParams;
  const article = await getArticleById(id);

  return {
    title: `Proizvod - ${article.naziv.toUpperCase()}`,
    description: `Detalji o proizvodu ${article.naziv.toUpperCase()}. Saznajte više o ovom proizvodu u našoj ponudi.`,
    keywords: article.naziv.toUpperCase().split(" ").join(", "),
    ogTitle: `Proizvod - ${article.naziv.toUpperCase()}`,
    ogDescription: `Detalji o proizvodu ${article.naziv.toUpperCase()}.`,
    ogType: "product",
    ogImage: `https://www.soca.rs/public${article.imageUrl}`,
  };
}

export default async function ProizvodPage({ params, searchParams }) {
  const { id } = searchParams;
  const article = await getArticleById(id);

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: article.naziv,
    image: `https://www.soca.rs/public${article.imageUrl}`,
    description: article.naziv || "Opis proizvoda nije dostupan.",
    sku: article.sifra,
    offers: {
      "@type": "Offer",
      url: `https://www.soca.rs/proizvodi/${params.kategorija}/${params.grupa}/${params.proizvod}`,
      priceCurrency: "RSD",
      price: article.prodajna_cena,
      availability:
        article.kolicina > 0
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        returnPolicyCategory: "https://schema.org/FullRefund",
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "500",
          currency: "RSD",
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "RS",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 1,
            maxValue: 5,
            unitCode: "d",
          },
        },
      },
    },
  };

  const decodeSrcForSeo = (article) => {
    return `https://www.soca.rs/public${article.imageUrl}`;
  };

  return (
    <>
      <Script
        id="application/ld+json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="beforeInteractive"
      />
      <div className="w-full flex flex-col items-center">
        <PageHeader title={`Detalji proizvoda`} description={article.naziv} />
        <div className="mx-auto p-[2rem] sm:p-[4rem]">
          <div className="bg-white shadow-lg rounded-lg p-6 w-[30rem] xsm:w-[40rem]">
            <h1 className="text-3xl font-bold mb-4 text-night text-center md:text-4xl uppercase">
              {article.naziv}
            </h1>
            <div className="mb-4">
              <ImageWithFallback
                width={200}
                height={200}
                src={decodeURIComponent(decodeSrcForSeo(article))}
                alt={`Slika proizvoda ${article.naziv}`}
                styles="rounded-lg shadow-lg mx-auto min-h-[20rem]"
              />
            </div>
            <div className="text-center">
              <p className="mb-4 text-lg md:text-xl uppercase">
                <strong>ŠIFRA:</strong> {article.sifra}
              </p>
              {article.aktivan === 1 ? (
                article.kolicina > 0 ? (
                  <>
                    <p className="text-green-600 font-bold text-xl md:text-2xl mb-2 uppercase">
                      CENA:{" "}
                      {article.prodajna_cena.toLocaleString("sr-RS", {
                        style: "currency",
                        currency: "RSD",
                      })}
                    </p>
                    <AddToCartButton article={article} />
                  </>
                ) : (
                  <>
                    <p className="text-red-600 font-bold text-lg md:text-xl mb-2 uppercase">
                      PROIZVOD NIJE NA STANJU
                    </p>
                    <ProizvodPageClient article={article} />
                  </>
                )
              ) : (
                <p className="text-red-600 font-bold text-lg md:text-xl mb-2 uppercase">
                  DEO NIJE DOBAVLJIV
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
