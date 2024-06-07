
-- Komma-igång-guide --

1. Installera beroenden:
Öppna terminalen och navigera till projektets rotmapp. Kör sedan kommandot 'npm install' för att installera alla nödvändiga paket. 

2. Starta json-server:
För att simulera 'back-end'-delen i detta projekt så behöver man köra kommandot 'json-server --watch db.json' i terminalen. Öppna samtliga
url:s som dyker upp i webbläsaren så att appen kan hämta data från dem. 

4. Starta applikationen: Efter att har startat json-servern så är det dags att köra kommandet 'npm run dev'. Då kommer länken till själva
hemsidan att dyka upp!
---------------------------------------------------

-- Projektanalys --

I detta projekt har jag utvecklat en webbapplikation för den fiktiva hamburgerkedjan “Bun Drop” med målet att skapa en online-upplevelse som är både funktionell och estetiskt tilltalande. I denna projektanalys kommer jag att beskriva de centrala delarna av min arbetsprocess, vilket inkluderar designvalen, kodstrukturen och de utmaningar jag stötte på samt hur jag löste dem. Jag kommer även att reflektera över resultatet och vad jag eventuellt hade gjort annorlunda i framtida utvecklingsprojekt.

 - React

Jag inledde arbetet med att välja mitt huvudramverk vilket blev React. Valet att använda React grundar sig främst i att jag upplever deras komponentsystem som enkelt att förstå och använda, men också i att det är ett populärt ramverk med många resurser tillgängliga. 

- Responsiv design

När jag började skapa min design i Figma så hade jag komponenttänket med mig i bakhuvudet. I och med att jag redan från början tänkte på hur jag kunde strukturera designen i komponenter så blev det enklare att översätta design till kod. Vad gäller anpassning till olika skärmstorlekar så har jag främst utgått från för desktop och mobil, men designen fungerar även för surfplattor. För att uppnå responsivitet använde jag en kombination av 'pure' CSS och Bootstrap. Bootstrap visade sig vara ett effektivt ramverk för att komma igång med responsivitet, men jag kände också att det inte var tillräckligt flexibelt för att finjustera vissa delar av designen. Om jag bara fick välja en funktion från Bootstrap så skulle det definitivt vara gridsystemet eftersom det underlättade arbetet med den generella layouten avsevärt. Men jag föredrog alltså att skapa vissa detaljer med vanlig CSS för att få mer kontroll över designen.

- Utmaningar

Det finns lite olika sätt att hantera informationsutbytet mellan komponenterna i React. Jag började med att använda så kallad 'prop drilling' men det tog inte lång tid innan det blev för rörigt att hålla reda på alla props som förflyttades i komponentträdet. Jag bestämde då att jag skulle använda mig av context istället. Inledningsvis så kändes context lite svårare att förstå eftersom det inte är lika tydligt exakt hur informationen flyttas från en komponent till en annan. Men ganska snart kändes context som det självklara valet eftersom det blev så mycket lättare att hämta data från "servern". 
