document.addEventListener('DOMContentLoaded', function() {
    var card = document.getElementById('card');
    var completeButton = document.getElementById('completeButton');

    completeButton.addEventListener('click', function() {
        var nameInput = document.getElementById('nameInput');
        var name = nameInput.value;

        // 앞장에서 사용자의 이름을 가져와서 뒷장의 제목에 반영
        document.getElementById('userName').textContent = name + ' ';

        // 카드를 뒤집어 뒷장으로 이동
        card.classList.add('flipped');
    });

    // 뒷장의 완료 버튼을 클릭하면 로컬 스토리지에 데이터 저장
    var finalCompleteButton = document.getElementById('finalCompleteButton');
    finalCompleteButton.addEventListener('click', function() {
        var birthDateInput = document.getElementById('birthDate');
        var birthTimeInput = document.getElementById('birthTime');
        var calendarInput = document.querySelector('input[name="calendar"]:checked');

        var birthDate = birthDateInput.value;
        var birthTime = birthTimeInput.value;
        var calendar = calendarInput ? calendarInput.value : null;

        // 입력된 정보를 로컬 스토리지에 저장
        localStorage.setItem('birthDate', birthDate);
        localStorage.setItem('birthTime', birthTime);
        localStorage.setItem('calendar', calendar);

        // 여기에 추가적으로 필요한 정보 저장

        // 저장 후 페이지 이동 또는 다른 동작 수행
    });
});
