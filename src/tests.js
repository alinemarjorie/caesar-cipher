function verificar(resposta,deslocamento){
    if (resposta === deslocamento){
        console.log("Deu certo!");
        return true;
    } else {
        console.log("Não funcionou");
        return false;
    }
}

//Codificar Maiúsculo
verificar(encode("ALINE",3),"DOLQH");
//Codificar Minúsculo
verificar(encode("danilo",25),"czmhkn");
//Codificar Maiúsculo e minúsculo
verificar(encode("Desenvolvimento",30),"Hiwirzspzmqirxs");
//Codificar Espaço
verificar(encode("paz e amor",15),"epo t pbdg");
//Codificar Números
verificar(encode("1 tomate",22),"1 pkiwpa");
//Codificar Caracteres especiais
verificar(encode("Laboratória",2),"Ncdqtcvótkc");
//Codificar com offset negativo
verificar(encode("abc",-2),"yza");

//Decodificar Maiúsculo
verificar(decode("GROTK",6),"ALINE");
//Decodificar Minúsculo
verificar(decode("tqdybe",16),"danilo");
//Decodificar Maiúsculo e minúsculo
verificar(decode("Lmamvdwtdqumvbw",8),"Desenvolvimento");
//Decodificar Espaço
verificar(decode("lwv a wikn",48),"paz e amor");
//Decodificar Números
verificar(decode("1 tomate",52),"1 tomate");
//Decodificar Caracteres especiais
verificar(decode("Shivyhaóyph",59),"Laboratória");
//Decodificar com offset negativo
verificar(decode("qrs",-10),"abc");


