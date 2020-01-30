  // const storeDB = require('../data/store.json')
  // import * as storeDB from '../data/store.json'
  var materialClassName = [
    "프레온가스(후레온가스)",  "USB",  "가정용건강기구",  "계량기",  "그릴",  "녹음기",  "도어락",  "라디오",  "무전기",  "믹서기",  "밥솥",  "배터리",  "gns84",  "선풍기",  "세척기",  "안마기",  "온도조절계",  "온습도계",  "이어폰",  "전기히터",  "전자계측기",  "전자저울",  "진공청소기",  "청소기",  "풍압스위치",  "컴퓨터",
    "키폰",
    "간판",
    "갈바잔넬",
    "스텐잔넬",
    "신주잔넬",
    "아크릴간판",
    "알루미늄잔넬(알미늄쟌넬)",
    "인포메이션간판",
    "채널(잔넬,쟌넬)",
    "건축/산업용고무",
    "고무",
    "내마모성고무",
    "라텍스",
    "액상고무",
    "각종공구",
    "기계공구",
    "렌치(하이드로렌치)",
    "목공구",
    "에어공구",
    "용접공구",
    "전동공구",
    "전자공구",
    "절단톱",
    "정밀측정공구",
    "타정공구",
    "통신공구",
    "특수공구",
    "건조기",
    "과학기기",
    "수분측정기",
    "전기로",
    "초자기구",
    "향온기",
    "사인",
    "회사내부사인",
    "다이아몬드",
    "순금",
    "시계",
    "예물",
    "메탈",
    "납",
    "백금",
    "신주",
    "코인",
    "금형",
    "랙크기어",
    "베벨기어",
    "소형기어",
    "웜기어",
    "정밀기어",
    "타임기어",
    "타임벨트기어",
    "평기어",
    "헬리컬기어(해리칼기어)",
    "작품상담",
    "납판,실납,봉납",
    "CTT",
    "PTT",
    "니켈단자",
    "리벳단자",
    "압착단자",
    "메탈라스",
    "익스펜디드메탈",
    "철망",
    "타공망",
    "펜스망(휀스망)",
    "CNC가공명판",
    "PC-PVC명판",
    "금속옵셋명판",
    "명판",
    "산업용명판",
    "에폭시명판",
    "DC모터",
    "감속모터",
    "기어드모터",
    "빠우모터(빠우모타)",
    "스태핑모터",
    "전기모터",
    "루버(루바)",
    "아크릴루버(아크릴루바)",
    "TV레벨미터(TV레벨메타)",
    "아워미터(아워메타)",
    "우레탄바퀴",
    "특수바퀴",
    "BOX",
    "FIBOX",
    "SMPS용방수박스",
    "방수박스",
    "스테인리스박스",
    "신소재전기박스",
    "아크릴박스",
    "니들밸브",
    "다이어프램밸브(DIAPHRAGMVALVE)",
    "벨로스밸브(BELLOWSVALVE)",
    "볼밸브",
    "솔레노이드밸브",
    "수축밸브",
    "동버스바(동부스바)",
    "KBC수입베어링",
    "LM직선베어링",
    "로드앤드베어링",
    "미니츄어베어링",
    "볼부쉬",
    "차량용베어링",
    "V풀리(V뿌리)",
    "양은풀리(양은뿌리)",
    "타이밍풀리",
    "강화마루",
    "마루바닥재",
    "바닥재",
    "인조잔디",
    "장판",
    "특수바닥재",
    "각산볼트",
    "앵커볼트(앙카)",
    "육각볼트너트",
    "전자볼트",
    "특수볼트",
    "팝너트(POPNUTS)",
    "S45C봉",
    "마사각(미사각)",
    "마육각(미육각)",
    "마환봉",
    "벨트차단봉",
    "연마봉",
    "차단봉",
    "청동압출봉",
    "포봉",
    "환봉",
    "부동산중개",
    "LAN시공부품",
    "나사(스테인리스직결나사)",
    "냉동부품",
    "다이오드",
    "래크(RACK)",
    "메모리카드",
    "무정전전원장치",
    "미싱부속",
    "배관부품",
    "베어링하우징(베어링케스)",
    "브라켓(부라켓)",
    "브릿지",
    "수전금구",
    "수전부품",
    "아우트렉",
    "아일렛",
    "에어핑거(AIRFINGER)",
    "열전대부품",
    "오링",
    "와이어매쉬",
    "유니트",
    "전원공급장치부품",
    "전자피스",
    "조명부품",
    "진공부품",
    "클램프(크람프)",
    "통신부품",
    "통신용반도체부품",
    "판금부속",
    "피스톤",
    "SUSSTEEL분전반",
    "수배분전반",
    "E.V.A(EVA)",
    "광센서",
    "근접센서",
    "레벨센서",
    "습도센서",
    "온도센서",
    "유량센서",
    "첨단센서",
    "DDR센서스위치",
    "발판스위치(FOOT)",
    "압력스위치",
    "SUS",
    "스테인리스",
    "스테인리스신주",
    "스폰지",
    "은수저",
    "아크릴",
    "포맥스",
    "건축용알루미늄",
    "공업용알루미늄",
    "비철",
    "산업용알루미늄",
    "알루미늄",
    "어댑터",
    "리모컨키(리모콘키)",
    "보조키",
    "지문인식키",
    "카드키",
    "우레탄",
    "라임스톤",
    "샌드스톤",
    "슬레이트석(슬레이드)",
    "트래버틴(트라버틴)",
    "화강석",
    "도기",
    "비데",
    "세라믹",
    "세면기",
    "수입타일",
    "욕조",
    "위생도기",
    "타일",
    "강화유리",
    "방열유리",
    "산업용유리",
    "에칭유리",
    "유리",
    "유리제품",
    "페어유리",
    "새시(샷시)",
    "컬러새시(컬러샷시,칼라샷시)",
    "환기창",
    "가정용의료기",
    "물리치료기",
    "수술용기구",
    "의료기구",
    "의료용쿨링팬",
    "캐뉼라(케뉴라)",
    "케이와이어",
    "팬",
    "한방의료기",
    "혈당계",
    "혈당측정기",
    "혈압계",
    "호흡기용품",
    "시공상담",
    "인테리어상담",
    "매장집기",
    "시장집기",
    "인테리어제품",
    "인테리어집기",
    "집기",
    "행거",
    "부품",
    "손잡이",
    "인테리어부품",
    "인테리어철물",
    "철물",
    "각종자석",
    "네오디움자석",
    "마그넷(마그네트)",
    "사마륨자석",
    "알니코자석",
    "영구자석",
    "켄자석",
    "페라이트자석",
    "희토류자석",
    "삼파장전구",
    "전구",
    "특수전구",
    "할로겐전구",
    "CV전선",
    "GB전선",
    "IV전선",
    "LS전선",
    "SM-5M",
    "UL전선",
    "VCTF전선",
    "각종특수전선",
    "경강선",
    "규소수지전선",
    "나동선",
    "내열전선",
    "보상도선",
    "불소수지전선",
    "세선",
    "스테인리스선(스텐선)",
    "실드선",
    "실리콘전선",
    "에나멜동선",
    "열선(히팅케이블)",
    "인출선(요비선)",
    "카플선",
    "케이블",
    "통신내외선",
    "LED모듈(LEDMODULE)",
    "LED",
    "LED바",
    "LED조명",
    "LED투광등",
    "LED파노라마(LEDPANORMA)",
    "SHOP조명",
    "가로등",
    "경관등",
    "무대조명",
    "방폭등",
    "삼파장램프",
    "샹들리에(산데리아)",
    "수목등",
    "수입특수램프",
    "웨딩홀조명",
    "유도등",
    "인테리어조명",
    "조명",
    "주택조명",
    "지중등",
    "초절전형광램프",
    "태양광조명",
    "특수램프",
    "특수조명",
    "건축철물",
    "철구조물",
    "방수커넥터(방수콘넥터)",
    "커넥터",
    "파이프커넥터",
    "DC-ACINVERTER",
    "DC-DCCONVERTER",
    "인버터",
    "에어컴프레셔",
    "진공컴프레셔(진공콤푸)",
    "각종케이스",
    "방열판케이스",
    "쇼케이스",
    "철케이스",
    "SUS튜브(SUSTUBE)",
    "수축튜브",
    "고압파이프",
    "구조관",
    "석영관",
    "수도관",
    "수축관",
    "에이콘",
    "유리관",
    "인발관",
    "FAN",
    "산업용쿨링팬",
    "패킹(바킹,박킹)",
    "통신용쿨링팬",
    "DC연료펌프",
    "기어펌프(기아펌프)",
    "배수펌프",
    "부스터펌프(부스타펌프)",
    "수중펌프",
    "순환펌프",
    "스텐펌프",
    "압송펌프",
    "연동펌프(PERISTALTICPUMP)",
    "오수펌프",
    "입형펌프",
    "종합펌프",
    "진공펌프",
    "특수펌프",
    "모터펌프(모타펌프)",
    "POP",
    "아크릴판촉물",
    "패널(판넬)",
    "판촉물",
    "표지판",
    "기성품기어",
    "속단퓨즈",
    "수입퓨즈",
    "ABS수지",
    "FRP",
    "PFA불소수지",
    "PVC",
    "에폭시",
    "폴리글라스(폴리그라스,포리그라스)",
    "폴리카보네이트(렉산)",
    "BOPLA(생분해성필름)",
    "단열필름",
    "시트",
    "안전필름",
    "윈도우필름",
    "인테리어필름",
    "SKD11",
    "SKD61",
    "은납",
    "청동",
    "탄소강",
    "황동",
    "황동판",
    "MC나일론",
    "테프론",
    "PVC핸들",
    "현수막",
    "PVC호스",
    "스팀호스",
    "에어리스호스",
    "유공압호스",
    "타이곤호스",
    "플렉시블호스(후렉시블호스)",
    "PCB",
    "호스",
    "석영",
    "이화학기기",
    "CCTV",
    "음향기기",
    "드라이기",
    "와이어",
    "케이블타이",
    "퓨즈",
    "센서",
    "계전기(RELAY)",
    "자동제어부품",
    "PLC",
    "스위치",
    "배전기",
    "단자",
    "실리콘",
    "슬리브",
    "분전반",
    "전자부품",
    "튜브",
    "베어링",
    "모터",
    "교반기",
    "의료기기",
    "상패",
    "명패",
    "방청제",
    "접착제",
    "밸브",
    "유량계",
    "필터",
    "수위조절기",
    "실험약품",
    "공업약품",
    "화공약품",
    "실리콘윤활유",
    "자동차용품",
    "스냅링",
    "컴프레셔",
    "샌더기",
    "발전기",
    "양수기",
    "조경장비",
    "송풍기",
    "자동제어기기",
    "히터",
    "펌프",
    "완충기(SHOCK ABSORBER)",
    "슬라이닥스",
    "미터(메타)",
    "차단기",
    "개폐기",
    "소켓",
    "플러그",
    "변압기(트랜스)",
    "컨버터",
    "테이프",
    "전선",
    "소방자재",
    "피뢰침",
    "접지자재",
    "도장기기",
    "안정기",
    "배지",
    "저압기기",
    "고압기기",
    "쇼핑백",
    "비닐",
    "애자",
    "유압공구",
    "외선자재",
    "미싱",
    "파이프",
    "시보리",
    "볼트",
    "원판",
    "미술재료",
    "메달",
    "배선기구",
    "기어",
    "변전기",
    "베이클라이트(배크라이트)",
    "프로파일",
    "페인트",
    "절단기",
    "용접기",
    "열쇠",
    "전기자재",
    "프레임",
    "우드",
    "비철금속",
    "이륜차",
    "금고",
    "앵글",
    "찬넬",
    "경첩",
    "자동포장기계",
    "공업기기",
    "운반차",
    "금속제작물",
    "비금속제작물",
    "밀링머신",
    "반도체",
    "레이저",
    "제어기",
    "스프링",
    "목재제작물",
    "3D프린터",
    "AI제품",
    "CATV",
    "CD",
    "CD플레이어",
    "DMB",
    "DVD",
    "DVD플레이어",
    "DVR",
    "EV",
    "FA용H/W",
    "HD장비",
    "IC",
    "IFT",
    "IOT",
    "IO보드",
    "IT기기",
    "LCD",
    "LNP",
    "MP3",
    "PMP",
    "RF",
    "RFID카드키",
    "RF리더",
    "SMD",
    "SMPS",
    "TR",
    "TV",
    "VR기기",
    "VR컨텐츠",
    "가스기구",
    "가전제품",
    "가죽",
    "감시카메라",
    "객실관리시스템",
    "건축자재",
    "게임기",
    "게임기부품",
    "게임소프트웨어",
    "경보기",
    "계산기",
    "공구가방",
    "공기정화기",
    "공장자동화시스템",
    "과학교구",
    "광섬유",
    "교육프로그램",
    "교환기",
    "군용통신부품",
    "그래픽",
    "기가폰",
    "기계장비",
    "난방기",
    "냉동부속",
    "냉방기",
    "냉장고",
    "네비게이션",
    "노래방기기",
    "노브",
    "녹화기",
    "누수탐지기",
    "다리미",
    "덕트자재",
    "도난경보기",
    "도난방지기",
    "도서",
    "도장",
    "도청차단기",
    "도청탐지기",
    "돔라이트",
    "드론",
    "디스플레이",
    "디자인상품",
    "라디에이터",
    "라이트박스",
    "라이팅디머",
    "라즈베리",
    "레코드",
    "렌즈",
    "로봇",
    "마라톤기록계측",
    "마이크",
    "마이크로칩",
    "마이크로프로세서",
    "마이크스탠드",
    "메모리",
    "면도기",
    "모니터",
    "모듈",
    "몰래카메라탐지기",
    "문구류",
    "미술작품",
    "미제부품",
    "믹스",
    "바퀴",
    "반주기",
    "방송장비",
    "버너",
    "버저",
    "버튼",
    "병풍",
    "보안등",
    "보안시스템",
    "보일러",
    "블랙박스",
    "오디오",
    "비디오폰",
    "비상벨",
    "산업용장비",
    "상품권",
    "세정기",
    "세탁기",
    "소품",
    "소프트웨어",
    "스탠드갓",
    "시설자재",
    "식음료",
    "실링",
    "실습용키트",
    "심층수",
    "쌍안경",
    "아두이노",
    "아이디어제품",
    "아트상품",
    "안테나",
    "애니메이션",
    "액세서리",
    "액자",
    "앰프",
    "약탕기",
    "양산",
    "어플리케이션",
    "에어컨",
    "열풍기",
    "영상",
    "영상시스템",
    "영상장비",
    "오르골",
    "온수기",
    "온수매트",
    "온풍기",
    "용착기",
    "위치추적기",
    "유무선기기",
    "음반",
    "음악",
    "음향시스템",
    "의류",
    "인덕터",
    "인서트",
    "인쇄판",
    "인체모형",
    "인코더",
    "인터폰",
    "잉크",
    "자동문",
    "자동화기기",
    "자동화시스템",
    "자수재료",
    "자판기",
    "잡화",
    "잭",
    "저항",
    "적외선카메라",
    "전광판",
    "전기난로",
    "전기온돌필림",
    "전기온돌판넬",
    "전기충격기",
    "전동기",
    "전동드라이버",
    "전산소모품",
    "전원공급장치",
    "전자교재",
    "전자기기",
    "전자레인지",
    "전자사전",
    "전자얼굴",
    "잔자의수",
    "전자제어프로그램",
    "전자제품",
    "전자회로기판",
    "전화기",
    "정수기",
    "정수기필터",
    "제습기",
    "조광기",
    "조화",
    "족보",
    "족자",
    "중장비",
    "지폐계수기",
    "지폐교환기",
    "지폐배출기",
    "지폐인식기",
    "진공관",
    "카드단말기",
    "카메라",
    "카세트",
    "캠코더",
    "커피포트",
    "컨텐츠",
    "컨트롤보드",
    "컴퓨터부품",
    "컴퓨터음향시스템",
    "컴퓨터주변기기",
    "케이블보드",
    "코인관리기",
    "코인박스",
    "콘덴서",
    "콘솔",
    "크리스탈오실레이터",
    "타이머",
    "탐지기",
    "태양광발전제품",
    "태양광시스템",
    "턴키",
    "텃밭용제품",
    "토너",
    "통신장비",
    "투광기",
    "튜너",
    "특수가방",
    "특수기계",
    "특수조끼",
    "파워",
    "파워서플라이",
    "파이프오르간",
    "파이프캡",
    "판금",
    "팩스",
    "폐백소품",
    "포장부자재",
    "표구",
    "프로그램",
    "프로젝터",
    "플랫폼",
    "픽업데크",
    "하네스",
    "헤드셋",
    "형광등",
    "호신용품",
    "호출벨",
    "화폐교환기",
    "환풍기",
    "교육키트",
    "데스크팩터",
    "프레셔스 플라스틱",
    "자동차부품",
    "공예품부속",
    "목재합판",
    "디자인소품",
    "전자회로"
  
  ]
  var processClassName = [
    "프레스",  "단조",  "주조",  "철형",  "연마",  "절곡",  "절단",  "조각",  "선반밀링",  "NC밀링",  "CNC",  "압출",  "사출",  "주물",  "실크 각인",  "금속 각인",  "조각 각인",  "철판 각인",  "자수",  "아르곤 용접",  "아크용접",  "시공",  "코킹",  "코팅",  "폴리싱",  "착색",  "그라우팅",  "스카시",  "금박",  "표면처리",  "샌딩",  "인쇄",  "필름제판",  "회로설계",  "계측계교정",  "접지",  "인테리어 시공",  "욕실 시공",  "실험기기제작",  "금형",  "레이저가공",  "절삭",  "부식",  "레이저커팅",  "용접",  "철강",  "금속가공",  "빠우",  "랍빠",  "기계제작",  "배관",  "3D프린팅",  "PCB수리",  "건축",  "공간대여",  "공예",  "교육",  "기술중개",  "대부",  "디자인",  "리모델링",  "배송",  "복제",  "비디오변환",  "상담",  "서버설치",  "세무",  "수리",  "스캔",  "연구",  "임대",  "작품상담",  "전기공사",  "전시",  "조경",  "예술활동",  "출판",  "컨설팅",  "토목",  "프로그래밍",  "행사기획",  "목공",  "선반",  "업사이클링"
  ]
  const defaultHref = "http://ec2-52-79-189-203.ap-northeast-2.compute.amazonaws.com:8080/storedetail/" 

  $(document).ready(function () {
    if(parent && parent.document && parent.document.querySelector('#content iframe')) {
      parent.document.querySelector('#content iframe').style.height = "calc(100vh - 10px)"
      parent.document.querySelector('body').style = "overflow: hidden";
    }
    console.log("parent.document.querySelector('#content iframe') : ",parent.document.querySelector('#content iframe'))
    d3.queue()
      .defer(d3.csv, "./data/edge_1230.csv")
      .defer(d3.csv, "./data/node_1230.csv")
      .defer(d3.csv, "./data/store.csv")
      .await(function (error, baseLinks, baseNodes, storeDB) {
        if (error) {
          console.error('Oh dear, something went wrong: ' + error);
        } else {
          var nodes = [...baseNodes]
          var links = [...baseLinks]
  
          function getNeighbors(node) {
            return baseLinks.reduce(function (neighbors, link) {
                if (link.target.id === node.id) {
                  neighbors.push(link.source.id)
                } else if (link.source.id === node.id) {
                  neighbors.push(link.target.id)
                }
                return neighbors
              },
              [node.id]
            )
          }
  
          function isNeighborLink(node, link) {
            return link.target.id === node.id || link.source.id === node.id
          }
  
          function getNodeColor(node, neighbors) {
            if (Array.isArray(neighbors) && neighbors.indexOf(node.id) > -1) {
              return node.level === 1 ? 'blue' : 'green'
            }
            return node.level === 1 ? 'red' : 'gray'
          }
  
          function getLinkColor(node, link) {
            return isNeighborLink(node, link) ? color(link.class) : '#E5E5E5'
          }
  
          function getTextColor(node, neighbors) {
            return Array.isArray(neighbors) && neighbors.indexOf(node.id) > -1 ? 'green' : 'black'
          }
          var valueline = d3.line()
            .x(function (d) {
              return d[0];
            })
            .y(function (d) {
              return d[1];
            })
            .curve(d3.curveCardinalClosed),
            paths,
            groups,
            groupIds,
            scaleFactor = 0.7,
            polygon,
            centroid,
            node,
            link,
            //      color = d3.scaleOrdinal(d3.schemeCategory20),
            curveTypes = ['curveCardinalClosed'];
  
          var options = curveTypes
          //	filtered types
          //  typeFilterList = [];
          id = [];
  
          var width = window.innerWidth
          var height = window.innerHeight
          var color = d3.scaleOrdinal(d3.schemeCategory20);
  
          /*     var color = d3.scaleOrdinal()
          //this assumes you have 3 groups of data//﻿each of the domains corresponds to a color set
            .domain(["data1", "data2", "data3","data4", "data5","data6", "data7", "data8","data9", "data10",
            "data11", "data12", "data13","data14", "data15","data16", "data17", "data18","data19", "data20",          "data21", "data22", "data23","data24", "data25","data26", "data27", "data28","data29", "data30",          "data31", "data32", "data33","data34", "data35","data36", "data37", "data38","data39", "data40"])
            .range(['#703ca7', '#8339ad', '#9738b0', '#ac36af', '#c036ac', '#d339a4', '#e53d9a', '#f3428f', '#ff4981', '#ff5372',
            '#ff5d63', '#ff6a55', '#ff7849', '#ff8840', '#fb973b', '#efa83b', '#e2b93e', '#d4c943', '#c5d84c', '#b9e658',
            '#adf268', '#95f565', '#7cf867', '#62f96c', '#4cf873', '#37f57d', '#24f18a', '#16ea98', '#0ce0a7', '#0cd5b5',
            '#12c7c3', '#1abace', '#23aad7', '#2e9bdd', '#398ade', '#447add', '#4f6bd8', '#595dd0', '#6250c5', '#6a45b7']);
  
      var color = d3.scaleOrdinal()
      //this assumes you have 3 groups of data//﻿each of the domains corresponds to a color set
          .domain(["data1", "data2", "data3"])
          .range([ "#6002ee","#ee0290", "#90ee02"]);*/
  
          var shape = d3.scaleOrdinal(d3.symbols);
          // Initial transform to apply
          var defaultZoom = 1
          var maxZoom = 0.3
          var minZoom = 1
          // var transform = d3.zoomIdentity.translate(480, 250).scale(0.3);
          var transform = d3.zoomIdentity.translate(0, 0).scale(defaultZoom);
          // var transform = d3.zoomIdentity.scale(defaultZoom);
          var zoom = d3.zoom().scaleExtent([maxZoom, minZoom]).on("zoom", handleZoom);
  
          var svg = d3.select('svg')
            .call(zoom) // Adds zoom functionality
            .call(zoom.transform, transform); // Calls/inits handleZoom
  
          svg.attr('width', width).attr('height', height - 60)
  
          var linkElements,
            nodeElements,
            textElements
  
          // we use svg groups to logically group the elements together
          var linkGroup = svg.append('g').attr('class', 'links zoomable').attr("transform", transform);
          var nodeGroup = svg.append('g').attr('class', 'nodes zoomable').attr("transform", transform);
          var textGroup = svg.append('g').attr('class', 'texts zoomable').attr("transform", transform);
  
          // we use this reference to select/deselect
          // after clicking the same element twice
          var selectedId
  
          // simulation setup with all forces
          var linkForce = d3
            .forceLink()
            .id(function (link) {
              return link.id
            })
            //       .strength(function (link) { return link.strength})
            .distance(100)
          // console.log('d3.forceCenter(width / 2, height / 2) : ', d3.forceCenter(width / 2, height / 2))
          var simulation = d3
            .forceSimulation()
            .force('link', linkForce)
            .force('charge', d3.forceManyBody().strength(-200).distanceMax(5000))
            // .force('charge', d3.forceManyBody())
            .force('center', d3.forceCenter(width / 2, height / 2))
            .alphaTarget(0)
            .alphaDecay(0.15) // speed the visualization stops! now it is 7 sec
            .velocityDecay(0.2)

            // .on("end", ticked)
            // .stop()
            // simulation.tick(1)

            // function ticked() {
            //   console.log('weqweqweq')
            //   linkElements
            //       .attr("x1", function(d) { return d.source.x; })
            //       .attr("y1", function(d) { return d.source.y; })
            //       .attr("x2", function(d) { return d.target.x; })
            //       .attr("y2", function(d) { return d.target.y; });
          
            //   nodeElements
            //        .attr("cx", function (d) { return d.x+6; })
            //        .attr("cy", function(d) { return d.y-6; });
            // }

          // var simulation = d3
          //   .forceSimulation()
          //   .force('link', linkForce)
          //   .force('charge', d3.forceManyBody())
          //   .force('center', d3.forceCenter(width / 2, height / 2))
          //   .stop()
          // simulation.tick(3000)


          // for (var i = 0; i < 3000; ++i) simulation.tick();
          // simulation.tick(300);
          //    .force('forceCollide',d3.forceCollide()
          //        .radius(function (d){
          //          return 40
          //        }))
          //    .stop();
          let globalScreenX = 0
          let globalScreenY = 0
          var dragDrop = d3.drag().on('start', function (node) {
            console.log('ndoe : ', node)
            node.fx = node.x
            node.fy = node.y
          })
          // .on("drag", function() {

          //   // d3.select(this)
          //   //   .attr("cx", d.x = d3.event.x)
          //   //   .attr("cy", d.y = d3.event.y);
          // })
          .on('drag', function (node) {
            // simulation.alphaTarget(0.3).restart()
            console.log('===dragstart=== ')
            console.log('d3.event.x : ', d3.event.x)
            node.fx = d3.event.x
            node.fy = d3.event.y
          })
          .on('end', function (node) {
            console.log('===dragend=== ')
            if (!d3.event.active) {
              simulation.alphaTarget(0)
            }
            node.fx = null
            node.fy = null
          })
  
          // filtering list is used to filter the entire visulaization based on
          // the group of nodes used for individual projects.
          // will need to also calculate the neighbors once the projects are selected..
          //	filtered types
          typeFilterList = [];
          /*
                //	filter button event handlers
                $(".filter-btn").on("click", function() {
                  var id = $(this).attr("value");
                  if (typeFilterList.includes(id)) {
                    typeFilterList.splice(typeFilterList.indexOf(id), 1)
                  } else {
                    typeFilterList.push(id);
                  }
                  filter();
                  update();
                });
  
                var nodeByID = {};
  
                baseNodes.forEach(function(n) {
                  nodeByID[n.id] = n;
                });
  
                baseLinks.forEach(function(l) {
                  l.sourceGroup = nodeByID[l.source].proj.toString();
                  l.targetGroup = nodeByID[l.target].proj.toString();
                });
              //  var g = [...baseNodes, ...baseLinks ];
                var g = zip(baseNodes,baseLinks);
                graph = g;
                store = $.extend(true, {}, g);
          //console.log(g);
          //console.log(graph);
          console.log(store);
  
                update();
  
                //	general update pattern for updating the graph
                function update() {
                  //	UPDATE
                  node = node.data(baseNodes, function(d) { return d.id;});
                  //	EXIT
                  node.exit().remove();
                  //	ENTER
                  var newNode = node.enter().append("circle")
                    .attr("class", "node")
                    .attr("r", radius)
                    .attr("fill", function(d) {return color(d.group);});
  
                    newNode.append("title")
                      .text(function(d) { return "proj: " + d.proj + "\n" + "id: " + d.id; });
                  //	ENTER + UPDATE
                  node = node.merge(newNode);
  
                  //	UPDATE
                  link = link.data(baseLinks, function(d) { return d.id;});
                  //	EXIT
                  link.exit().remove();
                  //	ENTER
                  newLink = link.enter().append("line")
                    .attr("class", "link");
  
                  newLink.append("title")
                      .text(function(d) { return "source: " + d.source + "\n" + "target: " + d.target; });
                  //	ENTER + UPDATE
                  link = link.merge(newLink);
  
                  //	update simulation nodes, links, and alpha
                  simulation
                    .nodes(baseNodes)
                    .on("tick", ticked);
  
                  simulation.force("link")
                    .links(baseLinks);
  
                  simulation.alpha(1).alphaTarget(0).restart();
                }
  
                function filter() {
                  //	add and remove nodes from data based on type filters
                  store.nodes.forEach(function(n) {
                    if (!typeFilterList.includes(n.proj) && n.filtered) {
                      n.filtered = false;
                      graph.nodes.push($.extend(true, {}, n));
                    } else if (typeFilterList.includes(n.proj) && !n.filtered) {
                      n.filtered = true;
                      graph.nodes.forEach(function(d, i) {
                        if (n.id === d.id) {
                          graph.nodes.splice(i, 1);
                        }
                      });
                    }
                  });
  
                  //	add and remove links from data based on availability of nodes
                  store.links1.forEach(function(l) {
                    if (!(typeFilterList.includes(l.sourceGroup) || typeFilterList.includes(l.targetGroup)) && l.filtered) {
                      l.filtered = false;
                      graph.links1.push($.extend(true, {}, l));
                    } else if ((typeFilterList.includes(l.sourceGroup) || typeFilterList.includes(l.targetGroup)) && !l.filtered) {
                      l.filtered = true;
                      graph.links1.forEach(function(d, i) {
                        if (l.id === d.id) {
                          graph.links1.splice(i, 1);
                        }
                      });
                    }
                  });
                }
                */
  
          function resetGraph() {
            linkElements.attr('stroke', function(d) {
              return color(d.class)
            })
          }

          function searchNode(val) {
              // selectedId = selectedNode.id
              // updateData(selectedNode)
            // updateSimulation()

            if(val) {
              $("#attributepane").show();
              // $("#attributepane-left").hide();            
              
              if (selectedNode.node_type == '상점') {
                document.getElementById('name').innerHTML = '<strong>업체명 </strong>' + selectedNode.label;
                document.getElementById('data').innerHTML = 
                  '<strong>주소</strong> 서울시 ' + selectedNode.dist + ' ' + selectedNode.address +
                  ' <br> <strong>전화번호 </strong> 02-' + selectedNode.phone +
                  ' <br><br><strong>취급 품목, 공정</strong><br>' + selectedNode.descriptions +
                  '<br>';
              } else if (selectedNode.node_type == '공정') {
                document.getElementById('name').innerHTML = '<strong>공정명 </strong>' + selectedNode.label;
              } else {
                document.getElementById('name').innerHTML = '<strong>재료 및 품목 </strong>' + selectedNode.label;
              };

              const targetStore = storeDB.find(data => data.name === selectedNode.label)
              const linkToStoreDetailPage = targetStore ? '<a class="nm-btn view-detail" target="_blank" href="' + defaultHref + targetStore.id + '">상품 상세정보 보기</a>' : ''
              document.getElementById('data').appendChild(linkToStoreDetailPage)
            }
  
            ul = document.createElement('ul');
            document.getElementById('link').appendChild(ul);

            let materialArray = []
            let processArray = []
            nodes.forEach(row => {
              if(row.Keyword.includes(val)) {
                materialArray.push(row)
              }
              if(row.Keyword.includes(val)) {
                processArray.push(row)
              }
            })
            console.log("materialArray : ", materialArray)
            console.log("processArray : ", processArray)
          }
          
          // select node is called on every click
          // we either update the data according to the selection
          // or reset the data if the same node is clicked twice
          function findAndCentroidNodeElement (selectedNode) {
            const bbox = d3.select(`#text-${selectedNode.id}`).node().getBBox()
            centerNode(bbox, defaultZoom)
          }
          function selectNode(selectedNode, e) {
            // centerNode(this.getBBox(), 0.6)
            if(typeof(e) === 'object') e.preventDefault()
            if (selectedId === selectedNode.id) {
              $("#attributepane").hide();
              selectedId = undefined
              resetData()
              updateSimulation()
              resetGraph()
            } else {
              $("#attributepane").show();
              if(selectedNode.node_type === "상점") document.querySelector('#attributepane #detail-info').classList.remove('hidden')
              selectedId = selectedNode.id
              // updateData(selectedNode)
              updateSimulation()
              // $("#attributepane-left").hide();
  
              var neighbors = getNeighbors(selectedNode)
  
              // we modify the styles to highlight selected nodes
              nodeElements.attr('fill', function (node) {
                return getNodeColor(node, neighbors)
              })
              //      textElements.attr('fill', function (node) { return getTextColor(node, neighbors) })
              linkElements.attr('stroke', function (link) {
                return getLinkColor(selectedNode, link)
              })
            }

            if (selectedNode.node_type == '상점') {
              const targetStore = storeDB.find(data => data.name === selectedNode.label)
              const linkToStoreDetailPage = targetStore ? '<a class="nm-btn view-detail" target="_blank" href="' + defaultHref + targetStore.id + '">상품 상세정보 보기</a>' : ''
              
              document.getElementById('name').innerHTML = '<strong>업체명 </strong>' + selectedNode.label;
              // console.log("document.getElementById('name') : ", document.getElementById('name'))
              document.getElementById('data').innerHTML = 
                '<strong>주소</strong> 서울시 ' + selectedNode.dist + ' ' + selectedNode.address +
                ' <br> <strong>전화번호 </strong> 02-' + selectedNode.phone +
                ' <br><br><strong>취급 품목, 공정</strong><br>' + selectedNode.descriptions +
                '<br>' +
                linkToStoreDetailPage;
                document.querySelector('#attributepane #store-wrapper').classList.add('hidden')
                document.querySelector('#attributepane #material-wrapper').classList.remove('hidden')
                document.querySelector('#attributepane #process-wrapper').classList.remove('hidden')
            } else if (selectedNode.node_type == '공정') {
              document.getElementById('name').innerHTML = '<strong>공정명 </strong>' + selectedNode.label;
              document.querySelector('#attributepane #store-wrapper').classList.remove('hidden')
              document.querySelector('#attributepane #material-wrapper').classList.add('hidden')
              document.querySelector('#attributepane #process-wrapper').classList.add('hidden')
            } else {
              document.getElementById('name').innerHTML = '<strong>재료 및 품목 </strong>' + selectedNode.label;
              document.querySelector('#attributepane #store-wrapper').classList.remove('hidden')
              document.querySelector('#attributepane #material-wrapper').classList.add('hidden')
              document.querySelector('#attributepane #process-wrapper').classList.add('hidden')
            };

            let materialItems = [], processItems = [], storeItems = []
            links.forEach(l => {
              if(selectedNode.id === l.target.id && selectedNode.node_type === '공정') {
                console.log("processItems l : ", l)
                if(l.source.node_type === '상점') storeItems.push(l.source.label)
                else if(l.source.node_type === '재료및품목') materialItems.push(l.source.label)
              } 
              else if (selectedNode.id === l.source.id && selectedNode.node_type === '상점') {
                console.log("storeItems l : ", l)
                if(l.target.node_type === '공정') processItems.push(l.target.label)
                else if(l.target.node_type === '재료및품목') materialItems.push(l.target.label)
              }
              else if(selectedNode.id === l.target.id && selectedNode.node_type === '재료및품목'){
                console.log("materialItems l : ", l)
                if(l.source.node_type === '상점') storeItems.push(l.source.label)
                if(l.source.node_type === '공정') processItems.push(l.source.label)
              }
            })
            // console.log('relatedLinks : ', relatedLinks)
            
            // relatedLinks.forEach(l => {
            //   // const relatedNode = nodes.find(n => {
            //   //   if(n.node_type === "공정") return n.id === l.source.id
            //   //   else return n.id === l.target.id
            //   // })
              
            //   console.log('relatedNode : ', relatedNode)
            //   if(!relatedNode) return false
            //   if(relatedNode.node_type === "공정") {
            //     processItems.push(relatedNode.label)
            //   } else {
            //     materialItems.push(relatedNode.label)
            //   }
            // })
            console.log('storeItems : ', storeItems)
            console.log('materialItems : ', materialItems)
            console.log('processItems : ', processItems)
            // console.log('relatedNodes : ', relatedNodes)
            // relatedNodes
            // const materialItems = selectedNode.products.split(",")

            const storeField = document.querySelector('#attributepane #store')
            storeField.innerHTML = ''
            storeItems.forEach(s => {
              if(s === 'NA') return false
              let storeFieldItem = document.createElement("DIV")
              storeFieldItem.setAttribute("class","attributepane-item")
              storeFieldItem.addEventListener('click', (e) => {
                e.preventDefault();
                selectstoreGroupOfNode(s, linkElements, nodeElements)
              })
              storeFieldItem.innerHTML = `<span>${s}</span>`
              storeField.append(storeFieldItem)
            })

            const materialField = document.querySelector('#attributepane #material')
            materialField.innerHTML = ''
            materialItems.forEach(m => {
              if(m === 'NA') return false
              let materialFieldItem = document.createElement("DIV")
              materialFieldItem.setAttribute("class","attributepane-item")
              materialFieldItem.addEventListener('click', (e) => {
                e.preventDefault();
                selectMaterialGroupOfNode(m, linkElements, nodeElements)
              })
              materialFieldItem.innerHTML = `<span>${m}</span>`
              materialField.append(materialFieldItem)
            })

            // const processItems = selectedNode.process.split(",")
            const processField = document.querySelector('#attributepane #process')
            processField.innerHTML = ''
            processItems.forEach(p => {
              if(p === 'NA') return false
              let processFieldItem = document.createElement("DIV")
              processFieldItem.setAttribute("class","attributepane-item")
              processFieldItem.addEventListener('click', (e) => {
                e.preventDefault();
                selectProcessGroupOfNode(p, linkElements, nodeElements)
              })
              processFieldItem.innerHTML = `<span>${p}</span>`
              processField.append(processFieldItem)
            })
          }
  
          // this helper simple adds all nodes and links
          // that are missing, to recreate the initial state
          function resetData() {
            var nodeIds = nodes.map(function (node) {
              return node.id
            })
            baseNodes.forEach(function (node) {
              if (nodeIds.indexOf(node.id) === -1) {
                nodes.push(node)
              }
            })
            links = baseLinks
          }
  
          // diffing and mutating the data
          function updateData(selectedNode) {
            var neighbors = getNeighbors(selectedNode)
            var newNodes = baseNodes.filter(function (node) {
              return neighbors.indexOf(node.id) > -1 || node.level === 1
            })
  
            var diff = {
              removed: nodes.filter(function (node) {
                return newNodes.indexOf(node) === -1
              }),
              added: newNodes.filter(function (node) {
                return nodes.indexOf(node) === -1
              })
            }
  
            diff.removed.forEach(function (node) {
              nodes.splice(nodes.indexOf(node), 1)
            })
            diff.added.forEach(function (node) {
              nodes.push(node)
            })
  
            links = baseLinks.filter(function (link) {
              return link.target.id === selectedNode.id || link.source.id === selectedNode.id
            })
          }
  
          function updateGraph() {
            ///////////////////
  
            // links
            linkElements = linkGroup.selectAll('line')
              .data(links, function (link) {
                return link.target.id + link.source.id
              })
  
            linkElements.exit().remove()
            
            var linkEnter = linkElements
              .enter().append('line')
              .attr('stroke', function(d) {
                return color(d.class)
              })
              .attr("stroke-opacity", 0.6)
              //'rgba(0, 50.2, 99.61, 0.3)'
              .style("stroke-width", function (d) {
                return Math.sqrt(d.weight) * 2;
              });
            linkElements = linkEnter.merge(linkElements)
  
            ///////////////////
            /*        linkElements.forEach(function(link){
                        if (!link.source["linkCount"]) link.source["linkCount"] = 0;
                        if (!link.target["linkCount"]) link.target["linkCount"] = 0;
                        link.source["linkCount"]++;
                        link.target["linkCount"]++;
                      });*/
  
            // nodes
            nodeElements = nodeGroup.selectAll('.path')
              .data(nodes, function (node) {
                return node.id
              })
  
            nodeElements.exit().remove()
  
            var nodeEnter = nodeElements
              .enter()
              .append("path")
              .attr("d", d3.symbol()
                .type(function (d) {
                  return shape(d.node_type);
                })
                .size(0) // not to display nodes
                //.size( function(d) { return d.group *10; })
              )
              .attr("fill", 'white')
              //d => color(d.node_type)
              .call(dragDrop)
  
            nodeElements = nodeEnter.merge(nodeElements)
            // texts
            textElements = textGroup.selectAll('text')
              .data(nodes, function (node) {
                return node.id
              })
            textElements.exit().remove()
  
            var textEnter = textElements
              .enter()
              .append('text')
              .text(function (d) {
                return d.label
              })
              .attr("font-size", function (d) {
                const data = links.find(l => {
                  return d.id == l.source || d.id == l.target
                })
                return data ? Math.sqrt(data.weight) * 7 : 11
              })
              .attr("font-family", "Noto Sans KR")
              .attr("x", 0)
              .attr("dy", ".35em")
              .attr("text-anchor", "middle")
              .attr("class", "label-txt")
              .attr('id', d => {
                return `text-${d.id}`
              })
              .attr("filter", "url(#addbackground)")
              //          .attr("stroke", "white")
              //          .attr("stroke-width", ".7px")
              .on('click', function (e) {
                selectNode(e)
                centerNode(this.getBBox(), 0.6)
              });
            //        .attr('color','rgba(255, 255, 255, 1)')
            textElements = textEnter.merge(textElements)
          }
  
  
          ////////////////////////////////////////////////////////////////
          function centerNode(bbox, zoom=defaultZoom){
            // console.log('xx : ', xx)
            // console.log('yy : ', yy)
            // console.log('linkGroup.node().getBBox : ', linkGroup.node().getBBox)
            const rootbbox = linkGroup.node().getBBox()
            const vx = rootbbox.x;		// container x co-ordinate
            const vy = rootbbox.y;		// container y co-ordinate
            const vw = rootbbox.width;	// container width
            const vh = rootbbox.height;
            const bx = bbox.x;
            const by = bbox.y;
            const bw = bbox.width;
            const bh = bbox.height;
            const tx = -bx*zoom + vx + vw/2 - bw*zoom/2 + 200;
            const ty = -by*zoom + vy + vh/2 - bh*zoom/2 + 150;
            globalScreenX = tx
            globalScreenY = ty
          
            linkGroup
              .transition()
              .duration(500)
              // .call(zoom.transform, d3.zoomIdentity.translate(x, y).scale(zoom))
              .attr("transform", `translate(${tx},${ty}) scale(${zoom})`)
            nodeGroup
              .transition()
              .duration(500)
              // .call(zoom.transform, d3.zoomIdentity.translate(x, y).scale(zoom))
              .attr("transform", `translate(${tx},${ty}) scale(${zoom})`)
            textGroup 
              .transition()
              .duration(500)
              // .call(zoom.transform, d3.zoomIdentity.translate(x, y).scale(zoom))
              .attr("transform", `translate(${tx},${ty}) scale(${zoom})`)
            // d3.transform(s.attr("transform")).translate[0]
          }
        
          function handleZoom() {
            if (linkGroup) {
              linkGroup.attr("transform", d3.event.transform);
            }
            if (nodeGroup) {
              nodeGroup.attr("transform", d3.event.transform);
            }
            if (textGroup) {
              textGroup.attr("transform", d3.event.transform);
            }
          };
  
          function updateSimulation() {
            updateGraph()
  
            simulation.nodes(nodes).on('tick', () => {
  
              nodeElements
                .attr('transform', function (d) {
                  return 'translate(' + d.x + ',' + d.y + ')';
                });
  
              linkElements
                .attr('x1', function (link) {
                  return link.source.x
                })
                .attr('y1', function (link) {
                  return link.source.y
                })
                .attr('x2', function (link) {
                  return link.target.x
                })
                .attr('y2', function (link) {
                  return link.target.y
                })
  
              textElements
                .attr('x', function (node) {
                  return node.x
                })
                .attr('y', function (node) {
                  return node.y
                })
            })
  
            simulation.force('link').links(links)
            simulation.alphaTarget(0).restart()
          }
  
          // last but not least, we call updateSimulation
          // to trigger the initial render
          updateSimulation()

          function onChangeSearchText(val) {
            document.getElementById('search-status').innerHTML = `<div class="title">검색어 : ${val} <div>`
          }

          // search auto complete - 검색 자동완성
          function autocomplete(inp, {
            keywords,
            nodes,
            processClassName,
            materialClassName
          }) {

            /*the autocomplete function takes two arguments,
            the text field element and an array of possible autocompleted values:*/
            var currentFocus;
            // const nameField = document.querySelector("#autocomplete-list .name.field");
            // const processField = document.querySelector("#autocomplete-list .process.field");
            // const materialField = document.querySelector("#autocomplete-list .material.field");
            /*execute a function when someone writes in the text field:*/

            // inp.addEventListener("change", function (e) {
            //   var val = this.value;
            //   /*close any already open lists of autocompleted values*/
            //   onChangeSearchText(val)
            // })
            // inp.addEventListener("click", function (e) {
            //   document.getElementById('autocomplete-list').classList.remove("hidden");
            // })
            inp.addEventListener("input", function (e) {
              e.preventDefault();
              document.getElementById('autocomplete-list').classList.remove("hidden");
              var val = this.value;
              onChangeSearchText(val)
              /*close any already open lists of autocompleted values*/

              closeAllLists();
              if (!val) return false;
              currentFocus = -1;

              for (let i = 0; i < keywords.length; i++) {
                /*check if the item starts with the same letters as the text field value:*/
                if ([keywords[i].name, keywords[i].descriptions, keywords[i].prod].filter(k => k.includes(val)).length > 0) {
                  /*create a DIV element for each matching element:*/
                  const nameFieldElement = document.createElement("DIV");
                  // nameFieldElement.addEventListener("click", function (e) {return selectNode(nodes[i],e)});
                  nameFieldElement.setAttribute("class", "autocomplete-item");
                  nameFieldElement.innerHTML = "<span class='title'>" + keywords[i].name + "</span><br>" +
                    "<span>" + nodes[i].address + "</span>"
                  /*insert a input field that will hold the current array item's value:*/
                  nameFieldElement.innerHTML += "<input type='hidden' value='" + keywords[i].name + "'>";
                  /*execute a function when someone clicks on the item value (DIV element):*/
                  nameFieldElement.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    document.getElementById('autocomplete-list').classList.add("hidden");
                    selectNode(keywords[i],e)
                    findAndCentroidNodeElement(keywords[i])
                    // inp.value = this.getElementsByTagName("input")[0].value;
                    
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                  });
  
                  // descriptionFieldElement.innerHTML = "<span>" + nodes[i].descriptions + "</span>"
                  // productFieldElement.innerHTML = "<span>" + nodes[i].products + "</span>"
                  nameField.appendChild(nameFieldElement);
                  // descriptionsField.append(descriptionFieldElement)
                  // productsField.append(productFieldElement)
                }
              }
            });


            // // user press enter key on search box
            // inp.addEventListener("keyup", function(event) {
            //   // Number 13 is the "Enter" key on the keyboard
            //   // event.preventDefault();
            //   if (event.keyCode !== 13) return false
            //   closeAllLists();
            //   $("#attributepane").show();
              
            //   document.getElementById('autocomplete-list').classList.remove("hidden");
            //   var val = this.value;
            //   /*close any already open lists of autocompleted values*/

            //   let storeArray = []
            //   for (let i = 0; i < keywords.length; i++) {
            //     if ([keywords[i].name, keywords[i].descriptions, keywords[i].prod].filter(k => k.includes(val)).length > 0) {
            //       storeArray.push(keywords[i])
            //     }
            //   }

            //   storeArray.forEach(s => {
            //     let storeFieldItem = document.createElement("DIV")
            //     storeFieldItem.setAttribute("class", "attributepane-item")
            //     storeFieldItem.addEventListener('click',(e) => {
            //       selectNode(s,e)
            //     })
            //     storeFieldItem.innerHTML = "<span>" + s.name + "</span>"
                
            //     document.querySelector('#attributepane #store').append(storeFieldItem)
            //   })
              
            //   materialClassName.forEach(m => {
            //     if(!m.includes(val)) return false
            //     let materialFieldItem = document.createElement("DIV")
            //     materialFieldItem.setAttribute("class", "attributepane-item")
            //     materialFieldItem.addEventListener('click',() => {
            //       selectMaterialGroupOfNode(m, linkElements, nodeElements)
            //     })
            //     materialFieldItem.innerHTML = "<span>" + m + "</span>"
                
            //     document.querySelector('#attributepane #material').append(materialFieldItem)
            //   })
    
            //   processClassName.forEach(p => {
            //     if(!p.includes(val)) return false
            //     let processFieldItem = document.createElement("DIV")
            //     processFieldItem.setAttribute("class", "attributepane-item")
            //     processFieldItem.addEventListener('click',() => {
            //       selectProcessGroupOfNode(p, linkElements, nodeElements)
            //     })
            //     processFieldItem.innerHTML = "<span>" + p + "</span>"
            //     document.querySelector('#attributepane #process').append(processFieldItem)
            //   })
            // });

            function searchInputText(val) {
              $("#attributepane").show();
              document.querySelector('#attributepane #store-wrapper').classList.remove('hidden')
              document.getElementById('autocomplete-list').classList.add("hidden");

              const attributepaneMaterial = document.querySelector('#attributepane #material')
              const attributepaneProcess = document.querySelector('#attributepane #process')
              const attributepaneStore = document.querySelector('#attributepane #store')
              for (let i = 0; i < nodes.length; i++) {
                if(nodes[i].label === 'NA') continue;
                if ([nodes[i].name, nodes[i].descriptions, nodes[i].prod].filter(k => k.includes(val)).length > 0) {
                  if(nodes[i].label === nodes[i].prod) { // 공정
                    let processFieldItem = document.createElement("DIV")
                    processFieldItem.setAttribute("class", "attributepane-item")
                    processFieldItem.addEventListener('click',() => {
                      selectProcessGroupOfNode(nodes[i].label, linkElements, nodeElements)
                    })
                    processFieldItem.innerHTML = "<span>" + nodes[i].label + "</span>"
                    attributepaneProcess.append(processFieldItem)
                  } else if(nodes[i].label === nodes[i].Keyword) { // 품목
                    let materialFieldItem = document.createElement("DIV")
                    materialFieldItem.setAttribute("class", "attributepane-item")
                    materialFieldItem.addEventListener('click',() => {
                      selectMaterialGroupOfNode(nodes[i].label, linkElements, nodeElements)
                    })
                    materialFieldItem.innerHTML = "<span>" + nodes[i].label + "</span>"
                    attributepaneMaterial.append(materialFieldItem)
                  } else { // 상점
                    let storeFieldItem = document.createElement("DIV")
                    storeFieldItem.setAttribute("class", "attributepane-item")
                    storeFieldItem.addEventListener('click',(e) => {
                      selectNode(nodes[i],e)
                    })
                    storeFieldItem.innerHTML = "<span>" + nodes[i].label + "</span>"
                    attributepaneStore.append(storeFieldItem)
                  }
                }
              }






              const processChekced = document.querySelectorAll('.field.process .filter-item-check-input:checked')
              const processField = document.querySelector('#attributepane #process')
              processField.innerHTML = ''
              processChekced.forEach((input) => {
                const nodeGroup = nodes.filter(n => n.label === input.value)
                nodeGroup.forEach(p => {
                  let processFieldItem = document.createElement("DIV")
                  processFieldItem.setAttribute("class","attributepane-item")
                  processFieldItem.addEventListener('click', (e) => {
                    e.preventDefault();
                    selectProcessGroupOfNode(p, linkElements, nodeElements)
                  })
                  processFieldItem.innerHTML = `<span>${p.name}</span>`
                  processField.append(processFieldItem)
                })
              })

              const materialChekced = document.querySelectorAll('.field.material .filter-item-check-input:checked')
              const materialField = document.querySelector('#attributepane #material')
              materialChekced.forEach((input) => {
                const nodeGroup = nodes.filter(n => n.label === input.value)
                nodeGroup.forEach(m => {
                  let materialFieldItem = document.createElement("DIV")
                  materialFieldItem.setAttribute("class","attributepane-item")
                  materialFieldItem.addEventListener('click', (e) => {
                    e.preventDefault();
                    selectMaterialGroupOfNode(m, linkElements, nodeElements)
                  })
                  materialFieldItem.innerHTML = `<span>${m}</span>`
                  materialField.append(materialFieldItem)
                })
              })
            }

            // user press enter key on search button 검색 버튼 클릭시 필터링
            document.querySelector('#search-input-button').addEventListener("click", function(e) {
              e.preventDefault()
              const val = this.value
              searchInputText(val)
            });


            /*execute a function presses a key on the keyboard:*/
            inp.addEventListener("keydown", function (e) {
              document.getElementById('autocomplete-list').classList.remove("hidden");
              var x = document.querySelector("#autocomplete-list .name.field");
              if (x) x = x.getElementsByClassName("autocomplete-item");
              if (e.keyCode === 40) {
                /*If the arrow DOWN key is pressed,
                increase the currentFocus variable:*/
                currentFocus++;
                /*and and make the current item more visible:*/
                addActive(x);
              } else if (e.keyCode === 38) { //up
                /*If the arrow UP key is pressed,
                decrease the currentFocus variable:*/
                currentFocus--;
                /*and and make the current item more visible:*/
                addActive(x);
              } else if (e.keyCode === 13) {
                /*If the ENTER key is pressed, prevent the form from being submitted,*/
                e.preventDefault();
                if (currentFocus > -1) {
                  /*and simulate a click on the "active" item:*/
                  if (x) x[currentFocus].click();
                }
                const val = this.value
                searchInputText(val)
              }
            });
  
            function addActive(x) {
              /*a function to classify an item as "active":*/
              if (!x) return false;
              /*start by removing the "active" class on all items:*/
              removeActive(x);
              if (currentFocus >= x.length) currentFocus = 0;
              if (currentFocus < 0) currentFocus = (x.length - 1);
              /*add class "autocomplete-active":*/
              x[currentFocus].classList.add("autocomplete-active");
            }
  
            function removeActive(x) {
              /*a function to remove the "active" class from all autocomplete items:*/
              for (var i = 0; i < x.length; i++) {
                x[i].classList.remove("autocomplete-active");
              }
            }
  
            function closeAllLists(elmnt) {
              /*close all autocomplete lists in the document,
              except the one passed as an argument:*/
              nameField.innerHTML = ''
              // processField.innerHTML = ''
              // materialField.innerHTML = ''

              document.querySelector('#attributepane #store').innerHTML=""
              document.querySelector('#attributepane #material').innerHTML=""
              document.querySelector('#attributepane #process').innerHTML=""
              // document.querySelector('#attributepane #name').innerHTML=""
              // document.querySelector('#attributepane #data').innerHTML=""
              // document.querySelector('#attributepane #p').innerHTML=""
              // document.querySelector('#attributepane #link').innerHTML=""
            }
            // /*execute a function when someone clicks in the document:*/
            // document.querySelector('svg').addEventListener("click", function (e) {
            //   console.log('qweqweqeqweqwewqqe')
            //   closeAllLists();
            //   document.getElementById('autocomplete-list').classList.add("hidden");
            // });
          }
  
          // document.getElementById("close").addEventListener ("click", closeplane, false);
          // function closeplane() {
          //   console.log('qweqweqwe')
          //   resetData()
          //   updateSimulation()
          //   $("#attributepane").hide();
          //   $("#attributepane-left").show();
          // }
  
          document.getElementById("attributepane-close").addEventListener("click", function (e) {
            e.preventDefault();
            resetData()
            updateSimulation()
            resetGraph()

            document.querySelector('#attributepane #name').innerHTML=""
            document.querySelector('#attributepane #data').innerHTML=""
            // document.querySelector('#attributepane #p').innerHTML=""
            document.querySelector('#attributepane #link').innerHTML=""
            $("#attributepane").hide();
            document.getElementById('autocomplete-list').classList.add("hidden");
            document.getElementById('filter-list').classList.add("hidden");
            // $("#attributepane-left").show();
          });
  
          // document.getElementById("reset-map").addEventListener("click", function (e) {
          //   e.preventDefault();
          //   resetData()
          //   updateSimulation()
          //   resetGraph()
          // });
  
          // document.querySelector('.search-box-wrapper').addEventListener('click', function() {
          //   const processField = document.querySelector("#autocomplete-list .process.field");
          //   const materialField = document.querySelector("#autocomplete-list .material.field");
          //   materialClassName.forEach(m => {
          //     let materialFieldItem = document.createElement("DIV")
          //     // materialFieldItem.setAttribute("class", "autocomplete-item material-field-item")
          //     materialFieldItem.addEventListener('click',() => {
          //       selectMaterialGroupOfNode(m, linkElements, nodeElements)
          //     })
          //     materialFieldItem.innerHTML = "<span>" + m + "</span>"
          //     materialField.append(materialFieldItem)
          //   })
  
          //   processClassName.forEach(p => {
          //     let processFieldItem = document.createElement("DIV")
          //     // processFieldItem.setAttribute("class", "autocomplete-item")
          //     processFieldItem.addEventListener('click',() => {
          //       selectProcessGroupOfNode(p, linkElements, nodeElements)
          //     })
          //     processFieldItem.innerHTML = "<span>" + p + "</span>"
          //     processField.append(processFieldItem)
          //   })
          // })
  
          // const autocompleteListName = nodes.map(n => ({name: n.name, descriptions: n.descriptions, prod:n.prod}))
  
          autocomplete(
            document.getElementById("search-input"), {
              keywords: nodes,
              nodes,
              processClassName,
              materialClassName
            }
          );

          document.getElementById('toggle-filter1').addEventListener('click', (e) => {
            document.getElementById('filter-list').classList.toggle("hidden")
            document.querySelector('#toggle-filter1 i').classList.toggle("rotate-180")
          })
          document.getElementById('toggle-filter2').addEventListener('click', (e) => {
            document.getElementById('filter-list').classList.toggle("hidden")
            document.querySelector('#toggle-filter2 i').classList.toggle("rotate-180")
          })

          // 필터링 버튼
          document.getElementById('filtering').addEventListener('click', (e) => {
            e.preventDefault()
            
            $("#attributepane").show();
            document.querySelector('#attributepane #store-wrapper').classList.add('hidden')
            document.querySelector('#attributepane #detail-info').classList.add('hidden')
            document.getElementById('filter-list').classList.add("hidden");
            
            let allNeighborsIds = []

            const processChekced = document.querySelectorAll('.field.process .filter-item-check-input:checked')
            const processField = document.querySelector('#attributepane #process')
            processField.innerHTML = ''
            processChekced.forEach((input) => {
              // const processFieldItems = nodes.filter(n => n.process.includes(input.value))
              const processFieldItems = nodes.filter(n => n.label === input.value)
              allNeighborsIds.push(processFieldItems.map(g => g.id))

              processFieldItems.forEach(p => {
                if(p === 'NA') return false
                let processFieldItem = document.createElement("DIV")
                processFieldItem.setAttribute("class","attributepane-item")
                processFieldItem.addEventListener('click', (e) => {
                  e.preventDefault();
                  selectProcessGroupOfNode(p.label, linkElements, nodeElements)
                })
                processFieldItem.innerHTML = `<span>${p.label}</span>`
                processField.append(processFieldItem)
              })
            })

            const materialChekced = document.querySelectorAll('.field.material .filter-item-check-input:checked')
            const materialField = document.querySelector('#attributepane #material')
            materialField.innerHTML = ''
            materialChekced.forEach((input) => {
              // const materialItems = nodes.filter(n => n.products.includes(input.value))
              const materialItems = nodes.filter(n => n.label === input.value)
              allNeighborsIds.push(materialItems.map(g => g.id))

              materialItems.forEach(m => {
                if(m === 'NA') return false
                let materialFieldItem = document.createElement("DIV")
                materialFieldItem.setAttribute("class","attributepane-item")
                materialFieldItem.addEventListener('click', (e) => {
                  e.preventDefault();
                  selectMaterialGroupOfNode(m.label, linkElements, nodeElements)
                })
                materialFieldItem.innerHTML = `<span>${m.label}</span>`
                materialField.append(materialFieldItem)
              })
            })
            
            allNeighborsIds = allNeighborsIds.flat()
            linkElements.attr('stroke', function (link) {
              return allNeighborsIds.some(id => id === link.target.id || id === link.source.id) ? color(link.class) : '#E5E5E5'
            })
  
            nodeElements.attr('fill', function (node) {
              return getNodeColor(node, allNeighborsIds)
            })
          })

          // 선택 취소 - 취급 품목
          document.getElementById('reset-filter').addEventListener('click', (e) => {
            e.preventDefault()
            const materialChekcedList = document.querySelectorAll('.field.material .filter-item-check-input:checked')
            materialChekcedList.forEach(chk => {
              chk.checked = false
            })
            const processChekcedList = document.querySelectorAll('.field.process .filter-item-check-input:checked')
            processChekcedList.forEach(chk => {
              chk.checked = false
            })
          })

          //-----START--- draw material, process list //
          const nameField = document.querySelector("#autocomplete-list .name.field");
          const processField = document.querySelector("#filter-list .process.field");
          const materialField = document.querySelector("#filter-list .material.field");
          // append materialClassName to list
          materialClassName.forEach((m,i) => {
            let materialFieldItem = document.createElement("DIV")
            materialFieldItem.setAttribute("class", "filter-item material-field-item")
            // materialFieldItem.addEventListener('click',() => {
            //   selectMaterialGroupOfNode(m, linkElements, nodeElements)
            // })
            materialFieldItem.innerHTML = `
              <input class="filter-item-check-input" type="checkbox" value="${m}" id="m${i}">
              <label class="filter-item-check-label" for="m${i}">
                ${m}
              </label>
            `
            // materialFieldItem.innerHTML = "<span>" + m + "</span>"
            materialField.append(materialFieldItem)
          })
  
          // append processClassName to list
          processClassName.forEach((p,i) => {
            let processFieldItem = document.createElement("DIV")
            processFieldItem.setAttribute("class", "filter-item")
            // processFieldItem.addEventListener('click',() => {
            //   selectProcessGroupOfNode(p, linkElements, nodeElements)
            // })
            processFieldItem.innerHTML = `
              <input class="filter-item-check-input" type="checkbox" value="${p}" id="p${i}">
              <label class="filter-item-check-label" for="p${i}">
                ${p}
              </label>
            `
            processField.append(processFieldItem)
          })
  
          // select matiral and toggle all related materials
          function selectMaterialGroupOfNode(val, linkElements, nodeElements) {
            const group = nodes.filter(n => n.Keyword === val)
            // const group = nodes.filter(n => n.products.includes(m))
            let allNeighborsIds = []
            let allNeighborsObj = []
            group.forEach(g => {
              const node = g
              const neighbors = getNeighbors(node)
              allNeighborsIds.push(neighbors)
              allNeighborsObj.push(node)
            })
            const node = group[0]
            if(node) {
              // const bbox = d3.select(`#text-${node.id}`).node().getBBox()
              // centerNode(bbox, 0.6)
              findAndCentroidNodeElement(node)
            }
            allNeighborsIds = allNeighborsIds.flat()

            linkElements.attr('stroke', function (link) {
              return allNeighborsIds.includes(link.target.id) ? color(link.class) : '#E5E5E5'
            })
  
            nodeElements.attr('fill', function (node) {
              return getNodeColor(node, allNeighborsIds)
            })
          }
  
          // select matiral and toggle all related materials
          function selectProcessGroupOfNode(val, linkElements, nodeElements) {
            const group = nodes.filter(n => n.prod === val)
            // const group = nodes.filter(n => n.process.includes(p))
            let allNeighborsIds = []
            let allNeighborsObj = []

            group.forEach(g => {
              const node = g
              const neighbors = getNeighbors(node)
              allNeighborsIds.push(neighbors)
              allNeighborsObj.push(node)
            })
            const node = group[0]
            console.log("group : ", group)
            console.log("node : ", node)
            if(node) {
              // const bbox = d3.select(`#text-${node.id}`).node().getBBox()
              // centerNode(bbox, 0.6)
              findAndCentroidNodeElement(node)
            }

            allNeighborsIds = allNeighborsIds.flat()
            linkElements.attr('stroke', function (link) {
              return allNeighborsIds.includes(link.target.id) ? color(link.class) : '#E5E5E5'
            })
  
            nodeElements.attr('fill', function (node) {
              return getNodeColor(node, allNeighborsIds)
            })
          }
          //-----END--- draw material, process list //
  
      }
    });
  })
