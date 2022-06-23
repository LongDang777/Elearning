import React, { Fragment } from "react";
import Table from "../../components/Admin/table/Table";
import { Link, Redirect } from 'react-router-dom'
import Badge from "../../components/Admin/badge/Badge";
import Recent from "../../components/Admin/Recent/Recent";
import SalesAnalytics from "../../components/Admin/SalesAnalytics/SalesAnalytics";



export default function Dashboard() {

  const LOGIN_USER = JSON.parse(localStorage.getItem("LOGIN_USER"));

  if (!LOGIN_USER.taiKhoan) {
    alert('Bạn không có quyền  truy cập vào trang này vui lòng đăng nhập!')
    return <Redirect to='/' />
  }
  const latestOrders = {
    header: [
      "order id",
      "user",
      "total price",
      "date",
      "status"
    ],
    body: [
      {
        id: "#OD1711",
        user: "john doe",
        date: "17 Jun 2021",
        price: "$900",
        status: "shipping"
      },
      {
        id: "#OD1712",
        user: "frank iva",
        date: "1 Jun 2021",
        price: "$400",
        status: "paid"
      },
      {
        id: "#OD1713",
        user: "anthony baker",
        date: "27 Jun 2021",
        price: "$200",
        status: "pending"
      },
      {
        id: "#OD1712",
        user: "frank iva",
        date: "1 Jun 2021",
        price: "$400",
        status: "paid"
      },
      {
        id: "#OD1713",
        user: "anthony baker",
        date: "27 Jun 2021",
        price: "$200",
        status: "refund"
      }
    ]
  }

  const orderStatus = {
    "shipping": "primary",
    "pending": "warning",
    "paid": "success",
    "refund": "danger"
  }

  const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
  )

  const renderOrderBody = (item, index) => (
    <tr key={index}>
      <td>{item.id}</td>
      <td>{item.user}</td>
      <td>{item.price}</td>
      <td>{item.date}</td>
      <td>
        <Badge type={orderStatus[item.status]} content={item.status} />
      </td>
    </tr>
  )

  return (
    <Fragment>
      <div className="dashboard">
        <div>
          <div className="topnav__search">
            <input type="text" placeholder='Search here...' />
            <i className='bx bx-search'></i>
          </div>
          <div className="date">
            <input type="date" />
          </div>
          <div className="insights">
            <div className="sales">
              <span className="material-icons-sharp">analytics</span>
              <div className="middle">
                <div className="left">
                  <h3>Total Sales</h3>
                  <h1>$25,024</h1>
                </div>
                <div className="progressDashboard">
                  <svg>
                    <circle cx='38' cy='38' r='36'></circle>
                  </svg>
                  <div className="number">
                    <p>81%</p>
                  </div>
                </div>
              </div>
              <small className="text-muted">Last 24 Hours</small>
            </div>
            <div className="expenses">
              <span className="material-icons-sharp">bar_chart</span>
              <div className="middle">
                <div className="left">
                  <h3>Total Expenses</h3>
                  <h1>$14,160</h1>
                </div>
                <div className="progressDashboard">
                  <svg>
                    <circle cx='38' cy='38' r='36'></circle>
                  </svg>
                  <div className="number">
                    <p>62%</p>
                  </div>
                </div>
              </div>
              <small className="text-muted">Last 24 Hours</small>
            </div>
            <div className="income">
              <span className="material-icons-sharp">stacked_line_chart</span>
              <div className="middle">
                <div className="left">
                  <h3>Total Income</h3>
                  <h1>$10,864</h1>
                </div>
                <div className="progressDashboard">
                  <svg>
                    <circle cx='38' cy='38' r='36'></circle>
                  </svg>
                  <div className="number">
                    <p>44%</p>
                  </div>
                </div>
              </div>
              <small className="text-muted">Last 24 Hours</small>
            </div>
          </div>
          <div className="recent-orders">
            <h2>Recent Oders</h2>
            <Table
              headData={latestOrders.header}
              renderHead={(item, index) => renderOrderHead(item, index)}
              bodyData={latestOrders.body}
              renderBody={(item, index) => renderOrderBody(item, index)}
            />
            <div className="card__footer">
              <Link to='/'>View All</Link>
            </div>
          </div>
        </div>
        <div>
          <div className="right">
            <Recent />
            <SalesAnalytics />
          </div>
        </div>
      </div>

    </Fragment>
  );
}
