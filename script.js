function handleNav() {
  var x = document.getElementById("headerNav");
  if (x.className === "headerNav") {
    x.className += " hidden";
  } else {
    x.className = "headerNav";
  }
}

const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
let currentTheme = localStorage.getItem("theme");

function onInit() {
  console.log("INIT");
}

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    changeImage();
  }
}

function changeImage() {
  let theme = localStorage.getItem("theme");
  let mainlogo = document.getElementById("mainlogo");
  let exploreImg = document.getElementById("exploreImg");
  let ethLogo = document.getElementById("ethLogo");
  let polyLogo = document.getElementById("polyLogo");
  let bscLogo = document.getElementById("bscLogo");
  let communityLogo1 = document.getElementById("communityLogo1");
  let communityLogo2 = document.getElementById("communityLogo2");
  let communityLogo3 = document.getElementById("communityLogo3");
  let communityLogo4 = document.getElementById("communityLogo4");
  let footerlogo = document.getElementById("footerlogo");
  let ecoImg1 = document.getElementById("ecoImg1");
  let ecoImg2 = document.getElementById("ecoImg2");
  let ecoImg3 = document.getElementById("ecoImg3");
  let ecoImg4 = document.getElementById("ecoImg4");
  let ecoImg5 = document.getElementById("ecoImg5");
  let ecoImg6 = document.getElementById("ecoImg6");
  let ecoImg7 = document.getElementById("ecoImg7");
  let ecoImg8 = document.getElementById("ecoImg8");
  let ecoImg11 = document.getElementById("ecoImg11");
  let ecoImg12 = document.getElementById("ecoImg12");
  let ecoImg14 = document.getElementById("ecoImg14");
  let ecoImg15 = document.getElementById("ecoImg15");
  let ecoImg16 = document.getElementById("ecoImg16");
  let ecoImg17 = document.getElementById("ecoImg17");
  let ecoImg20 = document.getElementById("ecoImg20");
  let ecoImg21 = document.getElementById("ecoImg21");
  let ecoImg22 = document.getElementById("ecoImg22");
  let ecoImg23 = document.getElementById("ecoImg23");
  let Vector1 = document.getElementById("Vector1");
  let Vector2 = document.getElementById("Vector2");
  let Vector3 = document.getElementById("Vector3");
  let Vector4 = document.getElementById("Vector4");
  let Vector5 = document.getElementById("Vector5");
  let Vector6 = document.getElementById("Vector6");
  let Vector7 = document.getElementById("Vector7");
  let Vector8 = document.getElementById("Vector8");
  let Vector9 = document.getElementById("Vector9");
  let Vector10 = document.getElementById("Vector10");
  let Vector11 = document.getElementById("Vector11");
  let Vector12 = document.getElementById("Vector12");
  let Vector13 = document.getElementById("Vector13");

  if (
    mainlogo.src.match("./assets/darklogo.png") ||
    exploreImg.src.match("./assets/exploreImg6.png") ||
    ethLogo.src.match("./assets/ethLogo1.png") ||
    polyLogo.src.match("./assets/PolygonLogo1.png") ||
    bscLogo.src.match("./assets/BInanceLogo1.png") ||
    communityLogo1.src.match("./assets/darkVector1.png") ||
    communityLogo2.src.match("./assets/darkVector2.png") ||
    communityLogo3.src.match("./assets/darkVector3.png") ||
    communityLogo4.src.match("./assets/darkVector3.png") ||
    footerlogo.src.match("./assets/darklogo.png") ||
    ecoImg1.src.match("./assets/darkgroup1.png") ||
    ecoImg2.src.match("./assets/darkgroup2.png") ||
    ecoImg3.src.match("./assets/darkgroup3.png") ||
    ecoImg4.src.match("./assets/darkgroup4.png") ||
    ecoImg5.src.match("./assets/darkgroup5.png") ||
    ecoImg6.src.match("./assets/darkgroup6.png") ||
    ecoImg7.src.match("./assets/darkgroup7.png") ||
    ecoImg8.src.match("./assets/darkgroup8.png") ||
    ecoImg11.src.match("./assets/darkgroup11.png") ||
    ecoImg12.src.match("./assets/darkgroup12.png") ||
    ecoImg14.src.match("./assets/darkgroup14.png") ||
    ecoImg15.src.match("./assets/darkgroup15.png") ||
    ecoImg16.src.match("./assets/darkgroup16.png") ||
    ecoImg17.src.match("./assets/darkgroup17.png") ||
    ecoImg20.src.match("./assets/darkgroup14.png") ||
    ecoImg21.src.match("./assets/darkgroup15.png") ||
    ecoImg22.src.match("./assets/darkgroup16.png") ||
    ecoImg23.src.match("./assets/darkgroup17.png") ||
    Vector1.src.match("./assets/darkVector1.png") ||
    Vector2.src.match("./assets/darkVector2.png") ||
    Vector3.src.match("./assets/darkVector3.png") ||
    Vector4.src.match("./assets/darkVector4.png") ||
    Vector5.src.match("./assets/darkVector5.png") ||
    Vector6.src.match("./assets/darkVector6.png") ||
    Vector7.src.match("./assets/darkVector4.png") || 
    Vector8.src.match("./assets/darkVector4.png") ||
    Vector9.src.match("./assets/darkVector1.png") ||
    Vector10.src.match("./assets/darkVector2.png") ||
    Vector11.src.match("./assets/darkVector5.png") ||
    Vector12.src.match("./assets/darkVector3.png") ||
    (Vector13.src.match("./assets/darkVector6.png") && theme === "dark")
  ) {
    console.log("ITS DARK");

    mainlogo.src = "./assets/unilendLogo.png";
    exploreImg.src = "./assets/exploreImg5.png";
    ethLogo.src = "./assets/ethLogo.png";
    polyLogo.src = "./assets/PolygonLogo.png";
    bscLogo.src = "./assets/BInanceLogo.png";
    communityLogo1.src = "./assets/Vector1.png";
    communityLogo2.src = "./assets/Vector2.png";
    communityLogo3.src = "./assets/Vector3.png";
    communityLogo4.src = "./assets/Vector3.png";
    footerlogo.src = "./assets/unilendLogo.png";
    ecoImg1.src = "./assets/group1.png";
    ecoImg2.src = "./assets/group2.png";
    ecoImg3.src = "./assets/group3.png";
    ecoImg4.src = "./assets/group4.png";
    ecoImg5.src = "./assets/group5.png";
    ecoImg6.src = "./assets/group6.png";
    ecoImg7.src = "./assets/group7.png";
    ecoImg8.src = "./assets/group8.png";
    ecoImg11.src = "./assets/group11.png";
    ecoImg12.src = "./assets/group12.png";
    ecoImg14.src = "./assets/group14.png";
    ecoImg15.src = "./assets/group15.png";
    ecoImg16.src = "./assets/group16.png";
    ecoImg17.src = "./assets/group17.png";
    ecoImg20.src = "./assets/group14.png";
    ecoImg21.src = "./assets/group15.png";
    ecoImg22.src = "./assets/group16.png";
    ecoImg23.src = "./assets/group17.png";
    Vector1.src = "./assets/Vector1.png";
    Vector2.src = "./assets/Vector2.png";
    Vector3.src = "./assets/Vector3.png";
    Vector4.src = "./assets/Vector4.png";
    Vector5.src = "./assets/Vector5.png";
    Vector6.src = "./assets/Vector6.png";
    Vector7.src = "./assets/Vector4.png";
    Vector8.src = "./assets/Vector4.png";
    Vector9.src = "./assets/Vector1.png";
    Vector10.src = "./assets/Vector2.png";
    Vector11.src = "./assets/Vector5.png";
    Vector12.src = "./assets/Vector3.png";
    Vector13.src = "./assets/Vector6.png";
  } else {
    console.log("ITS LIGHT");
    mainlogo.src = "./assets/darklogo.png";
    exploreImg.src = "./assets/exploreImg6.png";
    ethLogo.src = "./assets/ethLogo1.png";
    polyLogo.src = "./assets/PolygonLogo1.png";
    bscLogo.src = "./assets/BInanceLogo1.png";
    communityLogo1.src = "./assets/darkVector1.png";
    communityLogo2.src = "./assets/darkVector2.png";
    communityLogo3.src = "./assets/darkVector3.png";
    communityLogo4.src = "./assets/darkVector3.png";
    footerlogo.src = "./assets/darklogo.png";
    ecoImg1.src = "./assets/darkgroup1.png";
    ecoImg2.src = "./assets/darkgroup2.png";
    ecoImg3.src = "./assets/darkgroup3.png";
    ecoImg4.src = "./assets/darkgroup4.png";
    ecoImg5.src = "./assets/darkgroup5.png";
    ecoImg6.src = "./assets/darkgroup6.png";
    ecoImg7.src = "./assets/darkgroup7.png";
    ecoImg8.src = "./assets/darkgroup8.png";
    ecoImg11.src = "./assets/darkgroup11.png";
    ecoImg12.src = "./assets/darkgroup12.png";
    ecoImg14.src = "./assets/darkgroup14.png";
    ecoImg15.src = "./assets/darkgroup15.png";
    ecoImg16.src = "./assets/darkgroup16.png";
    ecoImg17.src = "./assets/darkgroup17.png";
    ecoImg20.src = "./assets/darkgroup14.png";
    ecoImg21.src = "./assets/darkgroup15.png";
    ecoImg22.src = "./assets/darkgroup16.png";
    ecoImg23.src = "./assets/darkgroup17.png";
    Vector1.src = "./assets/darkVector1.png";
    Vector2.src = "./assets/darkVector2.png";
    Vector3.src = "./assets/darkVector3.png";
    Vector4.src = "./assets/darkVector4.png";
    Vector5.src = "./assets/darkVector5.png";
    Vector6.src = "./assets/darkVector6.png";
    Vector7.src = "./assets/darkVector4.png";
    Vector8.src = "./assets/darkVector4.png";
    Vector9.src = "./assets/darkVector1.png";
    Vector10.src = "./assets/darkVector2.png";
    Vector11.src = "./assets/darkVector5.png";
    Vector12.src = "./assets/darkVector3.png";
    Vector13.src = "./assets/darkVector6.png";
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
  changeImage();
}

toggleSwitch.addEventListener("change", switchTheme, false);
