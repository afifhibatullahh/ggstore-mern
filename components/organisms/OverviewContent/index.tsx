import React from "react";
import Category from "./Category";
import TableRow from "./TableRow";

export default function OverviewContent() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              <Category nominal={11800500} icon="ic-desktop">
                Game <br /> Desktop
              </Category>

              <Category nominal={8455000} icon="ic-mobile">
                Game
                <br /> Mobile
              </Category>
              <Category nominal={5000000} icon="ic-desktop">
                Other <br />
                Categories
              </Category>
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <TableRow
                  title="Mobile Legends: The New Battle 2021"
                  status="Pending"
                  price={20000}
                  item={200}
                  img="overview-1"
                  category="Dekstop"
                />
                <TableRow
                  title="Call of Duty:Modern"
                  status="Success"
                  price={740000}
                  item={550}
                  img="overview-2"
                  category="Dekstop"
                />
                <TableRow
                  title="Clash of Clans"
                  status="Failed"
                  price={740000}
                  item={550}
                  img="overview-3"
                  category="Mobile"
                />
                <TableRow
                  title="The Royal Game"
                  status="Pending"
                  price={200000}
                  item={225}
                  img="overview-4"
                  category="Mobile"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
