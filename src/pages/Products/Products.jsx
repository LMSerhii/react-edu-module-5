import { useSearchParams } from 'react-router-dom';
import { useMemo, useEffect, useState } from 'react';

import { SearchBar } from '../../components/SearchBar/SearchBar';
import { getProductByName } from '../../fakeApi';

export const Products = () => {
  const [searchParams] = useSearchParams();

  // const name = searchParams.get('name');
  // const color = searchParams.get('color');
  // const maxPrice = searchParams.get('maxPrice');

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { name, maxPrice, color } = params;

  console.log(color);
  return (
    <div>
      <h1>Products</h1>
      <SearchBar />
      <p>Name: {name}</p>
      <p>Color: {color}</p>
      <p>Maximum price: {maxPrice}</p>
    </div>
  );

  // const [user, setUser] = useState();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const username = searchParams.get('username');

  // useEffect(() => {
  //   if (username === '') return;

  //   const fetchUser = async () => {
  //     const user = await getProductByName(username);
  //     setUser(user.id);
  //   };

  //   fetchUser();
  // }, [username]);

  // const handleSubmit = evt => {
  //   evt.preventDefault();
  //   const form = evt.currentTarget;
  //   setSearchParams({ username: form.elements.username.value });
  //   form.reset();
  // };

  // return (
  //   <div>
  //     <h1>Products</h1>
  //     <form onSubmit={handleSubmit}>
  //       <input type="text" name="username" />
  //       <button type="submit">Search</button>
  //     </form>
  //     {user && <p>Hello: {user}</p>}
  //   </div>
  // );
};
