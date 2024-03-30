import "./Music.css";

export default function Music() {
  return (
    <section class="section music" id="music">
      <div class="songs-albums">
        <h2 class="mb-5 mt-5">Singles & Albums</h2>
        <div class="row mb-4">
          <div class="col">
            <a href="/secretwindow.html">
              <img
                src="/images/Secret Window AW.jpg"
                alt="Stonecraft single Secret Window artwork"
                class="img-fluid"
              />
            </a>
            <p>Secret Window - December 2021</p>
          </div>
          <div class="col">
            <a href="/fourwinds.html">
              <img
                src="/images/Four Winds CD b cover filter .jpg"
                alt="Stonecraft single Four Winds artwork"
                class="img-fluid"
              />
            </a>
            <p>Four Winds - November 2021</p>
          </div>
          <div class="col">
            <a href="/sevenhunters.html">
              <img
                src="/images/Seven Hunters.jpg"
                alt="Stonecraft album Seven Hunters artwork"
                class="img-fluid"
              />
            </a>
            <p>Seven Hunters - 2016</p>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col">
            <a href="/behindthedoor.html">
              <img
                src="/images/Behind the door.jpg"
                alt="Stonecraft album Behind the Door artwork"
                class="img-fluid"
              />
            </a>
            <p>Behind the Door - 2013</p>
          </div>
          <div class="col">
            <a href="/movingtides.html">
              <img
                src="/images/Moving tides.jpg"
                alt="Stonecraft album Moving Tides artwork"
                class="img-fluid"
              />
            </a>
            <p>Moving Tides - 2010</p>
          </div>
          <div class="col">
            <a href="/thecall.html">
              <img
                src="/images/thecallcover.jpg"
                alt="Stonecraft album The Call artwork"
                class="img-fluid"
              />
            </a>
            <p>The Call - 2008</p>
          </div>
        </div>
      </div>
    </section>
  );
}
