import calculator from "../assets/portfolio/calculator.png";
import currency from "../assets/portfolio/currency.png";
import drum from "../assets/portfolio/drum-machine.png";
import ping from "../assets/portfolio/ping-pong.png";
import pomodoro from "../assets/portfolio/pomodoro.png";
import preview from "../assets/portfolio/code.png";
import quote from "../assets/portfolio/quote.png";
import weather from "../assets/portfolio/weather.png";
import instagram from "../assets/portfolio/instagram.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: calculator,
      demo: "https://react-calculator-900.pages.dev/",
      code: "https://github.com/El-swaggerito/FCC-react-calculator.git",
      lang: "HTML, CSS, JavaScript",
    },
    {
      id: 2,
      src: currency,
      demo: "https://ac2ea42e.currency-converter-7kr.pages.dev/converter.html",
      code: "https://github.com/El-swaggerito/Currency-Converter.git",
      lang: "HTML, CSS, JavaScript",
    },
    {
      id: 3,
      src: drum,
      demo: "https://fcc-drum-machine.pages.dev/",
      code: "https://github.com/El-swaggerito/FCC-drum-machine.git",
      lang: "ReactTs, Css",
    },
    {
      id: 4,
      src: ping,
      demo: "https://34424a0f.ping-pong-1mc.pages.dev/game.html",
      code: "https://github.com/El-swaggerito/Ping-Pong.git",
      lang: "HTML, CSS, JavaScript",
    },
    {
      id: 5,
      src: pomodoro,
      demo: "https://pomodoro-clock-6qj.pages.dev/",
      code: "https://github.com/El-swaggerito/FCC-25-5-Clock.git",
      lang: "ReactTs, Css",
    },
    {
      id: 6,
      src: preview,
      demo: "https://markdown-previewer-7ur.pages.dev/",
      code: "https://github.com/El-swaggerito/FCC-markdown-previewer.git",
      lang: "ReactTs, Css",
    },
    {
      id: 7,
      src: quote,
      demo: "https://fcc-random-quote-machine-henna.vercel.app/",
      code: "https://github.com/El-swaggerito/FCC-random-quote-machine.git",
      lang: "ReactTs, Css",
    },
    {
      id: 8,
      src: weather,
      demo: "https://d498aec0.weather-app-e7a.pages.dev/weather.html",
      code: "https://github.com/El-swaggerito/Weather-App.git",
      lang: "HTML, CSS, JavaScript",
    },
    {
      id: 9,
      src: instagram,
      demo: "https://instagram-clone-seven-delta.vercel.app/",
      code: "https://github.com/El-swaggerito/Instagram-clone.git",
      lang: "ReactJs, Chakra UI, Firebase",
    },
  ];

  return (
    <>
      <div
        name="portfolio"
        id="Projects"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen h-full sm:h-screen pt-64 max-sm:pt-80"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full max-sm:mt-80">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
            <p className="py-6">Check out some of my work below</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-10 sm:px-0">
            {portfolios.map(({ id, src, demo, code, lang }) => (
              <div
                key={id}
                className="flex flex-col items-center justify-center shadow-md shadow-gray-600 rounded-lg"
              >
                <img
                  src={src}
                  alt={src}
                  className="hover:cursor-pointer rounded-md shadow-gray-600 duration-300 hover:scale-105 max-w-48"
                />

                <div className="flex items-center justify-center">
                  <a href={demo} target="_blank">
                    <button className="w-1/2 px-3 py-3 m-4 duration-200 hover:scale-105">
                      Demo
                    </button>
                  </a>

                  <a href={code} target="_blank">
                    <button className="w-1/2 px-3 py-3 m-4 duration-200 hover:scale-105">
                      Code
                    </button>
                  </a>
                </div>
                <p className="text-center text-gray-500 text-xs">
                  This Project was built using {lang}{" "}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
