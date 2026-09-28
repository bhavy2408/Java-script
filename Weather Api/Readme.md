# 🌤️ Weather App

A simple and responsive **Weather App** built using **HTML, CSS, and JavaScript**.
The application uses the **OpenWeatherMap API** to fetch and display real-time weather information for any city.

## 📌 Project Overview

This Weather App allows users to:

* 🔍 Search for any city
* 🌡️ View current temperature
* 🌤️ View weather conditions
* 💧 Check humidity
* 💨 Check wind speed
* 🌡️ Check feels-like temperature
* ⬇️ View minimum temperature
* ⬆️ View maximum temperature
* 🌍 View country information
* 🖼️ Display the current weather icon
* ⚠️ Show errors for invalid cities
* ⏳ Display a loading message while fetching data
* 📱 Work on desktop and mobile devices

---

## 🛠️ Technologies Used

| Technology         | Purpose                            |
| ------------------ | ---------------------------------- |
| HTML5              | Website structure                  |
| CSS3               | Styling and responsive design      |
| JavaScript         | Application logic and API handling |
| OpenWeatherMap API | Weather data                       |
| Fetch API          | Getting weather data from API      |

---

## 📂 Project Structure

```text
Weather-App/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contains the structure of the Weather App, including:

* Search input
* Search button
* Weather card
* Weather icon
* Temperature
* Weather description
* Weather details

### `style.css`

Contains the styling for:

* Weather container
* Search box
* Weather card
* Weather details
* Background gradient
* Buttons
* Responsive layout

### `script.js`

Contains the JavaScript functionality:

* DOM selection
* API request
* Weather data processing
* Error handling
* Loading state
* Search button event
* Enter-key search

---

## 🔑 API Used

This project uses the **OpenWeatherMap Current Weather Data API**.

API endpoint:

```text
https://api.openweathermap.org/data/2.5/weather
```

The request uses:

```text
q       → City name
appid   → API key
units   → metric
```

Example:

```text
https://api.openweathermap.org/data/2.5/weather?q=Surat&appid=YOUR_API_KEY&units=metric
```

> ⚠️ Do not publish your real API key in a public GitHub repository. For a public project, use an environment variable or a backend/server-side solution.

---

## ⚙️ How It Works

### 1. User enters a city

The user enters a city name in the search box.

Example:

```text
Surat
```

### 2. JavaScript gets the city

```javascript
const city = cityInput.value.trim();
```

The `trim()` method removes unnecessary spaces.

### 3. API request is sent

The `fetch()` function sends a request to OpenWeatherMap.

```javascript
const response = await fetch(URL);
```

### 4. API response is checked

```javascript
if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
}
```

If the city is invalid or another API error occurs, the error message is displayed.

### 5. Weather data is received

```javascript
const data = await response.json();
```

The JSON response contains information such as:

```text
City name
Country
Temperature
Humidity
Wind speed
Weather condition
Minimum temperature
Maximum temperature
Feels-like temperature
Weather icon
```

### 6. Data is displayed

For example:

```javascript
temperature.textContent = `${Math.round(data.main.temp)}°C`;
```

The temperature received from the API is displayed on the page.

---

## 🌡️ Weather Information Displayed

The application displays:

### City

```javascript
data.name
```

### Country

```javascript
data.sys.country
```

### Temperature

```javascript
data.main.temp
```

### Weather Description

```javascript
data.weather[0].description
```

### Humidity

```javascript
data.main.humidity
```

### Wind Speed

```javascript
data.wind.speed
```

### Feels Like

```javascript
data.main.feels_like
```

### Minimum Temperature

```javascript
data.main.temp_min
```

### Maximum Temperature

```javascript
data.main.temp_max
```

### Weather Icon

```javascript
data.weather[0].icon
```

---

## 🔍 Search Features

The app supports two ways to search.

### Search Button

Click the **Search** button after entering a city.

### Enter Key

Users can also press **Enter** to search.

```javascript
cityInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        searchBtn.click();
    }
});
```

---

## ⚠️ Error Handling

If the user doesn't enter a city:

```text
Please enter a city name
```

If an invalid city is entered, the application displays the error returned by the API.

For example:

```text
city not found
```

---

## ⏳ Loading State

When weather data is being fetched:

```javascript
loading.style.display = "block";
```

After the request finishes:

```javascript
loading.style.display = "none";
```

This gives the user feedback while waiting for the API response.

---

## 📱 Responsive Design

The Weather App is responsive and works on different screen sizes.

For smaller screens:

```css
@media (max-width: 500px)
```

The search box changes from horizontal to vertical layout, and weather details are displayed in a single column.

---

## 🚀 How to Run the Project

### Step 1: Download or clone the project

Place all files in the same folder.

### Step 2: Check the files

Make sure you have:

```text
index.html
style.css
script.js
README.md
```

### Step 3: Add your API key

Open `script.js` and replace:

```javascript
YOUR_API_KEY
```

with your OpenWeatherMap API key.

### Step 4: Open the project

Open `index.html` in your browser.

You can also use **VS Code + Live Server**.

---

## 🧪 Example Searches

Try searching for:

```text
Surat
Mumbai
Delhi
Ahmedabad
London
New York
Tokyo
Dubai
```

---

## 📸 Main Features

```text
🌤️ Weather App
       │
       ├── 🔍 City Search
       │
       ├── 🌡️ Temperature
       │
       ├── 🌤️ Weather Condition
       │
       ├── 💧 Humidity
       │
       ├── 💨 Wind Speed
       │
       ├── 🌡️ Feels Like
       │
       ├── ⬇️ Minimum Temperature
       │
       ├── ⬆️ Maximum Temperature
       │
       └── 🖼️ Weather Icon
```

---

## 📚 Concepts Learned

This project demonstrates several important JavaScript concepts:

* DOM Manipulation
* `getElementById()`
* Event Listeners
* Functions
* `async` / `await`
* `fetch()`
* REST API
* JSON
* Template Literals
* `try...catch...finally`
* Error Handling
* Conditional Statements
* `textContent`
* Input Validation
* Responsive CSS

---

## 🔮 Future Improvements

The project can be improved by adding:

* 📍 Current location weather
* 📅 5-day weather forecast
* 🌙 Dark mode
* 🌡️ Celsius/Fahrenheit switch
* 🕐 Local time of the selected city
* 🌅 Sunrise and sunset
* 🌧️ Hourly forecast
* ⭐ Favorite cities
* 💾 LocalStorage
* 📊 Weather charts
* 🎨 Dynamic background based on weather

---

## 👨‍💻 Author

**Bhavy Ladva**

B.Sc. IT Student
Full Stack Development & Data Science Learner

---

## 📄 License

This project is created for **learning and educational purposes**.

Weather data is provided by **OpenWeatherMap**.
