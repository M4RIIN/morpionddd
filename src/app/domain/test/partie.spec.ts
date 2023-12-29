import { Grille } from "../grille";
import { Move } from "../move";
import { Partie } from "../partie";


describe('Partie', () => {
    let partie: Partie;
    let grille: Grille = new Grille();

    beforeEach(() => {
        partie = new Partie();
    });

    it('doit initialiser la partie avec une grille', () => {
        partie.start();
        expect(partie).toBeDefined();
        expect(partie instanceof Partie).toBeTruthy();
        expect(partie['grille']).toEqual(grille); 

    });

    it('doit démarrer la partie avec le premier joueur', () => {
        partie.start();
        expect(partie['currentPlayer']).toEqual("Joueur1");
    });

    it('doit declencher une erreur si on tente un mouvement alors que la partie n\'est pas démarée', () => {
        expect(() => {
            partie.playMove(new Move("Joueur1",[0,0]));
        }).toThrowError('game not started yet');

    });

    it('doit declencher une erreur si on tente un mouvement que ce n\'est pas notre tour', () => {
        expect(() => {
            partie.start();
            partie.playMove(new Move("Joueur2",[0,0]));
        }).toThrowError('is not your turn');

    });

    
    it('doit passer au joueur 2 si le joueur 1 a joué', () => {
        partie.start();
        partie.playMove(new Move("Joueur1",[0,0]));
        expect(partie['currentPlayer']).toEqual("Joueur2");
    });

    it('doit passer au joueur 1 si le joueur 2 a joué', () => {
        partie.start();
        partie.playMove(new Move("Joueur1",[0,1]));
        partie.playMove(new Move("Joueur2",[1,1]));
        expect(partie['currentPlayer']).toEqual("Joueur1");
    });

    it('doit declencher une erreur on joue un coup en dehors de la grille', () => {
        expect(() => {
            partie.start();
            partie.playMove(new Move("Joueur2",[0,0]));
        }).toThrowError('is not your turn');

    });


    
    it('le joueur 1 doit gagner à son troisieme coup aligné sur la premiere ligne', () => {
        partie.start();
        partie.playMove(new Move("Joueur1",[0,0]));
        partie.playMove(new Move("Joueur2",[1,1]));
        partie.playMove(new Move("Joueur1",[0,1]));
        partie.playMove(new Move("Joueur2",[2,2]));
        partie.playMove(new Move("Joueur1",[0,2]));

        expect(partie.getWinner()).toEqual("Joueur1");
    });
    
    it('le joueur 2 doit gagner à son troisieme coup aligné sur la premiere ligne', () => {
        partie.start();
        partie.playMove(new Move("Joueur1",[1,1]));
        partie.playMove(new Move("Joueur2",[0,0]));
        partie.playMove(new Move("Joueur1",[2,2]));
        partie.playMove(new Move("Joueur2",[0,1]));
        partie.playMove(new Move("Joueur1",[1,2]));
        partie.playMove(new Move("Joueur2",[0,2]));

        expect(partie.getWinner()).toEqual("Joueur2");
    });

    it('le joueur 1 doit gagner à son troisieme coup aligné sur la premiere colonne', () => {
        partie.start();
        partie.playMove(new Move("Joueur1",[0,0]));
        partie.playMove(new Move("Joueur2",[1,1]));
        partie.playMove(new Move("Joueur1",[1,0]));
        partie.playMove(new Move("Joueur2",[2,2]));
        partie.playMove(new Move("Joueur1",[2,0]));

        expect(partie.getWinner()).toEqual("Joueur1");
    });

    it('le joueur 2 doit gagner à son troisieme coup aligné sur la premiere colonne', () => {
        partie.start();
        partie.playMove(new Move("Joueur1",[1,1]));
        partie.playMove(new Move("Joueur2",[0,0]));
        partie.playMove(new Move("Joueur1",[2,2]));
        partie.playMove(new Move("Joueur2",[1,0]));
        partie.playMove(new Move("Joueur1",[1,2]));
        partie.playMove(new Move("Joueur2",[2,0]));

        expect(partie.getWinner()).toEqual("Joueur2");
    });


    it('le joueur 1 doit gagner à son troisieme coup aligné sur la diagonale principale', () => {
        partie.start();
        partie.playMove(new Move("Joueur1",[2,0]));
        partie.playMove(new Move("Joueur2",[0,0]));
        partie.playMove(new Move("Joueur1",[1,1]));
        partie.playMove(new Move("Joueur2",[1,0]));
        partie.playMove(new Move("Joueur1",[0,2]));

        expect(partie.getWinner()).toEqual("Joueur1");
    });


    it('le joueur 1 doit gagner à son troisieme coup aligné sur une diagonale secondaire', () => {
        partie.start();
        partie.playMove(new Move("Joueur1",[0,0]));
        partie.playMove(new Move("Joueur2",[0,2]));
        partie.playMove(new Move("Joueur1",[1,1]));
        partie.playMove(new Move("Joueur2",[1,0]));
        partie.playMove(new Move("Joueur1",[2,2]));

        expect(partie.getWinner()).toEqual("Joueur1");
    });
    

});
