"use client";

import { useEffect } from "react";
import ToothIcon from "./ToothIcon";

// Açılış ekranı: ilk ziyarette (oturum başına bir kez, yalnızca ana sayfada) gösterilir.
// Görünürlük <head> içindeki betikle verilen "loading" sınıfına bağlıdır; animasyon saf CSS'tir.
export default function Loader() {
  useEffect(() => {
    const html = document.documentElement;
    if (!html.classList.contains("loading")) return;
    const t = setTimeout(() => {
      html.classList.remove("loading");
      try { sessionStorage.setItem("ismet-loaded", "1"); } catch {}
    }, 2300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="loader" aria-hidden>
      <div className="loader-inner">
        <ToothIcon draw className="loader-tooth" />
        <p className="loader-mark">
          <span>İSMET</span> <span className="text-gold">GROUP</span>
        </p>
        <p className="loader-sub">Ağız ve Diş Sağlığı Merkezi</p>
        <span className="loader-line"><i /></span>
      </div>
    </div>
  );
}
