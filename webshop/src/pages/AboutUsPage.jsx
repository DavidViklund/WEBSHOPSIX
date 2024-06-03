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
        <div className=" flex flex-col gap-8">
          <div>
            <h3>Vår metod</h3>
            <p>Text om teamet - rollfördelning, agila arbetsprocessen</p>
          </div>
          <div>
            <h3>Design</h3>
            <p>Text om designbeslut</p>
          </div>
          <div>
            <h3>Lärdomar</h3>
            <p>
              Text om lärdomar, vad som fungerade bra och vad som kan förbättras
            </p>
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
