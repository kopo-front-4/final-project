<div className="card puffIn" id="card">
  <div className="card-inner">
    <div className="card-front">
      <div className="card-heading">
        <br />
        FOURTUNE
        <br />
        성명 입력란
      </div>
      <div className="card-content">
        <br />
        이름을 입력해주세요:)
        <br />
      </div>
      <div className="card-placeholder">입력란</div>
      <div>
        <input type="text" id="nameInput" placeholder="이름을 입력해주세요" />
      </div>
      <div className="card-buttons">
        <button id="goBackButton">
          <a href="#">Back</a>
        </button>
        <button id="nextButton">Next</button>
      </div>
    </div>
    <div className="card-back">
      <div className="card-heading">
        <br />
        FOURTUNE
        <br />
        <span id="userName"></span>
      </div>
      <div className="card-content">선택란</div>
      <div>
        <label htmlFor="birthDate">생년월일:</label>
        <input type="date" id="birthDate" />
      </div>
      <div className="birth">
        <label htmlFor="birthTime">태어난 시간:</label>
        <br />
        <select id="birthTime">
          <option value="미응답">선택하기</option>
          <option value="미입력">태어난 시간 모름</option>
          <option value="자시">밤 11시 30분 ~ 새벽 1시 30분</option>
          <option value="축시">새벽 1시 30분 ~ 새벽 3시 30분</option>
          <option value="인시">새벽 3시 30분 ~ 새벽 5시 30분</option>
          <option value="묘시">새벽 5시 30분 ~ 오전 7시 30분</option>
          <option value="진시">오전 7시 30분 ~ 오전 9시 30분</option>
          <option value="사시">오전 9시 30분 ~ 오전 11시 30분</option>
          <option value="오시">오전 11시 30분 ~ 오후 1시 30분</option>
          <option value="미시">오후 1시 30분 ~ 오후 3시 30분</option>
          <option value="신시">오후 3시 30분 ~ 오후 5시 30분</option>
          <option value="유시">오후 5시 30분 ~ 저녁 7시 30분</option>
          <option value="술시">저녁 7시 30분 ~ 밤 9시 30분</option>
          <option value="해시">밤 9시 30분 ~ 밤 11시 30분</option>
        </select>
      </div>
      <div>
        <input type="radio" id="solar" name="calendar" value="양력" />
        <label htmlFor="solar">양력</label>
        <input type="radio" id="lunar" name="calendar" value="음력" />
        <label htmlFor="lunar">음력</label>
      </div>
      <div className="card-buttons">
        <button id="goHomeButton">
          <a href="#">Return</a>
        </button>
        <button id="finalCompleteButton">
          <Link to="/loading">Submit</Link>
        </button>
      </div>
    </div>
  </div>
</div>;
