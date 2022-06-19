import { Link } from "react-router-dom";

export default function TodoList() {
  type IFruit = {
    fruitId: number,
    fruitName: string,
    fruitType: "IMPORT" | "LOCAL",
    stock: number,
  };
  // eslint-disable-next-line no-unused-vars
  const fruits: IFruit[] = [
    {
      fruitId: 1,
      fruitName: "Apel",
      fruitType: "IMPORT",
      stock: 10,
    },
    {
      fruitId: 2,
      fruitName: "Kurma",
      fruitType: "IMPORT",
      stock: 20,
    },
    {
      fruitId: 3,
      fruitName: "apel",
      fruitType: "IMPORT",
      stock: 50,
    },
    {
      fruitId: 4,
      fruitName: "Manggis",
      fruitType: "LOCAL",
      stock: 100,
    },
    {
      fruitId: 5,
      fruitName: "Jeruk Bali",
      fruitType: "LOCAL",
      stock: 10,
    },
    {
      fruitId: 5,
      fruitName: "KURMA",
      fruitType: "IMPORT",
      stock: 20,
    },
    {
      fruitId: 5,
      fruitName: "Salak",
      fruitType: "LOCAL",
      stock: 150,
    },
  ];

  const Imports = fruits.filter((item) => item.fruitType === "IMPORT");
  const ResultImport = Imports.length;
  const Locals = fruits.filter((item) => item.fruitType === "LOCAL");
  const ResultLocals = Locals.length;
  return (
    <div>
      <Link to="/case2" element =""><button>Case 2</button></Link>
      <Link to="/case3" element =""><button>Case 3</button></Link>
      <p>1. Buah apa saja yang dimiliki Andi? (fruitName)</p>
      <ul>
        {fruits.map((element,index) => (
          <li key ={index}>{element.fruitName}</li>
        ))}
      </ul>

      <p>
        2. Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah
        (fruitType). Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja
        di masing-masing wadah? 3. Berapa total stock buah yang ada di
        masing-masing wadah?
      </p>
      <p>Import membutuhkan {ResultImport} wadah</p>
      <ul>
        {fruits.map(
          (element,index) =>
            element.fruitType === "IMPORT" && (
              <li key ={index}>
                {element.fruitName} stock {element.stock} buah
              </li>
            )
        )}
      </ul>
      <p>LOCAL membutuhkan {ResultLocals} wadah</p>
      <ul>
        {fruits.map(
          (element,index) =>
            element.fruitType === "LOCAL" && (
              <li key ={index}>
                {element.fruitName} stock {element.stock} buah
              </li>
            )
        )}
      </ul>
      <p>4. Apakah ada komentar terkait kasus di atas?</p>
      <ul>
        <li>
          Menurut saya kasus menjual beraneka ragam buah adalah merapikan
          data-datanya yang berdasarkan buah Import dan buah LOCAL serta dengan
          Stock buah juga
        </li>
      </ul>
    </div>
  );
}
