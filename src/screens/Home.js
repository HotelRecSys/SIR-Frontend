import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Box, CountryCard, Header, PredictCard } from "../components";
import { connect } from 'react-redux';

const countryList = [
  { country: "Turkey", hotelCount: 150, image: "eifell" },
  { country: "America", hotelCount: 1.4, image: "eifell" },
  { country: "Rusia", hotelCount: 2.15, image: "eifell" },
  { country: "England", hotelCount: 50, image: "eifell" },
  { country: "China", hotelCount: 3.12, image: "eifell" },
  { country: "France", hotelCount: 4.52, image: "eifell" },
  { country: "Indonesia", hotelCount: 3.12, image: "eifell" },
  { country: "Japonia", hotelCount: 4.52, image: "eifell" },
];

const predictData = [
  {
    id: 1550823,
    name: "Le Grand Hotel Cannes",
    score: 7.9,
    city: "Cannes",
    country: "France",
    url: "https://www.booking.com/hotel/fr/grand-cannes.html",
    address:
      "45 boulevard de la Croisette, Cannes City-Centre, 06400 Cannes, France",
    img: "https://cf.bstatic.com/images/hotel/max1024x768/210/210081185.jpg",
  },
  {
    id: 96264,
    name: "Domaine De Manville",
    score: 9.2,
    city: "Les Baux-de-Provence",
    country: "France",
    url: "https://www.booking.com/hotel/fr/domaine-de-manville.html",
    address: "13520 Les Baux-de-Provence, 13520 Les Baux-de-Provence, France",
    img: "https://cf.bstatic.com/images/hotel/max1024x768/343/34388413.jpg",
  },
  {
    id: 103216,
    name: "Golden Tulip Valdys Resort Roscoff",
    score: 7.5,
    city: "Roscoff",
    country: "France",
    url: "https://www.booking.com/hotel/fr/thalasstonic-roscoff.html",
    address: "16 rue Victor Hugo, 29680 Roscoff, France",
    img: "https://cf.bstatic.com/images/hotel/max1024x768/385/38598906.jpg",
  },
  {
    id: 1024568,
    name: "Résidence Néméa L'Aigle Bleu",
    score: 7.2,
    city: "Briançon",
    country: "France",
    url: "https://www.booking.com/hotel/fr/residence-l-aigle-bleu-briancon.html",
    address: "3 Avenue René Froger, 05100 Briançon, France",
    img: "https://cf.bstatic.com/images/hotel/max1024x768/806/80688960.jpg",
  },
  {
    id: 475461,
    name: "Hotel Le Royal Lyon - MGallery",
    score: 8.6,
    city: "Lyon",
    country: "France",
    url: "https://www.booking.com/hotel/fr/le-royal-lyon.html",
    address: "20 Place Bellecour, 2nd arr., 69002 Lyon, France",
    img: "https://cf.bstatic.com/images/hotel/max1024x768/238/238386132.jpg",
  },
  {
    id: 2421611,
    name: "Hotel Vendome",
    score: 8.2,
    city: "Tours",
    country: "France",
    url: "https://www.booking.com/hotel/fr/vendome-tours.html",
    address: "24 Rue Roger Salengro, 37000 Tours, France",
    img: "https://cf.bstatic.com/images/hotel/max1024x768/158/15889789.jpg",
  },
  {
    id: 9777544,
    name: "Hotel Avenue Lodge",
    score: 9.2,
    city: "Val-d'Isère",
    country: "France",
    url: "https://www.booking.com/hotel/fr/avenue-lodge-val-d-isere.html",
    address: "Avenue Olympique, 73150 Val-d'Isère, France",
    img: "https://cf.bstatic.com/images/hotel/max1024x768/176/176582949.jpg",
  },
  {
    id: 3087585,
    name: "Hotel Pashmina Le Refuge",
    score: 9.6,
    city: "Val Thorens",
    country: "France",
    url: "https://www.booking.com/hotel/fr/pashmina-le-refuge.html",
    address: "Place du Slalom, 73440 Val Thorens, France",
    img: "https://cf.bstatic.com/images/hotel/max1024x768/635/63562440.jpg",
  },
  {
    id: 1499385,
    name: "Les Chambres du Prieuré",
    score: 9.4,
    city: "Pézenas",
    country: "France",
    url: "https://www.booking.com/hotel/fr/les-chambres-de-bebian.html",
    address:
      "Route de Nizas Prieuré de Saint-Jean de Bébian, 34120 Pézenas, France",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/175890098.webp?k=c513fdda422a948098653ee13a64be3cc292a1b010aa62985a8bb17ecd466b20&o=",
  },
  {
    id: 2329608,
    name: "Le Mas Candille",
    score: 8.6,
    city: "Mougins",
    country: "France",
    url: "https://www.booking.com/hotel/fr/le-mas-candille.html",
    address: "boulevard Clément Rebuffel, 06250 Mougins, France",
    img: "https://cf.bstatic.com/images/hotel/max1024x768/121/121747340.jpg",
  },
  {
    id: 308927,
    name: "Hotel L'Ensoleillé",
    score: 9.5,
    city: "La Chapelle-dʼAbondance",
    country: "France",
    url: "https://www.booking.com/hotel/fr/l-ensoleilla-c.html",
    address: "Chef Lieu, 74360 La Chapelle-dʼAbondance, France",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/64449344.webp?k=938684e174139193fc602139bb7d45248dff829b98f9c334b341d06bd7f53213&o=",
  },
  {
    id: 2303174,
    name: "Hipotel Paris Voltaire Bastille",
    score: 7,
    city: "Paris",
    country: "France",
    url: "https://www.booking.com/hotel/fr/residence-voltaire.html",
    address: "132 boulevard Voltaire, 11th arr., 75011 Paris, France",
    img: "https://cf.bstatic.com/images/hotel/max1024x768/379/37967344.jpg",
  },
  {
    id: 70893,
    name: "Résidence Villa Romana",
    score: 8.5,
    city: "Propriano",
    country: "France",
    url: "https://www.booking.com/hotel/fr/residence-villa-romana.html",
    address: "Quartier St Joseph, 20110 Propriano, France",
    img: "https://cf.bstatic.com/images/hotel/max1024x768/206/206625948.jpg",
  },
  {
    id: 2424706,
    name: "Ace Hotel Roanne",
    score: 8.4,
    city: "Mably",
    country: "France",
    url: "https://www.booking.com/hotel/fr/ace-ha-tel-roanne.html",
    address:
      "1 Rue Edouard Branly - Parc de la Demi Lieue, 42300 Mably, France",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/266965240.webp?k=05944761f6dc7736e3dc9e712d8dd1139ce380b90d342d179072d482ec07ef09&o=",
  },
  {
    id: 959733,
    name: "La Tramontane",
    score: 9.1,
    city: "Saintes-Maries-de-la-Mer",
    country: "France",
    url: "https://www.booking.com/hotel/fr/la-tramontane.html",
    address: "94 Chemin Bas de Dromar, 13460 Saintes-Maries-de-la-Mer, France",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/252771911.webp?k=930856895b02af7080bcb138119ebd4605fd5513318e6a366becf7731458491b&o=",
  },
  {
    id: 837806,
    name: "Privilège Appart-Hôtel Domaine De Mai",
    score: 8.6,
    city: "Mougins",
    country: "France",
    url: "https://www.booking.com/hotel/fr/lagrange-prestige-apparthotel-domaine-de-mai.html",
    address: "29 Chemin du Château, 06250 Mougins, France",
    img: "https://cf.bstatic.com/images/hotel/max1024x768/110/110351497.jpg",
  },
  {
    id: 1514417,
    name: "InterContinental Marseille - Hotel Dieu",
    score: 8.8,
    city: "Marseille",
    country: "France",
    url: "https://www.booking.com/hotel/fr/marseille-dieu.html",
    address: "1 Place Daviel, 13002 Marseille, France",
    img: "https://cf.bstatic.com/images/hotel/max1024x768/245/245746699.jpg",
  },
  {
    id: 6407866,
    name: "Palais Saleya Boutique hôtel",
    score: 9.3,
    city: "Nice",
    country: "France",
    url: "https://www.booking.com/hotel/fr/palais-saleya.html",
    address: "21 rue du marché, 06300 Nice, France",
    img: "https://cf.bstatic.com/images/hotel/max1024x768/976/97614513.jpg",
  },
  {
    id: 147636,
    name: "Campanile Clermont Ferrand Le Brezet - La Pardieu",
    score: 7.9,
    city: "Clermont-Ferrand",
    country: "France",
    url: "https://www.booking.com/hotel/fr/campanile-clermont-ferrand-le-brezet.html",
    address: "44 Rue Claude Guichard, 63000 Clermont-Ferrand, France",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/66359398.webp?k=ac0e246d3885f2b2eb907ece3613678ef93bc8562463b77496433460028ccb16&o=",
  },
  {
    id: 8535168,
    name: "Hôtel Maât Etoile",
    score: 8.1,
    city: "Paris",
    country: "France",
    url: "https://www.booking.com/hotel/fr/wagram.html",
    address: "5 rue Poncelet, 17th arr., 75017 Paris, France",
    img: "https://cf.bstatic.com/images/hotel/max1024x768/239/239123546.jpg",
  },
  {
    id: 3134886,
    name: "Radisson Blu Hotel Paris, Marne-la-Vallée",
    score: 8.3,
    city: "Magny-le-Hongre",
    country: "France",
    url: "https://www.booking.com/hotel/fr/hoteldisneyresort.html",
    address: "Allée De La Mare Houleuse, 77700 Magny-le-Hongre, France",
    img: "https://cf.bstatic.com/images/hotel/max1024x768/185/185259693.jpg",
  },
  {
    id: 1346910,
    name: "Vacancéole - Le Fonserane - Béziers Sud",
    score: 6.1,
    city: "Béziers",
    country: "France",
    url: "https://www.booking.com/hotel/fr/le-fonserane.html",
    address: "190 rue des Christols, 34500 Béziers, France",
    img: "https://cf.bstatic.com/images/hotel/max1024x768/265/265606419.jpg",
  },
];

function Home({ navigation, user }) {
  return (
    <Box
      flex={1}
      as={SafeAreaView}
      pt={10}
      pb={5}
      px={10}
      forceInset={{ bottom: "never", vertical: "never" }}
    >
      <ScrollView>
        <Header
          title={"Welcome"}
          subtitle={`${user?.name || 'Simge Tiraş'}, explore the hotels on the world with us.`}
        />

        <Box mx={15}>
          <Text fontSize={24} color="#191B32" mt={15} fontWeight="bold">
            {"For you"}
          </Text>
          <ScrollView horizontal>
            {predictData.map((item, index) => (
              <PredictCard item={item} key={index} navigation={navigation} />
            ))}
          </ScrollView>
        </Box>

        <Box flex={1} mx={15}>
          <Text fontSize={24} color="#191B32" mt={10} fontWeight="bold">
            {"Countries"}
          </Text>

          {countryList.map((item, index) => (
            <CountryCard item={item} key={index} navigation={navigation} />
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
}

const mapStateToProps = ({ authentication }) => ({
  user : authentication.user,
});

export default connect(mapStateToProps, {})(Home);

