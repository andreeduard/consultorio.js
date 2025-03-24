document.getElementById("Confirmar").addEventListener("click", function() {
  var sintoma = document.getElementById("sintoma").value;
  var mensagem = "";

  switch (sintoma) {
    case "dor de cabeça":
      mensagem = "Pode ser gripe, estresse ou enxaqueca.";
      break;
    case "dor de garganta":
      mensagem = "Pode ser infecção viral, amigdalite ou refluxo.";
      break;
    case "dor de barriga":
      mensagem = "Pode ser má digestão, gastrite ou infecção intestinal.";
      break;
    case "dor nas costas":
      mensagem = "Pode ser postura inadequada, hérnia de disco ou tensão muscular.";
      break;
    case "dor no peito":
      mensagem = "Pode ser ansiedade, refluxo ou algo cardíaco. Procure um médico se persistir!";
      break;
    case "dor no pé":
      mensagem = "Pode ser fascite plantar, esforço excessivo ou uso de calçados inadequados.";
      break;
    case "dor no braço":
      mensagem = "Pode ser esforço repetitivo, tendinite ou problema na coluna.";
      break;
    case "dor no joelho":
      mensagem = "Pode ser desgaste na cartilagem, lesão ligamentar ou excesso de esforço.";
      break;
    case "dor no ombro":
      mensagem = "Pode ser tendinite, bursite ou tensão muscular.";
      break;
    case "dor no pescoço":
      mensagem = "Pode ser torcicolo, má postura ou tensão muscular.";
      break;
    case "dor no pulso":
      mensagem = "Pode ser síndrome do túnel do carpo, tendinite ou esforço repetitivo.";
      break;
    case "dor no tornozelo":
      mensagem = "Pode ser entorse, inflamação nos ligamentos ou artrite.";
      break;
    case "dor no quadril":
      mensagem = "Pode ser bursite, desgaste articular ou compressão do nervo ciático.";
      break;
    case "dor no cotovelo":
      mensagem = "Pode ser epicondilite (cotovelo de tenista) ou inflamação nos tendões.";
      break;
    case "dor no dedo":
      mensagem = "Pode ser inflamação articular, lesão ou artrite.";
      break;
    case "dor no calcanhar":
      mensagem = "Pode ser esporão ósseo, fascite plantar ou uso de calçado inadequado.";
      break;
    case "dor no estômago":
      mensagem = "Pode ser gastrite, úlcera ou refluxo ácido.";
      break;
    case "dor no fígado":
      mensagem = "Pode ser sobrecarga hepática, hepatite ou gordura no fígado.";
      break;
    case "dor no intestino":
      mensagem = "Pode ser síndrome do intestino irritável, gases ou infecção.";
      break;
    case "dor no rim":
      mensagem = "Pode ser pedra nos rins, infecção urinária ou inflamação renal.";
      break;
    case "dor no olho":
      mensagem = "Pode ser conjuntivite, cansaço ocular ou pressão intraocular elevada.";
      break;
    case "dor no ouvido":
      mensagem = "Pode ser infecção, acúmulo de cera ou inflamação no canal auditivo.";
      break;
    case "dor no pulmão":
      mensagem = "Pode ser infecção respiratória, asma ou algo mais sério. Procure um médico!";
      break;
    default:
      mensagem = "Sintoma não reconhecido. Consulte um médico.";
  }

  document.getElementById("mensagemConfirmar").innerText = mensagem;
});
