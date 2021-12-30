<template>
  <div
    id="phanta_layout"
    class="websiteWrap"
  >
    <div class="mainWrap">
      <div>
        <div class="src-pages-about-index-module__about--POUIc contentWrap">
          <div class="src-pages-about-index-module__header--qG1Lr isMobile">About</div>
          <div class="src-components-About-AboutSlider-AboutSlider-module__AboutSlider--rrki5">
            <div class="src-components-About-AboutSlider-AboutSlider-module__cardContent--yZaNV">
              <div class="src-components-About-AboutSlider-AboutSlider-module__cardContainer--MwxQ8">
                <div class="src-components-About-AboutSlider-AboutSlider-module__title--0m+UA">PHANTA BEAR vs.
                  PHANTACi
                </div>
                <VueSlickCarousel
                  :arrows="false"
                  :dots="false"
                  :infinite="true"
                  :speed="500"
                  :slidesToShow="$_isMobile?3:4"
                  :pauseOnHover="true"
                  :slidesToScroll=1
                >
                  <div>
                    <div class="src-components-About-AboutSlider-AboutSlider-module__jayPicture--7Y+un">
                      <div class="src-components-About-AboutSlider-AboutSlider-module__pictureBox--mLiTr"><img src="https://d1kjtx52rxv2sn.cloudfront.net/website/images/about_phantabear/phantabear1.png">
                      </div>
                    </div>
                    <div class="src-components-About-AboutSlider-AboutSlider-module__snapPicture--6cfoR">
                      <div class="src-components-About-AboutSlider-AboutSlider-module__pictureBox--mLiTr"><img src="https://d1kjtx52rxv2sn.cloudfront.net/website/images/about_phantaci/phantaci1.jpeg">
                      </div>
                    </div>
                  </div>

                  <div>
                    <div class="src-components-About-AboutSlider-AboutSlider-module__jayPicture--7Y+un">
                      <div class="src-components-About-AboutSlider-AboutSlider-module__pictureBox--mLiTr"><img src="https://d1kjtx52rxv2sn.cloudfront.net/website/images/about_phantabear/phantabear2.png">
                      </div>
                    </div>
                    <div class="src-components-About-AboutSlider-AboutSlider-module__snapPicture--6cfoR">
                      <div class="src-components-About-AboutSlider-AboutSlider-module__pictureBox--mLiTr"><img src="https://d1kjtx52rxv2sn.cloudfront.net/website/images/about_phantaci/phantaci2.jpeg">
                      </div>
                    </div>
                  </div>

                  <div>
                    <div class="src-components-About-AboutSlider-AboutSlider-module__jayPicture--7Y+un">
                      <div class="src-components-About-AboutSlider-AboutSlider-module__pictureBox--mLiTr"><img src="https://d1kjtx52rxv2sn.cloudfront.net/website/images/about_phantabear/phantabear3.png">
                      </div>
                    </div>
                    <div class="src-components-About-AboutSlider-AboutSlider-module__snapPicture--6cfoR">
                      <div class="src-components-About-AboutSlider-AboutSlider-module__pictureBox--mLiTr"><img src="https://d1kjtx52rxv2sn.cloudfront.net/website/images/about_phantaci/phantaci3.jpeg">
                      </div>
                    </div>
                  </div>

                  <div>
                    <div class="src-components-About-AboutSlider-AboutSlider-module__jayPicture--7Y+un">
                      <div class="src-components-About-AboutSlider-AboutSlider-module__pictureBox--mLiTr"><img src="https://d1kjtx52rxv2sn.cloudfront.net/website/images/about_phantabear/phantabear4.png">
                      </div>
                    </div>
                    <div class="src-components-About-AboutSlider-AboutSlider-module__snapPicture--6cfoR">
                      <div class="src-components-About-AboutSlider-AboutSlider-module__pictureBox--mLiTr"><img src="https://d1kjtx52rxv2sn.cloudfront.net/website/images/about_phantaci/phantaci4.jpeg">
                      </div>
                    </div>
                  </div>

                </VueSlickCarousel>
              </div>
            </div>
          </div>
          <div class="src-pages-about-index-module__container--TE9Vl">
            <div class="src-pages-about-index-module__containerContent--RGJVM">
              <div class="src-pages-about-index-module__header--qG1Lr">About</div>
              <div class="src-pages-about-index-module__shadow--uEJk3"><img src="https://d1kjtx52rxv2sn.cloudfront.net/website/images/about-shadow.png"></div>
              <div class="src-pages-about-index-module__aboutList--O+voA">
                <div class="src-pages-about-index-module__aboutItem--3ruFj"><img
                    class="src-pages-about-index-module__logo--y3xlz"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMGSURBVHgBlVVBSFRRFL3v/3Gm0BlmNjopxAiVLhyzhUJQILkoV01QtJLGXQRSqxhyoRERbSpbRKvUamXFWBsrSIpaVdAwSgoFTgt1Eu0P6lQ6zrzuefP/5ztOUhce/7377jvv3HPvmxFUxvwhw+/x0RmS1C4EtfA3BL8UlOB5in2j6WRguNxZUeqoDi9GBOmDvOGn7S3Fp/tLgTXnoqbZuKmRHv8HMFiI2Q4Fm40+p1O3JtgQkmJHDlVQZ4db+ebShS0orS0uauMBW/wh8WmvrIn5swvXX2ChUg6GF6OMPfjknpe8lSzQ83V18GNig95/2qC6oEYrq5JaD7io65SHpr7kyVcl6OHjNbr/aE2B89UnFiYCo0V2YWPm7MWsTH7Oy30HM5LX8sqNX3LJkFtGciovEYuYkWfrdnxN2DD8LYbfVWRHoVqTxTKPoYEqqt2llRUObGM9O1Xs+Luc7YfunlwhqknSj8PxgVNr3KvT7auVKrW5+QK9epsrC7q8IqnrpIca9+iKgG2aaNcYOqQAWa+eS1nqOFxBs/PFYuCCp2PrNMoDF4JVnOfQDnsrTjDFUuzXvdWxu5bD4xZUv1unVbMAEN7LA5Wb5YqPjedoiSuLKsPfxjFuPgMypvldzhtwo9UqDTwHoKUrGKGlfF5RZMwgkU63ksZpUD5lLVAYBM2aoNBw+mteFQjFOHp6mXp6syrG2ne+NSkpwUXh92ka0lRfTgmaYQ1AbniV4rnuHRQ55razgd6bdBTym4sKhTekaRErCFZnMrIMYDA0tVVlq7rT3OQ2nnDFBZrRk6cZ9BEOvhzxKe2cuuI1wFfFAxrDB7Z3Bn/TA/OlQLr0RKBenawOGxHmE1fsmJlKzdTJMuiKAmAf3Hqv/XRWl+np0XTSN2xTqWlauiWEdt5a42ADNy6qW2umD3bQdhOQqgZdTk8G+hWu0x9sMvrZ00f/YVzZge+TgQs20dIAfuhR/gA0tC0QUYZHt/0L8zdAJzDfjnceUn8DRUuh17grXq9pheFMIpApPfcHRXBrgdkVjcEAAAAASUVORK5CYII="
                  >
                  <div class="src-pages-about-index-module__aboutContent--sI2rc">
                    <div class="src-pages-about-index-module__content--I4j9B">In 2013, while filming ‘The Rooftop,’
                      which Jay wrote, directed and performed in, we couldn’t stop wondering if there was some way
                      that viewers could go beyond simply watching a movie, some way for them to be truely and
                      completely immersed in the experience.
                    </div>
                  </div>
                </div>
                <div class="src-pages-about-index-module__aboutItem--3ruFj"><img
                    class="src-pages-about-index-module__logo--y3xlz"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMGSURBVHgBlVVBSFRRFL3v/3Gm0BlmNjopxAiVLhyzhUJQILkoV01QtJLGXQRSqxhyoRERbSpbRKvUamXFWBsrSIpaVdAwSgoFTgt1Eu0P6lQ6zrzuefP/5ztOUhce/7377jvv3HPvmxFUxvwhw+/x0RmS1C4EtfA3BL8UlOB5in2j6WRguNxZUeqoDi9GBOmDvOGn7S3Fp/tLgTXnoqbZuKmRHv8HMFiI2Q4Fm40+p1O3JtgQkmJHDlVQZ4db+ebShS0orS0uauMBW/wh8WmvrIn5swvXX2ChUg6GF6OMPfjknpe8lSzQ83V18GNig95/2qC6oEYrq5JaD7io65SHpr7kyVcl6OHjNbr/aE2B89UnFiYCo0V2YWPm7MWsTH7Oy30HM5LX8sqNX3LJkFtGciovEYuYkWfrdnxN2DD8LYbfVWRHoVqTxTKPoYEqqt2llRUObGM9O1Xs+Luc7YfunlwhqknSj8PxgVNr3KvT7auVKrW5+QK9epsrC7q8IqnrpIca9+iKgG2aaNcYOqQAWa+eS1nqOFxBs/PFYuCCp2PrNMoDF4JVnOfQDnsrTjDFUuzXvdWxu5bD4xZUv1unVbMAEN7LA5Wb5YqPjedoiSuLKsPfxjFuPgMypvldzhtwo9UqDTwHoKUrGKGlfF5RZMwgkU63ksZpUD5lLVAYBM2aoNBw+mteFQjFOHp6mXp6syrG2ne+NSkpwUXh92ka0lRfTgmaYQ1AbniV4rnuHRQ55razgd6bdBTym4sKhTekaRErCFZnMrIMYDA0tVVlq7rT3OQ2nnDFBZrRk6cZ9BEOvhzxKe2cuuI1wFfFAxrDB7Z3Bn/TA/OlQLr0RKBenawOGxHmE1fsmJlKzdTJMuiKAmAf3Hqv/XRWl+np0XTSN2xTqWlauiWEdt5a42ADNy6qW2umD3bQdhOQqgZdTk8G+hWu0x9sMvrZ00f/YVzZge+TgQs20dIAfuhR/gA0tC0QUYZHt/0L8zdAJzDfjnceUn8DRUuh17grXq9pheFMIpApPfcHRXBrgdkVjcEAAAAASUVORK5CYII="
                  >
                  <div class="src-pages-about-index-module__aboutContent--sI2rc">
                    <div class="src-pages-about-index-module__content--I4j9B">PHANTACi is the fashion brand created in
                      2006 by Jay, who has endless creative inspiration, and Ric, who has unique insights into the
                      fashion industry. PHANTACi incorporates designs and ideas derived from both the nastiness that
                      the word Phantom conveys, and the great magnificence that the idea of Fantasy can possibly
                      reach.
                    </div>
                  </div>
                </div>
                <div class="src-pages-about-index-module__aboutItem--3ruFj"><img
                    class="src-pages-about-index-module__logo--y3xlz"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMGSURBVHgBlVVBSFRRFL3v/3Gm0BlmNjopxAiVLhyzhUJQILkoV01QtJLGXQRSqxhyoRERbSpbRKvUamXFWBsrSIpaVdAwSgoFTgt1Eu0P6lQ6zrzuefP/5ztOUhce/7377jvv3HPvmxFUxvwhw+/x0RmS1C4EtfA3BL8UlOB5in2j6WRguNxZUeqoDi9GBOmDvOGn7S3Fp/tLgTXnoqbZuKmRHv8HMFiI2Q4Fm40+p1O3JtgQkmJHDlVQZ4db+ebShS0orS0uauMBW/wh8WmvrIn5swvXX2ChUg6GF6OMPfjknpe8lSzQ83V18GNig95/2qC6oEYrq5JaD7io65SHpr7kyVcl6OHjNbr/aE2B89UnFiYCo0V2YWPm7MWsTH7Oy30HM5LX8sqNX3LJkFtGciovEYuYkWfrdnxN2DD8LYbfVWRHoVqTxTKPoYEqqt2llRUObGM9O1Xs+Luc7YfunlwhqknSj8PxgVNr3KvT7auVKrW5+QK9epsrC7q8IqnrpIca9+iKgG2aaNcYOqQAWa+eS1nqOFxBs/PFYuCCp2PrNMoDF4JVnOfQDnsrTjDFUuzXvdWxu5bD4xZUv1unVbMAEN7LA5Wb5YqPjedoiSuLKsPfxjFuPgMypvldzhtwo9UqDTwHoKUrGKGlfF5RZMwgkU63ksZpUD5lLVAYBM2aoNBw+mteFQjFOHp6mXp6syrG2ne+NSkpwUXh92ka0lRfTgmaYQ1AbniV4rnuHRQ55razgd6bdBTym4sKhTekaRErCFZnMrIMYDA0tVVlq7rT3OQ2nnDFBZrRk6cZ9BEOvhzxKe2cuuI1wFfFAxrDB7Z3Bn/TA/OlQLr0RKBenawOGxHmE1fsmJlKzdTJMuiKAmAf3Hqv/XRWl+np0XTSN2xTqWlauiWEdt5a42ADNy6qW2umD3bQdhOQqgZdTk8G+hWu0x9sMvrZ00f/YVzZge+TgQs20dIAfuhR/gA0tC0QUYZHt/0L8zdAJzDfjnceUn8DRUuh17grXq9pheFMIpApPfcHRXBrgdkVjcEAAAAASUVORK5CYII="
                  >
                  <div class="src-pages-about-index-module__aboutContent--sI2rc">
                    <div class="src-pages-about-index-module__content--I4j9B">Now we want to combine our artistic
                      vision with the new blockchain era by creating the Phanta Bear NFT project. Phanta Bear has two
                      bright, starry eyes, and his heart is filled with the artistic talent of the Mandopop King. The
                      10,000 unique Phanta Bears feature the iconic fashion of PHANTACi and offer rich online and
                      offline perks that allow their owners to enjoy the life both in and out of the metaverse.
                    </div>
                  </div>
                </div>
                <div class="src-pages-about-index-module__aboutItem--3ruFj"><img
                    class="src-pages-about-index-module__logo--y3xlz"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMGSURBVHgBlVVBSFRRFL3v/3Gm0BlmNjopxAiVLhyzhUJQILkoV01QtJLGXQRSqxhyoRERbSpbRKvUamXFWBsrSIpaVdAwSgoFTgt1Eu0P6lQ6zrzuefP/5ztOUhce/7377jvv3HPvmxFUxvwhw+/x0RmS1C4EtfA3BL8UlOB5in2j6WRguNxZUeqoDi9GBOmDvOGn7S3Fp/tLgTXnoqbZuKmRHv8HMFiI2Q4Fm40+p1O3JtgQkmJHDlVQZ4db+ebShS0orS0uauMBW/wh8WmvrIn5swvXX2ChUg6GF6OMPfjknpe8lSzQ83V18GNig95/2qC6oEYrq5JaD7io65SHpr7kyVcl6OHjNbr/aE2B89UnFiYCo0V2YWPm7MWsTH7Oy30HM5LX8sqNX3LJkFtGciovEYuYkWfrdnxN2DD8LYbfVWRHoVqTxTKPoYEqqt2llRUObGM9O1Xs+Luc7YfunlwhqknSj8PxgVNr3KvT7auVKrW5+QK9epsrC7q8IqnrpIca9+iKgG2aaNcYOqQAWa+eS1nqOFxBs/PFYuCCp2PrNMoDF4JVnOfQDnsrTjDFUuzXvdWxu5bD4xZUv1unVbMAEN7LA5Wb5YqPjedoiSuLKsPfxjFuPgMypvldzhtwo9UqDTwHoKUrGKGlfF5RZMwgkU63ksZpUD5lLVAYBM2aoNBw+mteFQjFOHp6mXp6syrG2ne+NSkpwUXh92ka0lRfTgmaYQ1AbniV4rnuHRQ55razgd6bdBTym4sKhTekaRErCFZnMrIMYDA0tVVlq7rT3OQ2nnDFBZrRk6cZ9BEOvhzxKe2cuuI1wFfFAxrDB7Z3Bn/TA/OlQLr0RKBenawOGxHmE1fsmJlKzdTJMuiKAmAf3Hqv/XRWl+np0XTSN2xTqWlauiWEdt5a42ADNy6qW2umD3bQdhOQqgZdTk8G+hWu0x9sMvrZ00f/YVzZge+TgQs20dIAfuhR/gA0tC0QUYZHt/0L8zdAJzDfjnceUn8DRUuh17grXq9pheFMIpApPfcHRXBrgdkVjcEAAAAASUVORK5CYII="
                  >
                  <div class="src-pages-about-index-module__aboutContent--sI2rc">
                    <div class="src-pages-about-index-module__content--I4j9B">More Jay Snap: <a
                        href="https://www.phantacico.com/pages/jay-snap"
                        target="window_view"
                      >https://www.phantacico.com/pages/jay-snap</a>
                    </div>
                  </div>
                </div>
                <div class="src-pages-about-index-module__aboutItem--3ruFj"><img
                    class="src-pages-about-index-module__logo--y3xlz"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMGSURBVHgBlVVBSFRRFL3v/3Gm0BlmNjopxAiVLhyzhUJQILkoV01QtJLGXQRSqxhyoRERbSpbRKvUamXFWBsrSIpaVdAwSgoFTgt1Eu0P6lQ6zrzuefP/5ztOUhce/7377jvv3HPvmxFUxvwhw+/x0RmS1C4EtfA3BL8UlOB5in2j6WRguNxZUeqoDi9GBOmDvOGn7S3Fp/tLgTXnoqbZuKmRHv8HMFiI2Q4Fm40+p1O3JtgQkmJHDlVQZ4db+ebShS0orS0uauMBW/wh8WmvrIn5swvXX2ChUg6GF6OMPfjknpe8lSzQ83V18GNig95/2qC6oEYrq5JaD7io65SHpr7kyVcl6OHjNbr/aE2B89UnFiYCo0V2YWPm7MWsTH7Oy30HM5LX8sqNX3LJkFtGciovEYuYkWfrdnxN2DD8LYbfVWRHoVqTxTKPoYEqqt2llRUObGM9O1Xs+Luc7YfunlwhqknSj8PxgVNr3KvT7auVKrW5+QK9epsrC7q8IqnrpIca9+iKgG2aaNcYOqQAWa+eS1nqOFxBs/PFYuCCp2PrNMoDF4JVnOfQDnsrTjDFUuzXvdWxu5bD4xZUv1unVbMAEN7LA5Wb5YqPjedoiSuLKsPfxjFuPgMypvldzhtwo9UqDTwHoKUrGKGlfF5RZMwgkU63ksZpUD5lLVAYBM2aoNBw+mteFQjFOHp6mXp6syrG2ne+NSkpwUXh92ka0lRfTgmaYQ1AbniV4rnuHRQ55razgd6bdBTym4sKhTekaRErCFZnMrIMYDA0tVVlq7rT3OQ2nnDFBZrRk6cZ9BEOvhzxKe2cuuI1wFfFAxrDB7Z3Bn/TA/OlQLr0RKBenawOGxHmE1fsmJlKzdTJMuiKAmAf3Hqv/XRWl+np0XTSN2xTqWlauiWEdt5a42ADNy6qW2umD3bQdhOQqgZdTk8G+hWu0x9sMvrZ00f/YVzZge+TgQs20dIAfuhR/gA0tC0QUYZHt/0L8zdAJzDfjnceUn8DRUuh17grXq9pheFMIpApPfcHRXBrgdkVjcEAAAAASUVORK5CYII="
                  >
                  <div class="src-pages-about-index-module__aboutContent--sI2rc">
                    <div class="src-pages-about-index-module__content--I4j9B"><a
                        href="https://d1kjtx52rxv2sn.cloudfront.net/website/pdf/How+to+Install+and+Use+Metamask+on+Google+Chrome.pdf"
                        target="window_view"
                      >How to Install and Use Metamask on Google Chrome?</a></div>
                  </div>
                </div>
                <div class="src-pages-about-index-module__aboutItem--3ruFj"><img
                    class="src-pages-about-index-module__logo--y3xlz"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMGSURBVHgBlVVBSFRRFL3v/3Gm0BlmNjopxAiVLhyzhUJQILkoV01QtJLGXQRSqxhyoRERbSpbRKvUamXFWBsrSIpaVdAwSgoFTgt1Eu0P6lQ6zrzuefP/5ztOUhce/7377jvv3HPvmxFUxvwhw+/x0RmS1C4EtfA3BL8UlOB5in2j6WRguNxZUeqoDi9GBOmDvOGn7S3Fp/tLgTXnoqbZuKmRHv8HMFiI2Q4Fm40+p1O3JtgQkmJHDlVQZ4db+ebShS0orS0uauMBW/wh8WmvrIn5swvXX2ChUg6GF6OMPfjknpe8lSzQ83V18GNig95/2qC6oEYrq5JaD7io65SHpr7kyVcl6OHjNbr/aE2B89UnFiYCo0V2YWPm7MWsTH7Oy30HM5LX8sqNX3LJkFtGciovEYuYkWfrdnxN2DD8LYbfVWRHoVqTxTKPoYEqqt2llRUObGM9O1Xs+Luc7YfunlwhqknSj8PxgVNr3KvT7auVKrW5+QK9epsrC7q8IqnrpIca9+iKgG2aaNcYOqQAWa+eS1nqOFxBs/PFYuCCp2PrNMoDF4JVnOfQDnsrTjDFUuzXvdWxu5bD4xZUv1unVbMAEN7LA5Wb5YqPjedoiSuLKsPfxjFuPgMypvldzhtwo9UqDTwHoKUrGKGlfF5RZMwgkU63ksZpUD5lLVAYBM2aoNBw+mteFQjFOHp6mXp6syrG2ne+NSkpwUXh92ka0lRfTgmaYQ1AbniV4rnuHRQ55razgd6bdBTym4sKhTekaRErCFZnMrIMYDA0tVVlq7rT3OQ2nnDFBZrRk6cZ9BEOvhzxKe2cuuI1wFfFAxrDB7Z3Bn/TA/OlQLr0RKBenawOGxHmE1fsmJlKzdTJMuiKAmAf3Hqv/XRWl+np0XTSN2xTqWlauiWEdt5a42ADNy6qW2umD3bQdhOQqgZdTk8G+hWu0x9sMvrZ00f/YVzZge+TgQs20dIAfuhR/gA0tC0QUYZHt/0L8zdAJzDfjnceUn8DRUuh17grXq9pheFMIpApPfcHRXBrgdkVjcEAAAAASUVORK5CYII="
                  >
                  <div class="src-pages-about-index-module__aboutContent--sI2rc">
                    <div class="src-pages-about-index-module__content--I4j9B"><a
                        href="https://d1kjtx52rxv2sn.cloudfront.net/website/pdf/How+to+buy+ETH+and+transfer+it+to+a+web3+wallet.pdf"
                        target="window_view"
                      >How to buy ETH and transfer it to a web3 wallet?</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components: { VueSlickCarousel },
  data() {
    return {}
  },
  computed: {
    $_isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
      return flag
    },
  },
  methods: {},
}
</script>
<style scoped>
</style>

