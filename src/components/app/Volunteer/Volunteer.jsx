import  { useState } from 'react';

const userData = {
    id: 1,
    name: 'John Doe',
    walletAddress: '0xabc123',
    totalBottles: 50,
    isVerified: false,
};

export default function Volunteer() {
    const [user, setUser] = useState(userData);
    const [showNotification, setShowNotification] = useState(false);

    const handleEditTotalBottles = (e) => {
        setUser({ ...user, totalBottles: e.target.value });
    };

    const handleVerify = () => {
        setUser({ ...user, isVerified: true });
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 3000); // hidden notif
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-semibold mb-4">List User</h1>
            <div className="bg-white p-4 rounded-md shadow-md">
                <div className="flex items-center mb-2">
                    <span className="mr-2">Name:</span>
                    <span className="font-semibold">{user.name}</span>
                </div>
                <div className="flex items-center mb-2">
                    <span className="mr-2">Wallet Address:</span>
                    <span className="font-semibold">{user.walletAddress}</span>
                </div>
                <div className="flex items-center mb-2">
                    <span className="mr-2">Total Bottles:</span>
                    <input
                        type="number"
                        value={user.totalBottles}
                        onChange={handleEditTotalBottles}
                        className="w-24 px-2 py-1 border rounded-md"
                    />
                </div>
                <div className="flex items-center gap-4 mb-2">
                    {user.isVerified ? (
                        <span className="text-green-500 font-semibold">Verified</span>
                    ) : (
                        <button
                            className="px-3 py-1 bg-blue-500 text-white rounded-md mr-2 hover:bg-blue-700"
                            onClick={handleVerify}
                        >
                            Verify
                        </button>
                    )}
                    <button className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-700">
                        Edit
                    </button>
                </div>
                {showNotification && (
                    <div className="bg-green-200 text-green-800 p-2 rounded-md mb-2">
                        User successfully verified!
                    </div>
                )}
            </div>
        </div>
    );
}
