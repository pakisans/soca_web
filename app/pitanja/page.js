import Accordion from "@/components/global/Accordion";
import PageHeader from "@/components/global/PageHeader";
import { faqData } from "@/lib/faqData";
import Link from "next/link";

export const metadata = {
  title: "Često postavljana pitanja - SOĆA Servis Novi Sad",
  description:
    "Pročitajte odgovore na često postavljana pitanja o uslugama SOĆA Servisa. Pronađite korisne informacije i savete.",
  keywords: "često postavljana pitanja, FAQ, SOĆA Servis, saveti",
};

const Faq = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.flatMap((category) =>
      category.questions.map((question) => ({
        "@type": "Question",
        name: question.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: question.answer,
        },
      }))
    ),
  };

  return (
    <>
      <script
        id="application/ld+json-pitanja"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="bg-gray-50 text-night">
        <PageHeader
          title={"Saveti i često postavljana pitanja"}
          description={
            "Dobrodošli na stranicu sa često postavljanim pitanjima."
          }
        />
        <div className="py-[2rem] px-[4rem]">
          <section className=" bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <p className="text-lg leading-7 mb-8">
              Ovde možete pronaći odgovore na najčešća pitanja naših korisnika.
              Ako ne pronađete odgovor koji tražite, slobodno nas kontaktirajte
              putem{" "}
              <Link
                href="/o-nama-i-kontakt"
                className="text-blue-500 hover:text-blue-700"
              >
                kontakt forme
              </Link>
              .
            </p>
          </section>
          <section className="">
            <Accordion
              title={
                "Šporeti - Ugradne rerne - Ugradne ploče - Indukcijske ploče"
              }
              childrens={[
                {
                  subtitle:
                    '"Ne peče dobro rerna odole. Da li mi treba majstor za šporet?"',
                  text: "Kod novijih modela šporeta i ugradnih rerni zasebno se bira temperatura, a zasebno način pečenja. Proverite koju ste funkciju odabrali.",
                },
                {
                  subtitle:
                    '"Rerna ne radi uopšte! Lampice sijaju neke, ali ne radi ništa! Možete poslati servisera, molim vas?"',
                  text: "Kod nekih modela šporeta i ugradnih rerni postoji funkcija odloženog starta (programiranje rada preko sata). Kod tih modela MORA se podesiti sat (tačno vreme), kao i sa automatskog rada promenuti na ručno upravljanje rernom. Za detalje konsultujte korisničko uputstvo.",
                },
                {
                  subtitle:
                    '"Posle korišćenja ostaju fleke na staklo keramičkoj ploči (indukcijskoj ploči)?',
                  text: "Za staklokeramičke ploče, indukcijske ploče – koristiti kvalitetna hemijska sredstva za čišćenje (najsigurniji su proizvodi koje preporučuje sam proizvođač uređaja), koja ne smeju biti agresivna. Koristiti zaštitni krem za održavanje – on služi za LAKŠE naknadno čišćenje, tj. za teže prljanje ploče. Za uklanjanja mehaničkih nečistoća koristiti strugač stakla SCRAPER od Electrolux-a (šifra za poručivanje 201.00.000)",
                },
                {
                  subtitle:
                    '"Prosut šećer (ili so) na glas-keramik ploču, zalepilo se za staklo i ne mogu da uklonim ..."',
                  text: 'Obratite pažnju da šećer ili so ne dođu na površinu staklokeramičke ploče dok je vrela. S obzirom da su SVI pominjani materijali strukture kristala – dolazi do otapanja i sjedinjavanja u jedinstvenu materiju - što stvara ispupčenja i neravnine. Ukoliko kasnije koristite strugač, "topljena i sjedinjena mesta" su najslabija, pa možete te delove da "istrgnete", a time i deo stakla, nakon čega na tim mestima ostaje udubljenje (fali parče materijala). Greška je u celosti korisnička, a otklanja se jedino zamenom cele ploče. Preventiva je ne dozvolite da značajnije količine šećera ili soli se nađu na vreloj površini glas-keramik ploča!',
                },
                {
                  subtitle:
                    '"Fleke na inox elementima kuhinje (ploča, vrata rerne, vrata frižidera)"',
                  text: "Preporučuje se korišćenje sredstava za održavanje INOX-a STEEL CARE (šifra za poručivanje je 925.26.003)",
                },
                {
                  subtitle: '"Ne mogu da očistim rernu!"',
                  text: "koristiti kvalitetna hemijska sredstva za čišćenje (najsigurniji su proizvodi koje preporučuje sam proizvođač uređaja), koja ne smeju biti agresivna. Preporučujemo vam Electrolux-ov VITRO CARE (šifra za poručivanje 925.26.002)",
                },
              ]}
            />
          </section>

          <section className="">
            <Accordion
              title={"Veš mašine - Upotreba i održavanje"}
              childrens={[
                {
                  subtitle:
                    '"Skameni se deterdžent u posudi (ladici) za prašak"',
                  text: "Deterdžent za pranje veša stavljati tik pred uključenje mašine (da se ne 'ugrudva'). U dozirnu posudu stavljati maksimalno 2/3 deterdženta (od ukupne zapremine posude), ili manje – po preporuci proizvođača, pogotovo za nove KOMPAKT praškove. Time se izbegava prelivanje iz posude i plavljenje. Takođe, manjom količinom deterdženta se obezbeđuje bolje ispiranje (rešavate problem neispranih belih fleka i mrlja na tamnoj odeći), kao i manje zagađenje okoline (remember, EU?).",
                },
                {
                  subtitle: '"Mašine neće da izbaci vodu!"',
                  text: "Filter čistiti redovno (koliko često zavisi od konstrukcije istog, odnosno zavisi od preporuka proizvođača). Kod novijih aparata se ne mora čisti češće od 3 meseca, ali kod starih modela se obavezno čisti i na 7 dana. Ovo prouzrokuje najviše komplikacija u radu, a dužnost je i obaveza korisnika.",
                },
                {
                  subtitle: '"Veš mašina ne radi centrifugu"',
                  text: "Lista kvarova je zaista pozamašna ali osnovni pokazatelj je loše ispran veš, zaostala voda, neisceđen veš i neiscentrifugiran veš",
                },
                {
                  subtitle: '"Loše ispran veš"',
                  text: "Prevelika količina veša loše utiče na kvalitet 'prevrtanja', što je zapravo suština pranja, ujedno zbog nemogućnosti raspoređivanja veša, utiče i na povećano gužvanje rublja.",
                },
                {
                  subtitle: '"Veš je jako izgužvan"',
                  text: "I premala i prevelika količina veša može da bude uzrok 'skakanja' veš mašine jer rublje ne može da se ujednačeno rasporedi po celom obodu bubnja (previše ili premalo), pa se 'posvađaju' centrifugalna i centripetalna sila.",
                },
                {
                  subtitle: '"Mašina skače"',
                  text: "U slučajevima 'klizavog' poda (podloge), ili nedovoljno ravnog poda preporučujemo da postavite ANTI-VIBRACIONE STOPICE koje obezbeđuje Electrolux (šifra za poručivanje 102.00.022), kao i u slučajevima kada se mašina za sušenje postavlja na veš mašinu",
                },
                {
                  subtitle: '"Problem kamenca"',
                  text: "U zavisnosti od strukture vode, kamenac MNOGO utiče na kvalitet rada i vek trajanja komponenti kao i uređaja u celosti. Preporučuje se korišćenje sredstava za uklanjanje kamenca DESCALER (šifra za poručivanje – 925.00.005), ANTI-SCALE DEVICE (šifra za poručivanje 107.00.003) ili drugi proizvodi iz programa Electrolux-a",
                },
                {
                  subtitle: '"Neprijatni miris iz veš mašine"',
                  text: "Preporučuje se korišćenje sredstava za čišćenje i pranje veš mašine. Jedno od njih je Calc Buster (od istoimenog proizvođača, šifra za poručivanje - 920.00.038) ili CLEAN&CARE (šifra za poručivanje 925.26.007) efikasno uklanjaju i kamenac i neprijatne mirise iz veš mašina i mašina za suđe",
                },
              ]}
            />
          </section>

          <section className="">
            <Accordion
              title={"Mašine za suđe - Upotreba i održavanje"}
              childrens={[
                {
                  subtitle: '"svaki čas mi se pale neke CRVENE LAMPICE"',
                  text: "Da bi sudo mašina radila kvalitetno i efikasno, potrebno je pripremiti i dodati SO i SJAJ. So služi za regeneraciju sistema za odmekšavanje vode, a sjaj finiširanje pranja (nalik funkciji oplemenjivača kod veš mašina). Potrebno je uneti punu količinu (oko 1,5kg soli i oko 0,5dl sjaja) koja u zavisnosti od podešene potrošnje je za 20 do 30 pranja.",
                },
                {
                  subtitle:
                    '"Loše mi je oprano suđe. Da li da naručim da dođe majstor za mašinu na adresu?"',
                  text: "Deterdžent za mašinu za sudove i sjaj koristite ISKLJUČIVO od ISTOG proizvođača – najsigurniji rezultati. Kada se 'pomešaju' proizvođači dešava se pojava pene i lošeg ispiranja.",
                },
                {
                  subtitle: '"Korišćenje tableta za pranje"',
                  text: "Ako koristite tablete za pranje (3 u 1, 4 u 1, ALL in ONE ...) umesto klasičnog puder praška - OBAVEZNO koristiti programe '3 u 1', u suprotnom se tableta neće dobro otopiti i rezultati pranja su loši. Isto se dešava sa programima ispod 50°C – tableta se ne može razgraditi. Za programe ispod 50°C, preporuka je koristiti druga sredstva za pranje. Pri korišćenju tableta u mašinama za suđe za 8 ili 9 setova (45cm širine) – nomalno je da se tableta ne rastvori uvek u celosti, jer je tableta dimenzionisana za mašine kapaciteta 12-14 setova suđa (60cm širine!)",
                },
                {
                  subtitle: '"Pravilno složeno suđe"',
                  text: "Ispravno složiti suđe (princip je da može da se ocedi) i ne pretrpavati ga. Kao i na veš mašini veoma je bitno redovno čistiti filtere.",
                },
                {
                  subtitle: '"Uticanje kamenca na kvalitet rada"',
                  text: "U zavisnosti od kvaliteta vode, kamenac MNOGO utiče na kvalitet rada i vek trajanja komponenti kao i aparata u celosti. Preporučuje se korišćenje sredstava za uklanjanje kamenca DESCALER (šifra za poručivanje – 925.00.005), ANTI-SCALE DEVICE (šifra za poručivanje 107.00.003) ili drugi proizvodi autorizovanog porekla (Electrolux, Franke ... )",
                },
                {
                  subtitle: '"Uklanjanje neprijatnih mirisa"',
                  text: "Preporučuje se korišćenje sredstava za čišćenje i pranje mašine za sudove. Jedno od njih je Calc Buster ( od istoimenog proizvođača, šifra za poručivanje - 920.00.038) ili CLEAN&CARE (šifra za poručivanje 925.26.007) efikasno uklanjaju kamenac i neprijatne mirise iz veš mašina i mašina za suđe. Za uklanjanje neprijatnih mirisa preporučuje se FRESH PLUS DISHWASHERS (šifra za poručivanje 720.00.002).",
                },
              ]}
            />
          </section>

          <section className="">
            <Accordion
              title={"Mašine za sušenje - Upotreba i održavanje"}
              childrens={[
                {
                  subtitle:
                    '"Zašto mi sušara tako loše suši? Da li treba da naručim majstora za sušaru?"',
                  text: "Ono što je OSNOVNA obaveza korisnika kod mašine za sušenje veša jeste da redovno čisti filtere, prednji (najčešće u vratima) za SVAKO sušenje, a ostale periodično na desetak ciklusa (ili kako je proizvođač preporučio). U zavisnosti od intenziteta korišćenja uređaja (nakon približno 400-500 ciklusa korisćenja, 2 do 4 godine) - POŽELJNO je pozvati servis da očisti uređaj – time se ponovo podiže efikasnost sušenja, smanjuje se verovatnoća zaostalih 'pufnastih' trinjica i ostataka na vešu koji se raspada, rasterećuje se funkcionalnost komponenti (ventilatori, grejač) i vraća protok vazduha sušari, produžava vek trajanja celog uređaja, a i smanjuje potrošnja električne energije.",
                },
                {
                  subtitle:
                    '"U prodavnici su mi rekli da neću ništa peglati, a ja peglam i više i teže!"',
                  text: "Ne stavljajte previše veša – u protivnom mimo lošeg sušenja ćete imati i povećan efekat gužvanja (pa morate peglati, pa ste opet na početku ...). Veće količine veša sušite razdvojeno po debljini i strukturi – brže će se osušiti, zbirno ćete manje struje potrošiti. Veš ODMAH nakon sušenja izvadite iz sušare, i raširenog ga ostavite da se ohladi – nećete gotovo NIŠTA morati peglati.",
                },
                {
                  subtitle:
                    '"Korišćenje loptica za rastresanje veša u sušarama"',
                  text: "Ako ste u situaciji da često morate koristiti punu sušaru, koristite loptice za rastresanje veša u sušarama, tzv. DRYER BALLS (šifra za poručivanje 606.00.001). Ove loptice pomažu da se veš ne zgužva tokom sušenja, olakšavajući time proces peglanja.",
                },
              ]}
            />
          </section>

          <section className="">
            <Accordion
              title={"Usisivači - Efikasnost i održavanje"}
              childrens={[
                {
                  subtitle:
                    '"Usisvač slabo vuče, a skoro je nov!. Da li usisvač treba odneti u servis?"',
                  text: "Platnena kesa se vremenom zasiti prašinom, pa slabo propušta ulazni vazduh, a sa druge strane, propušta prašinu na izduvu motora. Papirne kese kada se napune do 50% zapremine, usisvač drastično smanji moć usisavanja, a kesa lako može da se raspukne. To je trostruka šteta - papirna kesa kratkog veka, sva prašina koju smo usisali je izašla na drugi kraj usisivača, a ukoliko se raspadne kesa sadržaj kese će ući u motor koji će stradati. OVO je najčešći uzrok kvara motora na usisivaču, kako u garanciji tako i nakon garancije.",
                },
                {
                  subtitle: '"Preporučeni tipovi kesa i filteri"',
                  text: "Koristite ORIGINALNE tj. KVALITETNE kese i filtere (REDOVNO ih čistite, ako su u pitanju trajni filteri). PREPORUČUJEMO VAM kese za usisivač koje jesu za jednokratnu upotrebu kao papirne, ali koje se mogu 'puniti' do 80% zapremine, a zadržavaju mirise kao i prašinu u sebi, niti se mogu 'raspasti', pa finansijski gledano su više nego duplo jeftinije od papirnih ili platnenih kesa. Ako uračunamo verovatnoću stradanja motora – neuporedive su! U pitanju su kese od sintetičkog materijala - DURAFLOW. To je materijal izuzetno visoke moći filtracije, fantastične propustljivosti vazduha, gde se u pakovanju kesa dobija i filter za motor.",
                },
                {
                  subtitle: '"Servisiranje i održavanje usisivača"',
                  text: "Periodično usisivač odnesite u servis na čišćenje. Time ćete produžiti radni vek uređaja, a korišćenje učiniti kvalitetnijim, efikasnijim i prijatnijim. Kvalitet i intenzitet usisavanja jednako određuje kvalitetna papučica i crevo (prijanjanje za podlogu, zglob za pristupačnost) i snaga vakuma, a ne električna snaga motora (motor 2000w, npr.). Pri kupovini, tražite od prodavca da vam da podatak kolika je snaga usisavanja, a ne kolika je snaga motora!",
                },
                {
                  subtitle:
                    '"Problemi sa izduvavanjem prašine i neprijatnim mirisima"',
                  text: "Pri korišćenju pola onog što usisa, usisivač izduva napolje, a miris je jako neprijatan i težak! Pročitajte SVE gore napisano o kesama i filterima usisivača!",
                },
              ]}
            />
          </section>

          <section className="">
            <Accordion
              title={"Kafe aparati - Održavanje za bolji ukus"}
              childrens={[
                {
                  subtitle:
                    '"Kafa iz mog kafe-aparata je ružnog ukusa. Šta da radim?"',
                  text: "Da biste pili lepu kafu – morate održavati kafe aparat! Neophodno je da po preporuci proizvođača periodično očistite kafe aparat od kamenca (tablete za otklanjanje kamenca, šifra za poručivanje je 920.00.032). Takođe, automatske kafe aparate periodično treba čistiti od masnoća kafe i drugih ostataka - adekvatnim tabletama (šifra za poručivanje 520.26.002).",
                },
                {
                  subtitle: '"Kafa je neprijatnog mirisa"',
                  text: "Pored redovnog čišćenja od kamenca i masnoća, bi bar jednom godišnje trebali aparat doneti u servis na čišćenje koje podrazumeva detaljno rastavljanje i pranje – prvenstveno kao higijensko-zdravstveno čišćenje, a zatim i zbog lepšeg ukusa i boljeg ugođaja u konzumiranju kafe.",
                },
              ]}
            />
          </section>

          <section className="">
            <Accordion
              title={
                "Frižideri - Kombinovani frižideri - Zamrzivači - Frižideri Side by Side"
              }
              childrens={[
                {
                  subtitle:
                    '"Frižider otapan, malo pomagao nožem ... i samo krenulo da se čuje: pšššššššš ?"',
                  text: 'Nikako ne radite "ubrzavanje" otapanja leda oštrim predmetima, postoji velika opasnost probijanja sistema cevi i verovatnoće da rashladna tečnost (freon) "iscuri", već treba pustiti da se prirodnim putem otopi, eventualno otapanje pomoći toplom vodom.',
                },
                {
                  subtitle:
                    '"Treba mi BRZO hlađenje, termostat je na maksimumu, ali frižider i dalje sporo i slabo hladi. Da li da pozovem servis za frižider?"',
                  text: "Termostat na aparatima ne držati na maksimumu, već izmedju 1/3 do 2/3 u zavisnosti od željene postignute temperature (razlika od maksimuma do minimuma je relativno mala, a sam položaj termostata ne utiče na brzinu hladjenja, već samo na krajnju dostignutu temperaturu.",
                },
                {
                  subtitle:
                    '"Zamrzivač je napunjen svežim mesom, uključen je SUPER prekidač (sijaju i crvena i žuta lampica), i posle 10 sati rada i dalje sija "žuta lampica". Da li je zamrzivač pokvaren?"',
                  text: 'Funkciju "SUPER-a" aktivirati minimalno 24h pre unosa sveže hrane da bi zamrzivač postigao što nižu temperaturu, i nakon unosa sveže hrane uprosečivanjem temperature što pre zamrzao novi sadržaj. U protivnom nema svrhe aktiviranja prekidača. SVI kućni uređaji rade ISTOM brzinom hlađenja, menja se samo krajnja temperatura koju treba da postigne. Sa druge strane, ako ne isključite ovu funkciju uređaj će raditi neprestano.',
                },
                {
                  subtitle: '"Neprijatni mirisi, samootapajućeg frižidera"',
                  text: "Bez obzira na automatski rad i funkcje samootapanja kako frižidera, tako i zamrzivača, preporuka je da se uređaj periodično isključi i otopi zbog higijenskog održavanja. Rashladni aparati koji imaju filtere mirisa i sl. (npr. Electrolux-ov AIR FILTER FOR REFRIGERATOR - šifra za poručivanje 814.26.001), treba da se po preporuci proizvođača proveravaju i menjaju, jer apsorpcijom mirisa vremenom postaju izvor neprijatnih mirisa i zaraze. Unutrašnjost aparata, takođe treba periodično prati i očistiti sredstvima adekvatnim za rashladne uređaje (preporuka za REFRIGERATOR CLEANER - šifra za poručivanje 925.26.004)",
                },
              ]}
            />
          </section>

          <div className="mx-auto w-fit flex flex-col md:flex-row items-center gap-y-10 gap-x-40 mt-[1rem]">
            <p className="text-night font-semibold text-[2.2rem] leading-[3.2rem] mt-[1rem] bg-gray-100 shadow-lg rounded-lg p-6">
              Niste pronašli odgovor koji ste tražili? <br />
              Tu smo da pomognemo! <br /> Kontaktirajte nas za ličnu asistenciju
              i <br />
              odgovore na pitanja u vezi sa vašim uređajima.
            </p>
            <Link
              className="text-mintCream text-center bg-gradient-to-r from-gray-700 rounded-tr-xl rounded-bl-xl to-gray-900 p-10 font-bold hover:text-offRed text-[3.2rem]"
              href={"/o-nama-i-kontakt"}
            >
              Kontaktirajte nas
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
