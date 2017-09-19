# stock-stickler
This is a proof-of-concept for a simple app that can pull in live Stock Market JSON data.

I created this over the weekend as a way of solving an issue for my Grandmother. Her use case is that she's 92, has poor eyesight, and loves checking her stocks. She used to do this over the phone several times per day, but after receiving an iPad she prefers to check them out in real-time.

While the native iOS app that ships on iPhones would be the perfect candidate, it doesn't ship on iPads. We found one or two different Stock Portfolio apps that provide the values and changes, but they weren't great and also weren't actively supported. Other stock apps on the App Store tend to be distributed by financial companies and provide portfolio management tools (read: overkill).

For lack of a better option, I decided to create this web app as a proof-of-concept that I could pull market data in real-time and present it in a large-type display that looks great on iPad. Thanks to the code [here](https://github.com/aaronarich/stock-stickler/blob/20e117267cfff8e9b0abee411e28765950e7b9aa/source/layouts/layout.erb#L9-L11), the app can be saved to the home screen as a standalone faux-app. The app can then be opened in a headless instance of Safari, which helps streamline the display and prevent clicking on buttons/options that are not related.

While this does require me to update and deploy changes to her portfolio manually, it does put the power in my hands to adjust things to her liking. I can then deploy my changes without trying to convince her to go to the App Store and download a new version.

- See it live here [https://stocks.aaronarich.com/](https://stocks.aaronarich.com/)
- Data provided for free by [IEX Developer Platform](https://iextrading.com/developer/)
