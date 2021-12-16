import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import style from './ImageSlider.module.css';



const breakPoints = [
  { width: 1, itemsToShow: 1 },
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 2, itemsToScroll: 1, pagination: false },
//   { width: 768, itemsToShow: 3, itemsToScroll: 1, pagination: false },
  { width: 900, itemsToShow: 6, itemsToScroll: 1, pagination: true }
];

function SmallSlider() {
  return (
    <div className="main">
    <div className="sliderwrpaer">
      <div className="corosel rec.rec-arrow:hover">

        <Carousel breakPoints={breakPoints} pagination={true}>

          <Item>
            <div className="divimg">
              <img className="browsimg" src="https://img.faballey.com/images/product/DRS04632Z/1.JPG" alt="Appartment" />
            </div>
            <div>         
              <p className={style.subhead}>
              Faena Hotel Miami Beach
              </p>
              <span className={style.hmtrnditemNm}> <i>1100</i> <span className={style.hmtrndcutprz}><i>2200</i></span></span>
            </div>
          </Item>

          <Item>
            <div className="divimg">
              <img className="browsimg" src="https://img.faballey.com/images/product/DRS04759Z/1.JPG" alt="Resort" />
            </div>
            <div className="diver">
              
              <h4 className="subhead">
              Fairmont Kea Lani, Maui
              </h4>

              <div class="WlYyy cPsXC dTqpp">from $598/night</div>
            </div>
          </Item>

          <Item>
            <div className="divimg">
              <img className="browsimg" src={"fairmount"} alt="Villas" />
            </div>
            <div className="diver">
              
              <h4 className="subhead">
              Fairmont Austin
              </h4>

              <div class="WlYyy cPsXC dTqpp">from $225/night</div>
            </div>
          </Item>

          <Item>
            <div className="divimg">
              <img className="browsimg" src={"meritage"} alt="Cabins" />
            </div>
            <div className="diver">
              
              <h4 className="subhead">
              The Meritage Resort and Spa
              </h4>

              <div class="WlYyy cPsXC dTqpp">from $262/night</div>
            </div>
          </Item>

          <Item>
            <div className="divimg">
              <img className="browsimg" src={"portola"} alt="Cottages" />
            </div>
            <div className="diver">
              
              <h4 className="subhead">
              Portola Hotel & Spa at Monterey Bay
              </h4>
              <div class="WlYyy cPsXC dTqpp">from $219/night</div>
            </div>
          </Item>

          <Item>
            <div className="divimg">
              <img className="browsimg" src={"casamaria"} alt="Hotels" />
            </div>
            <div className="diver">
              
              <h4 className="subhead">
                Casa Marina Key West, A Waldorf <br/> Astoria Resort
              </h4>

              <div class="WlYyy cPsXC dTqpp">from $225/night</div>
            </div>
          </Item>

          <Item>
            <div className="divimg">
              <img
                className="browsimg"
                src={"thewilliam"}
                alt="Serviced_appartment"
              />
            </div>
            <div className="diver">
              
              <h4 className="subhead">
              The William Vale
              </h4>

              <div class="WlYyy cPsXC dTqpp">from $324/night</div>
            </div>
          </Item>

          <Item>
            <div className="divimg">
              <img className="browsimg" src={"wailiya"} alt="Holidayhomes" />
            </div>
            <div className="diver">
              
              <h4 className="subhead">
              Grand Wailea
              </h4>

              <div class="WlYyy cPsXC dTqpp">from $570/night</div>
            </div>
          </Item>
        </Carousel>
      </div>

      <div></div>
    </div>
  </div>
  );
}


// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
export { SmallSlider };
