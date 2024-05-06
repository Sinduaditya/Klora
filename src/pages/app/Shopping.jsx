import { useState } from "react";

function Shopping() {
    const [sortBy, setSortBy] = useState("default");

    const [searchQuery, setSearchQuery] = useState("");

    const handleChange = (e) => {
        setSortBy(e.target.value);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const sortProducts = () => {
        let filteredProducts = [...infoProduct];

        // Filter based on search query
        if (searchQuery.trim() !== "") {
            filteredProducts = filteredProducts.filter((product) =>
                product.productName
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
            );
        }

        // Sorting
        if (sortBy === "levelLowToHigh") {
            return filteredProducts.sort((a, b) => a.level - b.level);
        } else if (sortBy === "levelHighToLow") {
            return filteredProducts.sort((a, b) => b.level - a.level);
        } else {
            return filteredProducts;
        }
    };

    const infoProduct = [
        {
            id: 1,
            level: 3,
            productImages: "https://swiperjs.com/demos/images/nature-1.jpg",
            productName: "Tas NFT Berbentuk Daun",
            hargaToken: `0.0005`,
        },
        {
            id: 2,
            level: 6,
            productImages: "https://swiperjs.com/demos/images/nature-2.jpg",
            productName: "Tas NFT Bergambar sunset",
            hargaToken: `0.0011`,
        },
        {
            id: 3,
            level: 5,
            productImages: "https://swiperjs.com/demos/images/nature-3.jpg",
            productName: "Tas NFT Bergambar laut",
            hargaToken: `0.0009`,
        },
        {
            id: 4,
            level: 3,
            productImages: "https://swiperjs.com/demos/images/nature-4.jpg",
            productName: "Tas NFT musim semi",
            hargaToken: `0.0005`,
        },
        {
            id: 5,
            level: 7,
            productImages: "https://swiperjs.com/demos/images/nature-5.jpg",
            productName: "Tas NFT Matahari Terbit",
            hargaToken: `0.0013`,
        },
        {
            id: 6,
            level: 4,
            productImages: "https://swiperjs.com/demos/images/nature-6.jpg",
            productName: "Tas NFT Berbentuk Bunga",
            hargaToken: `0.0007`,
        },
        {
            id: 7,
            level: 1,
            productImages: "https://swiperjs.com/demos/images/nature-7.jpg",
            productName: "Tas NFT Berbentuk Bunga 2",
            hargaToken: `0.0001`,
        },
    ];

    return (
        <>
            <div>
                <section className="grid gap-4">
                    {/* Header, kata pembuka */}
                    <header className="grid gap-2">
                        <h2 className="text-3xl font-bold text-neutral-900">
                            Bag Shop
                        </h2>
                        <p className=" text-neutral-500">
                            Bag shop merupakan toko bag digital berbasis NFT.
                        </p>
                    </header>
                    {/* END Header, kata pembuka */}

                    <div className="flex gap-2 max-w-full items-center justify-between">
                        {/* Search Input */}
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="bg-white border border-neutral-200 rounded px-3 py-1 text-xs"
                        />
                        {/* Sorting Dropdown */}
                        <select
                            value={sortBy}
                            onChange={handleChange}
                            className="bg-white border border-neutral-200 rounded px-3 py-1 text-xs text-neutral-600"
                        >
                            <option value="default">Default</option>
                            <option value="levelLowToHigh">Low to High</option>
                            <option value="levelHighToLow">High to Low</option>
                        </select>
                    </div>

                    {/* List Produk */}
                    <ul className="grid gap-4 sm:grid-cols-2">
                        {sortProducts().map((produknya) => (
                            <li key={produknya.id}>
                                <a
                                    href="#"
                                    className="group block overflow-hidden"
                                >
                                    <img
                                        src={produknya.productImages}
                                        alt={produknya.name}
                                        className="size-44 object-cover transition duration-500 group-hover:scale-150"
                                    />

                                    <div className="relative bg-white pt-3">
                                        <p>Level {produknya.level}</p>
                                        <h3 className="text-xs text-neutral-700 group-hover:underline group-hover:underline-offset-4">
                                            {produknya.productName}
                                        </h3>

                                        <p className="mt-2">
                                            <span className="sr-only">
                                                {" "}
                                                Regular Price{" "}
                                            </span>

                                            <span className="tracking-wider text-neutral-900">
                                                {produknya.hargaToken}
                                            </span>
                                        </p>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </>
    );
}

export default Shopping;
