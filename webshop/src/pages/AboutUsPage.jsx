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
                  alt="chefpic"
                  src="public/colours.jpeg"
                  className=" h-auto w-[500px] rounded-xl"
                />
              </div>
              <h5>Allmänt om designen - enkelt och UI-säkert formspråk.</h5>
              <p>design 1</p>
              <p>design 2</p>
              <p>design 3</p>
              <h5>Färger</h5>
              <p>nånting om färg 1</p>
              <h5>Font</h5>
              <p>nånting om font 1</p>
              <h5>Kod</h5>
              <p>om kod 1</p>
              <p>om kod 2</p>
              <p>om kod 3</p>
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
              <p>rollfördelning 1</p>
              <p>rollfördelning 2</p>
              <p>rollfördelning 3</p>
              <h5>Arbetsprocess och agil arbetsmetodik - utveckla mycket</h5>
              <p>punkt 1</p>
              <p>punkt 2</p>
              <p>punkt 3</p>
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
              <p>lärdom 1</p>
              <p>lärdom 2</p>
              <p>lärdom 3</p>
              <h5>Vad som fungerade bra?</h5>
              <p>bra grej 1</p>
              <p>bra grej 2</p>
              <p>bra grej 3</p>
              <h5>Vad hade kunnat förbättras?</h5>
              <p>förbättring 1</p>
              <p>förbättring 2</p>
              <p>förbättring 3</p>
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
