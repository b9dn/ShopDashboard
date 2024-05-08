import "../styles/stylesSaleChart.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import { useState, useContext, useEffect } from "react";
import { LanguageContext } from "../context/Language";
import { Menu } from "../shared/menu";

const TopChartMenu = ({
  setMiara,
  setZakresCzasu,
  setSposobPrezentacji,
  setCzyOkres,
  miara,
  zakresCzasu,
  sposobPrezentacji,
  czyOkres,
}) => {
  const { languageData } = useContext(LanguageContext);
  const handleMiara = (e) => {
    setMiara(e.target.value);
    localStorage.setItem("miara", e.target.value);
  };

  const handleZakresCzasu = (e) => {
    setZakresCzasu(e.target.value);
    localStorage.setItem("zakresCzasu", e.target.value);
  };

  const handleSposobPrezentacji = (e) => {
    setSposobPrezentacji(e.target.value);
    localStorage.setItem("sposobPrezentacji", e.target.value);
  };

  const handleCzyOkres = (e) => {
    setCzyOkres(e.target.checked);
    localStorage.setItem("czyOkres", e.target.checked);
  };
  return (
    <div id="myForm" className="menu-form">
      <label htmlFor="miara" className="menu-label">
        {languageData["Miara prezentowana"]}:
      </label>
      <div className="selectOption">
        <select
          id="miara"
          name="miara"
          onChange={handleMiara}
          className="menu-select"
          defaultValue={miara}
        >
          <option value="obrot">{languageData["Obrót"]}</option>
          <option value="liczba_sprzedanych_sztuk">
            {languageData["Liczba sprzedanych sztuk"]}
          </option>
        </select>
      </div>
      <label htmlFor="zakresCzasu" className="menu-label">
        {languageData["Zakres czasu"]}:
      </label>
      <div className="selectOption">
        <select
          id="zakresCzasu"
          onChange={handleZakresCzasu}
          name="zakresCzasu"
          className="menu-select"
          defaultValue={zakresCzasu}
        >
          <option value="dzis">{languageData["Dziś"]}</option>
          <option value="obecny_tydzien">
            {languageData["Obecny tydzień"]}
          </option>
          <option value="poprzedni_tydzien">
            {languageData["Poprzedni tydzień"]}
          </option>
        </select>
      </div>

      <label htmlFor="sposobPrezentacji" className="menu-label">
        {languageData["Sposób prezentacji"]}:
      </label>
      <div className="selectOption">
        <select
          id="sposobPrezentacji"
          name="sposobPrezentacji"
          className="menu-select"
          onChange={handleSposobPrezentacji}
          defaultValue={sposobPrezentacji}
        >
          <option value="liniowy">{languageData["Liniowy"]}</option>
          <option value="slupkowy">{languageData["Słupkowy"]}</option>
        </select>
      </div>
      <label
        htmlFor="poprzedniOkres"
        onChange={handleCzyOkres}
        className="menu-label"
      >
        {languageData["Uwzględnij poprzedni okres"]}:
      </label>
      <input
        type="checkbox"
        id="poprzedniOkres"
        name="poprzedniOkres"
        className="menu-input"
        onChange={handleCzyOkres}
        defaultChecked={czyOkres}
      />
    </div>
  );
};

const ChartEmpty = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [],
  };

  const options = {
    maintainAspectRatio: false,
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

const Chart = ({ miara, zakresCzasu, sposobPrezentacji, czyOkres }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
  );
  const { lang, languageData } = useContext(LanguageContext);
  const fontColor =
    document.documentElement.style.getPropertyValue("--fontColor");
  const units = miara === "obrot" ? 100000 : 1000;

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: lang === "pl" ? "Wykres Sprzedaży" : "sales chart",
        color: fontColor,
      },
      legend: {
        labels: {
          color: fontColor,
        },
      },
    },
    scales: {
      y: {
        ticks: {
          color: fontColor,
        },
        type: "linear",
        display: true,
        position: "left",
        min: 0,
        max: units,
      },
      y1: {
        ticks: {
          color: fontColor,
        },
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
        min: 0,
        max: units,
      },
      x: {
        ticks: {
          color: fontColor,
        },
      },
    },
  };

  const hoursLabels = Array.from({ length: 24 }, (_, index) => {
    const formattedHour = index < 10 ? `0${index}` : `${index}`;
    return `${formattedHour}:00`;
  });

  const daysLabels = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const monthsLabels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const period =
    zakresCzasu === "dzis"
      ? hoursLabels
      : zakresCzasu === "obecny_tydzien"
      ? daysLabels
      : monthsLabels;

  const label = czyOkres ? [...period, ...period] : period;

  const dataActualDatePoint = Math.floor(label.length / 2);
  const dataBreakPoint = label.length - 1;

  const dataFinishedPeriod = label.map((_, i) =>
    i <= dataActualDatePoint ? Math.floor(Math.random() * (units + 1)) : null
  );
  const dataOnGoingPeriod = dataFinishedPeriod.map((v, i) =>
    i > dataActualDatePoint && i <= dataBreakPoint
      ? Math.floor(Math.random() * (units + 1))
      : i === dataActualDatePoint
      ? dataFinishedPeriod[i]
      : null
  );

  const data = {
    labels: label,
    datasets: [
      {
        label: languageData["Zakończony okres"],
        data: dataFinishedPeriod,
        borderColor: "rgb(255, 80, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
      },
      {
        label: languageData["Niezakończony okres"],
        data: dataOnGoingPeriod,
        borderColor: "rgba(53, 162, 235, 0.4)",
        backgroundColor: "rgba(53, 162, 235, 0.2)",
        yAxisID: "y1",
      },
    ],
  };

  return (
    <div className="chartContainer">
      {sposobPrezentacji === "liniowy" ? (
        <Line data={data} options={options} />
      ) : (
        <Bar data={data} options={options} />
      )}
    </div>
  );
};

export const SaleChart = ({ logged }) => {
  const { lang } = useContext(LanguageContext);
  const initMiara =
    localStorage.getItem("miara") || (lang === "pl" ? "Obrót" : "Turnover");
  const initZakres =
    localStorage.getItem("zakresCzasu") || (lang === "pl" ? "Dzis" : "Today");

  const [miara, setMiara] = useState(initMiara);
  const initPrezentacja =
    localStorage.getItem("sposobPrezentacji") || "liniowy";

  const initOkres = localStorage.getItem("czyOkres") || false;

  const [zakresCzasu, setZakresCzasu] = useState(initZakres);
  const [sposobPrezentacji, setSposobPrezentacji] = useState(initPrezentacja);
  const [czyOkres, setCzyOkres] = useState(initOkres);

  return (
    <>
      <TopChartMenu
        miara={miara}
        zakresCzasu={zakresCzasu}
        sposobPrezentacji={sposobPrezentacji}
        czyOkres={czyOkres}
        setMiara={setMiara}
        setZakresCzasu={setZakresCzasu}
        setSposobPrezentacji={setSposobPrezentacji}
        setCzyOkres={setCzyOkres}
      />
      {logged ? (
        <Chart
          miara={miara}
          zakresCzasu={zakresCzasu}
          sposobPrezentacji={sposobPrezentacji}
          czyOkres={czyOkres}
        />
      ) : (
        <ChartEmpty />
      )}
    </>
  );
};
