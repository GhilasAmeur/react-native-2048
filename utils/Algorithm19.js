export const Algorithm19 = () => {
    const grille = [];
    const N = 2;
    for(let q = -N; q<= N; q++){
        let r1 = Math.max(-N, -q-N);
        let r2 = Math.min(N, -q+N);

        for(let r = r1; r<= r2 ; r++){
            
            grille.push({
                q:q,
                 r:r, 
                 s:-q-r
                })
        }
    }
    
    return grille
}