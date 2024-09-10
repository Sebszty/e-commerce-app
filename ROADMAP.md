## Road map
1. Use getServerSideProps - load categories and products
2. Efficiency tests - Reassure
3. Server-Side Cart State Management. Implement server-side storage and management of the shopping cart state via API.
     * Migrate cart state from client-side to server-side storage
     * Develop API endpoints for cart operations (add, remove, update quantities)
     * Implement user session handling for guest and authenticated users
     * Ensure data consistency and handle network-related edge cases

4. Mobile Layout UX Enhancements.Improve the user experience of the mobile layout, focusing on the placement of the Remove button.
     * Relocate the Remove button to span the full width below the item content
     * Adjust spacing and padding for better touch interaction
     * Ensure consistent styling across different mobile devices and screen sizes
     * Conduct user testing to validate the improved layout

5. Content Loading Optimizations.Implement a loading state and content preloading to enhance perceived performance.
     * Add a loading indicator for asynchronous operations
     * Implement skeleton screens for main content areas
     * Optimize image loading with lazy loading and preloading techniques
     * Prioritize critical content rendering
     * Implement background data fetching for smoother transitions

6. Migrate all component to storybook. Implement with Atomic Design pattern