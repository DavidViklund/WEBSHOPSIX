//Vår presentationssida
const aboutUsPage = () => {
  return (
    <div className=" flex justify-center px-4 md:px-8 lg:px-40">
      <div className="flex flex-col gap-16 justify-start">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-primary-text-label font-semibold">HaulMart</h1>
          <div className="flex gap-4 text-center flex-wrap items-center justify-center">
            <h4>David</h4> <h4>Frida</h4> <h4>Jonas</h4> <h4>Joakim</h4>{" "}
            <h4>Filippa</h4>
          </div>
        </div>
        <div className="flex flex-col gap-32">
          <div className="flex flex-col gap-4">
            <h3>Design</h3>
            <div className="flex flex-col gap-8 max-w-[500px]">
              <div>
                <img
                  alt="designbeslut"
                  src="public/assets/design2.jpeg"
                  className="h-auto w-[500px] rounded-xl"
                />
              </div>
              <div className=" flex flex-col gap-2">
                <h5>Allmänt om designen</h5>
                {/*  <p>
                  Vi har strävat efter en enkel och UI-säker design. Se <br />
                  <a
                    href="https://www.figma.com/design/AjypPMUpBTH4BmJbJsJeW6/wireframe?node-id=0-1&t=zo5q35sq6M3VUGny-1"
                    target="_blank"
                    className=" text-base font-bold "
                  >
                    Figma-filen
                  </a>{" "}
                  för utförlig motivering.
                </p> */}
                <li className="font-bold">Enkelt och UI-säkert</li>
                <li className="font-bold">Använde färdigt designsystem</li>
                {/* <p>Tack vare ett befintligt editerbart designsystem
                kunde vi snabbt komma igång med designen och implementera
                vårga färger, fonter etc.
              </p> */}
                <li className="font-bold">Figma som ritning</li>
                {/* <p>
                  Alla designskisser skapades i Figma och översattes därefter
                  till Tailwind. Det var smidigt att ha all info i Figmafilen
                  men något utmanande att översätta för en del. Jonas hade tex
                  preppat variabler för att underlätta letandet.
                </p> */}
              </div>
              <div className=" flex flex-col gap-2">
                <h5>Färger</h5>
                <li className="font-bold">Mindre kognitiv belastning</li>
                {/* <p>
                Färgval gjordes för att minimera användarens kognitiva
                belastning.
              </p> */}
                <li className="font-bold">Tydligt CTA</li>
                {/* <p>
                Vi använde vår primära färg strategiskt för att framhäva viktiga
                åtgärder (CTA) och undvika konkurrens med andra färger.
              </p> */}
                <li className="font-bold">Varje färg har ett syfte</li>
                {/* <p>
                Färgerna valdes för att ha specifika funktioner som är tydliga
                för användaren.
              </p> */}
              </div>
              <div className=" flex flex-col gap-2">
                <h5>Font</h5>
                <li className="font-bold">Hög läsbarhet</li>
                {/* <p>
                Vi använde fonterna Montserrat och Roboto. Båda har raka linjer
                och mjuka former, vilket gör dem lättlästa. 
                Här la vi till en lineheight som främjar läsbarheten och matchar vårt
                spacingsystem. 
              </p> */}
                <li className="font-bold">Ökad prestanda</li>
                {/*  <p>
                Vi valde en font som inte belastar prestandan, utan som laddas
                direkt i moderna webbläsare.
              </p> */}
                <li className="font-bold">Visuell hiearki</li>
                {/* <p>Typsnitten stödjer en tydlig visuell hierarki.</p> */}
              </div>
              <div className=" flex flex-col gap-2">
                <h5>Kod</h5>
                <li className="font-bold">Styling med tailwind</li>
                {/*  <p>
                Vi använde Tailwind CSS för snabb och enkel styling baserat på
                våra Figma-skisser.
              </p> */}
                <li className="font-bold">Sorterat i mappar</li>
                {/* <p>Koden är organiserad i strukturerade mappar.</p> */}
                <li className="font-bold">Följa Sagas praxis</li>
                {/* <p>
                Vi följde bästa praxis enligt hennes riktlinjer, inklusive
                användning av arrow functions, korrekta importer/exporter,
                återanvändbar och modulär kod, samt minimal kodmängd.
              </p> */}
                <li className="font-bold">Parkodning</li>
                {/* <p>
                Vi varierade mellan grupparbete, parkodning och enskilt arbete
                beroende på behov.
              </p> */}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 max-w-[500px]">
            <h3>Vår metod</h3>
            {/* <p>
              Parkodning var särskilt bra när vi skulle pusha upp i början,
              kontrollera vilken gren vi var på och, mest nervöst av allt, pusha
              upp till main. Därför hade vi i början en person som ansvarade för
              alla pull requests. När viktiga ändringar skulle göras hjälpte vi
              varandra att dubbelkolla. Med tiden blev vi mer självsäkra!
            </p> */}
            <div>
              <img
                alt="militarypic"
                src="public/assets/military.jpg"
                className="h-auto w-[500px] rounded-xl"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <h5>Rollfördelning</h5>
              <li className="font-bold">Scrum-master: David</li>
              <li className="font-bold">Figma-master: Jonas</li>
              <li className="font-bold">Sekreterare: Frida</li>
              <li className="font-bold">Alla bidrog med kod!</li>
            </div>
            <div className=" flex flex-col gap-2">
              <h5>Arbetsprocess och agil arbetsmetodik</h5>
              <li className="font-bold">GitHub - Kanban</li>
              {/* <p>
                Vi använde GitHub med Kanban för att organisera vårt arbete.
                Varje morgon gick vi igenom status, delade upp och prioriterade
                nya issues.
              </p> */}
              <li className="font-bold">MVP!</li>
              {/* <p>
                Från första dagen bestämde vi oss för att MVP (minimum viable
                product) var vägen att gå. Allt som inte ingick i VG-kraven
                skulle in på en "övrigt"-lista. Det hjälpte oss att prioritera
                vad som var viktigt och vad som var fint att ha.
              </p> */}
              <li className="font-bold">Agilt arbete</li>
              {/* <p>
                Sprintar, retrospektiv och dagliga stand-ups för att hålla koll
                på framstegen. Vi reviderade alltid dagsplan och sprintplan
                efter behov och förmåga. Hände det något kastade vi om så det
                passade alla.
              </p> */}
            </div>
          </div>
          <div className="flex flex-col gap-8 max-w-[500px]">
            <h3>Lärdomar</h3>
            <div>
              <img
                alt="chefpic"
                src="public/assets/chefs.jpg"
                className="h-auto w-[500px] rounded-xl"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <h5>Vilka lärdomar tar vi med oss?</h5>
              <li className="font-bold">Inte för många kockar!</li>
              {/* <p>
                Vi var tydliga från start att det skulle vara ordning i gruppen.
                Alla ansvarade för att skapa och kontrollera korrekta grenar.
                Ingen gick in i en annans kod utan att kolla med personen först.
                Allt löstes inte samtidigt utan i prioritetsordning.
              </p> */}
              <li className="font-bold">Inte jaga perfektion</li>
              {/*  <p>
                Alla har varit duktiga på att inte fastna i detaljer utan
                fokusera på att slutföra projektet. Det var nyttigt för oss alla
                att öva på att arbeta med begränsningar som liknar verkliga
                projekt där tid, kvalitet och kostnad styr. Till exempel har du kanske inte
                budget för fancy features eller tid att finjustera designen.
              </p> */}
              <li className="font-bold">Grupparbete i GitHub</li>
              {/* <p>
                Superbra och effektivt att samarbeta på GitHub. Efter det här
                projektet flyter det på bra.
              </p> */}
              <li className="font-bold">Återanvända kod</li>
              {/* <p>
                Koden bör vara modulär och återanvändbar. Man tager vad man
                haver och lånar det som fattas.
              </p> */}
            </div>
            <div className=" flex flex-col gap-2">
              <h5>Vad som fungerade bra?</h5>
              <li className="font-bold">Tydlig grundstruktur</li>
              {/* <p>
                En stark grundstruktur från början gjorde arbetet smidigare. Vi
                mappade upp hela grundstrukturen med alla komponenter och sidor
                vi kunde komma på och döpte allt. När det väl började kodas
                stämde namnen med det som producerades.
              </p> */}
              <li className="font-bold">Bra gruppdynamik</li>
              {/* <p>
                Samarbetet i gruppen fungerade utmärkt. Tydlig och rak
                kommunikation. Hjälpsamhet. Alla hade liknande ambitionsnivå och
                jobbade på!
              </p> */}
              <li className="font-bold">Rolig uppgift</li>
              {/* <p>
                Projektet var roligt och lärorikt. Bra med en konkret och tydlig
                webshop.
              </li> */}
            </div>
            <div className=" flex flex-col gap-2">
              <h5>Vad hade kunnat förbättras?</h5>
              <li className="font-bold">Inte mapp i en mapp!</li>
              {/* <p>
                När vi skulle städa upp kodstrukturen blev det fel i Netlify,
                men vi kom runt det. Däremot kommer vi inte göra samma misstag i
                framtida projekt.
              </p> */}
              <li className="font-bold">Släpp inte garden!</li>
              {/* <p>
                Var noggrann genom hela projektet. Vi började slappna av lite
                mot slutet och då uppstod några småkonflikter i koden.
              </p> */}
              <li className="font-bold">Designen!</li>
              {/* <p>
                Den behövde förbättras och itereras. När man designar i Figma
                ska man ha koden i åtanke, så att ritningen kan översättas
                bättre till kod. Till exempel: Vikten av att designa utifrån befintlig data för att se 
                hur långa texter etc kan vara i din design. Den hade också kunnat bli lite roligare..
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutUsPage;

/* 
Motiveringar kring designbeslut gällande kod och design
Beskrivning av arbetsprocessen och rollfördelningen i gruppen
Utvärdering av den agila arbetsmetodiken och vad ni har lärt dig av projektet
Vad som fungerade bra och vad som kunnat förbättrats 
*/
