import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { getItems, Item } from './assets/js/api';
import { CatalogPage } from './pages/catalog/CatalogPage';
import ProductDetail from './pages/detail/ProductDetails';
import { ItemContext } from './ItemContext';
import { Header } from './components/header/Header';

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

function App() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await getItems();
        const fetchedItems: Item[] = response.data.content;
        setItems(fetchedItems);
      } catch (error) {
        console.error(error);
      }
    }

    fetchItems();
  }, []);

  const updateItem = (itemId: string, like: boolean) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === itemId ? { ...item, like } : item
      );
      return updatedItems;
    });
  };

  return (
    <div>
      {items.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ItemContext.Provider value={{ items, updateItem }}>
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<CatalogPage />} />
              </Route>
              <Route path="/item/:id" element={<Layout />}>
                <Route index element={<ProductDetail />} />
              </Route>
            </Routes>
          </Router>
        </ItemContext.Provider>
      )}
    </div>
  );
}

export default App;
