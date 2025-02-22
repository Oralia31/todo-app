import React from "react";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        //Aqui se simula el tiempo de espera
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const item = window.localStorage.getItem(key);
        setStoredValue(item ? JSON.parse(item) : initialValue);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [key, JSON.stringify(initialValue)]);


  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
      setError(true)
    }
  }

  return { storedValue, setValue, loading, error };
}

export { useLocalStorage };
