import React, { useState } from "react";
import Title from "./Title";
import { toast } from "react-hot-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // 1. Validasi kosong
    if (!email) {
      toast.error("Email tidak boleh kosong");
      return;
    }

    // 2. Validasi format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Format email tidak valid");
      return;
    }

    // 3. Simulasi kirim email
    console.log("Email subscribed:", email);

    toast.success("Berhasil berlangganan update 🎉");
    setEmail("");
  };

  return (
    <div className="flex flex-col items-center mx-4 my-36">
      <Title
        title="Ikuti Update Kami"
        description="Subscribe untuk mendapatkan penawaran eksklusif, produk baru, dan informasi terkini yang dikirimkan langsung ke E-Mail Anda setiap minggu."
        visibleButton={false}
      />

      <div className="flex bg-slate-100 text-sm p-1 rounded-full w-full max-w-xl my-10 border-2 border-white ring ring-slate-200">
        <input
          className="flex-1 pl-5 outline-none"
          type="email"
          placeholder="Masukkan alamat email Anda"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleSubscribe}
          className="font-medium bg-red-500 text-white px-7 py-3 rounded-full hover:scale-103 active:scale-95 transition"
        >
          Get Updates
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
