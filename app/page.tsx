import {
  OrganizationList,
  OrganizationProfile,
  OrganizationSwitcher,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      HI There
      <UserButton />
      <OrganizationProfile />
      <OrganizationSwitcher />
    </div>
  );
}
