
const MyProfile = () => {
    return (
        <div className="max-w-md mx-auto p-6 bg-white">
            <div className="text-center mb-6 mt-5">
                <img
                    src="https://i.ibb.co/WcfDWXY/Untitled-design-11.png"
                    alt="Profile Picture"
                    className="w-24 h-24 rounded-full mx-auto mb-2"
                />
                <h1 className="text-xl font-bold">Sebastian 🚀</h1>
            </div>
            <div className="mb-4">
                <h2 className="text-lg font-semibold">Total Botol Terkumpul</h2>
                <p className="text-lg">100 Botol</p>
            </div>
            <div className="mb-4">
                <h2 className="text-lg font-semibold">Utilitas yang Dimiliki</h2>
                <p className="text-lg">200 BTL</p>
            </div>
            <div className="mb-4">
                <h2 className="text-lg font-semibold">Koin KLO yang Dimiliki</h2>
                <p className="text-lg">1000 KLO</p>
            </div>
                <div className="mb-4 mt-5">
                    <h2 className="text-lg font-semibold">NFT yang Dimiliki</h2>
                    <div className="flex space-x-4 mt-6">
                        <img
                            src="https://i.ibb.co/WcfDWXY/Untitled-design-11.png"
                            alt="NFT 1"
                            className="w-16 h-16 rounded-full"
                        />
                        <img
                            src="https://i.ibb.co/WcfDWXY/Untitled-design-11.png"
                            alt="NFT 2"
                            className="w-16 h-16 rounded-full"
                        />
                        <img
                            src="https://i.ibb.co/WcfDWXY/Untitled-design-11.png"
                            alt="NFT 3"
                            className="w-16 h-16 rounded-full"
                        />
                        <img
                            src="https://i.ibb.co/WcfDWXY/Untitled-design-11.png"
                            alt="NFT 4"
                            className="w-16 h-16 rounded-full"
                        />
                    </div>
                </div>
            <button
                className="w-full py-2 px-4 bg-buttonPrimary text-white rounded-md hover:bg-primary-600 transition duration-300"
                onClick={() => {
                    // Logika untuk logout
                }}
            >
                Logout
            </button>
        </div>
    );
};

export default MyProfile;