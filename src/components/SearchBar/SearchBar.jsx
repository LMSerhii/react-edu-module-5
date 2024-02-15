import { useSearchParams } from 'react-router-dom';

export const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get('name');

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={evt => setSearchParams({ name: evt.target.value })}
      />
    </div>
  );
};
