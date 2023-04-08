const Faq = () => {

  
    const toggleAnswer = (event) => {
        const question = event.target;
        const answer = question.nextElementSibling;
      
        if (answer.classList.contains('active')) {
          answer.classList.remove('active');
        } else {
          const panels = document.querySelectorAll('.faq-panel');
          panels.forEach(panel => {
            panel.classList.remove('active');
          });
          answer.classList.add('active');
        }
      }
      
      const questions = document.querySelectorAll('.faq-question');
      questions.forEach(question => {
        question.addEventListener('click', toggleAnswer);
      });

  return (


    <div className="faq">
        
      <button className="faq-question" onClick={toggleAnswer}>Est-ce douloureux ?</button>
      <div className="faq-panel">
        <p className="faq-answer">
          La douleur est subjective ! et varie en fonction des individus, l’acte
          en lui-même n’est pas une torture, on peut parler de sensation gênante
          tout à fait supportable à condition qu'elle ne dure pas des heures.
          Cette sensation peut varier en fonction de la zone du corps à tatouer.
        </p>
      </div>
      <button className="faq-question" onClick={toggleAnswer}>
        Quelles sont les zones du corps zones les plus sensibles ?
      </button>
      <div className="faq-panel">
        <p className="faq-answer">
          Les zones les plus sensibles sont là où la peau est la plus fine, le
          pied, le torse, le bas du dos, évidemment là encore cela dépend des
          personnes.
        </p>
      </div>
      <button className="faq-question" onClick={toggleAnswer}>
        Je suis mineur(e), ai-je besoin d’une autorisation parentale pour me
        faire tatouer ?
      </button>
      <div className="faq-panel">
        <p className="faq-answer">
          Oui, pour se faire tatouer il faut une autorisation écrite de ses
          tuteurs légaux.
        </p>
      </div>
      <button className="faq-question" onClick={toggleAnswer}>Quel motif pour mon tatouage ?</button>
      <div className="faq-panel">
        <p className="faq-answer">
          Il est important de choisir un motif original et personnel pour son
          tatouage, car il fera partie de votre corps et votre personnalité, les
          tatoueurs valorisent le travail créatif car le tatouage est ainsi
          unique, comme vous !
        </p>
      </div>
      <button className="faq-question" onClick={toggleAnswer}>
        Quelle partie de mon corps est la mieux adapté pour mon tatouage ?
      </button>
      <div className="faq-panel">
        <p className="faq-answer">
          Le choix de son emplacement est très important car il doit valoriser
          le corps et embellir la zone tatoué.
        </p>
      </div>
      <button className="faq-question" onClick={toggleAnswer}>
        Comment bien choisir son tatoueur ?
      </button>
      <div className="faq-panel">
        <p className="faq-answer">
          Vérifiez que le studio soit ouvert toute l'année pour un suivi, qu'il
          respect les règles d’hygiène, n’hésitez pas à consulter plusieurs
          studios pour comparer leur travail.
        </p>
      </div>
      <button className="faq-question" onClick={toggleAnswer}>
        Quels sont les tarifs pratiqués par les tatoueurs ?
      </button>
      <div className="faq-panel">
        <p className="faq-answer">
          Il faut compter environ 70€ pour un tatouage. Son prix vari en
          fonction du temps de travail passé. Il dépendra aussi de la taille et
          des détails (ombres, remplissage, ...). Que votre tatouage soit en
          couleur ou en noir et blanc, le prix sera identique.
        </p>
      </div>
      <button className="faq-question" onClick={toggleAnswer}>
        Est-ce qu'un changement physique peut déformer mon tatouage ?
      </button>
      <div className="faq-panel">
        <p className="faq-answer">
          Le tatouage ne se déforme pas si la peau se détend. Cela s'explique
          par le fait que le tatoueur dépose les pigments à 1mm sous la peau,
          fixant ainsi le motif.
        </p>
      </div>
      <button className="faq-question" onClick={toggleAnswer}>
        Y a-t-il des contre-indications ou des suites allergiques ?
      </button>
      <div className="faq-panel">
        <p className="faq-answer">
          Avant de commencer, je vous conseille de me signaler les allergies que
          vous pourriez avoir au latex (pour les gants), à un désinfectant comme
          la Bétadine qui contient de l’iode ou à tout autre type de produits
          que je pourrais être amené à utiliser. Pour ce qui est de l’encre de
          tatouage, il n’y a aucun risque : elle est hypoallergénique.
        </p>
      </div>
      <button className="faq-question" onClick={toggleAnswer}>
        Le tatouage peut-il s'altérer avec le temps ?
      </button>
      <div className="faq-panel">
        <p className="faq-answer">
          Les techniques de tatouage et les encres actuelles font que le
          tatouage ne s’altère pas avec le temps.
        </p>
      </div>
      <button className="faq-question" onClick={toggleAnswer}>Peut-on effacer un tatouage ?</button>
      <div className="faq-panel">
        <p className="faq-answer">
          Même si se faire tatouer est un acte qui doit être mûrement réfléchi,
          il n’est plus ineffaçable. Une technique au laser permet désormais de
          l’effacer. Elle n’entraîne aucune brûlure, c’est seulement l’encre qui
          est détruite. Quoiqu’il en soit, l’idéal est de bien réfléchir avant
          de se faire tatouer afin d’être sûr de soi sur le motif et l’endroit
          où sera encré le tattoo.
        </p>
      </div>
      <button className="faq-question" onClick={toggleAnswer}>
        Un tatouge peut-il recouvrir une cicatrice ou un ancien tatouage ?
      </button>
      <div className="faq-panel">
        <p className="faq-answer">
          Oui cela est tout à fait possible dans les deux cas, et sans risque
          pour la peau.
        </p>
      </div>
      <button className="faq-question" onClick={toggleAnswer}>
        Peut-on masquer une cicatrice ou un tatouage avec un autre tatouage ?
      </button>
      <div className="faq-panel">
        <p className="faq-answer">
          Dans les deux cas, c’est tout à fait possible. Ceci étant, vous ne
          pourrez pas choisir n’importe quel motif pour votre futur tatouage.
          C’est le tatoueur qui sera le plus à même de savoir quel dessin et/ou
          style pourra le mieux couvrir votre ancien tatouage ou votre
          cicatrice. Pour cacher un tattoo par un autre, il va de soi qu’on ne
          peut recouvrir une couleur foncée par une couleur claire. La technique
          de recouvrement est moins onéreuse, moins douloureuse et plus rapide
          que le détatouage. Cependant, il est impossible de recouvrir un
          tatouage par un autre indéfiniment, on ne peut aller au-delà de ce que
          la peau peut absorber.
        </p>
      </div>
    </div>
  );
};

ReactDOM.render(<Faq />, document.getElementById("Faq"));