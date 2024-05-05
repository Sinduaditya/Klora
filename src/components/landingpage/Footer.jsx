import  {Link} from 'react-router-dom';
const menus = [
  {
    id: 1,
    name: "krypto",
    items: [
      { id: 1, name: "home", href: "/" },
      { id: 2, name: "about", href: "/about" },
      { id: 3, name: "buy nfts", href: "/buy-nfts" },
      { id: 4, name: "sell nfts", href: "/sell-nfts" },
    ],
  },
  {
    id: 2,
    name: "market",
    items: [
      { id: 1, name: "browse nfts", href: "/browse-nfts" },
      { id: 2, name: "buy nfts", href: "/buy-nfts" },
      { id: 3, name: "sell nfts", href: "/sell-nfts" },
    ],
  },
  {
    id: 3,
    name: "contact",
    items: [
      { id: 1, name: "email", href: "/email" },
      { id: 2, name: "linkedin", href: "/linkedin" },
      { id: 3, name: "instagram", href: "/instagram" },
      { id: 3, name: "twitter", href: "/twitter" },
    ],
  },
];

function Footer() {
  return (
     <>
      <h1 className="text-center text-4xl">Footer</h1>
     </>
  );
}

export default Footer;
