import React from "react";

export default function CommentUser() {
  return (
    <section className="feel mt-5">
      <h3 className="title">Quotes</h3>
      <div className="main-content">
        <div id="feel-user" className="carousel slide" data-ride="carousel">
          <div className="carousel-indicators">
            <div
              className="img-info active"
              data-target="#feel-user"
              data-slide-to={0}
            >
              <div className="overflow"></div>
            </div>
            <div
              className="img-info"
              data-target="#feel-user"
              data-slide-to={1}
            >
              <div className="overflow"></div>
            </div>
            <div
              className="img-info"
              data-target="#feel-user"
              data-slide-to={2}
            >
              <div className="overflow"></div>
            </div>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="content">
                “ You’ll never be brave if you do not get hurt. You’ll never
                learn if you do not make mistakes. You’ll never be successful if
                you do not encounter failure.”
              </div>
              <div className="info">
                <p>
                  _Jack, <span>CEO</span>
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="content">
                “ On The Way To Success, There Is No Trace Of Lazy Men. ”
              </div>
              <div className="info">
                <p>
                  _Long Black, <span>Project Manager</span>
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="content">
                “ Sow a thought, and you reap an act. Sow an act, and you reap a
                habit. Sow a habit, and you reap a character. Sow a character,
                and you reap a destiny.”
              </div>
              <div className="info">
                <p>
                  _Jenny Kita, <span>FullStack Developer</span>
                </p>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#feel-user"
            role="button"
            data-slide="prev"
          >
            <span>{"<"}</span>
          </a>
          <a
            className="carousel-control-next"
            href="#feel-user"
            role="button"
            data-slide="next"
          >
            <span>{">"}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
