<?php

$name = "Manley Bouille";
$email = "manley.bouille@example.com";
$message = "";


?>


<!DOCTYPE html>
<html lang="fr">
<html>

<head>

    <meta charset="UTF-8" />
    <link rel="stylesheet" href="./css/style.css"/>
    <link rel="stylesheet" href="./css/accueil.css"/>
    <link rel="stylesheet" href="./css/competence_certifs.css"/>
    <link rel="stylesheet" href="./css/contact.css"/>
    <link rel="stylesheet" href="./css/formation.css"/>
    <link rel="stylesheet" href="./css/presentation.css"/>
    <link rel="stylesheet" href="./css/projets.css"/>
    <link rel="stylesheet" href="./css/topbar.css"/>
    <link rel="stylesheet" href="./css/footer.css"/>

    <title>🌊 Portfolio - Manley.B 🌊</title>

</head>

<script src="./js/titre_dynamique.js"></script>

<header id="topbar">
    <span>Portfolio - Manley.B</span>
    <nav>
        <button id="menu-toggle" aria-label="Ouvrir le menu">Menu ☰</button>
        <ul class="menu" id="menu-list">
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#presentation">À propos</a></li>
            <li><a href="#formation">Formation</a></li>
            <li><a href="#competence_certifs">Compétences & Certificats</a></li>
            <li><a href="#projets">Projets</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    <script src="./js/topbar.js"></script>
    <script src="./js/competence_certifs.js"></script>
</header>

<body>

    <section id="accueil" class="category">

        <div class="accueil-texte">
            <p>Bonjour 👋, je m'appelle</p>
            <h1>Manley Bouille</h1>
            <p id="accroche">Actuellement en BTS SIO Services Informatiques aux Organisations</p>
        </div>

        <img src="./img/logo_kibagami.png" alt="Logo Manley" id="image-accueil" />

        <div class="arrow">
            <span></span>
            <span></span>
            <span></span>
        </div>

    </section>

    <section id="presentation" class="category">
        <div class="presentation-content">
            <h2>Présentation 👨🏻‍💻</h2>
            <p>En dehors de mes études, je m'intéresse à la musique, à la technologie et à l'apprentissage de nouvelles compétences.</p>
            <button class="btn-CV" onclick="window.open('./Manley_Bouille_CV.pdf', '_blank')">Consultez mon CV</button>
        </div>
        <img src="./img/il_pfp_pres.png" alt="Pfp Manley" id="image-pfp" />
    </section>

    <section id="formation" class="category">
        <div class="contenu-formation">
            <h2>Mes parcours 🎓</h2>
            <div class="formation-flex">
                <div class="colonne-pro">
                    <h3 class="experience-professionnelle">Professionnel</h3>
                    <div class="contenu-parcours-professionel-1">
                        <h4 class="pro-poste-1"><u>Stage CSB</u></h4>
                        <p>Lycée Dick Ukeiwë<br />2025 - (1 mois)<br /><br />Développement d'une application en Java, Angular (OOP)</p>
                    </div>
                </div>
                <div class="colonne-sco">
                    <h3 class="parcours-scolaire">Scolaire</h3>
                    <div class="contenu-parcours-scolaire-1">
                        <h4 class="sco-poste-1"><u>BTS SIO</u></h4>
                        <p>Lycée Dick Ukeiwë<br />2025 - 2026<br /><br />Option SLAM (Solutions Logicielles et Applications Métiers)</p>
                    </div>
                    <div class="contenu-parcours-scolaire-2">
                        <h4 class="sco-poste-2"><u>BACCALAURÉAT</u></h4>
                        <p>Lycée Dick Ukeiwë<br />2022 - 2025<br /><br />Spécialité NSI (Numérique et Sciences Informatiques), AMC (Anglais Monde Contemporain) et Mathématiques Complémentaires</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    

    <section id="competence_certifs" class="category">
        <div class="lang-icons-bar-moving">
            <div class="lang-icon" data-lang="Python" data-desc="Langage polyvalent pour l’IA, le web et l’automatisation.">
                <img src="./img/python.svg" alt="Python" />
                <div class="lang-info-box"></div>
            </div>
            <div class="lang-icon" data-lang="JavaScript" data-desc="Langage du web, pour sites dynamiques et applications.">
                <img src="./img/javascript.svg" alt="JavaScript" />
                <div class="lang-info-box"></div>
            </div>
            <div class="lang-icon" data-lang="Java" data-desc="Langage orienté objet, utilisé pour les applications robustes.">
                <img src="./img/java.svg" alt="Java" />
                <div class="lang-info-box"></div>
            </div>
            <div class="lang-icon" data-lang="HTML5" data-desc="Le standard pour structurer les pages web.">
                <img src="./img/html5.svg" alt="HTML5" />
                <div class="lang-info-box"></div>
            </div>
            <div class="lang-icon" data-lang="CSS3" data-desc="Pour le style et la mise en page des sites web.">
                <img src="./img/css3.svg" alt="CSS3" />
                <div class="lang-info-box"></div>
            </div>
            <div class="lang-icon" data-lang="Git" data-desc="Pour le contrôle de version et la collaboration.">
                <img src="./img/git.svg" alt="Git" />
                <div class="lang-info-box"></div>
            </div>
            <div class="lang-icon" data-lang="SQL" data-desc="Langage pour gérer et interroger les bases de données.">
                <img src="./img/sql.svg" alt="SQL" />
                <div class="lang-info-box"></div>
            </div>
            <div class="lang-icon" data-lang="PHP" data-desc="Langage serveur pour le développement web dynamique.">
                <img src="./img/php.svg" alt="PHP" />
                <div class="lang-info-box"></div>
            </div>
        </div>
        <div class="certif-flexbox">
            <div class="certif-texte">
                <h3>Certifications 📌</h3>
                <p>Retrouvez ici mes principales certifications obtenues dans le domaine du numérique et du développement.</p>
            </div>
            <button class="btn-voir-certif" onclick="window.open('./certifications.html', '_blank')">Voir certif</button>
        </div>
    </section>


    <section id="projets" class="category">
        <div class="projets-encadre">
            <h2>Projets 🎯</h2>
            <div class="projets-flexbox">
                <div class="projet-card">
                    <img src="./img/projet1.png" alt="Projet 1" class="projet-img"/>
                    <h3>Test</h3>
                    <p>Test test test</p>
                </div>
                <div class="projet-card">
                    <img src="./img/projet2.png" alt="Projet 2" class="projet-img"/>
                    <h3>Portfolio Manley.B</h3>
                    <p>Mon portfolio personnel, développé en HTML, CSS et JavaScript, présentant mon parcours, mes compétences et mes réalisations.</p>
                </div>
                <div class="projet-card">
                    <img src="./img/projet3.png" alt="Projet 3" class="projet-img"/>
                    <h3>Bot Discord</h3>
                    <p>Bot Discord pour la gestion de serveurs, modération et jeux interactifs, codé en Python avec la librairie discord.py.</p>
                </div>
                <div class="projet-card">
                    <img src="./img/projet4.png" alt="Projet 4" class="projet-img"/>
                    <h3>Site Vitrine</h3>
                    <p>Création d’un site vitrine pour une association locale, avec formulaire de contact et galerie photo. Réalisé en HTML/CSS.</p>
                </div>
                <div class="projet-card">
                    <img src="./img/projet5.png" alt="Projet 5" class="projet-img"/>
                    <h3>Jeu Web</h3>
                    <p>Développement d’un mini-jeu web interactif en JavaScript, avec score et animations.</p>
                </div>
                <div class="projet-card">
                    <img src="./img/projet6.png" alt="Projet 6" class="projet-img"/>
                    <h3>Test</h3>
                    <p>Test test test</p>
                </div>
            </div>
            <button class="btn-voir-plus" onclick="window.open('https://github.com/kibagami-nc?tab=repositories', '_blank')">Voir plus</button>
        </div>
    </section>


    <section id="contact" class="category">
        <div class="contact-encadre">
            <h2>Contact 📬</h2>
            <p>Vous pouvez me contacter pour toute question ou collaboration. Remplissez le formulaire ci-dessous ou utilisez les informations de contact.</p>
            
            <form action="#" method="POST" class="contact-form">
                <input type="text" name="name" placeholder="Votre Nom" required />
                <input type="email" name="email" placeholder="Votre Email" required />
                <textarea name="message" placeholder="Votre message..." required></textarea>
                <button type="submit" class="btn-submit">Envoyer</button>
            </form>
            
            <div class="contact-info">
                <p>Vous pouvez aussi me joindre par email à <a href="mailto:manley.b@example.com">manley.b@example.com</a>.</p>
            </div>
        </div>
    </section>


    <script src="./js/fadeIn.js"></script>

    
</body>

<footer>
    <div class="footer-container">
        <p>© 2025 Manley.B - Tous droits réservés</p>
        <div class="social-links">
            <a href="https://www.facebook.com" target="_blank" class="social-icon">
                <i class="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" class="social-icon">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" class="social-icon">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" class="social-icon">
                <i class="fab fa-linkedin"></i>
            </a>
        </div>
    </div>
</footer>



</html>