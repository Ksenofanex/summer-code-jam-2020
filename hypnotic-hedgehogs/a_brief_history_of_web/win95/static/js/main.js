    clippy.load('Clippy', (agent) => {
    // do anything with the loaded agent
    agent.show();

    agentSpeak(agent,"Merhaba, yabancı! Bu nostaljik geziye hoşgeldin! Birazdan tarihin akışını tamamen değiştiren, insanlık tarihinin en önemli kilometre taşları haline gelen olaylara tanıklık edeceksin. Tadını çıkar!");
    setTimeout(() => {
      agentSpeak(agent,"Uzun zaman önce, çok çok uzun bir galakside, yepyeni, soyut bir teknoloji tarih sahnesine yeni çıkmıştı. Yeni çıkan her teknoloji gibi, o da toy ve kusurluydu. Onun başlangıcı da mütevazıydı. Ama unutma, muhteşem olaylar, küçük adımlarla başlar. Sic parvis magna!");
    }, 8000);
    setTimeout(() => {
      agentSpeak(agent,"Bu nostaljik geziye başlamak için Username kısmına adını gir ve Connect butonuna bas.");
    }, 20000);
    setTimeout(() => {
      agent.play("")
      agent.hide();
    }, 26000);

});

function hideIt(params) {

  var username = $("#username").val();

        $("#app-mine").hide();
        $("#app-mine2").show();
        setTimeout(() => {
          $("#app-mine2").hide();
          $(".internet-explorer").css("display","inline");
          clippy.load("Merlin",(agent) => {
    agent.show();
    agentSpeak(agent,"İnternet'in dünyasına hoşgeldin, "+username+". Hızlıca bir şeye göz atmalıyım, bir saniye...");
    agent.play("Reading")
agentSpeak(agent, "Ebedi Bilgelik kitabıma göre, İnternet teknolojisi, şimdiye kadar icat edilmiş en devrimsel, büyülü, demokratik ve faydalı teknolojilerden biridir. İnsanoğlunun en büyük başarılarından biridir.")
                  agent.play("Reading")

agentSpeak(agent, "Bir zamanlar Arthur Clarke adında bilge bir adam şöyle demiş: Yeterince ileri her teknoloji, büyüden farksızdır.")
                      agent.play("GestureUp")

    agentSpeak(agent, "Bu büyülü teknoloji bilgiyi herkes için ulaşılabilir ve eşit kılmıştır. Böylece bilgi edinme, bilgiyi paylaşma ve fiziksel koşulların kısıtlamalarından kurtulup dijital ve soyut bir katmanda, her şeyin mümkün olduğu bir katmanda bize yepyeni bir gerçeklik yaratma imkanı sunmuştur.")
                  agent.play("Reading")

    agentSpeak(agent,"Şimdi dikkatle beni dinle! Birkaç tık ötende keşfedilmeyi bekleyen kocaman büyülü bir evren var. Sol taraftaki not defterindeki URL'leri yukarıdan aşağı doğru, her seferinde bir tane olmak üzere, kopyalayıp tarayıcının adres kısmına basıp Go butonuna basmalısın. Go butonuna bas ve bu büyülü evrene dal!");
    agent.play("");
    setTimeout(() => {
        agent.hide();
    },56000)
    });
        }, 5000);
      }

function agentSpeak(agent,text){
    agent.speak(text);
}

