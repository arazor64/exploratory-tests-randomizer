import '../style/Notice.css';

function Notice() {
	return (
		<div className="etr-notice">
			<h1 className="etr-notice-title">
				Teste ton application en mode "jeu de rôle" ! 🔎🕵🏻
			</h1>
			<h2 className="etr-notice-subtitle">
				Simule le parcous d'un utilisateur aléatoire sur ton application:
			</h2>
			<ul className="etr-notice-list">
				<li>Génère un personnage utilisateur.</li>
				<li>Selectionne le rôle de ton utilisateur</li>
				<li>Prends connaissance de son objectif à atteindre.</li>
				<li>Reproduis son comportement (Pressé, Curieux...).</li>
				<li>
					Incarne ton persona le mieux possible pour réaliser son objectif, en
					naviguant sur ton application.
				</li>
				<li>
					Liste toutes les difficultés que tu rencontres (défauts, problèmes
					d'accessibilité, de performance, contenu pas clair...).
				</li>
				<li>
					N'hésites pas à tester plusieurs parcours autour de ton objectif
					(plusieurs produits / moyens de paiements...)
				</li>
			</ul>
		</div>
	);
}

export default Notice;
