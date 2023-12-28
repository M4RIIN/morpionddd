import { Grille } from "../grille";
import { Move } from "../move";


describe('Grille', () => {
    let grille: Grille;
    let mockMove1: Move;
    let mockMove2: Move;

    beforeEach(() => {
        grille = new Grille();
        // Créez des mouvements fictifs pour les tests
        mockMove1 = new Move("Joueur1", [0,0]);
        mockMove2 = new Move("Joueur2", [0,0]);
    });

    it('should add a move to the grid', () => {
        grille.addMove(mockMove1);
        expect(grille.moves.length).toEqual(1);
        expect(grille.moves[0]).toBe(mockMove1);
    });

    it('should throw error when adding a move that has already been played', () => {
        // Ajoute un mouvement simulé à la grille
        grille.addMove(mockMove1);

        // Essayer d'ajouter un autre mouvement différent ne devrait pas déclencher d'erreur
        expect(() => {
            grille.addMove(mockMove2);
        }).toThrowError('already played');
    });

});
