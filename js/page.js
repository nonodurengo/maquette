// On declare et on cible les élémént du formulaires
let formulaire = document.querySelector('#formulaire');
// On cible le formulaire
let btn_contact = formulaire.querySelector('#btn_contact');
let messError = modal.querySelector('#mess-error');

let fermer = modal.querySelector('#fermer');
messError.textContent = '';

// On créer un évènement sur le btn-contact
btn_contact.addEventListener('click', function (event) {
    // On arrete l'évenenement par défaut
    event.preventDefault();

    // On verifi le formulaire
    let result = veriFormulaire(formulaire);

    // Si true on affiche le modal avec le message d'erreur
    if (result) {
        result = false;
        modal.style.display = 'block';

        // On créer un évènement sur le btn fermer
        fermer.addEventListener('click', function (e) {
            // On arrete l'évenenement par défaut
            event.preventDefault();

            modal.style.display = 'none';
        });
    } else {
        // Si formualier ok on returne ver la page index
        window.location.href = formulaire.action;
    }
});

// On verifi le formulaire
function veriFormulaire(forms) {
    result = '';

    for (const form of forms) {
        if (form.id !== 'btn_contact' && form.value === '') {
            messError.textContent = 'Remplissez le champ: ' + form.id;
            return true;
        }

        if (form.id === 'mail') {
            // Expression régulière pour valider une adresse e-mail
            const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            if (!regexEmail.test(form.value)) {
                messError.textContent = "l'adresse mail est invalide"
                return true;

            }
        }
    }

    // On efface la div du message dans le modal
    messError.textContent = '';

    return false;
}