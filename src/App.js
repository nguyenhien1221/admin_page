import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PublicRoutes } from './pages/Routes';
import DefaultLayout from './pages/Layout/DefaultLayout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {PublicRoutes.map((route, index) => {
            const Layout = route.layout || DefaultLayout
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
