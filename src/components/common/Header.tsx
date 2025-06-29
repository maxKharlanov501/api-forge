'use client';

import { useDispatch, useSelector } from "react-redux";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { login, logout } from "@/lib/slices/authSlice";

export default function Header() {
  const auth = useSelector((state: any) => state.auth.value)
  const dispatch = useDispatch()
  const navigationItems = [
    { label: 'Pricing', href: '/pricing' },
    { label: 'Docs', href: '/docs' },
    { label: 'Support', href: '/support' },
  ]

  const authHandler = () => {
    if (auth) {
      dispatch(logout())
    } else {
      dispatch(login())
    }
  }

  return (
    <div className="flex align-center gap-4 justify-between px-6 py-2">
      <div className="flex items-center gap-4">
        <div className="w-24 h-12">
          <img src="/assets/logo.png" className="w-full h-full object-cover" />
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink href={item.href}>
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center justify-center">
        <Button variant="outline" onClick={authHandler}>{auth ? 'Logout': 'Login'}</Button>
      </div>
    </div>
  )
}