import '../styles/home.sass';
import elnath from '../media/elnath.png';

function Body() {
  return (
    <div class="Body">
      <div class="card-section">
        <div class="card-content">
          <img class="card-image" src={elnath}></img>
          <div class="card-info">
            <h2 class="card-title">
              <div class="card-continent">MAPLE WORLD</div>El Nath
            </h2>
            <p class="card-level">Level 50 - 70</p>
            <p class="card-text">
              El Nath is a snowy town that can be accessed via the
              first floor of Orbis Tower. Past El Nath is the
              volcano-like Dungeon area, which can only be accessed if
              one is level 50 or above.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
