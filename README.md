
Innehåll:

   1. Starta detta projekt 
   2. Projektanalys
      
------------------------------------------------------------------------------------

Starta projektet:

1.) Installera dependencies:
Kör 'npm install' från projektets rotmapp för att installera alla nödvändiga paket.

2. ) Starta json-server:
Kör "json-server --watch db.json" från terminalen.

3) Starta applikationen med 'npm run dev' från terminalen.
----------------------------------------------------------------------------------

Projektanalys

I detta projekt har jag utvecklat en webbapplikation för den fiktiva hamburgerkedjan “Bun Drop” med målet att skapa en online-upplevelse som är både funktionell och estetiskt tilltalande. I denna projektanalys kommer jag att beskriva de centrala delarna av min arbetsprocess, vilket inkluderar designvalen, kodstrukturen och de utmaningar jag stötte på. Jag kommer även att reflektera över vad jag eventuellt hade gjort annorlunda i framtida projekt.

 - React

Jag inledde arbetet med att välja mitt huvudramverk, vilket blev React. Valet att använda React grundar sig främst i att jag upplever deras komponentsystem som enkelt att förstå och använda, men också i att det är ett populärt ramverk med många resurser tillgängliga. 

- Responsiv design

När jag började skapa min design i Figma så hade jag komponenttänket med mig i bakhuvudet. I och med att jag redan från början tänkte på hur jag kunde strukturera designen i komponenter så blev det senare enklare att implementera designen i kod.

Vad gäller anpassning till olika skärmstorlekar så har jag främst utgått från desktop och mobil, men designen fungerar även för surfplattor. För att uppnå responsivitet använde jag en kombination av 'pure' CSS och Bootstrap. Bootstrap visade sig vara effektivt för att snabbt komma igång med responsivitet, men jag kände också att det inte var tillräckligt flexibelt för att finjustera vissa delar av designen.

Om jag bara fick välja en funktion från Bootstrap så skulle det definitivt vara gridsystemet eftersom det underlättade arbetet med den generella layouten. Men jag föredrog alltså att skapa vissa detaljer med vanlig CSS för att få mer kontroll över designen.

- Utmaningar

Det finns lite olika sätt att hantera kommunikationen mellan komponenterna i React. Jag började med att använda så kallad 'prop drilling' men det tog inte lång tid innan det blev för rörigt för mig att hålla reda på alla props som flyttades i komponentträdet. Jag bestämde då att jag skulle använda mig av context istället. Inledningsvis så kändes context lite svårare att förstå eftersom det inte är lika tydligt hur informationen flyttas från en komponent till en annan. Men ganska snart kändes context som det självklara valet eftersom det blev så mycket lättare att hämta data från "servern". 

- Custom hooks

Jag skulle även i framtida projekt använda mig mer av custom hooks, exempelvis för att hantera localStorage. 

- Mappstruktur

Jag skulle tänkt tidigare på vilka mappar jag vill ha för mina komponenter. Nu har jag ingen egen mapp för mina mer "generella" komponenter, såsom navbar, header etc, däremot har jag mappar för övriga, mer specifika komponenter. Skulle jag göra om projektet från början så skulle jag skapat en mapp för alla komponenter.

Sammanfattning:

För att avsluta denna analys och även denna kurs i gränsnittsutveckling så tar jag med mig vikten av att redan i början fundera på hur en design kan göras responsiv. När jag skrev min kod hade jag redan en tydlig idé om vilka komponenter jag skulle använda och hur dessa skulle anpassas till olika skärmstorlekar, vilket gjorde implementationen förvånansvärt smidig. Jag tar även med mig att Bootstrap är ett kraftfullt sätt att snabbt åstadkomma responsivitet, men att vanlig CSS trots allt erbjuder större precision när det gäller detaljer i designen.

Det jag upplevde som mest utmanande var hur jag skulle hantera informationsutbytet mellan komponenter i applikationen. Jag löste detta genom att ersätta 'prop drilling' med React Context. I framtida projekt skulle jag fokusera mer på Context redan från början.

Som några avslutande ord så vill jag tacka inte bara för denna kurs, utan också för de tidigare kurserna som alla varit lika lärorika. Jag känner mig verkligen redo för att möta verkligheten på praktiken i höst och fortsätta växa som programmerare i många år framöver! 



