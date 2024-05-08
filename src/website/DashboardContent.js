import "../styles/stylesShared.css";
import "../styles/stylesDashBoard.css";
import { Orders } from "../Dashboard/Orders";
import { Opinions } from "../Dashboard/Opinions";
import { Offer } from "../Dashboard/OffertRanking";
import { Quality } from "../Dashboard/SaleQuality";
import { SaleChart } from "../Dashboard/SaleChart";
import { fakeAuthProvider } from "../auth";

export const Content = () => {
  const logged = fakeAuthProvider.isAuthenticated;

  return (
    <div className="content">
      <div className="topContent">
        <div>
          <div id="boxQuality">
            <Quality logged={logged} />
          </div>
        </div>
        <div>
          <div id="boxOrders">
            <Orders logged={logged} />
          </div>
        </div>
        <div className="holder">
          <div id="boxOpinion">
            <Opinions logged={logged} />
          </div>
        </div>
      </div>
      <div className="bottomContent">
        <div className="holder" id="holderOffer">
          <div id="boxOffer">
            <Offer logged={logged} />
          </div>
        </div>
        <div>
          <div id="boxPlot">
            <SaleChart logged={logged} />
          </div>
        </div>
      </div>
    </div>
  );
};
