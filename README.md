# Drakensang_Price_Calc

A simple calculator app for calculating a character's price in Drakensang online.
The prices are based on the cheapest ingame currency (Turkish Lira), converted to EU.

How the calculations work:
1. Premium days - calculated based on how many 30 days there are in the total number of premium days left in the account.
   Formula: days * (monthPrice / 30). Month price in TL (converted to EU) = 4.5€.
2. Deluxe prem days - Same as regular premium but the price per month in TL to EU is = 10.12€.
3. Shiny Dust - calculated based on the medium shiny dust pack which is 105000 shiny dust for 4.50 euro (in TL shop).
   Formula: totalShinyDust / 105000 * midPackPrice.
4. Andermants - calculated based on the 6 available andermant packages in the shop.
   Formula: (totalAndermants / avrgAndersSum) * averageAnderPrice where avrgAnderSum is the total Andermants of the 6 andermant offers in the shop divided by 6, and averageAnderPrice is the total Cash of the 6 andermant offers in the shop, divided by 6.
5. IPs - calculated based on the Andermant formula, IPs are converted to andermants (1IP = 80 anders per normal ingame shop) and then the andermants are divided by avrgAnders and multiplied by avrgAnderPrice.
