import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getItems, Item } from './assets/js/api';
import { CatalogPage } from './pages/catalog/CatalogPage';
import ProductDetail from './pages/detail/ProductDetails';
import { ItemContext } from './ItemContext';
import { Header } from './components/header/Header';

function App() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await getItems();
        const fetchedItems: Item[] = response.data.content;
        console.log(fetchedItems);
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
        <>
          <Header />
          <ItemContext.Provider value={{ items, updateItem }}>
            <Router>
              <Routes>
                <Route path="/item" element={<CatalogPage />} />
                <Route path="/item/:id" element={<ProductDetail />} />
              </Routes>
            </Router>
          </ItemContext.Provider>
        </>
      )}
    </div>
  );
}

export default App;
