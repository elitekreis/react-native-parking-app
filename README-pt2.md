# Technical Assessment P2

## 1. Address Feedback

### User Interface

Visually, the app looks up to spec on both iOS and Android. Nice job! 
There is one small typo to fix on the alert: Please change ~~"OOP!"~~ to "OOPS!"

### Navigation

- Once I select a park, I am unable to tap on the image to choose a different park.
- On the Confirm screen, I can navigate back to the the Park List, and then back to the "Main" screen (and then back again to the Welcome screen). This experience is a bit strange, since to the user the Confirm and Main screens are the same screen, but in different states. 

***Please make the following updates to the app's behavior:***

```
On the Confirm (or Main) screen, tapping Back, I go to the Welcome screen.
On the Park List screen, tapping Back, I should go to the Main screen.
Once I have made a selection, I should be able to tap the image to go to the Park List and change my selection.
```

## 2. Implement Fetching from API

We have added a simple API to download park data and save the user's preferences.  Please update the app to make the appropriate GET and POST request to implement the following functionality:

***Get the list of parks***

- When the user visits the Select Location screen, obtain the list of parks from the following endpoint: http://qeepfake.herokuapp.com/parks

***Get the current selection***

- On app load, obtain the current selection from the following endpoint: http://qeepfake.herokuapp.com/selectedPark

***Set the current selection***

- When the user has made their selection and clicks "Confirm", then submit the user's selection to the following endpoint: http://qeepfake.herokuapp.com/selectedPark

## 3. (Optional) Any additional improvement

Feel free to add anything else you want, but don't stray too far from the spec, and please cap your effort at 1 hour.
