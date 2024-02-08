LIVE PREVIEW: https://charts-iota-wine.vercel.app/

Overview:
This website provides a comprehensive platform for users to explore and track cryptocurrency listings in real-time. Built using Vue.js, Vite, and TailwindCSS, along with other complementary tools and libraries, it offers a modern and efficient user experience.

Features Implemented:
Infinite Scrolling and Pagination:

Users can effortlessly navigate through extensive crypto listings thanks to the implementation of both infinite scrolling and pagination. This ensures a smooth browsing experience without overwhelming the interface with large datasets.
Partial Caching with sessionStorage:

Data caching is intelligently managed using sessionStorage based on predefined logic. This optimization strategy enhances performance by reducing server requests and striking a balance between data freshness and efficiency.
Real-Time Data Updates:

Timers are set to periodically refresh data, ensuring users are promptly informed of any changes in crypto prices. Real-time updates are visually highlighted with brief color changes (green for increases, red for decreases) and corresponding icons, providing instant feedback.
Favorites List Management:

Users can personalize their experience by selecting specific coins and adding them to their favorites list. Utilizing Pinia for state management, user preferences are efficiently stored, offering a seamless and customized browsing experience.
Loading Spinner:

A loading spinner is displayed to users while the data is being fetched. This provides visual feedback to indicate that the website is processing the request and ensures a smoother user experience.

Chart.js Integration:

Charts are generated using Chart.js to visualize cryptocurrency data trends. Initially, a chart is loaded based on the 24-hour format, providing users with a quick overview of price fluctuations.
Coin Details Navigation:

Clicking on a specific coin navigates users to the coin details page, where comprehensive information about the selected coin is displayed. Here, users can customize the time period for the chart to update, allowing for more detailed analysis of price movements over different intervals.

Technologies Used:

- Vue.js
- Vite
- TailwindCSS
- Pinia
- Vue Router
- Chart JS
- Axios
- Flowbite Vue
