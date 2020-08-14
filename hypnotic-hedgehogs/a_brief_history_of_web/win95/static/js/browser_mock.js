// url_mapping
let url_mapping = {
    "https://youtube.com": "/first_youtube",
    "https://google.com": "/first_google",
    "https://twitter.com": "/first_twitter",
    "https://verycoolblog.com": "/nineties_blog"
}

// change the page according to the address
function change_page() {

    let address = $("#address-bar").val();
    console.log(address)
    if (address === "https://youtube.com"){
        clippy.load('Merlin', (agent) => {
                      // do anything with the loaded agent
                      agent.show();
                      agent.speak("Daha önce ne dediğimizi hatırlıyor musun? Muhteşem olaylar, küçük adımlarla başlar? YouTube'da olan da tam olarak buydu. İnternet ortamına bir hayvanat bahçesinden seslenerek giriş yapan YouTube, şu anda gezegendeki en popüler video ve canlı yayın platformu. Sinema, okul, konser, oyun salonu gibi işlevler gören YouTube olmasaydı ne yapardık bilemiyoruz. Bu kadar faydalı olduğun için teşekkürler YouTube!"
);
                      setTimeout(() =>{
                          agent.hide();
                      },23000)

                  });

    }else if (address === "https://google.com"){
        clippy.load('Merlin', (agent) => {
                      // do anything with the loaded agent
                      agent.show();
                      agent.speak( "Bu Google ismine sahip, Googol matematik teriminden türetilmiş olan ve iki üniversite öğrencisinin garajda yarattığı site, kelimenin tam anlamıyla Dünya'yı, tarihi ve insanların yaşantısını değiştirdi. Bilgiye, cevaplara, sorulara, isteklerimize ve insanlara ulaşma yolumuzu değiştiren bu arama motoru, bilişsel anlamda bir devrim yaptı. Google sayesinde artık Dünya daha bütünleşik, insanlar daha meraklı ve bilge ve hayat daha ilginç. İyi ki varsın Google! Geziye devam etmek için soldaki not defterinden bir başka url alıp, tarayıcının adres kısmına yapıştırdıktan sonra Go butonuna basabilirsin."
);

                      setTimeout(() =>{
                          agent.hide();
                      },20000)

                  });

    }else if (address === "https://twitter.com"){
        clippy.load('Merlin', (agent) => {
                      // do anything with the loaded agent
                      agent.show();
                      agent.speak( "Jack, bu Tweet'i atarak ve bu siteyi kurarak ifade özgürlüğüne, düşünce paylaşımına, çoksesliliğe ve farklılığa tahmin edemeyeceği kadar büyük katkılar yapacağı bir site kurduğunun hiç farkında değildi. Twitter sayesinde ifade özgürlüğü, çokseslilik, farklılıklara saygı duyma ve uyum içinde yaşama daha önce hiç olmadığı kadar mümkün oldu ve yayıldı. Özgürlükleri destekleyip yaydığın için teşekkürler Twitter ve Jack!"
);
                      setTimeout(() =>{
                          agent.hide();
                      },20000)

                  });

    }
    else if (address === "https://verycoolblog.com"){
        clippy.load('Merlin', (agent) => {
                      // do anything with the loaded agent
                      agent.show();
                      agent.speak( "İnternet'in ortaya çıktığı ve yeni yeni yaygınlaşmaya başladığı '90'larda, ilk başlarda en popüler siteler bu gördüğün siteye benziyordu. Şahsi bloglar her yerdeydi. Bu demokratik teknoloji sayesinde herkes kendini ifade etmek, düşüncelerini paylaşmak ve tarihte bir iz bırakmak istiyordu. Ve bıraktılar da. Geziye devam etmek için soldaki not defterinden bir başka url alıp, tarayıcının adres kısmına yapıştırdıktan sonra Go butonuna basabilirsin."
);
                      setTimeout(() =>{
                          agent.hide();
                      },20000)

                  });

    }    else if (address === "https://blog-area.com"){
        clippy.load('Merlin', (agent) => {
                      // do anything with the loaded agent
                      agent.show();
                      agent.speak( "Ve işte, böylelikle gezimizin sonuna geldik. Daha yenüz 30 yaşında olan bu genç teknoloji, çoktan hayatlarımızı hiç tahmin edemediğimiz şekillerde değiştirdi ve değiştirmeye devam ediyor. Umuyoruz ki, İnternet'in tarihine çıktığımız bu kısa gezi sizin için ilham verici ve bilginlendirici olmuştur. Ve yine umuyoruz ki, İnternet, demokratik, devrimsel, büyülü ve faydalı bir teknoloji olmaya devam eder. Bu güzel siteleri sadece kullanmakla kalmayın, aynı zamanda siz de katkıda bulunun. Siz de bir şeyler yaratıp Dünya'yı değiştirin, bir iz bırakın. Yapın ki, gelecekte yine böyle bir projeyle nostaljik bir geziye çıkıldığında, sizin yaptıklarınıza da yer verilsin, böylelikle tarihe geçin. Hokus pokus, abra kadabra! Zaman ileri aksın ve İnternet'in büyüsü yayılmaya devam etsin! Çevrim içi ve büyülü kalmaya devam edin! :)"
);

                      setTimeout(() =>{
                          agent.play("GestureUp");
                          agent.hide();
                      },35000)

                  });

    }
    if (address in url_mapping){
        // remove the 404 page if the 404 page is showing
        if (!document.getElementById("404-interface").classList.contains("d-none")){
            document.getElementById("404-interface").classList.add("d-none");
        }
        // fetch and render the page
        let django_address = fetch(url_mapping[address])
        django_address.then(r=>
            r.text()

        ).then(
            r => {

                document.getElementById("web-page").innerHTML = r
            }
        )
    } else {
        // clean up the current page
        document.getElementById("web-page").innerHTML = ""
        // show 404 page
        document.getElementById("404-interface").classList.remove("d-none");
    }
}

// App specific functions

// google search function
function googleSearch(){
    let search_text = $("#search-box").val()
    if (search_text.length === 0) {
        search_text = "google"
    }
    let search_results = fetch("/first_google/results/" + search_text)
    search_results.then(r=>
            r.text()
        ).then(
            r => {
                document.getElementById("web-page").innerHTML = r
            }
        )

}
