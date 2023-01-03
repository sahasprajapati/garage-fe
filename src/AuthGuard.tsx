"use client";
import { fetchProfile } from "@/lib/api/auth";
import { fetchUserProfile, logoutUser } from "@/lib/auth/function";
// import { useRouter } from 'next/navigation';
import { useContext, useEffect } from "react";
import { GlobalContext } from "./context";
import { useNavigate } from "react-router-dom";
export default function AuthGuard({
  children,
  redirectTo,
  requiredAuthentication = true,
}: {
  children: React.ReactNode;
  redirectTo?: string;
  requiredAuthentication?: boolean;
}) {
  const { user, setUser, isLoading, setIsLoading } = useContext(GlobalContext);
  // const router = useRouter();
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true);
    fetchUserProfile(setUser)
      .then(() => {
        if (redirectTo) {
          navigate(redirectTo);
        } else {
          setIsLoading(false);
        }
      })
      .catch(async () => {
        if (requiredAuthentication) {
          await logoutUser(setUser, true);
          navigate("/auth/signin");
        } else {
          setIsLoading(false);
        }
      });
  }, []);
  return <>{isLoading ? <p>Authenticating User</p> : children}</>;
}
