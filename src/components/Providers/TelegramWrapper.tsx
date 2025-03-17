// "use client";

// import { useEffect, useState } from "react";
// import { isTMA } from "@telegram-apps/sdk";
// import { QueryClient } from "@tanstack/react-query";
// // import { LoadTelegramUser } from "./LoadTgUser";

// export function TelegramWrapper({ children }: { children: React.ReactNode }) {
//   const [isTelegram, setIsTelegram] = useState(false);

//   useEffect(() => {
//     checkTelegram();
//   }, []);

//   const checkTelegram = async () => {
//     // const result = await isTMA();
//     // setIsTelegram(result);

//     // if (!result) {
//     //   console.log("NO");
//     // }
//     setIsTelegram(true); // TODO
//   };

//   return (
//     <>
//       {isTelegram && <LoadTelegramUser />}
//       {children}
//     </>
//   );
// }
