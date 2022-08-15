import React from "react";

const dashboardPromise = import(
    /* webpackChunkName: 'Dashboard' */ "./pages/Dashboard/Dashboard"
);
const Dashboard = React.lazy(() => dashboardPromise);

function App() {
    return (
        <div className="App">
            <React.Suspense fallback={null}>
                <Dashboard />
            </React.Suspense>
        </div>
    );
}

export default App;
