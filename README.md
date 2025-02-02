## 🔧 Setting up the OpenWeatherMap API Key

### 📝 Steps to Set Up:
1. **Sign up for an account on OpenWeatherMap**  
   Go to [OpenWeatherMap](https://openweathermap.org/) and create an account if you don't have one already.

2. **Get your API Key**  
   After logging in, go to [API Keys](https://home.openweathermap.org/api_keys) to request your **API Key** for fetching data.

3. **Configure in your project**  
   Open the `.env` file in your project, then insert your received **API Key** into the `VITE_APP_ID` variable like this:

   ```
   VITE_APP_ID="Your_API" // Place your API Key here