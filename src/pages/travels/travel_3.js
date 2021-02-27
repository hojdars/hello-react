import React from "react"

import TravelPost from "../../components/travel_post_layout"
import madeiraHeroImage from "../../../public/hero_images/hero.jpg"

import day0_alps from "../../../public/madeira-2018/day0-alps.png"
import PhotoCapsule from "../../components/photo_capsule"

export default function BlogPost() {
  return (
    <TravelPost
      heroImage={madeiraHeroImage}
      title="PĚŠKY NAPŘÍČ MADEIROU"
      subtitle="Přechod ostrova Madeira s krosnami na zádech z východu na západ"
      author="Štěpán Hojdar"
      reading_time="45 minut"
    >
      {/* ---------------------------------------------- Day -1  ---------------------------------------------- */}
      <h3>Příprava, vybavení a jídlo</h3>
      <p>
        Když Terka přišla někdy okolo listopadu minulého roku s nápadem, že naše další dovolená by mohl být přechod
        ostrova Madeira, začal jsem ho hledat ve Středozemním moři. Nevěděl jsem o tomto ostrově zhola nic, o to méně
        proč by zrovna tento ostrov bylo zajímavé přejít jako trek. Nicméně jsem na trek jít chtěl a proto jsem
        souhlasil. Letenky jsme nakonec sehnali 17. března od Swiss Airlines za skoro přesně 7000 CZK, zpáteční, na
        jednu osobu, včetně jednoho velkého zavazadla. Odlet byl stanoven na 20. srpna, s přestupem v Zurichu a
        příletem na Madeiru v ranních hodinách následujícího dne. Zpáteční letadlo odlétalo 4. září, což nám dalo na
        uskutečnění přechodu přesně dva týdny. Zbývalo vyřešit kudy se půjde, jak dlouho nám přechod zabere a zda si
        chceme ještě zařídit nějaké civilizovanější ubytování na konci našich 14 dní, co si vezmeme s sebou, jak a pod
        čím budeme spát, kde budeme spát, zda jsou potřeba povolení, jaká zavazadla s sebou vezmeme a co budeme jíst.
        Bylo to v zásadě už skoro hotový.
      </p>
      <p>
        Protože to nebyl náš první delší trek, věděli jsme, že hmotností musíme šetřit. Všechny ostatní treky jsme
        zatím přešli se stanem, který dohromady váží asi 3kg. Vzhledem k tomu, že jsme se všude dočetli, že na Madeiře
        neprší a v zásadě je tam pěkné počasí, tříkilový stan vypadal jako zbytečná cihla. Po (delší) chvilce
        přemlouvání jsme se shodli, že si vezmeme celtu a napneme jí na trekové hůlky. Celtu jsme vyrobili sami před
        odletem, ze silnylonu, hustoty 40D, která váží 55g na metr čtvereční. Celta je velká 3x3m, což dává váhu něco
        málo přes 500g. Po přidání železných kroužků do rohů a po stranách pro napnutí se váha ustálila na příjemných
        650g +/-. Po vzoru <a href="http://nalehko.com">nalehko.com</a> jsme si koupili tyvekovou plachtu pod sebe,
        která také neváží téměř nic, vzali si pěnové karimatky, které neváží vůbec nic a spací systém jsme měli
        vyřešený.
      </p>
      <p>
        Protože Terku na nápad přejít Madeiru přivedly podobné zápisky o přechodech jiných lidí, měli jsme hrubý náčrt
        trasy hotový po přečtení několika zápisků na různých webech (pohora.cz, treking.cz, turistika.cz). <b>Vytyčená
          trasa vypadala <a href="https://mapy.cz/s/2Vfb4">takto</a></b>. Okamžitě jsme se zděsili převýšení 15 000
        metrů nahoru a dalších 15 000 metrů dolu, které mapy.cz uvádí, ale eventuelně usoudili, že to je blbost a
        měření není správné. Naplánovaná cesta prochází většinou ze "zajímavých míst Madeiry", o kterých jsme se po
        internetu dočetli. Jmenovitě vysokých hor Pico Ruivo a okolí, vodopádů Caldeirão Verde, východního poloostrova
        Madeiry u Caniçalu a dalších. Dokonce i údolní vesničku jeptišek Curral das Freiras možná uvidíme z vrcholků!
      </p>
      <p>
        Zbytek výbavy byl celkem přímočarý, až dokud nám nedošlo, že do letadla nemůžeme brát plynovou bombu, která
        je pod tlakem a je tím pádem explozivní. Začali jsme hledat alternativní způsob ohřevu vody na treku a našli
        ethanolové vařiče. Zkušenější může napadnout, že ani alkohol přesahující 70% se na palubu letadla brát nesmí,
        ale to my nevěděli. Nějaký starý, malý a lehký hliníkový vaříček jsem doma našel a po vyzkoušení na krátkém
        treku Šumavy jsme měli jasno. Na ethanolu se vaří skvěle.
      </p>
      <p>
        Seznam věcí, které jsme měli s sebou je k nahlédnutí <a href="seznam.txt">zde</a>. Dohromady, včetně sušeného
        jídla naše krosny vážily 10 kilo bez vody. Jídlo jsme s sebou brali vcelku standardní: pár instantních
        polívek, obrovské množství podomácky připravené instantní kaše (ovesné vločky, sušené mléko, rozinky,
        křížaly), jedno kuře na paprice, <a href="https://www.youtube.com/watch?v=6arPUVtoUPo">podomácky usušené
          špagety</a> a ručně smíchané trail-mixy - sladký (oříšky, sušené meruňky, rozinky, atd) i slaný (buráky,
        praženou kukuřici, slunečnicová semínka). K instantním polévkám jsme si vzali ještě tenké polévkové nudle, a
        přihodili jsme jeden pytlík instantní bramborové kaše s mlékem.
      </p>

      {/* ---------------------------------------------- Day 0 ---------------------------------------------- */}
      <h3>Den 0 - 20.8.2018 - Odlet, Zürich</h3>
      <p>
        Cesta na letiště expresem Českých drah proběhla, naštěstí, bez jakékoli veselejší příhody a první letadlo jsme
        stihli s velkou rezervou. Na letišti jsme ještě zabalili krosny do igelitové folie (25m na každého), protože
        jsme se solidně báli o plastové přezky na pásech na krosnách, a mohli jsme vyrazit na 16 denní cestu. Do
        Zurichu jsme přiletěli okolo desáté večer, letadlo na Madeiru nám letělo v 6 hodin ráno. Naštěstí máme v
        Zurichu kamarády, u kterých jsme se vyspali celé tři hodiny, než jsme Uberem opět dorazili na letiště, chytat
        druhé letadlo. I toto se obešlo bez veselejších příhod a tak jsme v 10 hodin ráno dosedli na letiště ve
        Funchalu (čteno [Funšal]), které vůbec není ve Funchalu... ¯\_(ツ)_/¯
      </p>

      <PhotoCapsule
        images={[day0_alps]}
        descriptions={["Pohled na Alpy z letadla za svítání, přibližně 06:15"]}
      />

    </TravelPost>
  )
}