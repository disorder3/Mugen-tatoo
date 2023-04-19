"use strict";

// const Faq = () => {
//   const toggleAnswer = (event) => {
//     const question = event.target;
//     const answer = question.nextElementSibling;

//     if (answer.classList.contains("active")) {
//       answer.classList.remove("active");
//     } else {
//       const panels = document.querySelectorAll(".faq-panel");
//       panels.forEach((panel) => {
//         panel.classList.remove("active");
//       });
//       answer.classList.add("active");
//     }
//   };

//   const questions = document.querySelectorAll(".faq-question");
//   questions.forEach((question) => {
//     question.addEventListener("click", toggleAnswer);
//   });

//   return (
//     <div className="faq">
//       <button className="faq-question" onClick={toggleAnswer}>
//         Est-ce douloureux ?
//       </button>
//       <div className="faq-panel">
//         <p className="faq-answer">
//           La douleur est subjective ! et varie en fonction des individus, l’acte
//           en lui-même n’est pas une torture, on peut parler de sensation gênante
//           tout à fait supportable à condition qu'elle ne dure pas des heures.
//           Cette sensation peut varier en fonction de la zone du corps à tatouer.
//         </p>
//       </div>
//       <button className="faq-question" onClick={toggleAnswer}>
//         Quelles sont les zones du corps zones les plus sensibles ?
//       </button>
//       <div className="faq-panel">
//         <p className="faq-answer">
//           Les zones les plus sensibles sont là où la peau est la plus fine, le
//           pied, le torse, le bas du dos, évidemment là encore cela dépend des
//           personnes.
//         </p>
//       </div>
//       <button className="faq-question" onClick={toggleAnswer}>
//         Je suis mineur(e), ai-je besoin d’une autorisation parentale pour me
//         faire tatouer ?
//       </button>
//       <div className="faq-panel">
//         <p className="faq-answer">
//           Oui, pour se faire tatouer il faut une autorisation écrite de ses
//           tuteurs légaux.
//         </p>
//       </div>
//       <button className="faq-question" onClick={toggleAnswer}>
//         Quel motif pour mon tatouage ?
//       </button>
//       <div className="faq-panel">
//         <p className="faq-answer">
//           Il est important de choisir un motif original et personnel pour son
//           tatouage, car il fera partie de votre corps et votre personnalité, les
//           tatoueurs valorisent le travail créatif car le tatouage est ainsi
//           unique, comme vous !
//         </p>
//       </div>
//       <button className="faq-question" onClick={toggleAnswer}>
//         Quelle partie de mon corps est la mieux adapté pour mon tatouage ?
//       </button>
//       <div className="faq-panel">
//         <p className="faq-answer">
//           Le choix de son emplacement est très important car il doit valoriser
//           le corps et embellir la zone tatoué.
//         </p>
//       </div>
//       <button className="faq-question" onClick={toggleAnswer}>
//         Comment bien choisir son tatoueur ?
//       </button>
//       <div className="faq-panel">
//         <p className="faq-answer">
//           Vérifiez que le studio soit ouvert toute l'année pour un suivi, qu'il
//           respect les règles d’hygiène, n’hésitez pas à consulter plusieurs
//           studios pour comparer leur travail.
//         </p>
//       </div>
//       <button className="faq-question" onClick={toggleAnswer}>
//         Quels sont les tarifs pratiqués par les tatoueurs ?
//       </button>
//       <div className="faq-panel">
//         <p className="faq-answer">
//           Il faut compter environ 70€ pour un tatouage. Son prix vari en
//           fonction du temps de travail passé. Il dépendra aussi de la taille et
//           des détails (ombres, remplissage, ...). Que votre tatouage soit en
//           couleur ou en noir et blanc, le prix sera identique.
//         </p>
//       </div>
//       <button className="faq-question" onClick={toggleAnswer}>
//         Est-ce qu'un changement physique peut déformer mon tatouage ?
//       </button>
//       <div className="faq-panel">
//         <p className="faq-answer">
//           Le tatouage ne se déforme pas si la peau se détend. Cela s'explique
//           par le fait que le tatoueur dépose les pigments à 1mm sous la peau,
//           fixant ainsi le motif.
//         </p>
//       </div>
//       <button className="faq-question" onClick={toggleAnswer}>
//         Y a-t-il des contre-indications ou des suites allergiques ?
//       </button>
//       <div className="faq-panel">
//         <p className="faq-answer">
//           Avant de commencer, je vous conseille de me signaler les allergies que
//           vous pourriez avoir au latex (pour les gants), à un désinfectant comme
//           la Bétadine qui contient de l’iode ou à tout autre type de produits
//           que je pourrais être amené à utiliser. Pour ce qui est de l’encre de
//           tatouage, il n’y a aucun risque : elle est hypoallergénique.
//         </p>
//       </div>
//       <button className="faq-question" onClick={toggleAnswer}>
//         Le tatouage peut-il s'altérer avec le temps ?
//       </button>
//       <div className="faq-panel">
//         <p className="faq-answer">
//           Les techniques de tatouage et les encres actuelles font que le
//           tatouage ne s’altère pas avec le temps.
//         </p>
//       </div>
//       <button className="faq-question" onClick={toggleAnswer}>
//         Peut-on effacer un tatouage ?
//       </button>
//       <div className="faq-panel">
//         <p className="faq-answer">
//           Même si se faire tatouer est un acte qui doit être mûrement réfléchi,
//           il n’est plus ineffaçable. Une technique au laser permet désormais de
//           l’effacer. Elle n’entraîne aucune brûlure, c’est seulement l’encre qui
//           est détruite. Quoiqu’il en soit, l’idéal est de bien réfléchir avant
//           de se faire tatouer afin d’être sûr de soi sur le motif et l’endroit
//           où sera encré le tattoo.
//         </p>
//       </div>
//       <button className="faq-question" onClick={toggleAnswer}>
//         Un tatouge peut-il recouvrir une cicatrice ou un ancien tatouage ?
//       </button>
//       <div className="faq-panel">
//         <p className="faq-answer">
//           Oui cela est tout à fait possible dans les deux cas, et sans risque
//           pour la peau.
//         </p>
//       </div>
//       <button className="faq-question" onClick={toggleAnswer}>
//         Peut-on masquer une cicatrice ou un tatouage avec un autre tatouage ?
//       </button>
//       <div className="faq-panel">
//         <p className="faq-answer">
//           Dans les deux cas, c’est tout à fait possible. Ceci étant, vous ne
//           pourrez pas choisir n’importe quel motif pour votre futur tatouage.
//           C’est le tatoueur qui sera le plus à même de savoir quel dessin et/ou
//           style pourra le mieux couvrir votre ancien tatouage ou votre
//           cicatrice. Pour cacher un tattoo par un autre, il va de soi qu’on ne
//           peut recouvrir une couleur foncée par une couleur claire. La technique
//           de recouvrement est moins onéreuse, moins douloureuse et plus rapide
//           que le détatouage. Cependant, il est impossible de recouvrir un
//           tatouage par un autre indéfiniment, on ne peut aller au-delà de ce que
//           la peau peut absorber.
//         </p>
//       </div>
//     </div>
//   );
// };

var Faq = function Faq() {
  var faqPanelRef = React.useRef(null);
  var toggleAnswer = function toggleAnswer(event) {
    var question = event.target;
    var answer = question.nextElementSibling;
    if (answer.classList.contains("active")) {
      answer.classList.remove("active");
    } else {
      var panels = faqPanelRef.current.getElementsByClassName("faq-panel");
      for (var i = 0; i < panels.length; i++) {
        panels[i].classList.remove("active");
      }
      answer.classList.add("active");
    }
  };
  React.useEffect(function () {
    var questions = faqPanelRef.current.getElementsByClassName("faq-question");
    for (var i = 0; i < questions.length; i++) {
      questions[i].addEventListener("click", toggleAnswer);
    }
    return function () {
      for (var _i = 0; _i < questions.length; _i++) {
        questions[_i].removeEventListener("click", toggleAnswer);
      }
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "faq",
    ref: faqPanelRef
  }, /*#__PURE__*/React.createElement("button", {
    className: "faq-question"
  }, "Est-ce douloureux ?"), /*#__PURE__*/React.createElement("div", {
    className: "faq-panel"
  }, /*#__PURE__*/React.createElement("p", {
    className: "faq-answer"
  }, "La douleur est subjective ! et varie en fonction des individus, l\u2019acte en lui-m\xEAme n\u2019est pas une torture, on peut parler de sensation g\xEAnante tout \xE0 fait supportable \xE0 condition qu'elle ne dure pas des heures. Cette sensation peut varier en fonction de la zone du corps \xE0 tatouer.")), /*#__PURE__*/React.createElement("button", {
    className: "faq-question"
  }, "Quelles sont les zones du corps zones les plus sensibles ?"), /*#__PURE__*/React.createElement("div", {
    className: "faq-panel"
  }, /*#__PURE__*/React.createElement("p", {
    className: "faq-answer"
  }, "Les zones les plus sensibles sont l\xE0 o\xF9 la peau est la plus fine, le pied, le torse, le bas du dos, \xE9videmment l\xE0 encore cela d\xE9pend des personnes.")), /*#__PURE__*/React.createElement("button", {
    className: "faq-question"
  }, "Je suis mineur(e), ai-je besoin d\u2019une autorisation parentale pour me faire tatouer ?"), /*#__PURE__*/React.createElement("div", {
    className: "faq-panel"
  }, /*#__PURE__*/React.createElement("p", {
    className: "faq-answer"
  }, "Oui, pour se faire tatouer il faut une autorisation \xE9crite de ses tuteurs l\xE9gaux.")), /*#__PURE__*/React.createElement("button", {
    className: "faq-question"
  }, "Quel motif pour mon tatouage ?"), /*#__PURE__*/React.createElement("div", {
    className: "faq-panel"
  }, /*#__PURE__*/React.createElement("p", {
    className: "faq-answer"
  }, "Il est important de choisir un motif original et personnel pour son tatouage, car il fera partie de votre corps et votre personnalit\xE9, les tatoueurs valorisent le travail cr\xE9atif car le tatouage est ainsi unique, comme vous !")), /*#__PURE__*/React.createElement("button", {
    className: "faq-question"
  }, "Quelle partie de mon corps est la mieux adapt\xE9 pour mon tatouage ?"), /*#__PURE__*/React.createElement("div", {
    className: "faq-panel"
  }, /*#__PURE__*/React.createElement("p", {
    className: "faq-answer"
  }, "Le choix de son emplacement est tr\xE8s important car il doit valoriser le corps et embellir la zone tatou\xE9.")), /*#__PURE__*/React.createElement("button", {
    className: "faq-question"
  }, "Comment bien choisir son tatoueur ?"), /*#__PURE__*/React.createElement("div", {
    className: "faq-panel"
  }, /*#__PURE__*/React.createElement("p", {
    className: "faq-answer"
  }, "V\xE9rifiez que le studio soit ouvert toute l'ann\xE9e pour un suivi, qu'il respect les r\xE8gles d\u2019hygi\xE8ne, n\u2019h\xE9sitez pas \xE0 consulter plusieurs studios pour comparer leur travail.")), /*#__PURE__*/React.createElement("button", {
    className: "faq-question"
  }, "Quels sont les tarifs pratiqu\xE9s par les tatoueurs ?"), /*#__PURE__*/React.createElement("div", {
    className: "faq-panel"
  }, /*#__PURE__*/React.createElement("p", {
    className: "faq-answer"
  }, "Il faut compter environ 70\u20AC pour un tatouage. Son prix vari en fonction du temps de travail pass\xE9. Il d\xE9pendra aussi de la taille et des d\xE9tails (ombres, remplissage, ...). Que votre tatouage soit en couleur ou en noir et blanc, le prix sera identique.")), /*#__PURE__*/React.createElement("button", {
    className: "faq-question"
  }, "Est-ce qu'un changement physique peut d\xE9former mon tatouage ?"), /*#__PURE__*/React.createElement("div", {
    className: "faq-panel"
  }, /*#__PURE__*/React.createElement("p", {
    className: "faq-answer"
  }, "Le tatouage ne se d\xE9forme pas si la peau se d\xE9tend. Cela s'explique par le fait que le tatoueur d\xE9pose les pigments \xE0 1mm sous la peau, fixant ainsi le motif.")), /*#__PURE__*/React.createElement("button", {
    className: "faq-question"
  }, "Y a-t-il des contre-indications ou des suites allergiques ?"), /*#__PURE__*/React.createElement("div", {
    className: "faq-panel"
  }, /*#__PURE__*/React.createElement("p", {
    className: "faq-answer"
  }, "Avant de commencer, je vous conseille de me signaler les allergies que vous pourriez avoir au latex (pour les gants), \xE0 un d\xE9sinfectant comme la B\xE9tadine qui contient de l\u2019iode ou \xE0 tout autre type de produits que je pourrais \xEAtre amen\xE9 \xE0 utiliser. Pour ce qui est de l\u2019encre de tatouage, il n\u2019y a aucun risque : elle est hypoallerg\xE9nique.")), /*#__PURE__*/React.createElement("button", {
    className: "faq-question"
  }, "Le tatouage peut-il s'alt\xE9rer avec le temps ?"), /*#__PURE__*/React.createElement("div", {
    className: "faq-panel"
  }, /*#__PURE__*/React.createElement("p", {
    className: "faq-answer"
  }, "Les techniques de tatouage et les encres actuelles font que le tatouage ne s\u2019alt\xE8re pas avec le temps.")), /*#__PURE__*/React.createElement("button", {
    className: "faq-question"
  }, "Peut-on effacer un tatouage ?"), /*#__PURE__*/React.createElement("div", {
    className: "faq-panel"
  }, /*#__PURE__*/React.createElement("p", {
    className: "faq-answer"
  }, "M\xEAme si se faire tatouer est un acte qui doit \xEAtre m\xFBrement r\xE9fl\xE9chi, il n\u2019est plus ineffa\xE7able. Une technique au laser permet d\xE9sormais de l\u2019effacer. Elle n\u2019entra\xEEne aucune br\xFBlure, c\u2019est seulement l\u2019encre qui est d\xE9truite. Quoiqu\u2019il en soit, l\u2019id\xE9al est de bien r\xE9fl\xE9chir avant de se faire tatouer afin d\u2019\xEAtre s\xFBr de soi sur le motif et l\u2019endroit o\xF9 sera encr\xE9 le tattoo.")), /*#__PURE__*/React.createElement("button", {
    className: "faq-question"
  }, "Un tatouge peut-il recouvrir une cicatrice ou un ancien tatouage ?"), /*#__PURE__*/React.createElement("div", {
    className: "faq-panel"
  }, /*#__PURE__*/React.createElement("p", {
    className: "faq-answer"
  }, "Oui cela est tout \xE0 fait possible dans les deux cas, et sans risque pour la peau.")), /*#__PURE__*/React.createElement("button", {
    className: "faq-question"
  }, "Peut-on masquer une cicatrice ou un tatouage avec un autre tatouage ?"), /*#__PURE__*/React.createElement("div", {
    className: "faq-panel"
  }, /*#__PURE__*/React.createElement("p", {
    className: "faq-answer"
  }, "Dans les deux cas, c\u2019est tout \xE0 fait possible. Ceci \xE9tant, vous ne pourrez pas choisir n\u2019importe quel motif pour votre futur tatouage. C\u2019est le tatoueur qui sera le plus \xE0 m\xEAme de savoir quel dessin et/ou style pourra le mieux couvrir votre ancien tatouage ou votre cicatrice. Pour cacher un tattoo par un autre, il va de soi qu\u2019on ne peut recouvrir une couleur fonc\xE9e par une couleur claire. La technique de recouvrement est moins on\xE9reuse, moins douloureuse et plus rapide que le d\xE9tatouage. Cependant, il est impossible de recouvrir un tatouage par un autre ind\xE9finiment, on ne peut aller au-del\xE0 de ce que la peau peut absorber.")));
};
ReactDOM.render( /*#__PURE__*/React.createElement(Faq, null), document.getElementById("Faq"));