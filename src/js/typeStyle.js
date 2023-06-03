import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { EasePack } from "gsap/EasePack";
gsap.registerPlugin(TextPlugin, EasePack);

const words = [
  " متحف آيا صوفيا: عُرف في العصر العُثماني باسم الجامع الكبير الشريف لآيا صوفيا، يقع على الضفة الأوروبيَّة في مدينة إسطنبول وهو من أشهر المعالم في تركيا التي يحرص الجميع على زيارتها أثناء جولات السياحة في إسطنبول.",
  "قصر توب كابي: من أفضل الأماكن السياحية في إسطنبول الموصي بزيارتها لمعرفة كيف كانت تُدار شئون الحياة والحكم في ظل الخلافة العثمانية بتركيا طيلة 4 قرون يستعرض المتحف العظيم أحداثها وتفاصيلها.",
  "برج غالاتا: برج غالاتا هو برج تاريخي عريق يُقال أنه بُنِي عام 507 م ثم تعرض البرج لزلزال قوي أثر عليه تأثيراً بالغًا، بعدها تم اعادة ترميمه وبُنِي على الطراز الرومانسكي في القرن الـ 14، وفي هذا الوقت كان أطول مبنى في اسطنبول",
  "جامع أيوب سلطان: مسجد عثماني قديم موجود في منطقة أيوب في الجانب الأوروبي من مدينة إسطنبول، بالقرب من منطقة القرن الذهبي، ويقع خارج أسوار القسطنطينية، إذ بني المسجد عام 1458 أي بعد خمس سنوات من فتح القسطنطينية، وهو أول مسجد بناه المسلمون في إسطنبول بعد فتح القسطنطينية عام 1453",
];


let cursor = gsap.to(".cursor", {
  opacity: 0,
  ease: "power2.inOut",
  repeat: -1,
});

let masterTl = gsap.timeline({ repeat: -1 }).pause();
let boxTl = gsap.timeline();

const box = document.querySelector(".js-carousel-item-istanbul");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      boxTl.play();
    } else {
      boxTl.pause();
    }
  });
},{
  threshold: 1,
});

observer.observe(box);

boxTl
  .to(".box", { duration: 1, delay: 0.5, ease: "power4.inOut" })
  .from(".hi", { duration: 1, y: "7vw", ease: "power3.out" })
  .to(".box", {
    duration: 1,
    height: "2vw",
    ease: "elastic.out",
    onComplete: () => masterTl.play(),
  })
  .to(".box", {
    duration: 2,
    autoAlpha: 0.7,
    yoyo: true,
    repeat: -1,
    ease: "rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})",
  });



words.forEach((word) => {
  let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 5 });
  tl.to(".js-typeStyle-txt", { duration: 5, text: word });
  masterTl.add(tl);
});
