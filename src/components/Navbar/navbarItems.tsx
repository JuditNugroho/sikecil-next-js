import {JSX} from "react";
import {Home, BookOpen, Calculator, Users} from "lucide-react";

export interface NavItem {
    href: string;
    label: string;
    icon: JSX.Element;
}

export const NavItems: NavItem[] = [
    {href: "", label: "Home", icon: <Home className="w-5 h-5"/>},
    {href: "#artikel", label: "Artikel", icon: <BookOpen className="w-5 h-5"/>},
    {href: "#kalkulator", label: "Simulasi", icon: <Calculator className="w-5 h-5"/>},
    {href: "#komunitas", label: "Komunitas", icon: <Users className="w-5 h-5"/>},
];
