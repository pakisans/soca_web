import customToast from "@/lib/config/toast-config";
import Cookies from "js-cookie";

export const handleLogout = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/logout`
      );

      if (response.ok) {
        Cookies.remove("session", { path: "/", secure: true });
        Cookies.remove("username", { path: "/", secure: true });

        customToast.success("Uspešno ste se odjavili. Vidimo se uskoro!");

        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        console.error("Failed to log out:", response.statusText);
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };