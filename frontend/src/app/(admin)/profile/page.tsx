import { Activity, Wallet } from 'lucide-react';

export default function ProfilePage() {
    return (
        <div className="max-w-7xl mx-auto space-y-6 animate-fade-in-up text-black p-4">
            {/* Konten Profil Umum */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Informasi Akun</h2>
                <div className="space-y-4 text-sm sm:text-base">
                    <div className="flex flex-col md:flex-row md:items-center gap-2">
                        <span className="font-semibold text-gray-700 dark:text-gray-300 w-40">Nama:</span>
                        <span className="text-gray-900 dark:text-white">John Doe</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-2">
                        <span className="font-semibold text-gray-700 dark:text-gray-300 w-40">Email:</span>
                        <span className="text-gray-900 dark:text-white">
                            <a href="mailto:johndoe@example.com" className="hover:text-blue-500 transition-colors">johndoe@example.com</a>
                        </span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-2">
                        <span className="font-semibold text-gray-700 dark:text-gray-300 w-40">Peran:</span>
                        <span className="text-gray-900 dark:text-white">Web3 Developer</span>
                    </div>
                </div>
            </div>

            {/* Konten Web3 / Wallet */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 mb-4">
                    <Wallet className="w-5 h-5 text-blue-500" />
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">Informasi Web3 & Aset</h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base">
                    {/* Alamat Wallet */}
                    <div className="flex flex-col md:flex-row md:items-center gap-2">
                        <span className="font-semibold text-gray-700 dark:text-gray-300 w-40">Alamat Wallet:</span>
                        <span className="text-gray-900 dark:text-white font-mono bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-md break-all">
                            0x71C7656EC7ab88b098defB751B7401B5f6d8976F
                        </span>
                    </div>

                    {/* Jaringan */}
                    <div className="flex flex-col md:flex-row md:items-center gap-2">
                        <span className="font-semibold text-gray-700 dark:text-gray-300 w-40">Jaringan Aktif:</span>
                        <div className="flex items-center gap-2 text-gray-900 dark:text-white">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            Ethereum Mainnet
                        </div>
                    </div>

                    {/* Saldo Native */}
                    <div className="flex flex-col md:flex-row md:items-center gap-2">
                        <span className="font-semibold text-gray-700 dark:text-gray-300 w-40">Saldo (ETH):</span>
                        <span className="text-gray-900 dark:text-white font-medium">
                            2.45 ETH
                        </span>
                    </div>

                    {/* Total Token Supply */}
                    <div className="flex flex-col md:flex-row md:items-center gap-2">
                        <span className="font-semibold text-gray-700 dark:text-gray-300 w-40">Total Token Supply:</span>
                        <span className="text-gray-900 dark:text-white">
                            10,000,000 <span className="font-bold text-blue-600 dark:text-blue-400">TKN</span>
                        </span>
                    </div>

                    {/* Standar Smart Contract */}
                    <div className="flex flex-col md:flex-row md:items-center gap-2">
                        <span className="font-semibold text-gray-700 dark:text-gray-300 w-40">Standar Token:</span>
                        <span className="text-gray-900 dark:text-white flex items-center gap-2">
                            <Activity className="w-4 h-4 text-gray-500" />
                            ERC-20 / ERC-8004
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}