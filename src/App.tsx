import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from './store/store';
import { fetchItems, updateItem, selectItems } from './store/slice/itemsSlice';
import { CatalogPage } from './pages/catalog/CatalogPage';
import ProductDetail from './pages/detail/ProductDetails';
import { Header } from './components/header/Header';
import { ITEM_CARD } from './assets/js/routes';

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

function App() {
  const items = useAppSelector(selectItems);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleUpdateItem = (itemId: string, like: boolean) => {
    dispatch(updateItem({ itemId, like }));
  };

  return (
    <div>
      {items.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<CatalogPage />} />
              <Route path={ITEM_CARD} element={<ProductDetail />} />
            </Route>
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
