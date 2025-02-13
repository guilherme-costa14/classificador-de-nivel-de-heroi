let nomeHeroi = "paradoxo"
let expHeroi = 10001
let nivelHeroi = ""
while (true) {
    if(expHeroi < 1000){
        nivelHeroi = "Ferro"
        console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi)
        break
    }else if(expHeroi >= 1001 && expHeroi <= 2000){
        nivelHeroi = "Bronze"
        console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi)
        break
    }else if(expHeroi >= 2001 && expHeroi <= 5000){
        nivelHeroi = "Prata"
        console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi)
        break
    }else if(expHeroi >= 5001 && expHeroi <= 7000){
        nivelHeroi = "Ouro"
        console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi)
        break
    }else if(expHeroi >= 7001 && expHeroi <= 8000){
        nivelHeroi = "Platina"
        console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi)
        break
    }else if(expHeroi >= 8001 && expHeroi <= 9000){
        nivelHeroi = "Ascendente"
        console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi)
        break
    }else if(expHeroi >= 9001 && expHeroi <= 10000){
        nivelHeroi = "Imortal"
        console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi)
        break
    }else{
        nivelHeroi = "Radiante"
        console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi)
        break
    }
}