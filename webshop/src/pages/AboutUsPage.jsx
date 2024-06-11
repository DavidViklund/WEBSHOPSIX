const aboutUsPage = () => {
  return (
    <div className=" max-w[1440px] flex justify-center sm:px-4 md:px-8 lg:px-40">
      <div className=" flex flex-col gap-16 justify-start">
        <div className=" flex flex-col items-center gap-4">
          <h1 className=" text-primary-text-label font-semibold">HaulMart</h1>
          <div className=" flex gap-4 flex-wrap">
            <h4>David</h4> <h4>Frida</h4> <h4>Jonas</h4> <h4>Joakim</h4>{" "}
            <h4>Filippa</h4>
          </div>
        </div>
        <div className=" flex flex-col gap-32">
          <div className=" flex flex-col gap-4">
            <h3>Design</h3>
            <div className=" flex flex-col gap-2">
              <div>
                <img
                  alt="designbeslut"
                  src="public/design2.jpeg"
                  className=" h-auto w-[500px] rounded-xl"
                />
              </div>
              <h5>Allmänt om designen</h5>
              <p>Enkelt och UI-säkert</p>
              <p>Använde färdigt designsystem</p>
              <p>Figma som ritning</p>
              <h5>Färger</h5>
              <p>Mindre kognitiv belastning</p>
              <p>Tydligt CTA</p>
              <p>Varje färg har ett syfte</p>
              <h5>Font</h5>
              <p>Hög läsbarhet</p>
              <p>Ökad prestanda</p>
              <p>Visuell hiearki</p>
              <h5>Kod</h5>
              <p>Styling med tailwind</p>
              <p>Sorterat i mappar</p>
              <p>Följa Sagas praxis</p>
            </div>
          </div>
          <div className=" flex flex-col gap-4">
            <h3>Vår metod</h3>
            <div>
              <img
                alt="militarypic"
                src="public/military.jpg"
                className=" h-auto w-[500px] rounded-xl"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <h5>Rollfördelning</h5>
              <p>Scrum-master</p>
              <p>Figma-master</p>
              <p>Sekreterare</p>
              <p>Alla bidrog med kod!</p>
              <h5>Arbetsprocess och agil arbetsmetodik - utveckla mycket</h5>
              <p>GitHub - Kanban</p>
              <p>MVP!</p>
              <p>Agilt arbete</p>
              <p>Sprint - retro</p>
              <p>Daglig stand-up</p>
            </div>
          </div>
          <div className=" flex flex-col gap-4">
            <h3>Lärdomar</h3>
            <div>
              <img
                alt="chefpic"
                src="public/chefs.jpg"
                className=" h-auto w-[500px] rounded-xl"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <h5>Vilka lärdomar tar vi med oss?</h5>
              <p>M.I.O.S!</p>
              <p>Inte jaga perfektion</p>
              <p>Grupparbete i github</p>
              <p>Återanvända kod</p>
              <h5>Vad som fungerade bra?</h5>
              <p>Tydlig grundstruktur</p>
              <p>Bra gruppdynamik</p>
              <p>Rolig uppgift</p>
              <h5>Vad hade kunnat förbättras?</h5>
              <p>Inte mapp i en mapp!</p>
              <p>Släpp inte garden!</p>
              <p>Designen!</p>
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
