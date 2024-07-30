const detailGuide = document.querySelector('.guide');
const guideIcon = document.querySelector('.guide i');
const detailBox = document.querySelector('.detail_box');
// offsetHeight는 요소의 전체 높이(패딩과 테두리 포함)를 반환
const detailHeight = detailBox.offsetHeight;

// -detailHeight을 음수로 설정하여 디테일 박스를 화면 아래로 이동
detailBox.style.bottom = -detailHeight + 'px';

detailGuide.addEventListener('', function () {
  this.classList.toggle('active');
  if (this.classList.contains('active')) {
    guideIcon.setAttribute('class', 'ri-arrow-drop-down-line');
    detailBox.style.bottom = 0;
  } else {
    guideIcon.setAttribute('class', 'ri-arrow-drop-up-line');
    detailBox.style.bottom = -detailHeight + 'px';
  }
});

const currentData = data.records.filter(
  (item) =>
    item.데이터기준일자.split('-')[0] >= '2023' &&
    item.데이터기준일자.split('-')[1] >= '10' &&
    item.위도 !== ''
);

navigator.geolocation.getCurrentPosition((position) => {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;

  startLenderMap(lat, lng);
});
