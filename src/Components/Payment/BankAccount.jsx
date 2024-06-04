import React, { useState } from "react";

/* 
Komponent som använder Luhns algoritm för att validera bankkortsnummer! 
När Luhn-algoritmen används för att validera ett kreditkortsnummer, så går den igenom följande steg oavsett korttyp:

1. Från höger till vänster, dubblera värdet på varannan siffra. 
2. Om dubbleringen resulterar i att talet blir större än 9, så ska 9 subtraheras från det talet. 
3. Summan av alla bearbetade siffror: Alla siffror, både de dubblerade och de odubblerade, adderas
   ihop för att få en totalsumma. Om summan är jämnt delbar med 10, så är numret giltligt. 
 
   Algoritmen funkar för att validera en mängd olika kreditkortsnummer, med i denna komponent begränsas testet till följande kort:
 --> Visa - börjar med 4, längden är 13 eller 16 siffror.
 --> Mastercard - should start with 51 through 55, längden är 16 siffor.
 --> American Express - börjar med 34 eller 37, längden är 15 siffror. 

*/ 

function BankAccount() {
   let [cardNumber, setCardNumber] = useState("");
   let [message, setMessage] = useState("");
   
   function validateByLuhn(cardNumber)
    {
      let sum = 0;
      // variabel som används för att spara den slutgiltliga summan. 
      let shouldDouble = false;
      // bool som anger om en siffra ska dubbleras eller inte

      // variabeln 'i' initieras till att vara lika med = (längden på numret - 1)  , dvs om numret är 10 siffror så är i = 9. 
      // Kortnumret kommer loopas igenom från slutet, dvs från höger till vänster. 
      for (let i = cardNumber.length - 1; i >= 0; i--) 
      {
         let digit = parseInt(cardNumber.charAt(i));
         // nuvarande siffra, som representeras av 'i', konverteras till en int 'digit'

         if (shouldDouble) 
         // kommer vara false första gången, dvs första siffran som loopas kommer inte dubbleras. 
         { 
            // dubblera talet 
            let multipliedByTwo = digit *2;

            // utvärdera resultatet 
            if (multipliedByTwo > 9)
            {
                // om talet blir större än 9 när det har dubblerats, dra bort 9. 
                digit = multipliedByTwo- 9;
            } 
            else if (multipliedByTwo <= 9)
            {
                // om talet blir större än 9 så ska inget dras bort.
                  digit = multipliedByTwo;
            }
         }
         sum = sum + digit; // alla tal ska läggas till på summan, vare sig det är shouldDouble eller inte. 

         shouldDouble = !shouldDouble;  
         // innan loopen avslutas så ska shouldDouble ska vara motsatsen till vad den var precis, dvs om den 
         // var false så kommer den bli true osv. Detta medför att endast vartannat tal kommer dubbleras. 
      }

      return sum % 10 === 0;
      // Modulus operatorn avgör om den slutgiltliga summan är jämnt delbar med 10
   }

   function validateCreditCard(event) 
   {
      // Variabler
      let cardNumber = event.target.value; 
      // det inmatade numret sparas med hjälp av event.target.value
      setCardNumber(cardNumber); 
      // uppdatera state-variabeln för kreditkortsnummer 

         let isValid =
      // bool som kommer vara true om numret passerar Luhns algoritm. 
      (validateByLuhn(cardNumber) && 
      // kortnumret ska passera Luhns algoritm och...

      // 1) american express, numret ska vara 15 siffror långt och börja med 34 eller 37 (dvs på index 0) 
      cardNumber.length == 15 && (cardNumber.indexOf("34") == 0 || cardNumber.indexOf("37") == 0)) ||
     
      // 2) visa, numret ska börja på 4 och vara 13 eller 16 siffror långt. 
      (cardNumber.length == 13 && cardNumber[0] == 4) || (cardNumber.length == 16 && (cardNumber[0] == 4 ||

     // 3) Mastercard, första siffran ska vara 5 och andra siffran ska vara mellan 1 och 5, längd 16 siffror.
      (cardNumber.length==16 && cardNumber[0] == 5 && cardNumber[1] >= 1 && cardNumber[1] <= 5)));
     
      if (isValid) 
      {
         setMessage("Valid Card Number");
      } else 
      {
         setMessage("Invalid Card Number");
      }
   }
   return (
      <div>
         <input type = "text" value = {cardNumber} onChange = {validateCreditCard} />
         <p> {message} </p>
      </div>
   );
}
export default BankAccount; 