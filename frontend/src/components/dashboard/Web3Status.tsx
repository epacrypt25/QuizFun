'use client'

import { useAccount, useReadContract, useWriteContract } from 'wagmi'
import { SCHOOL_SYSTEM_ADDRESS, SCHOOL_SYSTEM_ABI } from '@/config/contract'

export function Web3Status() {
  const { address, isConnected } = useAccount()
  const { writeContract, isPending } = useWriteContract()

  // Read Math score
  const { data: mathData, refetch: refetchMath } = useReadContract({
    address: SCHOOL_SYSTEM_ADDRESS,
    abi: SCHOOL_SYSTEM_ABI,
    functionName: 'riwayatUjianSiswa',
    args: address ? [address, "Matematika"] : undefined,
    query: { enabled: !!address }
  })

  // Read Science score
  const { data: scienceData, refetch: refetchScience } = useReadContract({
    address: SCHOOL_SYSTEM_ADDRESS,
    abi: SCHOOL_SYSTEM_ABI,
    functionName: 'riwayatUjianSiswa',
    args: address ? [address, "Sains"] : undefined,
    query: { enabled: !!address }
  })

  // Read Badge Math (ERC1155 ID 1)
  const { data: badgeMath } = useReadContract({
    address: SCHOOL_SYSTEM_ADDRESS,
    abi: SCHOOL_SYSTEM_ABI,
    functionName: 'balanceOf',
    args: address ? [address, BigInt(1)] : undefined,
    query: { enabled: !!address }
  })

  // Read Badge Science (ERC1155 ID 2)
  const { data: badgeScience } = useReadContract({
    address: SCHOOL_SYSTEM_ADDRESS,
    abi: SCHOOL_SYSTEM_ABI,
    functionName: 'balanceOf',
    args: address ? [address, BigInt(2)] : undefined,
    query: { enabled: !!address }
  })

  const handleClaim = (mapel: string) => {
    writeContract({
      address: SCHOOL_SYSTEM_ADDRESS,
      abi: SCHOOL_SYSTEM_ABI,
      functionName: 'claimHadiahUjian',
      args: [mapel],
    }, {
      onSuccess: () => {
        alert(`Claim hadiah ${mapel} berhasil diproses di blockchain!`)
        refetchMath()
        refetchScience()
      }
    })
  }

  if (!isConnected) {
    return (
      <div className="bg-red-500/10 border border-red-500/20 text-red-100 p-4 rounded-2xl mb-8 backdrop-blur-xl">
        Silakan hubungkan (Connect) Wallet Anda terlebih dahulu.
      </div>
    )
  }

  const renderSubjectCard = (
    title: string, 
    data: readonly [bigint, boolean, boolean] | undefined,
    badgeBalance: bigint | undefined,
    mapel: string
  ) => {
    if (!data) return null;
    const [nilai, sudahClaim, terdaftar] = data;

    return (
      <div className="bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col justify-between backdrop-blur-md">
        <div>
          <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
          {!terdaftar ? (
            <p className="text-sm text-gray-400">Belum ada nilai ujian dari guru.</p>
          ) : (
            <>
              <div className="text-3xl font-black text-emerald-400 mb-2">{nilai.toString()}</div>
              {sudahClaim ? (
                <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/30 mt-2">
                  <span>✅ Hadiah Diklaim</span>
                </div>
              ) : nilai >= 80 ? (
                <button 
                  onClick={() => handleClaim(mapel)}
                  disabled={isPending}
                  className="mt-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white px-6 py-2 rounded-xl font-bold transition-all shadow-lg shadow-orange-500/20 disabled:opacity-50 w-full"
                >
                  {isPending ? 'Memproses...' : 'Claim NFT Badge & Token'}
                </button>
              ) : (
                <p className="text-sm text-red-400 mt-2">Nilai di bawah 80. Tidak bisa claim.</p>
              )}
            </>
          )}
        </div>
        
        {badgeBalance && badgeBalance > 0n && (
          <div className="mt-6 p-4 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-purple-500/30 flex items-center gap-4">
             <div className="text-4xl">{mapel === "Matematika" ? "🧮" : "🔬"}</div>
             <div>
               <div className="text-xs text-purple-200 font-bold uppercase tracking-wider">NFT Badge Owned</div>
               <div className="text-sm font-semibold text-white">x{badgeBalance.toString()} Badge {mapel}</div>
             </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-6 mb-8">
      <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-100 p-4 rounded-2xl flex items-center justify-between backdrop-blur-xl">
        <div>
          <p className="font-bold text-emerald-400 flex items-center gap-2"><span>✅</span> Wallet Terhubung (Siswa)</p>
        </div>
        <div className="text-right text-xs opacity-70 font-mono bg-black/20 px-3 py-1 rounded-full">
          {address?.slice(0,6)}...{address?.slice(-4)}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {renderSubjectCard("Ujian Matematika", mathData as any, badgeMath as bigint | undefined, "Matematika")}
        {renderSubjectCard("Ujian Sains", scienceData as any, badgeScience as bigint | undefined, "Sains")}
      </div>
    </div>
  )
}
