import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setVisible(true);
  }, []);

  const acceptAll = () => {
    localStorage.setItem(
      "cookieConsent",
      JSON.stringify({
        essential: true,
        analytics: true,
        marketing: true,
      }),
    );
    setVisible(false);
  };

  const rejectNonEssential = () => {
    localStorage.setItem(
      "cookieConsent",
      JSON.stringify({
        essential: true,
        analytics: false,
        marketing: false,
      }),
    );
    setVisible(false);
  };

  const managePreferences = () => {
    alert("Open preferences modal here");
    // you can replace this with a modal later
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#021933] text-white shadow-lg">
      <div className="max-w-[1440px] mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-12">
        <div className="flex-1 text-sm md:text-base">
          <p className="font-semibold mb-1">We use cookies</p>
          <p className="text-gray-300">
            We use cookies to support essential website functionality and to
            analyze website usage. You may accept or manage your cookie
            preferences.
          </p>
        </div>

        <div className="flex-1 flex gap-3 justify-center md:justify-end">
          <button
            onClick={acceptAll}
            className="bg-green-600/70 hover:bg-green-700 px-4 py-2 rounded-lg text-sm font-medium"
          >
            Accept All
          </button>

          <button
            onClick={managePreferences}
            className="bg-blue-600/70 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium"
          >
            Manage Preferences
          </button>

          <button
            onClick={rejectNonEssential}
            className="bg-gray-600/40 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm font-medium"
          >
            Reject Non-Essential
          </button>
        </div>
      </div>
    </div>
  );
}
