import categories from "./categories";

interface Props {
  setSelected: (selected: string) => void;
}

export default function ExpenseFilter({ setSelected }: Props) {
  return (
    <select
      name="filter"
      id="filter"
      onChange={(event) => setSelected(event.target.value)}
      className="form-select"
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}
