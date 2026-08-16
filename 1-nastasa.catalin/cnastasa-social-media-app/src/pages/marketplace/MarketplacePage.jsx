import styles from "./MarketplacePage.module.scss";
import itemCar from "../../assets/marketplace/item1-car.jpg";
import itemApartment from "../../assets/marketplace/item2-apartment.jpg";
import itemLaptop from "../../assets/marketplace/item3-laptop.jpg";
import itemSofa from "../../assets/marketplace/item4-sofa.jpg";
import itemJacket from "../../assets/marketplace/item5-jacket.jpg";
import itemSneakers from "../../assets/marketplace/item6-sneakers.jpg";
import itemBicycle from "../../assets/marketplace/item7-bicycle.jpg";
import itemPhone from "../../assets/marketplace/item8-phone.jpg";

const categories = [
  "Vehicule", "Locuințe", "Electronice", "Mobilă", "Îmbrăcăminte", "Sport"
];

const items = [
  { id: 1, image: itemCar, title: "Autoturism", price: "8.500 €" },
  { id: 2, image: itemApartment, title: "Apartament 2 camere", price: "450 €/lună" },
  { id: 3, image: itemLaptop, title: "Laptop", price: "1.200 lei" },
  { id: 4, image: itemSofa, title: "Canapea", price: "600 lei" },
  { id: 5, image: itemJacket, title: "Geacă", price: "150 lei" },
  { id: 6, image: itemSneakers, title: "Adidași", price: "220 lei" },
  { id: 7, image: itemBicycle, title: "Bicicletă", price: "900 lei" },
  { id: 8, image: itemPhone, title: "Telefon", price: "1.800 lei" }
];

const MarketplacePage = () => {
  return (
    <div className={styles.marketplacePage}>
      <h1>Marketplace</h1>
      <p>Cumpără și vinde în zona ta.</p>

      <div className={styles.categories}>
        {categories.map((category) => (
          <span key={category} className={styles.categoryChip}>{category}</span>
        ))}
      </div>

      <div className={styles.placeholderGrid}>
        {items.map((item) => (
          <div key={item.id} className={styles.itemCard}>
            <img src={item.image} alt={item.title} className={styles.itemThumbnail} />
            <div className={styles.itemInfo}>
              <h3>{item.title}</h3>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketplacePage;
